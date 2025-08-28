 
function getElement(id){
  const element = document.getElementById(id);
  return element;
}



const heartBtn = document.getElementsByClassName("fa-heart");

for(let heart of heartBtn){
  heart.addEventListener('click' , function(){

    const heartCounter = getElement("heart-counter");

    heartCounter.innerText++

  })
}



const callBtn = document.getElementsByClassName("call-btn");

for(const callButton of callBtn){
  callButton.addEventListener('click' , function(){
    
    const cardName = callButton.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
    const cardId = callButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    const coin = getElement("coin").innerText;

    let removeCoin = Number(coin) - 20;

    if(removeCoin < 0){
      alert(
        "You don't have enough coins. You need at least 20 coins to make a call."
      );
      return;
    }

    getElement("coin").innerText = removeCoin
    
    alert(`📞 Calling ${cardName} Service ${cardId}...`)



    
 const cardMainName = callButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

const data = new Date().toLocaleTimeString();

const container = document.getElementById("history");

const div = document.createElement("div");
div.className = "bg-[#f5fff6] flex justify-between items-center h-[86px] mt-[16px] rounded-[8px] p-[16px]";
div.innerHTML = `
  <div>
    <h1>${cardMainName}</h1>
    <h1 class="text-gray-500">${cardId}</h1>
  </div>
  <h1>${data}</h1>
`;

container.appendChild(div);
  })
}

document.getElementById("clear-history").addEventListener('click' , function(){
  document.getElementById("history").innerText = '';
})




  const copyBtn = document.getElementsByClassName("copy-btn");

  for(const copyButton of  copyBtn){

    copyButton.addEventListener('click' , function(){

       const cardId = copyButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

       alert(`Number Copied: ${cardId}`)
       
       navigator.clipboard.writeText(cardId);

       const copyCounter = getElement("copy-counter");
       copyCounter.innerText++
    })
  }