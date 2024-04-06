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



// KHATA ELEMENTS
const tableBodyEl = document.getElementById('table-body')
const currentBalanceEl = document.getElementById('current-balance')

let transacted = JSON.parse(localStorage.getItem('amount'))

let balance = JSON.parse(localStorage.getItem('balance'))

let finalAmount = balance - transacted


// if(transacted){
//     tableBodyEl.innerHTML += `
//                             <tbody>
//                                 <tr>
//                                     <td>1</td>
//                                     <td>${transacted}</td>
//                                     <td>${finalAmount}</td>
//                                 </tr>
//                             </tbody>
//                          `
//     currentBalanceEl.textContent = `Rs ${finalAmount}`

//     balance = finalAmount
// }




onValue(usersInDB , (snapshot) => {
    let itemArray = Object.entries(snapshot.val())
    let feedHtml = ''

    

    for(let item = 0; item < itemArray.length ; item++){
        let currentItem = itemArray[item][1]
        
        console.log(currentItem)
        currentBalanceEl.textContent = `Rs ${currentItem[0].balance}`
        feedHtml += getFeed(currentItem)
        
    }
    
    render(feedHtml)
})

function getFeed(item){
    return `<tr>
                <td>.</td>
                <td>${item[0].amount}</td>
                <td>${item[0].balance}</td>
            </tr>`
}

function render(feedHtml){
    
    tableBodyEl.innerHTML += feedHtml
}
