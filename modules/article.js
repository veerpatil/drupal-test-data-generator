class Article
{
constructor() {
    this.titles = [
      'Docker: A Powerful Tool for Developing, Shipping, and Running Applications',
      'Red Hat Ansible Automation Platform Database Scope of Coverage'
    ];
    this.abstracts = [
      'Docker is a platform for developing, shipping, and running applications. Docker containers image up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.',
      "What is and isn't supported with respect to the database included with Red Hat Ansible Automation Platform, and what is supported when using an internal database?"
    ];
    this.descriptions = [
      'Docker containers are lightweight, stand-alone, executable packages of software that include everything needed to run an application: code, runtime, system tools, system libraries and settings. Containers are isolated from one another and run on a shared operating system. This makes them lightweight and portable, and it allows them to be run on any platform that supports Docker.',
      'Ansible Automation Platform connecting to a highly-available or disaster-recovery configured database is a supported configuration. In this scenario, support is limited to the connection to the database as described above. During troubleshooting, if issues are detected that are determined to be with the HA configuration or the underlying infrastructure, Red Hat may at their discretion provide suggestions, or refer the customer to their third-party database vendor, cloud provider, or other responsible organizations'
    ];
    this.articleTypes = [
      'Tutorial',
      'Reference Architecture',
      'General',
      'Tech Brief',
      'Performance Brief'
    ];
    this.categories = [
      'Developer',
      'Supportability',
      'Install',
      'Configure'
    ];
    this.privateNotes = [
      'Added information about the popularity of Docker and its integration with other technologies.',
      'Red Hat Ansible Automation Platform Scope of Coverage'
    ];
  }

  getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  generateArticle() {
    return {
      title: this.getRandomElement(this.titles),
      abstract: this.getRandomElement(this.abstracts),
      description: this.getRandomElement(this.descriptions),
      articleType: this.getRandomElement(this.articleTypes),
      category: this.getRandomElement(this.categories),
      privateNotes: this.getRandomElement(this.privateNotes),
    };
  }
}

module.exports = new Article();