// * Global Variables 

let myLeads = []; 
const inputEl = document.getElementById("input-el"); 
const inputBtn = document.getElementById("input-btn"); 
const ulEl = document.getElementById("ul-el"); 
const deleteBtn = document.getElementById("delete-btn"); 


// * localStorage 

// get the leads from localStorage 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));      // ? because myleads was changed to a string -> convert back to an array with parse 
// console.log(leadsFromLocalStorage) 

// save leads from localStorage to display regardless of refresh on page 
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage 
    render(myLeads) 
}


// * Input Button Functionality 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) 
    // console.log(myLeads) 

    // clear the input after clicked 
    inputEl.value = "" 

    // save myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))        // ? because myLeads is an array -> needs to be changed to a string for localStorage 
    // console.log(localStorage.getItem("myLeads")) 

    // invoke the render function with myleads as the argument 
    render(myLeads) 

}) 


// * Reusable Render Function 

function render(leads) {
    // Loop through the myLeads Array 
    let listItems = ""; 

    for (let i=0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}" rel="noopener noreferrer">
                    ${leads[i]}
                </a>
            </li>
        ` 
        // console.log(leads[i]) 
        // console.log(listItems) 
    } 

    // Adding the list items to the ul element 
    ulEl.innerHTML = listItems      // ? manipulating DOM comes with a cost - manipulate one time rather than many times; therefore, doing innerHTML outside of the loop 
}


// * Delete Button Functionality 

deleteBtn.addEventListener("click", function() {
    // clear localStorage 
    localStorage.clear() 

    // clear myLeads 
    myLeads =[] 

    // clear DOM 
    render(myLeads) 
}) 