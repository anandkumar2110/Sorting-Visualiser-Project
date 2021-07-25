

var arrSize = document.getElementById("arr_sz")
const barDiv = document.getElementById("bars") ;
const algo = document.getElementById("algo-name") ;
barDiv.removeChild(barDiv.firstChild);
function barmake(){
    let j ;
    let i ;
    const arr = [] ;
    for(i=0;i<arrSize.value;i++)
    {
        arr.push(Math.ceil(100*Math.random())) ;
    }
    for(j=0;j<arrSize.value;j++)
    {
        const newDiv = document.createElement("div") ;
        newDiv.style.height = `${arr[j]}%` ;
        newDiv.style.width = `${0.6*(100/arrSize.value)}%` ;
        newDiv.style.margin = `${0.2*(100/arrSize.value)}%` ;
        newDiv.classList.add("bar") ; 
        barDiv.appendChild(newDiv) ;
    }
} 

barmake() ;

const newArray = document.getElementsByClassName("new-array") ;
arrSize.addEventListener("input",()=>{
    algo.innerHTML = "" ;
    while(barDiv.firstChild)
   {
        barDiv.removeChild(barDiv.firstChild) ;
   }
   barmake() ;
});
newArray[0].addEventListener('click',()=>{
    algo.innerHTML = "" ;
   while(barDiv.firstChild)
   {
        barDiv.removeChild(barDiv.firstChild) ;
   }
   barmake() ;
}) ;