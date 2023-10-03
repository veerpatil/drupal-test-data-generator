const readYml = require("./readyml");
const path = require("path")

class Solution {
    constructor(){
        const filePath= path.resolve(__dirname,"./solutions.yml");
        console.log(filePath);
       const  testData = readYml(filePath);
       console.log(testData)
      // const index = Object.keys(testData.title).length
     //  const contentIndex = this.getMax(index);

       this.solutionData = 
       {
         title : testData.title,
         issue : testData.issue,
         environment : testData.environment,
         resolution : testData.resolution,
         category : testData.category,
         privateNotes : testData.privateNotes,
         kcsState : testData.kcsState
       }

    }
    getMax(num)
    {
        return Math.floor(Math.random() * (num - 0)) + 0;
    }

    generateSolution()
    {
        return this.solutionData
    }

    getTitle()
    {
        return this.title
    }
    getIssue()
    {
        return this.issue
    }
    getEnvironment()
    {
        return this.environment
    }
    getResolution()
    {
        return this.resolution
    }
    getCategory()
    {
        return this.category
    }
    getPrivateNotes()
    {
        return this.privateNotes
    }
}
module.exports = new Solution();