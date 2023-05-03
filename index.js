// this is a input box
let display=document.getElementById('input');

//use all botton
let buttons=document.querySelectorAll(".button");

//create a empty String 
let string="";

Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector('input').value=string;
         } 
          // }else if(e.target.innerHTML=="%"){
        //     // string=string+e.target.innerHTML;
        //     // let x=string.e.target.innerHTML;
        //     x=x/100;
        //     document.querySelector('input').value=string;   
        // }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
});