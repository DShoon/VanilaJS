const title = document.querySelector("#title")

function handleClick(){
    title.style.color = "white";
}

title.addEventListener("click", handleClick);