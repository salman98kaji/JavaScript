const receipent = "james"
const rec2 = "Salman"
//const email = "hey "+receipent+" how are you "
const email2 = `
    hey ${receipent} 
    how are you ${rec2}
`
console.log(email2)

let myLeads = `["Hello world"]`
myLeads = JSON.parse(myLeads)
myLeads.push("salman")
console.log(myLeads)
