const inputText = document.getElementById("input-task");
const taskList = document.getElementById("taskList");
const checkComplete = document.getElementById("checkComplete");
let count = [];

function addTask() {
    if(inputText.value == '')    {
        alert("Write somethimg in task!");
    }
    else    {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        taskList.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
        count.push(0);
    }
    inputText.value = '';
    saveData();
    checkTask();
}

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        if (event.target.classList == "checked") {
            count.push(1);   
        }
        else    {
            count.push(0);
        }
        checkTask();
    }
    else if(event.target.tagName === "SPAN")   {
        event.target.parentElement.remove();
            count.push(1);
        checkTask();
        saveData();
    }
}, false);

function checkTask() {
    let count0 = 0; let count1 = 0;
    let help = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] == 0) {
            count0++
        }
        else    {
            count1++;
        }
        console.log(count[i]);
    }
    if (count0 == count1) {
        console.log("COMPLETED");
        let li = document.createElement("li");
        help = 1;
        li.innerHTML = "C O M P L E T E D !";
        checkComplete.append(li);
    }
    else {
        console.log("INCOMPLETED");
        if (help == 1) {
            checkComplete.remove();
        }
    }
}

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();