let nameID = location.hash.substring(1)
let names = getSaveNames()

let searchName = names.find((oneObject) => {
     return oneObject.id === nameID
}) 

if(searchName === undefined){
     location.assign('/index.html')
}

document.querySelector('#editedName').value = searchName.firstName

let changingForm = document.querySelector('#changing-form')
changingForm.addEventListener('submit', (event) => {
     event.preventDefault()

     searchName.firstName = event.target.elements.changingName.value

     console.log(searchName)

     saveNames(names)

})

window.addEventListener('storage', (event) => {
     if(event.key === 'names') {
          names = JSON.parse(event.newValue)
     }
     let searchName = names.find((oneObject) => {
          return oneObject.id === nameID
     }) 
     
     if(searchName === undefined){
          location.assign('/index.html')
     }
     
     document.querySelector('#editedName').value = searchName.firstName

})

