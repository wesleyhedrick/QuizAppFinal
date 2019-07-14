let questionNum = 0;
let score = 0;


function renderLanding(){
  
  $('header').html(`
          <h1>Monty Python</h1>
          <p class="andthe">and the</p>
          <h2>Holy Grail</h2>
          <p class="quiz">The Quiz</p>`
  );

  $('header').addClass('landingPageHeader');

  $('main').html(
    `<p>10  Questions</p>
    <button>Start</button>`);
    $('button').click(function(){
      renderQuestionPage();
    })
  $('main').removeClass();
}


function renderQuestionPage(event){
    $('body').toggleClass('questionBody')
    $('header').toggleClass('questionPageHeader');
    $('header h1, header h2, header p').toggleClass('questionmargin');
    $('main').html(
      `
      

      <form>
        <p>Question ${questionNum+1}/10</p>
        <p>Score: ${score * 100}</p>
          <p>${QUESTIONBANK[questionNum].question}</p>
            <fieldset>
              <label class="inputcontainer">
                <input type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer1}" required>
                <span>${QUESTIONBANK[questionNum].answer1}</span>
              </label>
            
              <label class="inputcontainer">
                <input type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer2}" required>
                <span>${QUESTIONBANK[questionNum].answer2}</span>
              </label>
            
            
              <label class="inputcontainer">
                <input type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer3}" required>
                <span>${QUESTIONBANK[questionNum].answer3}</span>
              </label>
            

              <label class="inputcontainer">
                <input type="radio" name="answer" value="${QUESTIONBANK[questionNum].answer4}" required>
                <span>${QUESTIONBANK[questionNum].answer4}</span>
              </label>

              <button type="submit">Submit</button>
          <fieldset>
      </form>`);
      $('form').on('submit', function(event){
        event.preventDefault();
        if(questionNum+1<QUESTIONBANK.length){
          renderResultsPage();
        } else if (questionNum+1==QUESTIONBANK.length){
          renderFinalResultsPage();
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

  $('header').html('');
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
  })

}

function renderFinalResultsPage(){
  console.log(`rendering Results Page`)
  console.log($('input:checked').val())
  console.log(questionNum);

  $('header').html('');
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
            <button>Finish</button>

            `);
    

  } else {
    
    $('main').html(
            `<p>Ruh Roh!</p>
            <p>The correct answer is: "${QUESTIONBANK[questionNum].correctAnswer}"</p>
            <p>You\'re score is ${score} out of ${questionNum+1}</p>
            <button>Finish</button>
            `);
  }

  $('button').click(function(){
    renderFinalPage();
  });

}


function renderFinalPage(){
  $('main').html(
            `<p>All done!</p>
            <p>You scored ${score} out of 10</p>
            <p>Now...</p>
            <button>Start Again</button>`); 

  $('button').click(function(){
    questionNum = 0;
    score = 0;
    renderLanding();
  });
}

$(renderLanding);
