# nlp-project4
Natural Language Processing project
# Udacity 4th Project: 
# Evaluate a news article with Natural Language Processing

## What We will be building

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api from MeaningCloud, we can build a simple web interface to interact with their NLP system. This tool will give us  information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have development and production environments, each with their own set of tools and commands.
We will also use Jest to test our route and other JavaScript functions of our application


# Project Goals

The goal of this project is to give us the practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

# An Overview about NLP

 NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API from MeaningCloud has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## API

The project uses the sentiment Analyzer APIs from MeaningCloud, which provides a powerful and flexible AI-driven content analysis solutions. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

## Installation
First YOu need to Make sure that Node and npm are installed from the terminal.
```
>node -v
>npm -v
```
# Installing the package-lock.json & node_modules
to install all the dependencies and devdependencies run the following command:

 >npm install 

## Run project in development & production environment
Below shows how to run in development and production mode.

## run the server 
first run the server in the terminal by:

>npm run start

### run in development mode

>npm run build-dev

### run in production mode

>npm run build-prod

### open browser at :
 Open browser at http://localhost:8089/


## Configs
Here, we have two webpack config files for both development mode(`webpack.dev.js`) and production mode(`webpack.prod.js` )

We also have a `package.json` to manage dependencies

## Testing

Testing is done with Jest. To run test, use the command 

>npm run test 
