
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js');
const app = express();
let projectdata = {}; 

//middleware 
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('dist'));
console.log(__dirname);


// getting the base url and the key from meaningcloud
const BASE_Url = 'https://api.meaningcloud.com/sentiment-2.1?'
const API_KEY='087f7e49747b7803c437c080297efabf';

// set the port for the app 
app.listen(8089, function () {
    console.log('Example app listening on port 8089!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

console.log(` API Key is ${API_KEY}`);
console.log(`Base_URL ${BASE_Url}`)

// /getAll route to retrieve data when the the browser update dynamically 
app.get('/getAll', sendData);



// callback function 
//it states that when the request came from app to retrieve data then send the projectdata 
function sendData(request, response){

    response.send(projectdata);

  
}

// POST Route
app.post('/connect', async  (req, res) => {
   
       
      let url = req.body.url;

       const lan = 'lang=en'
       const ApiURL = `${BASE_Url}key=${API_KEY}&url=${url}&${lan}`
   
       const response = await fetch(ApiURL)
   
       const the_Data = await response.json()
       console.log(the_Data)
       projectdata.agreement = the_Data.agreement
       projectdata.subjectivity = the_Data.subjectivity
       projectdata.confidence = the_Data.confidence
       projectdata.irony = the_Data.irony
       projectdata.text = the_Data.text
   
       res.send(projectdata)

        //get the url data from body > index.html 
    /*
    projectdata = req.body.url;

    console.log(`the data entered: ${projectdata}`);

    //define the language to be english
    const lan = 'lang=en'
    //forming the api call for the base_url and the key + to the url entered by the user
    const ApiURL = `${BASE_Url}key=${API_KEY}&url=${projectdata}&${lan}`

    //fetch 
    const response = await fetch(ApiURL)
    console.log("the response:: ",response)
    
      
             //get the response from the_Data and turn itno json, sincis its an API all response will be in json format
        const the_Data = await response.json()
        console.log(the_Data)
        res.send(the_Data)
        */
        /** before returning the response from here,
         *  you should map it in projectData object.
         *  As of now projectData object only contains URL value
         * . Please refer below sample code which you can
         *  refer for saving response values in
         *  projectData object */
        /*
        projectdata.agreement = res.agreement
        projectdata.subjectivity = res.subjectivity
        projectdata.confidence = res.confidence
        projectdata.irony = res.irony
        projectdata.text = res.text
        */
       

})