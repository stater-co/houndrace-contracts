import { ShopSystemController } from '../common/dto/test/shopSystemController.dto';
const { ethers } = require("hardhat");

export async function set(
  dependencies: ShopSystemController
): Promise<void> {
  describe('Setting up the Arena Contracts Controller', async function () {

    it("Setup arena restricted contract controller", async function () {
      
      await dependencies.shopRestricted.setGlobalParameters([
        dependencies.shopMethods.address,
        dependencies.shopRestricted.address
      ]);

      const [owner] = await ethers.getSigners();
    
      await arenasRestricted.setGlobalParameters(["HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, owner.address, [
        racesRestricted.address,racesMethods.address,races.address,
        queuesRestricted.address,queuesMethods.address,queues.address
      ]]);
  
      await arenasMethods.setGlobalParameters(["HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, owner.address, [
        racesRestricted.address,racesMethods.address,races.address,
        queuesRestricted.address,queuesMethods.address,queues.address
      ]]);
  
      await arenas.setGlobalParameters(["HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, owner.address, [
        racesRestricted.address,racesMethods.address,races.address,
        queuesRestricted.address,queuesMethods.address,queues.address
      ]]);
  
    });

    it("Setup shop methods contract controller", async function () {

      await dependencies.shopMethods.setGlobalParameters([
        dependencies.shopMethods.address,
        dependencies.shopRestricted.address
      ]);
  
    });

  });
}