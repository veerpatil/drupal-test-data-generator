class cve {
    constructor() {
        this.title = 'CVE-223-1005';
        this.source = ['Red Hat', 'Mitre'];
        this.text = [
            "It was found that tomcat's FORM authentication allowed a very small period in which an attacker could possibly force a victim to use a valid user session,or Session Fixation. While practical exploit of this issue is deemed highly improbable,an abundance of caution merits it be considered a flaw. The highest threat from this vulnerability is to system availability, but also threatens data confidentiality and integrity.",
            'One more description text for the CVE description'
        ];
        this.references = ["https://www.cve.org/CVERecord?id=CVE-2019-17563", "https://nvd.nist.gov/vuln/detail/CVE-2019-17563", "http://mail-archives.apache.org/mod_mbox/www-announce/201912.mbox/%3C21b7a375-7297-581b-1f8e-06622d36775b@apache.org%3E", "http://tomcat.apache.org/security-9.html#Fixed_in_Apache_Tomcat_9.0.30", "https://tomcat.apache.org/security-7.html#Fixed_in_Apache_Tomcat_7.0.99", "https://tomcat.apache.org/security-8.html#Fixed_in_Apache_Tomcat_8.5.50"];
        this.statement = 'All affected Red Hat products providing the affected component code should update their setups per the product fixes given.The following Red Hat products are out of support scope for Low Impact flaws, and as such will not issue security fixes: Red Hat Enterprise Linux 5 Red Hat Enterprise Linux 6 Red Hat JBoss BPM Suite 6 Red Hat JBoss BRMS 6';
        this.acknowledgement = [
            "Testing acknowledgement Working with the affected vendor is highly recommended as part of the vulnerability disclosure process. Irresponsible disclosure of a vulnerability without a “good faith” effort to contact the vendor and allow a patch to be released places users of the affected process at risk.",
            "One more acknowledgement"
        ];
        this.mitigation = 'Testing mitigation text added All affected Red Hat products providing the affected component code should update their setups per the product fixes given.The following Red Hat products are out of support scope for Low Impact flaws, and as such will not issue security fixes: Red Hat Enterprise Linux 5 Red Hat Enterprise Linux 6 Red Hat JBoss BPM Suite 6 Red Hat JBoss BRMS 6';
        this.cwe = ['CWE-1', 'CWE-23'];
        this.severity = ['Low', 'Important', 'High', 'Critical'];
    }

    getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    getCVEName()
    {
        let today = new Date(); 
        return "CVE-"+ today.getFullYear() + "-" +today.getMilliseconds() +  today.getSeconds();
    }

    generateCVEData() {
        return {
            title: this.getCVEName(),
            details: {
                source: this.getRandomElement(this.source),
                text: this.getRandomElement(this.text),
                references: this.references,
                statement: this.statement,
                acknowledgement: this.getRandomElement(this.acknowledgement),
                mitigation: this.mitigation,
                releases: this.releases,
                cwe: this.getRandomElement(this.cwe),
                severity: this.getRandomElement(this.severity),
            }
        };
    }
    
}
module.exports = new cve();