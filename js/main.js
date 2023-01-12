// * Global Variables 

let myLeads = []; 
const inputEl = document.getElementById("input-el"); 
const inputBtn = document.getElementById("input-btn"); 
const ulEl = document.getElementById("ul-el"); 


// * Input Button Functionality 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) 
    // console.log(myLeads) 

    // clear the input after clicked 
    inputEl.value = "" 

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
        console.log(leads[i]) 
        console.log(listItems) 
    } 

    // Adding the list items to the ul element 
    ulEl.innerHTML = listItems      // ? manipulating DOM comes with a cost - manipulate one time rather than many times; therefore, doing innerHTML outside of the loop 
}
