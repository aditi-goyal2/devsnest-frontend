let words=['./img/1.png', "./img/2.png", "./img/motu.png", "./img/4.png", "./img/Mickey-Mouse-PNG-HD.png", "./img/shinchan.png", "./img/bean.png", "./img/barbie.png"];


words=[...words, ...words];

let moves=30;
let matches=0;
let gameActive=true;
let score=0;

for(let i=1; i<=16; i++){
    let card=document.createElement("div");
    card.classList.add("flip-card");

    let inner=document.createElement("div");
    inner.classList.add("flip-inner");

    let front=document.createElement("div");
    front.classList.add("front");

    let back=document.createElement("div");
    // front.innerHTML=`<img src='./img/puzzle.png' class='img-front'>`;
    let rand=Math.floor(Math.random()*(16-i));
    
    back.innerHTML=`<img src='${words[rand]}' class='img-back'>`;
    words.splice(rand, 1);

    back.classList.add("back");

    inner.appendChild(front);
    inner.appendChild(back);

    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
}

let clicked;
let cards=document.getElementsByClassName("flip-card");

for(let card of cards){
    card.addEventListener("click", (e)=>{
        if(!gameActive)return;
        moves--;
        if(moves<6)
        document.querySelector("span").innerHTML=`<span class='red'><b>${moves}<b></span>`;
        else
        document.querySelector("span").innerHTML=moves;
        
        if(clicked){
            card.firstChild.classList.add("flipped");
            gameActive=false;
            setTimeout(() => {
                if(card.firstChild.lastChild.innerHTML !== clicked.firstChild.lastChild.innerHTML){
                    card.firstChild.classList.remove("flipped");
                    clicked.firstChild.classList.remove("flipped");
                }else{
                    matches++;
                    
                    card.style.visibility="hidden";
                    clicked.style.visibility="hidden";
                    score++;
                    
                    document.querySelector("#stats-score").innerHTML=`<h6>Score - <span class='green'>${score}</span></h6>`;
                    console.log(score);
                }
                clicked=undefined;
                gameActive=true;
            }, 500);
        }else{
            clicked=card;
            card.firstChild.classList.add("flipped");
        }
    })
}

setInterval(() => {
    if(moves === 0){
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        let h2=document.createElement("h2");
        document.querySelector(".popup > div > h2").innerHTML=`You Lose !!`;
        document.querySelector(".popup > div > h5").innerHTML=`Score:${score}`;
    }
    if(matches === 8){    
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        document.querySelector(".popup > div > h2").innerHTML="You Won !!"
        document.querySelector(".popup > div > h5").innerHTML=`Score:${score}`;
    }
}, 100);

document.getElementById("reload").addEventListener("click", (e)=>{
    window.location.reload();
})