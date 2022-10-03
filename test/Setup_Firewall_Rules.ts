import { FirewallRulesExternalDependencies } from '../common/dto/test/firewallRulesExternalDependencies.dto';
import { Signer, utils } from 'ethers';
import { generateSigners } from '../plugins/signersGenerator';


export async function set(
  dependencies: FirewallRulesExternalDependencies
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Setting up firewall rules', () => {

      it('Set-up rules', async function () {

        const totalAccounts: number = 20;

        const signers: Array<Signer> = generateSigners(totalAccounts);

        let signersAddresses: Array<string> = [];
        for ( let i = 0 , l = totalAccounts ; i < l ; ++i ) {
          let address: string = await signers[i].getAddress();
          signersAddresses.push(address);
        }

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
          utils.id('setGlobalParameters((address,address,address,address,address,address,address,address,address))').substring(0,10),

          // 10. function setGlobalParameters(GeneticsConstructor.Struct memory globalParameters)
          utils.id('setGlobalParameters((address,address,address,uint32[54],uint32[54],uint32,uint32,uint32[13],uint32[54]))').substring(0,10),

          // 11. function setGlobalParameters(HoundsConstructor.Struct memory globalParameters)
          utils.id('setGlobalParameters((string,string,(address,address,address,address,address,address,address,address,address,address,address),(address,address,address,uint256,uint256)))').substring(0,10),

          // 12. function setMatingSeason(bool _matingSeason)
          utils.id('setMatingSeason(bool)').substring(0,10),

          // 13. function initializeHound(uint256 onId, address owner, Hound.Struct memory theHound) external
          utils.id('initializeHound(uint256,address,((uint64,uint64,uint64,uint64),(address,uint256,uint256,uint32,uint32,uint32),(address,address,uint256,uint256,uint256,uint256,uint256,bool),(uint256,uint256,uint256,uint256,uint32[54],string,uint8),(string,string,uint256,bool)))').substring(0,10),

          // 14. function setGlobalParameters(QueuesConstructor.Struct memory globalParameters) 
          utils.id('setGlobalParameters((address,address,address,address,address,address,address,address,address,address))').substring(0,10),

          // 15. function updateHoundStamina(uint256 theId, uint32 amount)
          utils.id('updateHoundStamina(uint256,uint32)').substring(0,10), 

          // 16. function updateHoundRunning(uint256 theId, uint256 queueId)
          utils.id('updateHoundRunning(uint256,uint256)').substring(0,10), 

          // 17. function breedHounds(uint256 hound1Id, HoundIdentity.Struct memory hound1, uint256 hound2Id, HoundIdentity.Struct memory hound2, uint256 theId)
          utils.id('breedHounds(uint256,(uint256,uint256,uint256,uint256,uint32[54],string,uint8),uint256,(uint256,uint256,uint256,uint256,uint32[54],string,uint8),uint256)').substring(0,10),

          // 18. function setGlobalParameters(IncubatorConstructor.Struct memory globalParameters)
          utils.id('setGlobalParameters((address,address,address,address,address,address,uint32))').substring(0,10),

          // 19. function setGlobalParameters(LootboxesConstructor.Struct memory globalParameters)
          utils.id('setGlobalParameters((string,address,address,address,address,bool))').substring(0,10), 

          // 20. function mint(uint256 amount, uint256 tokenId, string memory token_uri)
          utils.id('mint(uint256,uint256,string)').substring(0,10)

        ];

        for ( let i = 0 ; i < totalAccounts ; ++i ) {
          await dependencies.firewall
          .connect(signers[i])
          .setRules(features, signersAddresses);
        }

        resolve();
      });
    });
    
  });
}