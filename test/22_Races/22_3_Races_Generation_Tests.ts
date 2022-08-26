import axios from 'axios';
import { RacesGenerationTests } from "../../common/dto/test/racesGenerationTests";
import { utils } from 'ethers';
import { Hound } from '../../typechain-types/Hounds';
import { mkdirSync, existsSync } from 'fs';
import { plot, PlottingConfiguration, resolutions, stringifiedArrayOfColors } from '../../plugins/plotting/plot';


async function generationTests(
  dependencies: RacesGenerationTests
): Promise<void> {
  const initialDummyGenerations: number = 2000;
  interface HoundStatistics {
    totalRuns: number;
    firstPlace: number;
    secondPlace: number;
    thirdPlace: number;
  }

  const ids: Array<number> = [6,9,17,11];
  const path: string = "./statistics/" + ids.length + "-race/";
  const winratePath: string = path + "winrate/";
  const performance: string = path + "performance/";
  if (!existsSync(path)){
    mkdirSync(path, { recursive: true });
  }

  if (!existsSync(winratePath)){
    mkdirSync(winratePath, { recursive: true });
  }

  if (!existsSync(performance)){
    mkdirSync(performance, { recursive: true });
  }

  let participants: Array<Hound.StructStruct> = new Array(ids.length);
  let topWinners: Array<HoundStatistics> = new Array(ids.length);

  for ( let i = 0 , l = ids.length ; i < l ; ++i ) {
    topWinners[i] = {
      totalRuns: 0,
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0
    };
  }

  for ( let i = 0 , l = ids.length ; i < l ; ++i ) {
    participants[i] = await dependencies.hounds.hound(ids[i]);
  }

  const allHoundsLabels: Array<string> = participants.map((_, id) => "Hound #" + id);
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
      name: "",
      path: winratePath,
      resolution: resolutions.SXGA
    }
  };

  describe('Races Generation: ' + initialDummyGenerations + ' dummy races', async function () {

    let performances: number[];

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
        performances = utils.defaultAbiCoder.decode(['uint256[]'],response.data.seed)[0].map(Number);

        for ( let m = 0 , n = ids.length; m < n ; ++m ) {
          for ( let j = 0 , k = winners.length ; j < k ; ++j ) {
            if ( winners[j] === ids[m] ) {
              switch (j) {
                case 0: 
                  ++topWinners[m].firstPlace;
                break;
                case 1:
                  ++topWinners[m].secondPlace;
                break;
                case 2:
                  ++topWinners[m].thirdPlace;
                break;
              }
            }
          }
          ++topWinners[m].totalRuns;
        }
      });

    }

    it("Generate statistics files", async function () {
      const houndStatisticsUsedColors: Array<string> = [
        stringifiedArrayOfColors[0].toString(),
        stringifiedArrayOfColors[1].toString(),
        stringifiedArrayOfColors[2].toString(),
        stringifiedArrayOfColors[3].toString()
      ];

      for ( let i = 0 , l = ids.length ; i < l ; ++i ) {
        plotConfiguration.imageConfiguration.name = "Hound #" + ids[i];
        plotConfiguration.chartConfiguration.data.labels = ["Total runs", "First place", "Second place", "Third place"];
        plotConfiguration.chartConfiguration.data.datasets[0].label = allHoundsLabels[i] + " statistics";
        plotConfiguration.chartConfiguration.data.datasets[0].data = [topWinners[i].totalRuns,topWinners[i].firstPlace,topWinners[i].secondPlace,topWinners[i].thirdPlace];
        plotConfiguration.chartConfiguration.data.datasets[0].backgroundColor = houndStatisticsUsedColors;
        plotConfiguration.chartConfiguration.data.datasets[0].borderColor = houndStatisticsUsedColors;
        await plot(plotConfiguration);
      }

      plotConfiguration.imageConfiguration.name = "Hounds performances";
      plotConfiguration.imageConfiguration.path = performance;
      plotConfiguration.chartConfiguration.data.labels = ids.map((id) => "Hound #" + id);
      plotConfiguration.chartConfiguration.data.datasets[0].label = "Performances";
      plotConfiguration.chartConfiguration.data.datasets[0].data = performances;
      plotConfiguration.chartConfiguration.data.datasets[0].backgroundColor = houndStatisticsUsedColors;
      plotConfiguration.chartConfiguration.data.datasets[0].borderColor = houndStatisticsUsedColors;
      await plot(plotConfiguration);

    });

  });

}

export interface TestInterface {
  generationTests: Function;
}

export const test: TestInterface = {
  generationTests: generationTests
};