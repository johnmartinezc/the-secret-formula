let alertForm = document.querySelector('#alertForm')
let alertInput = document.querySelector('#alertInput')

alertForm.addEventListener('submit',function(event){
    event.preventDefault()
    alert(alertInput.value)
    alertInput.value = ''
})

let sandwichForm = document.querySelector('#sandwichForm')
let ingredients = document.querySelectorAll('#sandwichForm .ingredients')

for(let item of ingredients){
    console.log(item.id)
}

sandwichForm.addEventListener('submit',function(event){

    event.preventDefault()
    let newStr = ''
    for (let i = 0; i < ingredients.length; i++) {
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id},`
        }
        
    }
    console.log(newStr)

    alert('Your sandwich contrains: ' + newStr)
})
 