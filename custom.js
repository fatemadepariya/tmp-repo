let micon = document.querySelector(".micon");
let navbar = document.querySelector("nav");


micon.addEventListener("click",()=>{
    navbar.classList.toggle("showMenu");
    micon.classList.toggle("fa-bars");
    micon.classList.toggle("fa-close")

})

// .accordion-items-ans //

let allquestionElement = document.querySelectorAll(".accordion-items h3");

allquestionElement.forEach((heading,index)=>{
      heading.addEventListener("click",()=>{

        allquestionElement.forEach((value,i)=>{
            if(index!=i){
                value.nextElementSibling.classList.remove("showaccordion")
            }
        })

        // current question//
       if(heading.lastElementChild.innerHTML=="+"){
        heading.lastElementChild.innerHTML="-";
       }
       else {
        heading.lastElementChild.innerHTML="+";
       }
     heading.nextElementSibling.classList.toggle("showaccordion");
      })
})


// light box//

let holidaysElement = document.querySelectorAll(".holidays-items")

holidaysElement.forEach((value,index)=>{
   
value.addEventListener("click",(event)=>{
  event.target.src

})
})

    
      
    