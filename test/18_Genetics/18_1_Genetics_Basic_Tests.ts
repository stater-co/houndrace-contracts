import { expect } from "chai";
import { GeneticsBasicTests } from "../../common/dto/test/geneticsBasicTests.dto";
import { params } from "../../common/params";


async function basicTest(
  dependencies: GeneticsBasicTests
): Promise<void> {
  describe('Genetics Basic Tests', async function () {

    it("Genetics - wholeArithmeticRecombination", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.wholeArithmeticRecombination(params.maleBoilerplateGene, params.femaleBoilerplateGene);
        expect(params.maleBoilerplateGene !== newGeneticSequence && params.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - swapMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.swapMutation(params.maleBoilerplateGene, 5);
        expect(params.maleBoilerplateGene !== newGeneticSequence && params.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - inversionMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.inversionMutation(params.maleBoilerplateGene, 5);
        expect(params.maleBoilerplateGene !== newGeneticSequence && params.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - scrambleMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.scrambleMutation(params.maleBoilerplateGene, 9);
        expect(params.maleBoilerplateGene !== newGeneticSequence && params.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - arithmeticMutation", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.arithmeticMutation(params.maleBoilerplateGene, 9);
        expect(params.maleBoilerplateGene !== newGeneticSequence && params.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });

    it("Genetics - uniformCrossover", async function () {
        let newGeneticSequence: Array<number> = await dependencies.genetics.uniformCrossover(params.maleBoilerplateGene, params.femaleBoilerplateGene,9);
        expect(params.maleBoilerplateGene !== newGeneticSequence && params.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    });
    
    it("Genetics - mixGenes 100x", async function () {
        for ( let i = 0 ; i < 100 ; ++i ) {
            let newGeneticSequence: Array<number> = await dependencies.genetics.mixGenes(params.maleBoilerplateGene, params.femaleBoilerplateGene,i);
            expect(params.maleBoilerplateGene !== newGeneticSequence && params.femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
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