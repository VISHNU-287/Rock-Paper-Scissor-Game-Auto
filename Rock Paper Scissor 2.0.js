/* Local Stotage  and Object Creation To Store The Score*/
let score = JSON.parse(localStorage.getItem('scoring'));
  if(score === null){
    score = {
      win:0,
      lose:0,
      tie:0
    }
  }

  /*  Display The Final Score */
  
  function finalscore(){
    document.getElementById('finall').innerHTML = `win:${score.win} lose:${score.lose} tie:${score.tie}`;
  }

  /* Resetting and Remove the Local Storage */

  function resetting(){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('scoring');
    finalscore();
  }

//


  /*  User Picking Code */
function userMove(){
  let result ='';
  const computer = computerMove();
  const variable = Autopick();
  if(variable==='Rock'){
      if(computer==='Rock'){
        result = 'Tie.';
      }
      else if(computer==='Paper'){
        result = 'Lose.';
      }
      else if(computer==='Scissor'){
        result = 'Won.';
      }
  }
  else if(variable==='Paper'){
      if(computer==='Rock'){
        result = 'Won.';
      }
      else if(computer==='Paper'){
        result = 'Tie.';
      }
      else if(computer==='Scissor'){
        result = 'Lose.';
      }
  }
  else if(variable==='Scissor'){
      if(computer==='Rock'){
    result = 'Lose.';
      }
      else if(computer==='Paper'){
        result = 'Won.';
      }
      else if(computer==='Scissor'){
        result = 'Tie.';
      }
  }
  // Score Updation
  if(result === 'Won.'){
    score.win += 1;
  }
  else if(result === 'Lose.'){
    score.lose += 1;
  }
  else if(result === 'Tie.'){
    score.tie += 1;
  }
  
// Local Storage Updation
localStorage.setItem('scoring',JSON.stringify(score));

//Display the Detailed Scoring On Display With Image
  document.getElementById('results').innerHTML=`${result}`;
  document.getElementById('results-detail').innerHTML = `You <img src="RPC images/${variable}.png" class="beta"> <img src="RPC images/
${computer}.png" class="beta">System`
finalscore();

}

// System Pick Code
  function computerMove(){
    const system = Math.random();
    let result = '';
    if(system > 0 && system <= 1/3){
     result = 'Rock';
    }
    else if(system > 1/3 && system <= 2/3){
      result = 'Paper';
    }
    else if(system > 2/3 && system <=1){
      result = 'Scissor';
    }
    return result;
  }
  // Instead User Auto Pick

   function Autopick(){
    let results = '';
    const system = Math.random();
    if(system > 0 && system <= 1/3){
     results = 'Rock';
    }
    else if(system > 1/3 && system <= 2/3){
      results = 'Paper';
    }
    else if(system > 2/3 && system <=1){
      results = 'Scissor';
    }
    return results;
   }



  finalscore();
let ids;
  function functions(sw){
    
    if(sw ===1){
     ids= setInterval(function () {userMove();}, 1000);
    }
    else if(sw===0){
      clearInterval(ids);
    }
    
  }
  
