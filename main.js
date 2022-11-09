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



// haircuts


let haircuts = document.querySelector('#hairCuts')
let date = document.querySelector('#date')
let stylist = document.querySelector('#stylist')
let long = document.querySelector('#long')
let short = document.querySelector('#short')
let hairLength = ''

haircuts.addEventListener('submit',function(event){
    event.preventDefault()
    
    console.log(date)
    console.log(stylist)
    

    if(long.checked === true){
        hairLength = 'long'
    }else if(short .checked === true){
        hairLength = 'short'
    }
    alert('Haircut scheuled for '+date.value+ ' with '+stylist.value+' for ' + hairLength)

    long.checked = ''
    short.checked = ''
    stylist.value= ''
    date.value = ''
})


// create account

let createAccount = document.querySelector('#createAccount')
let email = document.querySelector('#userEmail')
let userName = document.querySelector('#userName')
let password = document.querySelector('#password')
let passwordConfirm = document.querySelector('#confirmPassword')
let userMatch = ''
let passwordMatch = ''


createAccount.addEventListener('submit',function(event){
    event.preventDefault()

let newStr = ''
    if(userName.value.length > 4){
        newStr += userName.value
        userMatch += userName.value
    } else {
        alert('user name is less then 4 characters. Try again!')
    }

    if(password.value.length > 4){
        newStr += password.value
        passwordMatch += password.value
    }else{
        alert('password is less then 4 characters. Try again!')
    }

    if(passwordConfirm.value !== password.value){
        alert("Password doesn't match. Try again!")
    }else{
        newStr = 'Account has been created ' +'Email: ' + email.value + '\n UserName: ' + userName.value
        alert(newStr)
    }
    userName.value= ''
    password.value = ''
    passwordConfirm.value = ''
    email.value = ''
    
})
