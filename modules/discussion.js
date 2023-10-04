class Discussion {
    constructor() {
        this.title = [
            "Introducing Podman",
            "CentOS Operating System",
            "Ansible Automation Tool"
        ];
        this.product = [
            ["Container", "Other","Red Hat Ansible Automation Platform"]
        ];
        this.content = [
            "Experience the next level in container management. Podman provides a Docker-CLI compatible mode, ensuring ease of transition from Docker. With Podman, you can run and manage containers without the need for a daemon, offering enhanced security and performance.",
            "CentOS is a free and open-source community-driven Linux distribution that provides a platform for high-performance computing, cloud, and data center operations.",
            "Ansible is an open-source automation tool that provides simple, yet powerful, infrastructure and configuration management."
        ];
    }

    getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    generateDiscussion()
    {
        return {
            title: this.getRandomElement(this.title),
            product: this.getRandomElement(this.product),
            content: this.getRandomElement(this.content)
        }
    }   
}
   
module.exports = new Discussion();