# drupal-test-data-generator

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Drupal-test-data-generator is a library that generates fake data that can be used for things such as:

    - [Automated Testing]
    - [API Testing] 
This document covers the usage with Javscript implmentation of Drupal-test-data-generator 
## Getting Started <a name = "getting_started"></a>

These instructions will let you know how to install drupal-test-data package and use it in your project 

### Prerequisites

1. [Git](https://git-scm.com/downloads) client installed. To verify if git client is installed properly, open Terminal on Linux/Mac, then execute this command 
```
 $ `git --version`
```
2. [NodeJS](https://nodejs.org/en/) 16+ installed. To verify if nodejs is installed properly, open Terminal on Linux/Mac, then execute this command  
```
$ `node --version`
```
Installing the drupal-test-data package 
```
npm install @drupal-test=data --save-dev 
```

## Usage <a name = "usage"></a>

Below are the sample examples code in order to use the package in your code. 
```
const fakeData = require("drupal-test-data")
console.log(fakeData.cvedetails.title)
console.log(fakeData.article.abstract)
console.log(fakeData.solution.resolution)
console.log(fakeData.discussion.content)

```
