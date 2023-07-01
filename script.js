const temperateField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");
let target="lucknow";
form.addEventListener("submit",search);
const fetchdata= async (target) =>{
    try{
    const url=`https://api.weatherapi.com/v1/current.json?key=68778549860940bc854144106233006&q=${target}`;
    const response=await fetch(url);
    const data=await response.json();
    const{
        current:{
            temp_c,
            condition:{text,icon},
        },
        location:{name,localtime},
    }=data;
    updatedom(temp_c,name,localtime,icon,text);
   } catch(error){
     alert("Location Not Found");
   }
};
function updatedom(temperature,city,time,emoji,text){
    temperateField.innerText=temperature;
    cityField.innerText=city;
    const exacttime=time.split(" ")[1];
    const exactdate=time.split(" ")[0];
    const exactday=getDayFullName(new Date(exactdate).getDay());
    dateField.innerText = `${exacttime} - ${exactday}   ${exactdate}`;
    emojiField.src=emoji;
    weatherField.innerText=text;
}
fetchdata(target);
function search(e) {
  e.preventDefault();
  target = searchField.value;
  fetchdata(target);
}
function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturday";
  
      default:
        return "Wrong Entry";
    }
  }