const yaml = require('js-yaml');
const fs = require('fs');

function readYmlFile(filePath)
{
    try {
        // Read the YAML file
        const yamlFile = fs.readFileSync(filePath, 'utf8');
      
        // Parse the YAML content
        const data = yaml.load(yamlFile);
      
        // Access and work with the data
        const jsonString = JSON.stringify(data, null, 2);

       // console.log(jsonString);

        const CVEdata= JSON.parse(jsonString);

        return CVEdata;
      } catch (error) {
        console.error('Error reading YAML file:', error);
      }
}

module.exports = readYmlFile;