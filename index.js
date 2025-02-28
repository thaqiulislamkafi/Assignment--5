

let cards = document.querySelectorAll(".card");
let cardBtn= document.querySelectorAll(".card-btn");
let list = document.getElementById("List");
let title = document.querySelectorAll(".title");

let taskNumber = document.getElementById("task-number").innerText ;
taskNumber = parseInt(taskNumber) ;

let cmpltTaskNmbr = document.getElementById("cmplt-task-nmbr").innerText;
cmpltTaskNmbr = parseInt(cmpltTaskNmbr) ;



for(let i=0 ;i<cardBtn.length;i++){
    cardBtn[i].addEventListener("click",function(event){
        let text = document.createElement("div");
        text.innerText = "You have complete the task " + title[i].innerText ;
        text.classList.add("tasklist");
        list.appendChild(text);

        taskNumber = taskNumber - 1 ;
        document.getElementById("task-number").innerText = taskNumber ;

        cmpltTaskNmbr = cmpltTaskNmbr + 1 ;
        document.getElementById("cmplt-task-nmbr").innerText = cmpltTaskNmbr ;

        cardBtn[i].disabled = true ;

    })
}

let clearBtn = document.getElementById("clear-btn") ;
let tasklists = document.querySelectorAll(".tasklist");

clearBtn.addEventListener("click",function(event){
    list.innerHTML = "" ;
})



