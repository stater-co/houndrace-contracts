import { FirewallRulesExternalDependencies } from '../common/dto/test/firewallRulesExternalDependencies.dto';
import { Signer, utils } from 'ethers';
const { ethers } = require('hardhat');


export async function set(
  dependencies: FirewallRulesExternalDependencies
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Setting up firewall rules', () => {

      it('Set-up rules', async function () {

        const [
          sig1, sig2, sig3, sig4, sig5, 
          sig6, sig7, sig8, sig9, sig10,
          sig11, sig12, sig13, sig14, sig15,
          sig16, sig17, sig18, sig19, sig20
        ] = await ethers.getSigners();
        const signers: Array<Signer> = [
          sig1, sig2, sig3, sig4, sig5, 
          sig6, sig7, sig8, sig9, sig10,
          sig11, sig12, sig13, sig14, sig15,
          sig16, sig17, sig18, sig19, sig20
        ];


        const signersAddresses: Array<string> = [
          sig1.address,
          sig2.address,
          sig3.address,
          sig4.address,
          sig5.address,
          sig6.address,
          sig7.address,
          sig8.address,
          sig9.address /*,
          sig10.address,
          sig11.address,
          sig12.address,
          sig13.address,
          sig14.address,
          sig15.address,
          sig16.address,
          sig17.address,
          sig18.address,
          sig19.address,
          sig20.address
          */
        ];
        const features: Array<string> = [

          // 1. createArena(Arena.Struct memory arena)
          utils.id('createArena((string,string,address,uint256,uint32,uint32,uint32))').substring(0,10),

          // 2. editArena(uint256 theId, Arena.Struct memory arena)
          utils.id('editArena(uint256,(string,string,address,uint256,uint32,uint32,uint32))').substring(0,10),

          // 3. setGlobalParameters(ArenasConstructor.Struct memory globalParameters)
          utils.id('setGlobalParameters((string,string,address,address,address,address,address,uint256))').substring(0,10),

          // 4. setGlobalParameters(GamificationConstructor.Struct memory globalParameters) 
          utils.id('setGlobalParameters(((address,address,uint256,uint256,uint256,uint256,uint256,bool),(address,uint256,uint256,uint32,uint32,uint32),address,address,address))').substring(0,10),

          // 5. initializeHoundGamingStats(uint256 onId, uint32[54] memory genetics)
          utils.id('initializeHoundGamingStats(uint256, uint32[54])').substring(0,10),

          // 6. setStamina(uint256 id, HoundStamina.Struct memory stamina) 
          utils.id('setStamina(uint256,(address,uint256,uint256,uint32,uint32,uint32))').substring(0,10), 
          
          // 7. function setBreeding(uint256 id, HoundBreeding.Struct memory breeding) 
          utils.id('setBreeding(uint256,(address,address,uint256,uint256,uint256,uint256,uint256,bool))').substring(0,10), 

          // 8. generate(Queue.Struct memory queue, uint256 queueId)
          utils.id('generate(((string,address,address,uint256[],uint256[],uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint8[])),uint256,uint256,uint256,uint32,uint32,uint32,uint8[],bool),uint256)').substring(0,10),
          
          // 9. function setGlobalParameters(GeneratorConstructor.Struct memory globalParameters)
          utils.id('setGlobalParameters((address,address,address,address,address,address,address,address,address))').substring(0,10)
        ];

        console.log(features);
        for ( let i = 0 ; i < 20 ; ++i ) {
          await dependencies.firewall
          .connect(signers[i])
          .setRules(features, signersAddresses);
        }

        resolve();
      });
    });
    
  });
}