const inputBox=document.getElementById("input_box");
const list_container=document.getElementById("list_container");
function addTask(){
    if(inputBox.value === ""){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}

list_container.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",list_container.innerHTML)
}
function showData(){
    list_container.innerHTML = localStorage.getItem('data');
}
showData();