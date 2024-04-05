// UI ELEMENTS


// AADAN ELEMENTS
const amountToSendEl = document.getElementById('amount-to-send')
const aadanEl = document.getElementById('aadan')


localStorage.setItem('balance','1892')


let balance = JSON.parse(localStorage.getItem('balance'))

document.addEventListener('click', (e) => {
    if(e.target.id == 'aadan'){
        let amount = amountToSendEl.value

        if(balance >= amount){
            console.log(amount)
            localStorage.setItem('amount', `${amount}`)  
            clearFields()
        }else{
            alert('insufficent amount')
        }

        
    }

})


function clearFields(){
    amountToSendEl.value = ''
}