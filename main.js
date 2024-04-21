document.querySelector(".control-buttons span").onclick = function (){

    let yourName = prompt("Votre nom ?");

    if(yourName == null || yourName == ""){
        document.querySelector(".name span").innerHTML = "Notre cher visiteur";
    }

    else{
        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-buttons").remove();
};

let duration = 1500;

let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

//let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());


shuffle (orderRange);


blocks.forEach((block,index) =>{
    block.style.order = orderRange[index];
    block.addEventListener('click',function (){
        flipBlock(block);
    });
});

function stopClicking(){
    //add class no click on mai container
    blocksContainer.classList.add('no-clicking');
    setTimeout(()=>{
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

function checkMatchedBlocks(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.tries span');
  
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
  
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
  
      document.getElementById('success').play();
  
    } else {
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
  
      setTimeout(() => {
  
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, duration);
  
      document.getElementById('fail').play();
  
    }
  
  }


//e9leb

function flipBlock(selectedBlock) { 
    selectedBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
  
    if (allFlippedBlocks.length === 2) {
  
      // console.log('Two Flipped Blocks Selected');
  
      stopClicking();
  
      checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  
    }
  
  }


//shuffle 
function shuffle (array){
    let current = array.length,
    temp,
    random;

    //get random number
    while(current >0){
        random = Math.floor(Math.random()*current);
        current--;
        console.log(random);
        temp= array[current];
        array[current] = array[random];
        array[random]=temp;

    }
    return array;
}










