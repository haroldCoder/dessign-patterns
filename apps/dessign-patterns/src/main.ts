import { CreateOrderUseCae } from "./apps/EnergyKoderx/createOrder"
import { AdapterCashPay } from "./common/adapters/AdapterCashPay";
import { AdapterStripePay } from "./common/adapters/AdapterStripePay";
import { AdapterSustanciaToBebida } from "./common/adapters/AdapterSustanciaToBebida";
import { Discount } from "./common/decorators/Discount";
import { LoadToTransport } from "./common/handlers/LoadToTransport";
import { PackageProduct } from "./common/handlers/PackageProduct";
import { RequestOrder } from "./common/handlers/RequestProduct";
import { ShipToLocation } from "./common/handlers/ShipToLocation";
import { ValidAmount } from "./common/handlers/ValidAmount";
import { OrderData } from "./common/interfaces/OrderData";
import { PointUserForPay } from "./common/observers/pointsUser";
import { PublisherUserPay } from "./common/observers/PublishersUserPay";
import { SavePay } from "./common/observers/savePay";
import { Users } from "./common/Users";
import { CafeinaEntity } from "./domain/entities/Cafeina.entity";
import { ProductEntity } from "./domain/entities/Product.entity";
import { TaurinaEntity } from "./domain/entities/Taurina.entity";
import { ProductsOrderFactory } from "./domain/factories/ProductOrder.factory";
import { BuildDrink } from "./infrastructure/services/build-drink/build-drink";
import { SaleDrinkService } from "./infrastructure/services/build-drink/sale-drink.service";
import { SaveIngredientsService } from "./infrastructure/services/build-drink/save-ingredients.service";
import { CreateOrderService } from "./infrastructure/services/createOrder.service";
import { StripePay } from "./infrastructure/services/StripePay.service";

const factory = new ProductsOrderFactory();
const service = new CreateOrderService(factory);
const user1 = new Users("Juan", "juan8@gmail.com", 500)

const validAmountUser = new ValidAmount({
    user: user1,
    amount: 500
});
const requestOrder = new RequestOrder();
validAmountUser.setNext(requestOrder);
validAmountUser.handle({ producType: "koderx-blue", amount: 500 });

const koderxRed = ProductEntity.builder()
    .withId("DDX-123")
    .withName("koderx-red")
    .withPrice(500)
    .build();
const koderxRedVip = koderxRed.clone();
koderxRedVip.makeProduct();

validAmountUser.handle({ producType: koderxRed.name!, amount: 250 });


new CreateOrderUseCae(service).execute("koderx-blue");

const koderxRedWithDiscount = new Discount(koderxRed).execute();
console.log(koderxRedWithDiscount);

const stripePay = new StripePay(2345678820, 12345, "EJX-20334-xx123");
const payWhithStripe = new AdapterStripePay(stripePay);
payWhithStripe.methodPay({ user: user1, amount: 5000, currency: "EUR" });

const orchestadorPay = new PublisherUserPay();
orchestadorPay.subscribe(new SavePay());
orchestadorPay.subscribe(new PointUserForPay());

const payWithCash = new AdapterCashPay(orchestadorPay);
payWithCash.methodPay({ user: user1, amount: 1000, currency: "USD" });

// ============================================
// Ejemplo del Patrón Adaptador: Sustancia a Bebida
// ============================================
console.log("\n╔════════════════════════════════════════════╗");
console.log("║   PATRÓN ADAPTADOR: Sustancia → Bebida     ║");
console.log("╚════════════════════════════════════════════╝");

const cafeina = new CafeinaEntity();
const taurina = new TaurinaEntity();

const bebidaDeCafeina = new AdapterSustanciaToBebida(cafeina);
const bebidaDeTaurina = new AdapterSustanciaToBebida(taurina);

bebidaDeCafeina.make();
bebidaDeTaurina.make();

// ============================================
// Ejemplo del Patrón Cadena de Responsabilidad: Flujo Post-Pago
// ============================================
console.log("\n\n╔════════════════════════════════════════════════════╗");
console.log("║    CADENA DE RESPONSABILIDAD: Flujo Post-Pago     ║");
console.log("╚════════════════════════════════════════════════════╝");

const orderData: OrderData = {
    orderId: "ORD-2024-001",
    productName: "Koderx Blue Energy Drink",
    destination: "Av. Principal 123, Medellin, Colombia",
    customerName: "Juan Pérez"
};

const packageHandler = new PackageProduct();
const loadHandler = new LoadToTransport();
const shipHandler = new ShipToLocation();

packageHandler.setNext(loadHandler).setNext(shipHandler);

packageHandler.handle(orderData);

console.log("\n✅ Proceso de orden completado exitosamente!");


// ============================================
// Ejemplo del Patrón Comando: Flujo de Construccion de Bebidas
// ============================================
console.log("\n\n╔════════════════════════════════════════════════════╗");
console.log("║    PATRÓN COMANDO: Flujo de Construccion de Bebidas     ║");
console.log("╚════════════════════════════════════════════════════╝");

const saveIngredientsService = new SaveIngredientsService();
const saleDrinkService = new SaleDrinkService();
const buildDrink = new BuildDrink(saveIngredientsService, saleDrinkService, ["cafeina", "taurina"], "koderx-blue");
buildDrink.execute();