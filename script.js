//načtení dat z localStorage do proměnné names; pokud je localStorage prázdný, tak do names se uloží prázdné pole
const names = getSaveNames()

//odeslání formuláře a uložení do localStorage pomocí proměnné names
let myForm = document.querySelector('#test-form')
let myCheckbox = document.querySelector('.my-checkbox')


myForm.addEventListener('submit', (event) => {
     event.preventDefault()

     names.push({
          id: uuidv4(),
          firstName: event.target.elements.firstName.value,
          adult: myCheckbox.checked
     })

     event.target.elements.firstName.value = ''
     myCheckbox.checked = false
 
     saveNames(names)
})

//vypisování zpět do stránky
let buttonToList = document.querySelector('.to-list')
buttonToList.addEventListener('click', (event) => {
     document.querySelector('.list-names').innerHTML = ''

     let namesFromStorage = localStorage.getItem('names')
     let namesFromStorageJSON = JSON.parse(namesFromStorage)

     namesFromStorageJSON.forEach((myName) => {
          const oneNameHTML = generateHTMLStructure(myName)
          document.querySelector('.list-names').appendChild(oneNameHTML)
     })
     

})

window.addEventListener('storage', (event) => {
     location.reload()
})
