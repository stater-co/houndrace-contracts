import { Payments, PaymentsConstructor } from "../../../typechain-types/Payments";
import { PaymentsRestricted } from "../../../typechain-types/PaymentsRestricted";
import { PaymentsMethods } from "../../../typechain-types/PaymentsMethods";

export interface PaymentsSystemController {
    payments: Payments;
    paymentRestricted: PaymentsRestricted;
    paymentMethods: PaymentsMethods;
    constructor: PaymentsConstructor.StructStruct;
}