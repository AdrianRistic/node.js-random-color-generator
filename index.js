import chalk from 'chalk';
import randomcolor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

const color = randomcolor({
  luminosity: lum,
  hue: col,
});
function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}
// LONG VERSION
// colorAndLog("##############################");
// colorAndLog("##############################");
// colorAndLog("##############################");
// colorAndLog("########              ########");
// colorAndLog(`########   ${color}    ########`);
// colorAndLog("########              ########");
// colorAndLog("##############################");
// colorAndLog("##############################");
// colorAndLog("##############################");
// SHORT VERSION
colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);
