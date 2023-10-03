const cve = require("./modules/cve");
const article = require("./modules/article")

module.exports = { 
    cvedetails: cve.generateCVEData(), 
    article: article.generateArticle() 
} ;