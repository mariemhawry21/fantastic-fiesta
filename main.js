let prev=document.getElementById("prev");
let next=document.getElementById("next");

let quote=document.querySelector(".quote p");
let image=document.querySelector(".image img");

let p=document.querySelector(".writer p");
let span=document.querySelector(".writer span");


next.onclick =function (){
    image.src="./images/image-john.jpg"
    quote.innerHTML=`"“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”"`;
    p.innerHTML=" John Tarkpor";
    span.innerHTML=" Junior Front-end Developer";
}
 
prev.onclick =function (){
    image.src="./images/image-tanya.jpg"
    quote.innerHTML=`“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`;
    p.innerHTML=" Tanya Sinclair";
    span.innerHTML=" UX Engineer";
}