import { globalParams } from "../../common/params";
import { ShopBasicTests } from "../../common/dto/test/shopBasicTests";


async function basicTest(
  dependencies: ShopBasicTests
): Promise<void> {
  describe('Shop Basic Tests', async function () {

    let createdDiscountId: string | number;

    it("Create discount", async function () {
      await dependencies.shop.createDiscount({
        ...globalParams.defaultDiscount,
        tokenContract: dependencies.houndPotions.address
      });
    });
    
    it("Edit discount", async function() {
      createdDiscountId = Number(await dependencies.shop.id())-1;
      await dependencies.shop.editDiscount({
        ...globalParams.defaultDiscount,
        dateStart: 5,
        discount: 10,
      },createdDiscountId);
    });

  });
}

export interface TestInterface {
    basicTest: Function;
}

export const test: TestInterface = {
    basicTest: basicTest
};