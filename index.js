const cve = require("./modules/cve");
const article = require("./modules/article")
const solution = require("./modules/solution")
const discussion = require("./modules/discussion")

module.exports = { 
    cvedetails: cve.generateCVEData(), 
    article: article.generateArticle(),
    solution: solution.generateSolution(),
    discussion: discussion.generateDiscussion()
} ;