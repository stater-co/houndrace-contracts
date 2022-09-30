import { SetMatingSeasonParams } from "../../common/dto/test/setMatingSeasonParams";
import { expecting } from "../expecting";
const { ethers } = require('hardhat');


export async function setMatingSeason(
  params: SetMatingSeasonParams
) {

  const [ , , , , , , , , , , , sig12 ] = await ethers.getSigners();
  await params.contract.connect(sig12).setMatingSeason(params.season);
}

export async function safeSetMatingSeason(
  params: SetMatingSeasonParams
) {
  const before: boolean = await params.contract.matingSeason();
  await setMatingSeason(params);
  const after: boolean = await params.contract.matingSeason();
  //expecting(before !== after, "Set mating season method bugged");
}