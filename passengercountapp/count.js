//1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)
function increment() {
    count += 1
    //countEl.innerText = count, as per the google Node.textContent used for hidden readable content.
    countEl.textContent =count
}


function save(){
    let countStr = count + " - "
    //2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    //3. Render the variable in the saveEl using innerText
    //saveEl.innerText += countStr
    saveEl.textContent += countStr
    //NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")