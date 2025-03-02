


let today = new Date();
console.log(today);
let month = today.getMonth() ;
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"] ;

// let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
let date = `${monthNames[month]} ${today.getDate()}, ${today.getFullYear()}`;


document.getElementById("date").innerText = date;



let cards = document.querySelectorAll(".card");
let cardBtn = document.querySelectorAll(".card-btn");
let list = document.getElementById("List");
let title = document.querySelectorAll(".title");

let taskNumber = document.getElementById("task-number").innerText;
taskNumber = parseInt(taskNumber);

let cmpltTaskNmbr = document.getElementById("cmplt-task-nmbr").innerText;
cmpltTaskNmbr = parseInt(cmpltTaskNmbr);
let count = 0 ;


let day = String(today.getDay());
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] 


document.getElementById("bar").innerText = days[day] +" ,";
function currentTime() {

        let now = new Date();
        let hours = String(now.getHours()).padStart(2,'0');
        let minutes = String(now.getMinutes()).padStart(2,'0');
        let seconds = String(now.getSeconds()).padStart(2,'0');
       
        hours = hours % 12 ;
        hours = hours ? hours : 12 ;
        
        timeFormat = hours >= 12 ? "AM" : "PM" ;
        return `${hours}:${minutes}:${seconds} ${timeFormat}`
}

    setInterval(currentTime,10); ;

for (let i = 0; i < cardBtn.length; i++) {
    cardBtn[i].addEventListener("click", function (event) {

        count = count + 1 ;

        alert("Board Updated Successfully");

        let runningTime = currentTime() ;
        console.log(runningTime) ;

        let text = document.createElement("div");
        text.innerText = "You have complete the task " + title[i].innerText + " at " + runningTime ;
        text.classList.add("tasklist");
        list.appendChild(text);

        taskNumber = taskNumber - 1;
        document.getElementById("task-number").innerText = taskNumber;

        cmpltTaskNmbr = cmpltTaskNmbr + 1;
        document.getElementById("cmplt-task-nmbr").innerText = cmpltTaskNmbr;

        cardBtn[i].disabled = true;
        cardBtn[i].style.backgroundColor = "#737373";

        if(count== cardBtn.length) 
            alert("Congrats! You have completed all the current task");

    })
}

let clearBtn = document.getElementById("clear-btn");
let tasklists = document.querySelectorAll(".tasklist");

clearBtn.addEventListener("click", function (event) {
    list.innerHTML = "";
})


// let colorBtn =  document.getElementById("color-btn");

let colors = ["#FFFAE8", "#FFE9F2", "#F0FFE0", "#FFE5F3","#F4F7FF"]
let i = 0;

document.getElementById("color-btn").addEventListener("click", function (event) {
    let body = document.getElementById("bd");
    body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
})


document.getElementById("task-discover").addEventListener("click",function(event){
    window.location.href = "discover.html"
})