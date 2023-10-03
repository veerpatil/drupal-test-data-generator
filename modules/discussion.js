const readYml = require("./readyml");
const path = require("path")

class Discussion {
    constructor(){
        const filePath= path.resolve(__dirname,"./discussion.yml");
       const  testData = readYml(filePath);
       console.log(testData)
       const index = Object.keys(testData.title).length
       const contentIndex = this.getMax(index);
       this.DiscussionData = 
       {
         title: testData.title[contentIndex],
         product: testData.product[contentIndex],
         content: testData.content[contentIndex]
       }
    }
    getMax(num)
    {
        return Math.floor(Math.random() * (num - 0 +1)) + 0;
    }

    generateDiscussion()
    {
        return this.DiscussionData
    }

    getTitle()
    {
        return this.title
    }
    getProduct()
    {
        return this.abstract
    }
    getContent()
    {
        return this.description
    }
}
module.exports = new Discussion();