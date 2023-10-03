const readYml = require("./readyml");
const path = require("path")

class cve {
    constructor(){
        const filePath= path.resolve(__dirname,"./cve.yml");
        console.log(filePath);
       const  testData = readYml(filePath);
       const max = Object.keys(testData.details.source).length
       const index = Math.floor(Math.random() * (max - 0)) + 0;
       const smax = Object.keys(testData.severity).length
       const severityIndex = Math.floor(Math.random() * (smax - 0)) + 0;
       let today = new Date();
        this.cveData = {
            title: "CVE-"+ today.getFullYear() + "-" +today.getMilliseconds() +  today.getSeconds(),
            details: {
                source :testData.details.source[index],
                text: testData.details.text[index]
            },
            references: testData.references,
            faq: testData.faq,
            statement: testData.statement,
            acknowledgement: testData.acknowledgement,
            mitigation: testData.mitigation,
            releases: testData.releases,
            publicDate: testData.publicDate,            
            cwe: testData.cwe,
            severity: testData.severity[severityIndex]

        }
    }
     generateCVEData()
    {
        return this.cveData;
    }
    get CVETitle(){
         let today = new Date();
        return "CVE-"+ today.getFullYear() + "-" +today.getMilliseconds() +  today.getSeconds();
    }
    get CVESource()
    {
        return this.cveData.source[index];
    }
    get CVEText()
    {
        return this.cveData.text[index];
    }
    get CVEReferences()
    {
        return this.cveData.references;
    }
    get CVEMitigation()
    {
        return this.cveData.mitigation;
    }
    get CVEFaq()
    {
        return this.cveData.faq;
    }
    get CVEStatement()
    {
        return this.cveData.statement;
    }
    get CVESeverity()
    {
        return this.cveData.severity;
    }
    
}
module.exports = new cve();