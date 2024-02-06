
let element1=document.querySelector("#ctemp");
console.log(element1)

let inpBtn1=document.querySelector(".inp-btn1");

let result1=document.querySelector(".result1");


//add event listener to btn
inpBtn1.addEventListener("click",()=>{
    //read data from input field
    let e1=element1.value;
    let e2=(e1*9/5)+32;
    result1.textContent=e2;
   
    
})

let element2=document.querySelector("#ftemp");
console.log(element1)

let inpBtn2=document.querySelector(".inp-btn2");

let result2=document.querySelector(".result2");

//add event listener to btn
inpBtn2.addEventListener("click",()=>{
    //read data from input field
    let ele1=element2.value;
    let ele2=(ele1-32)*5/9;
    result2.textContent=ele2;

})