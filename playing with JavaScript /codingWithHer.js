/*const sheApproves = true;
const reachedHouse = true;

//where she undressed 
const letHerUndress = async () => {
  try {
    await console.log("I am done undressing");

  } catch (e) {
    throw new Error("I am not interested anymore")
  }
}

//Making unnecessary sounds 
const ladyMoaning = async () => {
  try {
    const sounds = ["uhh", "ahh", "oooh", "yes baby", "give it to me baby", "harder harder"];

    const choosedSound = sounds[Math.floor(Math.random() * (sounds.length - 1))];

    console.log(choosedSound);
  } catch (e) {
    throw new Error("she's not feeling you 😂" + e);
  }
}

//Where the coding happens 😂
const getTheShitDone = () => {
  const takeHertoBed = "Done";
  const choosedPosition = "Doggy style";

  //Interval of typing 
  const interval = 2000;

  //coding duration: 1hr
  const duration = 1000 * 60 * 60;
  let timer = 0;

  const coding = setInterval(() => {

    console.log("in");
    console.log("out");

    //Get her to moan
    const moaning = ladyMoaning();

    timer += 1000;

    if (timer === duration) {
      clearInterval(coding);
      console.log(sendHerAway());
    }
  }, interval)
}


//Finished coding, send her away 
const sendHerAway = () => "She's gone 😂";


//Where she was picked from
function codeHerTonight() {

  let startCoding = false;

  if (reachedHouse && sheApproves) {
    const sheIsDoneUndressing = letHerUndress();
    if (sheIsDoneUndressing) {
      startCoding = true;
    }
  }

  if (startCoding) {
    getTheShitDone();
  } else {
    console.log("I am not ready yet 😌");
    console.log(sendHerAway());
  }
}

codeHerTonight()*/


/* Getting posts through async function*//*
const getPost = async url => {
  try {
    const user = await fetch(url);
    const sanitized = await user.json();
    return sanitized;
  } catch (e) {
    throw new Error("Not successful");
  }
}

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const posts = getPost(postsUrl);
posts
  .then(data => console.log(data))
  .catch(error => console.log(error));




/* getting users through promise instance*//*
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const getUser = new Promise((resolve, reject) => {
  const fetchUsers = fetch(usersUrl)
    .then(result => result.json())
    .then(data => data);
  if (fetchUsers) {
    resolve(fetchUsers);
  } else {
    reject("Fetching not successful");
  }
});

getUser
  .then(data => console.log(data))
  .catch(error => console.log(error));
  
  
  const numbers = [1,2,3,4,5];
  
  const number2 = numbers;
  number2.push(6,7,8)
  
  console.log(numbers,number2)
  
 
 
 
 
  /*
  Notification.requestPermission()
  .then( permission=>{
    new Notification("Hello world")
  })*//*
  
  
  let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 
 
  let order = (call_production) =>{

console.log("Order placed. Please call production")

// function 👇 is being called 
  call_production();
};

let production = () =>{

console.log("Production has started")

};

// name 👇 of our second function
order(production);*/


const arr1 = [1,3,5];
const arr2 = [2,4,6];

const all = [...arr1,...arr2];

console.log(all.sort((a,b) => a - b));


const arr11 = ["men","men","men"];
const arr22 = ["women","women","women"];

const all1 = [...arr11,...arr22];

const sieved = arr11.map(data => {
  return [data, arr22.slice(0,1)];
});

console.log(sieved)
const sanitized = sieved.flat(Infinity);

console.log(sanitized)