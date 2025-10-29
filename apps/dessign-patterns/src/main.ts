import { CreateOrderUseCae } from "./apps/EnergyKoderx/createOrder"
import { Discount } from "./domain/common/decorators/Discount";
import { RequestOrder } from "./domain/common/handlers/RequestProduct";
import { ValidAmount } from "./domain/common/handlers/ValidAmount";
import { Users } from "./domain/common/Users";
import { ProductEntity } from "./domain/entities/Product.entity";
import { ProductsOrderFactory } from "./domain/factories/ProductOrder.factory";
import { CreateOrderService } from "./domain/services/createOrder.service";

const factory = new ProductsOrderFactory();
const service = new CreateOrderService(factory);

const validAmountUser = new ValidAmount({
    user: new Users("Juan", "juan8@gmail.com", 500),
    amount: 500
});
const requestOrder = new RequestOrder();
validAmountUser.setNext(requestOrder);
validAmountUser.handle({ producType: "koderx-blue", amount: 500 });

const koderxRed = new ProductEntity("1", "koderx-red", 250);
const koderxRedVip = koderxRed.clone();
koderxRedVip.makeProduct();


validAmountUser.handle({ producType: koderxRed.name, amount: 250 });


new CreateOrderUseCae(service).execute("koderx-blue");

const koderxRedWithDiscount = new Discount(koderxRed).execute();
console.log(koderxRedWithDiscount);
