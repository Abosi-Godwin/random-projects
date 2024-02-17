"use strict"
//VARIABLE DECLARATION........
let time = document.querySelector(".time");
let theDate = document.querySelector(".date");
const inputBox = document.getElementById("input-box");
let tasksBody = document.querySelector(".tasks");
const msg = document.querySelector(".msg");
let addTaskBtn = document.querySelector(".addTaskBtn");
let taskFormCont = document.querySelector(".container");
const checkBox = document.querySelector("#checkbox");
const addTask = document.querySelector(".add");
const eventType = "click";
const taskTitle = document.querySelector("#title");
const taskDate = document.querySelector("#date");
const taskDesc = document.querySelector("#desc");
const allTasks = [];
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
const currentDate = `${year}-0${month}-${day}`;
const maxDate = `${year}-0${month}-${day + 6}`;

taskDate.setAttribute("value", currentDate);
taskDate.setAttribute("min", currentDate);
taskDate.setAttribute("max", maxDate);




//Time And Days

const updateTime = () => {

  const date = new Date();
  let weekDay = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let weekDays = ["Sun", "Mon", "Teu", "Wed", "Thur", "Fri", "Sat"];
  let meridian = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  theDate.innerHTML = `${day}/${month}/${year} (${weekDays[weekDay]})`;

  time.textContent = `${hour}:${minutes}:${seconds} ${meridian}`;

};
setInterval(updateTime, 1000);

const pushTask = task => {
  allTasks.push(task);
}

const renderTask = () => {
  allTasks.forEach(task => console.log(`<h1>${task.title}</h1>`));
  saveTask();
}

addTask.addEventListener(eventType, () => {
  taskFormCont.classList.add("hide");

  const task = new Task(taskTitle.value.trim(), taskDesc.value.trim(), taskDate.value);

  pushTask(task);
  renderTask();

})

addTaskBtn.addEventListener(eventType, () => {
  taskFormCont.classList.remove("hide");
});

class Task {
  _isDone = false;
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}


const saveTask = () => {
  localStorage.setItem("tasks", allTasks)
}


const myPromise = new Promise((resolved, rejected)=>{
  const conditional = false;
  setTimeout(()=>{
    return conditional ? resolved("Successful") : rejected("Not successful")
  },2000)
})

console.log(myPromise)

myPromise
.then(result => console.log(result))
.catch(reject => console.log(reject))



function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    fetch('https://api.publicapis.org/entries')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Usage
fetchDataFromServer()
  .then(data => {
    console.log('Data from server:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });