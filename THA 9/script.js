const main=document.querySelector(".main");
const booked=document.querySelector(".booked");
const Remaining=document.querySelector(".Remaining");
var totalseats= 300;
var bookedseats=0;
for(let i=0;i<300;i++)
{
    const items=document.createElement("div")
    items.addEventListener('click',()=>{
        if(items.style.backgroundColor!="black"){
            items.style.backgroundColor="black";
            bookedseats+=1;
            totalseats-=1;
            booked.innerHTML = `${bookedseats}`;
            Remaining.innerHTML = `<b>${totalseats}</b>`;
        }
        
        else{
            items.style.background="brown";
            bookedseats-=1;
            totalseats+=1;
            booked.innerHTML = `${bookedseats}`;
            Remaining.innerHTML = `<b>${totalseats}</b>`;
        }
        
    })
    main.appendChild(items)
}
// if(item.radval===item.correctOption)
        // {
        //     console.log("correct");
        // }