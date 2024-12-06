const person = {
    name : "Salman",
    walk : function(){},
    talk : function(){}
}

//dot method 
person.name
person.talk()
person.name = ''

person.walk
//or bracket method
const targetName = 'name'
person[targetName] = 'Khalid'

person['talk']
person['walk']