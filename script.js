document.addEventListener("DOMContentLoaded", () => {
const noteContainer = document.querySelector(".container-notes");
const createBtn = document.querySelector(".button");
let notes = document.querySelectorAll(".inputbox");

function showNotes()
{
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function uptadeStorage()
{
    localStorage.setItem("notes", noteContainer.innerHTML);
}
createBtn.addEventListener("click", (e)=>
{
    e.preventDefault(); //scroll
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputbox";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})
noteContainer.addEventListener("click", function(e){
    if(e.target.tagName == "IMG")
    {
        e.target.parentElement.remove(); //delete the p
        uptadeStorage();
    }
    else if(e.target.tagName == "P")
    {
        notes = document.querySelectorAll(".inputbox");
        notes.forEach(nt => {
            nt.onkeyup = function()
            { 
                uptadeStorage();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
}) 