
import { URLchecker } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

 alert("I EXIST")
// console.log("CHANGE!!");


import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

// export functions to be used in other files , babel allow us to export/import these files
export {
    URLchecker,
    handleSubmit
   }

   
   // instead of having JS code in index.html I wrote it here with this .js file and to reach the submit class from index.html
   const submit = document.querySelector('.submit');
   submit.addEventListener('click', e => {

    handleSubmit(e);
    
   })