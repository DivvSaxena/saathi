 /* FIREBASE */
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
 import { getDatabase ,ref , push as pushed , onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

 const firebaseConfig = {
    apiKey: "AIzaSyCq2s22wohlUPu3lpnycQTo3aHVsNZUm1Y",
    databaseURL: 'https://saathi-5c950-default-rtdb.asia-southeast1.firebasedatabase.app/',
    authDomain: "saathi-5c950.firebaseapp.com",
    projectId: "saathi-5c950",
    storageBucket: "saathi-5c950.appspot.com",
    messagingSenderId: "86230382615",
    appId: "1:86230382615:web:955aa7a6b4cff29abd4452"
  };


  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)
  const usersInDB = ref(database,'users')

// UI ELEMENTS


// AADAN ELEMENTS
const amountToSendEl = document.getElementById('amount-to-send')
const aadanEl = document.getElementById('aadan')


localStorage.setItem('balance','1892')

let list = []

let balance = JSON.parse(localStorage.getItem('balance'))

document.addEventListener('click', (e) => {
    if(e.target.id == 'aadan'){
        let amount = amountToSendEl.value

        if(balance >= amount){
            console.log(amount)
            localStorage.setItem('amount', `${amount}`)  
            list.push({amount:`${amount}`,balance:`${balance - amount}`})
            pushed(usersInDB,list)
            clearFields()
            
        }else{
            alert('insufficent amount')
        }

        
    }

})


function clearFields(){
    amountToSendEl.value = ''
}