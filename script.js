let questionNum = 0;
let score = 0;


function renderLanding(){
  $('main').html(
    `<p>10  Questions</p>
    <button>Start</button>`);
    $('button').click(function(){
      renderQuestionPage();
    })
}


function renderQuestionPage(event){
    
    $('main').html(
      `
      <p>Question ${questionNum+1}/10</p>
      <p>Score: ${score * 100}</p>

      <form>
          <p>${QUESTIONBANK[questionNum].question}</p>
          <div class="inputcontainer">
            <input id="a1" type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer1}" required>${QUESTIONBANK[questionNum].answer1}</input>
          </div>
          <div class="inputcontainer">
            <input type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer2}" required>${QUESTIONBANK[questionNum].answer2}</input>
          </div>
          <div class="inputcontainer">
            <input type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer3}" required>${QUESTIONBANK[questionNum].answer3}</input>
          </div>
          <div class="inputcontainer">
            <input type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer4}" required>${QUESTIONBANK[questionNum].answer4}</input>
          </div>
          <button type="submit">Submit</button>
      </form>`);
      $('form').on('submit', function(){
        if(questionNum+1<QUESTIONBANK.length){
          renderResultsPage();
        } else {
          renderFinalPage(); 
        } ;
        
      });
  
}

function tallyScore(){
  score++
}

function incrementQuestion(){
  questionNum++
};

function renderResultsPage(){
  console.log(`rendering Results Page`)
  console.log($('input:checked').val())
  console.log(questionNum);

  $('header').remove();
  $('main').addClass('results');
  const userAnswer = $('input:checked'); 
  if(userAnswer.val() === QUESTIONBANK[questionNum].correctAnswer){
    tallyScore();
    
    $('main').html(
            `<p>You are correct!</p>
            <p>${QUESTIONBANK[questionNum].correctAnswer}</p>
            <br>
            <p>${QUESTIONBANK[questionNum].feedback}</p>
            <br>
            <p>You\'re score is ${score * 100}</p>
            <button>Next Question</button>
            `);
    incrementQuestion();

  } else {
    
    $('main').html(
            `<p>Ruh Roh!</p>
            <p>The correct answer is: "${QUESTIONBANK[questionNum].correctAnswer}"</p>
            <p>You\'re score is ${score} out of ${questionNum+1}</p>
            <button>Next Question</button>
            `);
    incrementQuestion();
  }
  

  

  $('button').click(function(){
    renderQuestionPage();
  });
}

function renderFinalPage(){
  $('main').html(
            `<p>All done!</p>
            <p>You scored ${score} out of 10</p>
            <p>Now...</p>
            <p class="quote">RUN</p>
            <p class="quote"> AWAYEEEEEE!</p>`);
};

$(renderLanding);

