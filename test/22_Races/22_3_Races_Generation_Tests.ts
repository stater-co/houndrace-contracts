import axios from 'axios';
import { RacesGenerationTests } from "../../common/dto/test/racesGenerationTests";


async function generationTests(
  dependencies: RacesGenerationTests
): Promise<void> {
  const initialDummyGenerations: number = 1000;
  describe('Races Generation: ' + initialDummyGenerations + ' dummy races', async function () {

    for ( let i = 0 ; i < initialDummyGenerations ; ++i ) {
    
      it("Generate race " + i, async function () {
        axios.post("http://localhost:3000/races/generate", {
          race: dependencies.race
        })
      });

    }

  });

}

export interface TestInterface {
  generationTests: Function;
}

export const test: TestInterface = {
  generationTests: generationTests
};