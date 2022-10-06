import axios from 'axios';
import { RacesGenerationTests } from "../../common/dto/test/racesGenerationTests";
import { utils } from 'ethers';
import { Hound } from '../../typechain-types/Hounds';
import { mkdirSync, existsSync } from 'fs';
import { plot, PlottingConfiguration, resolutions, stringifiedArrayOfColors } from '../../plugins/plotting/plot';
import { globalParams } from '../../common/params';
import { safeMintHound } from '../../plugins/test/mintHound';
const { ethers } = require('hardhat');


async function generationTests(
  dependencies: RacesGenerationTests
): Promise<void> {
  return new Promise((resolve, ) => {

    const initialDummyGenerations: number = Number(process.env.TOTAL_RACES);

    describe('Races Generation: ' + initialDummyGenerations + ' dummy races', async function () {
      
      interface HoundStatistics {
        totalRuns: number;
        firstPlace: number;
        secondPlace: number;
        thirdPlace: number;
      }
    
      let ids: Array<number> = [];
      const path: string = "./statistics/" + initialDummyGenerations + "-race/";
      const winratePath: string = path + "winrate/";
      const performance: string = path + "performance/";
      const variation: string = path + "variations/";
    
      let participants: Array<Hound.StructStruct> = new Array(initialDummyGenerations);
      let topWinners: Array<HoundStatistics> = new Array(initialDummyGenerations);
    
      const allHoundsLabels: Array<string> = participants.map((_, id) => "Hound #" + id);
      let plotConfiguration: PlottingConfiguration = {
        chartConfiguration: {
          type: 'bar',
          data: {
            labels: allHoundsLabels,
            datasets: [{
              label: '',
              data: [],
              backgroundColor: []
            }],
          },
          options: {
            plugins: {
              title: {
                display: false,
                text: ''
              },
            },
          }
        },
        imageConfiguration: {
          extension: "jpg",
          name: "",
          path: winratePath,
          resolution: resolutions.SXGA
        }
      };

      let performances: number[];

      it("Mint " + initialDummyGenerations + "x hounds for races generation", async function () {
        let [sig1] = await ethers.getSigners();
        for ( let i = 0 ; i < initialDummyGenerations ; ++i ) {
          let houndToMint: Hound.StructStruct = globalParams.defaultHound;
          houndToMint.identity.geneticSequence = houndToMint.identity.geneticSequence.map((i) => { return Math.floor(Math.random() * 9) + 1; });
          houndToMint.identity.geneticSequence[1] = i % 2 === 0 ? 1 : 2;
          let createdHoundId = await safeMintHound({
            contract: dependencies.hounds,
            hound: houndToMint as Hound.StructStructOutput,
            owner: sig1.address,
            position: 0,
            signer: sig1.address,
            gamification: dependencies.gamification,
            races: dependencies.races
          });
          participants[i] = await dependencies.hounds.hound(createdHoundId);
          ids.push(Number(createdHoundId));
        }

        for ( let i = 0 , l = initialDummyGenerations ; i < l ; ++i ) {
          topWinners[i] = {
            totalRuns: 0,
            firstPlace: 0,
            secondPlace: 0,
            thirdPlace: 0
          };
        }

      });

      for ( let i = 0 ; i < initialDummyGenerations ; ++i ) {
      
        it("Generate race " + i, async function () {
          const response: any = await axios.post("http://localhost:3000/races/generate", {
            race: dependencies.race,
            arena: dependencies.arena,
            ids: ids,
            participants: participants
          })
          const winners: Array<number> = response.data.participants.map((part: any) => Number(part.hex));
          performances = utils.defaultAbiCoder.decode(['uint256[]'],response.data.seed)[0].map(Number);

          for ( let m = 0 , n = initialDummyGenerations; m < n ; ++m ) {
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

        if (!existsSync(path)){
          mkdirSync(path, { recursive: true });
        }
      
        if (!existsSync(winratePath)){
          mkdirSync(winratePath, { recursive: true });
        }

        if (!existsSync(variation)){
          mkdirSync(variation, { recursive: true });
        }
      
        if (!existsSync(performance)){
          mkdirSync(performance, { recursive: true });
        }

        if ( plotConfiguration.chartConfiguration.options ) {
          if ( plotConfiguration.chartConfiguration.options.plugins ) {
            if ( plotConfiguration.chartConfiguration.options.plugins.title ) {
              plotConfiguration.chartConfiguration.options.plugins.title = {
                display: true,
                text: 'Individual hound statistics'
              };
            }
          }
        }

        for ( let i = 0 , l = initialDummyGenerations ; i < l ; ++i ) {
          plotConfiguration.imageConfiguration.name = "Hound #" + ids[i];
          plotConfiguration.imageConfiguration.path = winratePath;
          plotConfiguration.chartConfiguration.data.labels = ["Total runs", "First place", "Second place", "Third place"];
          plotConfiguration.chartConfiguration.data.datasets[0].label = allHoundsLabels[i] + " statistics";
          plotConfiguration.chartConfiguration.data.datasets[0].data = [topWinners[i].totalRuns,topWinners[i].firstPlace,topWinners[i].secondPlace,topWinners[i].thirdPlace];
          plotConfiguration.chartConfiguration.data.datasets[0].backgroundColor = houndStatisticsUsedColors;
          await plot(plotConfiguration);
        }

        if ( plotConfiguration.chartConfiguration.options ) {
          if ( plotConfiguration.chartConfiguration.options.plugins ) {
            if ( plotConfiguration.chartConfiguration.options.plugins.title ) {
              plotConfiguration.chartConfiguration.options.plugins.title = {
                display: true,
                text: 'Hounds performances'
              };
            }
          }
        }

        plotConfiguration.imageConfiguration.name = "Hounds performances";
        plotConfiguration.imageConfiguration.path = performance;
        plotConfiguration.chartConfiguration.data.labels = ids.map((id) => "Hound #" + id);
        plotConfiguration.chartConfiguration.data.datasets[0].label = "Performances";
        plotConfiguration.chartConfiguration.data.datasets[0].data = performances;
        plotConfiguration.chartConfiguration.data.datasets[0].backgroundColor = [stringifiedArrayOfColors[4].toString()];
        await plot(plotConfiguration);
        resolve();

      });

      it("Generate variation specter", async function () {

        let IDS: Array<Array<number>> = [  ];
        let PERFORMANCES: Array<Array<number>> = [  ];

        for ( let i = 0 ; i < initialDummyGenerations ; ++i ) {
        
          IDS.push(ids);  

          const response: any = await axios.post("http://localhost:3000/races/generate", {
            race: dependencies.race,
            arena: dependencies.arena,
            ids: ids,
            participants: participants
          })
          performances = utils.defaultAbiCoder.decode(['uint256[]'],response.data.seed)[0].map(Number);

          PERFORMANCES.push(performances);

        }

        let VARIATION_LEVELS: Array<[number,number]> = [];

        for ( let i = 0 , l = PERFORMANCES.length ; i < l ; ++i ) {
          VARIATION_LEVELS[i] = [Number.MAX_SAFE_INTEGER,0];
        }

        for ( let i = 0 , l = PERFORMANCES.length ; i < l ; ++i ) {
          for ( let j = 0 , k = PERFORMANCES[i].length ; j < k ; ++j ) {
            if ( VARIATION_LEVELS[i][0] > PERFORMANCES[j][i] ) {
              VARIATION_LEVELS[i][0] = PERFORMANCES[j][i];
            }
            if ( VARIATION_LEVELS[i][1] < PERFORMANCES[j][i] ) {
              VARIATION_LEVELS[i][1] = PERFORMANCES[j][i];
            }
          }
        }

        if ( plotConfiguration.chartConfiguration.options ) {
          if ( plotConfiguration.chartConfiguration.options.plugins ) {
            if ( plotConfiguration.chartConfiguration.options.plugins.title ) {
              plotConfiguration.chartConfiguration.options.plugins.title = {
                display: true,
                text: 'Hounds performances variation level'
              };
            }
          }
        }

        plotConfiguration.imageConfiguration.name = "Hounds variation score";
        plotConfiguration.imageConfiguration.path = variation;
        plotConfiguration.chartConfiguration.data.labels = ids.map((id) => "Hound #" + id);

        const variation1: Array<number> = VARIATION_LEVELS.map((variation: [number,number]) => variation[0]);
        const variation2: Array<number> = VARIATION_LEVELS.map((variation: [number,number]) => variation[1]);

        plotConfiguration.chartConfiguration.data.datasets[0].label = "Hounds minimum score";
        plotConfiguration.chartConfiguration.data.datasets[0].data = variation1;
        plotConfiguration.chartConfiguration.data.datasets[0].backgroundColor = [stringifiedArrayOfColors[0].toString()];

        plotConfiguration.chartConfiguration.data.datasets.push({
          ...plotConfiguration.chartConfiguration.data.datasets[0],
          label: "Hounds maximum score",
          data: variation2,
          backgroundColor: [stringifiedArrayOfColors[1].toString()]
        });

        await plot(plotConfiguration);

      });

    });

  });

}

export interface TestInterface {
  generationTests: Function;
}

export const test: TestInterface = {
  generationTests: generationTests
};
