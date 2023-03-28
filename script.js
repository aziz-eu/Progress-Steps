
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')


let currentActive = 1;
next.addEventListener("click",()=>{

    currentActive++;
    
    if(circles.length < currentActive){
        currentActive = circles.length;
    }

    
    update()


});
prev.addEventListener("click",()=>{

    currentActive--;
    
    if(currentActive < 1){
        currentActive = 1;
    }

    
    update();


});


function update(){
    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active');
        }

        else{
            circle.classList.remove('active');
        }
    })

    //progress bar
    const activeClasses = document.querySelectorAll(".active");
    let activeProgress = (activeClasses.length -1 )/ (circles.length-1)*100;
    console.log(activeProgress);

    progress.style.width = `${activeProgress}%`


    if (currentActive === 1 ){
        prev.disabled = true
    }
    else if (currentActive === circles.length ){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false

    }

    

}