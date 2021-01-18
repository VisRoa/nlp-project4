function URLchecker(url_input) {

    //   ::::NOTE::::  the REGEX format and how to check it, if its right or wrong was obtained from the stackoverflow

   // var regex = url_input.test(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    
   var regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

     if(regex.test(url_input)){
         alert(" a valid url")
         return true;
     } else{
        alert("Enter a valid url")
     return false;
     }
 }

 //export the function to use it in formHandler file
 export { URLchecker }