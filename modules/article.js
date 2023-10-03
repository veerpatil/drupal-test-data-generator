const readYml = require("./readyml");
const path = require("path")

class Article {
    constructor(){
        const filePath= path.resolve(__dirname,"./article.yml");
        console.log(filePath);
       const  testData = readYml(filePath);
       const index = Object.keys(testData.title).length
       const contentIndex = this.getMax(index);

       this.articleData = 
       {
         title: testData.title[contentIndex],
         abstract: testData.abstract[contentIndex],
         description: testData.description[contentIndex],
         articleType: testData.articleType[contentIndex],
         category: testData.category[contentIndex],
         privateNotes: testData.privateNotes[contentIndex]
       }

    }
    getMax(num)
    {
        return Math.floor(Math.random() * (num - 0)) + 0;
    }

    generateArticle()
    {
        return this.articleData
    }

    getTitle()
    {
        return this.title
    }
    getAbstract()
    {
        return this.abstract
    }
    getDescription()
    {
        return this.description
    }
    getArticleType()
    {
        return this.articleType
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
module.exports = new Article();