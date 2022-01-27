function computerPlay() {
     /*create rock, paper, scissor variables*/
    let values = ["rock","paper","scissors"]
     /*randomly select variable rock, paper, scissor */
      valueToUse = values[Math.floor(Math.random()*values.length)];
      
      return valueToUse;
}

 /* declare who beats who
    alert show winner 
 */

    
    const container = document.querySelector(`.container`)
    
    const content = document.createElement('div')
    content.classList.add('content')
    content.setAttribute('style', 'color: black; background: red'); 
    container.appendChild(content); 

function rps(playerSelection,computerSelection){
   let ps = playerSelection.toLowerCase();
   let cs = computerSelection.toLowerCase();
  

    if (ps === 'rock'& cs ==='scissors'){
       content.textContent = (` ${playerSelection} beats ${computerSelection} - Player Wins!`)
       return 'player';}
    else if (ps === 'paper'& cs==='rock'){
        content.textContent  = (` ${playerSelection} beats ${computerSelection} - Player Wins!`)
        return 'player';}      
    else if (ps === 'scissors'& cs==='paper'){
        content.textContent  = (` ${playerSelection} beats ${computerSelection} - Player Wins!`)
        return 'player';}   

    else if (ps === 'scissors'& cs==='rock'){
        content.textContent  =(`${computerSelection} beats ${playerSelection}- Computer Wins!`)
        return 'computer';}            
    else if (ps === 'rock'& cs ==='paper'){
        content.textContent  = (`${computerSelection} beats ${playerSelection}- Computer Wins!`)
        return 'computer';}     
    else if (ps === 'paper'& cs==='scissors'){
        content.textContent  = (`${computerSelection} beats ${playerSelection}- Computer Wins!`)
        return 'computer';}   

    else if (ps === 'paper'& cs==='paper'){
        content.textContent  = "Draw"
        return 'draw';}  
    else if (ps === 'rock'& cs==='rock'){
        content.textContent  = "Draw"
        return 'draw';}  
    else if (ps === 'scissors'& cs==='scissors'){
        content.textContent  = "Draw"
        return 'draw';}  


    else {alert("Incorrect entry")}    
    };

    let computer = 0;
    let player = 0;
    let draw = 0;

   
    const playerResult = document.querySelector('.playerResult')
    const computerResult = document.querySelector('.computerResult')
    const drawResult = document.querySelector('.drawResult')
    const annouceWinner = document.querySelector('#annoucement')
    annouceWinner.style.cssText = 'color: white; background: black; font-size:20px;'    
    
    
    function playRound() {
       let result = rps(this.value,computerPlay())

       if (result === 'player'){player+=1}
       else if (result === 'computer'){computer+=1}
       else {draw+=1};
       console.log(result)
       console.log(player)
       playerResult.textContent = `${player}`
       computerResult.textContent = `${computer}`
       drawResult.textContent = `${draw}`

       if (player === 5) {annouceWinner.textContent = "PLAYER WINS!!!"}
       else if (computer === 5) {annouceWinner.textContent = "COMPUTER WINS!!!"}
    }

    const btn = document.querySelectorAll(".btn")
    

    btn.forEach((btn) => {
        btn.addEventListener('click', playRound)
   
    })
    
  



   
    
  


  

    


    

    
    