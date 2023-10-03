const cve = require("./modules/cve");
const article = require("./modules/article")
const solution = require("./modules/solution")

module.exports = { 
    cvedetails: cve.generateCVEData(), 
    article: article.generateArticle(),
    solution: solution.generateSolution()
} ;