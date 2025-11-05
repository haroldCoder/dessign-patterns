import { Users } from "../common/Users";

export interface PayData{
    amount: number,
    user: Users,
    currency: Currency
}

export interface ClientPay{
    methodPay: (payData: PayData) => void;
}

export type Currency =
    | 'USD' // Dólar estadounidense
    | 'EUR' // Euro
    | 'GBP' // Libra esterlina
    | 'JPY' // Yen japonés
    | 'MXN' // Peso mexicano
    | 'COP' // Peso colombiano
    | 'PEN' // Sol peruano
    | 'CLP' // Peso chileno
    | 'BRL' // Real brasileño
    | 'ARS'; // Peso argentino