var arrProduct = [
    { no: 1, name: 'Cola Cola', price: '5000', category: 'drink' },
    { no: 2, name: 'beng beng', price: '4500', category: 'food' },
    { no: 3, name: 'fanta', price: '3500', category: 'drink' },
​
];
​
indexEdit = -1

let inputcategory = ["drink","food","others"]

function printData(arr) {
    let result = arr.map((val, index) => {
        if (indexEdit == index) {
            return `<tr>
                <td>${index + 1}</td>
                <td><input type="text" placeholder="name" value="${val.name}" id="inputEditNama${index}"></td>
                <td><input type="text" placeholder="price" value="${val.price}" id="inputEditPrice${index}"></td>

                <input type="radio" id="radioButton" value='food' > food
                <input type="radio" id="radioButton" value='drink' > drink
                <input type="radio" id="radioButton" value='others' > others
                </select>
                </td>
                <td>
                    <input type="button" value="Save" onclick="onSaveClick(${val.no})">
                    <input type="button" value="Cancel" onclick="onCancelClick()">
                 </td>
            </tr>`
        }
        return `<tr>
                <td>${index + 1}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.category}</td>
                <td>
                    <input type="button" value="Delete" onclick="onDeleteClick(${index})">
                    <input type="button" value="Edit" onclick="onEditClick(${index})">
                 </td>
            </tr>`
    })
    document.getElementById('renderData').innerHTML = result.join('')
}
printData(arrProduct)

function submitData() {
    let inputnama = document.getElementById('inputNama').value
    let inputprice = document.getElementById('inputPrice').value
    let inputcategory =document.getElementById('radioButton').value
     
    if (inputnama && inputprice && inputcategory) {
        var result = { name: inputnama, price: inputprice, category: inputcategory }
        arrProduct.push(result)
        printData(arrProduct)
    } else {
        alert('Input masih kosong beb')
    }
}
​
function onDeleteClick(index) {
    arrProduct.splice(index, 1)
    printData(arrProduct)
}
​
function onEditClick(index) {
    indexEdit = index
    printData(arrProduct)
}
​
function onSaveClick(id) {
    var editNama = document.getElementById('inputEditNama' + indexEdit).value
    var editPrice = document.getElementById('inputEditPrice' + indexEdit).value
    var editCategory = document.getElementById('inputEditCategory' + indexEdit).value
    let indexEd = arrProduct.findIndex((val) => {
        return val.no == id
    })
    arrProduct[indexEd].name = editNama
    arrProduct[indexEd].price = editPrice
    arrProduct[indexEd].category = editCategory
    indexEdit = -1
    printData(arrProduct)
}
​
function onCancelClick() {
    indexEdit = -1
    printData(arrProduct)
}

