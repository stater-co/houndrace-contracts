const fs = require('fs');
fs.readFile('../logs/deployments/deployments.logs', 'utf8' , (err, rawData) => {
    if (err) {
      console.error(err)
      return;
    }
    
    let separator = '##############################################';
    let rawDeployment = rawData.indexOf('export');
    let equal0xPosition = rawData.indexOf('=0x');
    let deploymentSeparator = rawData.indexOf(separator);
    while ( rawDeployment !== -1 && equal0xPosition !== -1 ) {
        console.log(rawData.substring(rawDeployment,equal0xPosition + 3 + 40));
        rawData = rawData.substring(equal0xPosition + 3 + 40,rawData.length);
        rawDeployment = rawData.indexOf('export');
        equal0xPosition = rawData.indexOf('=0x');
        deploymentSeparator = rawData.indexOf(separator);
        if ( rawDeployment > deploymentSeparator && equal0xPosition > deploymentSeparator && deploymentSeparator !== -1 ) {
          console.log(separator);
        }
    }
});