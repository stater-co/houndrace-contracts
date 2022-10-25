import { PaymentsSystemController } from '../common/dto/test/paymentsSystemController.dto';
import { expecting } from '../plugins/expecting';

// 0xc01f59c2 = pay(...)

export async function set(
  dependencies: PaymentsSystemController
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Setting up the Payments Contracts Controller', function () {
    
      it('Setup payments methods contract controller', async function () {
        const before = await dependencies.paymentMethods.control();
        await dependencies.paymentMethods.setGlobalParameters({
          ...dependencies.constructor,
          targets: [...dependencies.constructor.targets, '0xc01f59c2'],
          operators: [...dependencies.constructor.operators, dependencies.houndsAddress]
        });
        const after = await dependencies.paymentMethods.control();
        expecting(JSON.stringify(before) !== JSON.stringify(after), "Payments methods global params setter bugged");
      });

      it('Setup payments contract controller', async function () {
        const before = await dependencies.payments.control();
        await dependencies.payments.setGlobalParameters({
          ...dependencies.constructor,
          targets: [...dependencies.constructor.targets, '0xc01f59c2'],
          operators: [...dependencies.constructor.operators, dependencies.houndsAddress]
        });
        const after = await dependencies.payments.control();
        expecting(JSON.stringify(before) !== JSON.stringify(after), "Payments global params setter bugged");
        resolve();
      });

    });

  });
}