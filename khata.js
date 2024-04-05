// KHATA ELEMENTS
const tableBodyEl = document.getElementById('table-body')
const currentBalanceEl = document.getElementById('current-balance')

let transacted = JSON.parse(localStorage.getItem('amount'))

let balance = JSON.parse(localStorage.getItem('balance'))

let finalAmount = balance - transacted


if(transacted){
    tableBodyEl.innerHTML += `
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>${transacted}</td>
                                    <td>${finalAmount}</td>
                                </tr>
                            </tbody>
                         `
    currentBalanceEl.textContent = `Rs ${finalAmount}`

    balance = finalAmount
}



