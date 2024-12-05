let myLeads = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("input-btn")
const ulEl = document.getElementById("unordered-list")
const deleteEl = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLead()
}

saveEl.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead()
    JSON.parse(localStorage.getItem("myLeads"))
})

function renderLead() {

    let listItems = ""
    for( let i=0; i < myLeads.length; i++) {
        //ulEl.innerHTML += "<li>"+myLeads[i] +"</li>"
            // alternative way
        // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
       
        listItems += 
            `<li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`    
    }
    ulEl.innerHTML = listItems
}

deleteEl.addEventListener("dblclick", function() {
    console.log("Double Clicked")
    localStorage.clear()         //clear local stoarge
    myLeads = []                 //clearing myLeads array by reassinging it to an empty array
    renderLead()                 //clearig the DOM by just calling the fucntion after the previous two steps
})





