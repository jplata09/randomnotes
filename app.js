const button = document.querySelector("#btn")
const container = document.getElementById("container")

button.addEventListener("click",createNote);
function createNote(){
    const note = document.createElement("div")
    note.classList.add("note")
    note.style.backgroundColor = getRandomColor();
    note.style.left = getRandomPosition() + "%";
    note.style.top = getRandomPosition() + "%";
    note.setAttribute("contenteditable","true")
    
    note.addEventListener("dblclick",() => {
        container.removeChild(note);
    });

    container.appendChild(note)
}
function getRandomPosition(){
    return Math.floor(Math.random()*100)
}

function getRandomColor(){
    const colors = [
        "lightblue",
        "blue",
        "light",
        "black",


    ]
    return colors[Math.floor(Math.random()*colors.length)]
}