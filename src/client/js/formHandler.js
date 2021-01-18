function handleSubmit(event) {
    event.preventDefault()

    // get the value of the DOM element from index.html to fetch it correctly
    let articleURL = document.getElementById('url').value;

    if(Client.URLchecker(articleURL)) {
    console.log("::: Form Submitted :::")
        
    //pass the endpoint of the connect=post and the url 
    postAllData('http://localhost:8089/connect', {url: articleURL})
     
        //Update the browser dynamically as we done in project-3
   .then(function(){
    return DynamicUI();

     })
     
    } else {
        alert('Enter a valid url..');
    }
}

//  the same method that was used before in project 3 to post the data 
const postAllData = async  (url = "", data = {}) => {
    console.log('data will be analyzed from this URL:: ', data);
    const response = await fetch(url , {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try{
        const newData = await response.json();
    console.log("the data:", newData)
    return newData;
    }catch(error){
        console.log("error", error)
    }


};


//retrieve data on the browser using async function, set innerHTML according to data returned by the app route 
const DynamicUI = async () => {

    //we need to specify localhost port number
    const request = await fetch('/getAll');
    try{
        const getData = await request.json();
        console.log(getData);

        // setting the data for each DOM element 

        /*
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        // it does not work with me, I read the documentation but I do not know what is the wrong
        document.getElementById("txt").innerHTML = `text: ${res.text}`;
        */

            
       document.getElementById("agreement").innerHTML = `Agreement: ${getData.agreement}`;
       document.getElementById("subjectivity").innerHTML = `Subjectivity: ${getData.subjectivity}`;
       document.getElementById("confidence").innerHTML = `Confidence: ${getData.confidence}`;
       document.getElementById("irony").innerHTML = `Irony: ${getData.irony}`;
       document.getElementById("txt").innerHTML = `text: ${getData.text}`;

       
    }catch(error){
        console.log("error", error);
    }
};


export { handleSubmit }
export { DynamicUI }

