let myLeads = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("input-btn")
const ulEl = document.getElementById("unordered-list")

saveEl.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead()
    console.log(localStorage.getItem("myLeads"))
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





