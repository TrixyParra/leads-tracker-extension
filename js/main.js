// * Global Variables 

let myLeads = ["www.example.com", "www.example2.com", "www.sample.com"]; 
const inputEl = document.getElementById("input-el"); 
const inputBtn = document.getElementById("input-btn"); 
const ulEl = document.getElementById("ul-el"); 


// * Input Button Functionality 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) 
    console.log(myLeads) 
}) 

// Loop through the myLeads Array 
let listItems = ""; 

for (let i=0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a href="#">${myLeads[i]}</a>
        </li>
    ` 
    console.log(myLeads[i]) 
    console.log(listItems) 
} 

// Adding the list items to the ul element 
ulEl.innerHTML = listItems      // ? manipulating DOM comes at a cost - manipulate one time rather than many times; therefore, doing innerHTML outside of the loop 