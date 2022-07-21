import { expect } from "chai";
import { GeneticsBasicTests } from "../../common/dto/test/geneticsBasicTests.dto";
import { globalParams } from "../../common/params";


async function basicTest(
  dependencies: GeneticsBasicTests
): Promise<void> {
  describe('Genetics Basic Tests', async function () {

    it("Genetics - wholeArithmeticRecombination", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.wholeArithmeticRecombination(globalParams.maleBoilerplateGene, globalParams.femaleBoilerplateGene);
        expect(globalParams.maleBoilerplateGene !== newGeneticSequence && globalParams.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - swapMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.swapMutation(globalParams.maleBoilerplateGene, 5);
        expect(globalParams.maleBoilerplateGene !== newGeneticSequence && globalParams.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - inversionMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.inversionMutation(globalParams.maleBoilerplateGene, 5);
        expect(globalParams.maleBoilerplateGene !== newGeneticSequence && globalParams.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - scrambleMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.scrambleMutation(globalParams.maleBoilerplateGene, 9);
        expect(globalParams.maleBoilerplateGene !== newGeneticSequence && globalParams.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - arithmeticMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.arithmeticMutation(globalParams.maleBoilerplateGene, 9);
        expect(globalParams.maleBoilerplateGene !== newGeneticSequence && globalParams.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - uniformCrossover", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.uniformCrossover(globalParams.maleBoilerplateGene, globalParams.femaleBoilerplateGene,9);
        expect(globalParams.maleBoilerplateGene !== newGeneticSequence && globalParams.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });
    
    it("Genetics - mixGenes 100x", async function () {
        for ( let i = 0 ; i < 100 ; ++i ) {
            let newGeneticSequence: Array<number> = await dependencies.genetics.mixGenes(globalParams.maleBoilerplateGene, globalParams.femaleBoilerplateGene,i);
            expect(globalParams.maleBoilerplateGene !== newGeneticSequence && globalParams.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
        }
    });

  });
}

export interface TestInterface {
    basicTest: Function;
}

export const test: TestInterface = {
    basicTest: basicTest
};