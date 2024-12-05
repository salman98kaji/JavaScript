let greeting = document.getElementById("greet-el")

function greetUser(greet, name){
    greeting.textContent = `${greet} ${name}, How are you.`
}

greetUser("Good Morning", "Salman")

 