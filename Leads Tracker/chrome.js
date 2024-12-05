let myLeads = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("input-btn")
const ulEl = document.getElementById("unordered-list")
const deleteEl = document.getElementById("delete-btn")
const tabEl = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabEl.addEventListener("click", function() {

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })  
})

saveEl.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    JSON.parse(localStorage.getItem("myLeads"))
})

function render(leads) {

    let listItems = ""
    for( let i=0; i < leads.length; i++) {
        //ulEl.innerHTML += "<li>"+myLeads[i] +"</li>"
            // alternative way
        // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
       
        listItems += 
            `<li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`    
    }
    ulEl.innerHTML = listItems
}

deleteEl.addEventListener("dblclick", function() {
    console.log("Double Clicked")
    localStorage.clear()         //clear local stoarge
    myLeads = []                 //clearing myLeads array by reassinging it to an empty array
    render(myLeads)              //clearig the DOM by just calling the fucntion after the previous two steps
})





