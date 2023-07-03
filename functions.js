// funkce našítající data z localStorage; Ošetřit, pokud data v localStorage nejsou
const getSaveNames = () => {
     const myNames = localStorage.getItem('names')

     if(myNames !== null) {
          return JSON.parse(myNames)
     } else {
          return []
     }
}

/*fukce pro použití při odeslání formuláře; ukládání do localStorage
 jméno z formuláře */
const saveNames = (oneName) => {
     localStorage.setItem('names', JSON.stringify(oneName))
}

/*generování HTML struktury, kterou umístíme do stránky po kliknutí na 
tlačítko 'Vypiš' + použijeme ji také pro vypsání nových informací z 
localStorage, když nějaké jméno vymažeme pomocí tlačítka 'Vymazat jméno'
*/
const generateHTMLStructure = (oneName) => {
     const newDiv = document.createElement('div')
     const newLink = document.createElement('a')
     const newButton = document.createElement('button')

     const isAdult = document.createElement('div')
     const textAdult = document.createElement('div')

     //nastavení mazacího tlačítka
     newButton.textContent = 'smazat'
     newDiv.appendChild(newButton)

     newButton.addEventListener('click', (event) => {
          removeNames(names, oneName.id)
          saveNames(names)
          toListAgain()
     })

     


     newLink.textContent = oneName.firstName
     newDiv.appendChild(newLink)
     // if(oneName.adult === true) {
          
     // }else {
     //      newLink.classList.add('no-adult')
     // }
     newLink.classList.add(oneName.adult ? "adult" : "no-adult")
     
     newLink.setAttribute('href', `/edit.html#${oneName.id}`)
     return newDiv
}

// podle ID najdeme index daného jména a pomkocí splice ho odstraníme
const removeNames = (ourNames, id) => {
     const index = ourNames.findIndex((nameWantToCheck) => {
          return nameWantToCheck.id === id
     })

     if(index > -1 ){
          ourNames.splice(index, 1)
     }
} 

/* pokud smažeme nějaké jmnéno z localStorage, tak tato funkce zabezpečí
opětovné vypsání localStorage (tedy vypsání bez smazaného jména) */
const toListAgain = () => {
     document.querySelector('.list-names').innerHTML = ''

     let newData = getSaveNames()

     newData.forEach((onlyOneName) => {
          const newContent = generateHTMLStructure(onlyOneName)
          document.querySelector('.list-names').appendChild(newContent)
     })

}

