import { readFile } from 'fs';
import DeploymentError from '../logs/deployment/printers/errors';
import { deploymentLogsPath } from '../common/paths';
import ConsoleError from '../logs/console/errors';
import { deploymentErrorsPath } from '../common/paths';


readFile(deploymentLogsPath.fullPath, 'utf8' , (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      DeploymentError(err.message);
      ConsoleError('An error occured during the process execution, please check ' + deploymentErrorsPath.fullPath + ' for more informations');
      return;
    }
    
    let separator = '##############################################';
    let rawDeployment = data.indexOf('export');
    let equal0xPosition = data.indexOf('=0x');
    let deploymentSeparator = data.indexOf(separator);
    while ( rawDeployment !== -1 && equal0xPosition !== -1 ) {
        console.log(data.substring(rawDeployment,equal0xPosition + 3 + 40));
        data = data.substring(equal0xPosition + 3 + 40,data.length);
        rawDeployment = data.indexOf('export');
        equal0xPosition = data.indexOf('=0x');
        deploymentSeparator = data.indexOf(separator);
        if ( rawDeployment > deploymentSeparator && equal0xPosition > deploymentSeparator && deploymentSeparator !== -1 ) {
          console.log(separator);
        }
    }
});