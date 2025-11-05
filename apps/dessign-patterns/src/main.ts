import { CreateOrderUseCae } from "./apps/EnergyKoderx/createOrder"
import { AdapterCashPay } from "./domain/common/adapters/AdapterCashPay";
import { AdapterStripePay } from "./domain/common/adapters/AdapterStripePay";
import { Discount } from "./domain/common/decorators/Discount";
import { RequestOrder } from "./domain/common/handlers/RequestProduct";
import { ValidAmount } from "./domain/common/handlers/ValidAmount";
import { Users } from "./domain/common/Users";
import { ProductEntity } from "./domain/entities/Product.entity";
import { ProductsOrderFactory } from "./domain/factories/ProductOrder.factory";
import { CreateOrderService } from "./domain/services/createOrder.service";
import { StripePay } from "./domain/services/StripePay.service";

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
payWhithStripe.methodPay({user: user1, amount: 5000, currency: "EUR"});

const payWithCash = new AdapterCashPay();
payWithCash.methodPay({user: user1, amount: 1000, currency: "USD"});