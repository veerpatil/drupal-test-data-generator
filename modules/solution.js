class Solution {
    constructor() {
        this.title = "Docker Installation Issue";
        this.issue = "Unable to install Docker on Ubuntu 20.04 due to dependency conflicts";
        this.environment = "Ubuntu 20.04 LTS, 64-bit, 8GB RAM, 100GB storage";
        this.resolution = `
        1. Update the system:
           sudo apt-get update
           sudo apt-get upgrade

        2. Remove any previous versions of Docker:
           sudo apt-get remove docker docker-engine docker.io containerd runc

        3. Install required packages:
           sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

        4. Add Docker's official GPG key:
           curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

        5. Add Docker repository to APT sources:
           sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

        6. Update the package database with the Docker packages:
           sudo apt-get update

        7. Install Docker CE:
           sudo apt-get install docker-ce
        `;
        this.privateNotes = "Ensure internet connection is stable during the installation process. If issues persist, check for system compatibility.";
        this.category = ["Developer", "Supportabillity", "Install", "Configure"];
        this.kcsState = ["Verfied", "Unverified", "In Progress"];
    }

    getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      }
    
      generateSolution() {
        return {
          title: this.title,
          issue: this.issue,
          environment: this.environment,
          resolution: this.resolution,
          category: this.getRandomElement(this.category),
          privateNotes: this.getRandomElement(this.privateNotes),
        };
      }
}
module.exports = new Solution();