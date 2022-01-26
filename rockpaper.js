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
function rps(playerSelection,computerSelection){
   let ps = playerSelection.toLowerCase();
   let cs = computerSelection.toLowerCase();
  

    if (ps === 'rock'& cs ==='scissors'){
        console.log(` ${playerSelection} beats ${computerSelection} - Player Wins!`)
       return 'player';}
    else if (ps === 'paper'& cs==='rock'){
        console.log(` ${playerSelection} beats ${computerSelection} - Player Wins!`)
        return 'player';}      
    else if (ps === 'scissors'& cs==='paper'){
        console.log(` ${playerSelection} beats ${computerSelection} - Player Wins!`)
        return 'player';}   

    else if (ps === 'scissors'& cs==='rock'){
        console.log(`${computerSelection} beats ${playerSelection}- Computer Wins!`)
        return 'computer';}            
    else if (ps === 'rock'& cs ==='paper'){
        console.log(`${computerSelection} beats ${playerSelection}- Computer Wins!`)
        return 'computer';}     
    else if (ps === 'paper'& cs==='scissors'){
        console.log(`${computerSelection} beats ${playerSelection}- Computer Wins!`)
        return 'computer';}   

    else if (ps === 'paper'& cs==='paper'){
        return 'draw';}  
    else if (ps === 'rock'& cs==='rock'){
        return 'draw';}  
    else if (ps === 'scissors'& cs==='scissors'){
        return 'draw';}  


    else {alert("Incorrect entry")}    
    };

    let computer = 0
    let player = 0
    let draw = 0

    function round() {
       let result = rps(prompt("Rock, Paper or Scissors?"),computerPlay())
       return result;
        
    }

function game() {
for (let i = 0; i<5; i++){
        let result = round()
        if(result==='player') {player+=1} 
        else if ('computer') {computer+=1}
        else {draw+=1}
}
             
  return `Computer: ${computer} Player ${player} Draws ${draw}`
    }


  
