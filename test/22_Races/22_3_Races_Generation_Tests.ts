import axios from 'axios';
import { RacesGenerationTests } from "../../common/dto/test/racesGenerationTests";
import { utils } from 'ethers';
import { Hound } from '../../typechain-types/Hounds';
import { plot, PlottingConfiguration, resolutions, stringifiedArrayOfColors } from '../../plugins/plotting/plot';


async function generationTests(
  dependencies: RacesGenerationTests
): Promise<void> {
  const initialDummyGenerations: number = 10;
  interface HoundStatistics {
    totalRuns: number;
    firstPlace: number;
    secondPlace: number;
    thirdPlace: number;
  }

  const ids: Array<number> = [1,2,3,4];
  let participants: Array<Hound.StructStruct> = new Array(ids.length);
  let topWinners: Array<HoundStatistics> = new Array(ids.length).fill({
    totalRuns: 0,
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0
  });

  for ( let i = 0 , l = ids.length ; i < l ; ++i ) {
    participants[i] = await dependencies.hounds.hound(ids[i]);
  }

  const allHoundsLabels: Array<string> = participants.map((part) => part.profile.title);
  let plotConfiguration: PlottingConfiguration = {
    chartConfiguration: {
      type: 'bar',
      data: {
        labels: allHoundsLabels,
        datasets: [{
          label: 'Wins of ' + initialDummyGenerations + ' races',
          data: [],
          backgroundColor: [
          ],
          borderColor: [
          ],
          borderWidth: 1
        }]
      }
    },
    imageConfiguration: {
      extension: "jpg",
      name: "100DummyRaces",
      path: "./",
      resolution: resolutions.SXGA
    }
  };

  describe('Races Generation: ' + initialDummyGenerations + ' dummy races', async function () {

    for ( let i = 0 ; i < initialDummyGenerations ; ++i ) {
    
      it("Generate race " + i, async function () {
        const response: any = await axios.post("http://localhost:3000/races/generate", {
          race: dependencies.race,
          arena: dependencies.arena,
          ids: ids,
          participants: participants
        })
        const winners: Array<number> = response.data.participants.map((part: any) => Number(part.hex));
        const randomness: number = Number(response.data.randomness.hex);
        const performances: utils.Result = utils.defaultAbiCoder.decode(['uint256[]'],response.data.seed)[0].map(Number);

        console.log("1: ", ids);
        console.log("2: ", winners);
        for ( let i = 0 , l = ids.length; i < l ; ++i ) {
          for ( let j = 0 , k = winners.length ; j < k ; ++j ) {
            if ( winners[j] === ids[i] ) {
              console.log("OK!!!");
              switch (j) {
                case 0: 
                  ++topWinners[i].firstPlace;
                break;
                case 1:
                  ++topWinners[i].secondPlace;
                break;
                case 2:
                  ++topWinners[i].thirdPlace;
                break;
              }
              ++topWinners[i].totalRuns;
            }
          }
        }
      });

    }

    it("Generate statistics files", async function () {
      const houndStatisticsUsedColors: Array<string> = [
        stringifiedArrayOfColors[0].toString(),
        stringifiedArrayOfColors[1].toString(),
        stringifiedArrayOfColors[2].toString(),
        stringifiedArrayOfColors[3].toString()];
      console.log(topWinners);
      console.log(">>> ", houndStatisticsUsedColors)
      for ( let i = 0 , l = ids.length ; i < l ; ++i ) {
        console.log("Generate file...");
        plotConfiguration.imageConfiguration.name = allHoundsLabels[i] + " statistics";
        plotConfiguration.chartConfiguration.data.labels = ["Total runs", "First place", "Second place", "Third place"];
        plotConfiguration.chartConfiguration.data.datasets[0].label = allHoundsLabels[i] + " statistics";
        plotConfiguration.chartConfiguration.data.datasets[0].data = [topWinners[i].totalRuns,topWinners[i].firstPlace,topWinners[i].secondPlace,topWinners[i].thirdPlace];
        plotConfiguration.chartConfiguration.data.datasets[0].backgroundColor = houndStatisticsUsedColors;
        plotConfiguration.chartConfiguration.data.datasets[0].borderColor = houndStatisticsUsedColors;
        console.log(plotConfiguration.chartConfiguration.data.datasets);
        plot(plotConfiguration);
      }
    });

  });

}

export interface TestInterface {
  generationTests: Function;
}

export const test: TestInterface = {
  generationTests: generationTests
};