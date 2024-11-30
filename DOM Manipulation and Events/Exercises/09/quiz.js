document.addEventListener("DOMContentLoaded", solve);

function solve() {
    const mainEl = document.querySelector("main");

    const quesionAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswers = 0;
    let questionNumber = 1;

    mainEl.addEventListener('click', answerQuestion);


    function answerQuestion(e) {
      console.log('here');
      if(!e.target.matches('.quiz-answer')) return;

      const answerEl = e.target;
      const answer = answerEl.textContent;

      if(quesionAnswers[questionNumber - 1] == answer) rightAnswers++;
      questionNumber++;
      hideCurrentQueston(e);

      if(questionNumber > 3) {
        showResults();
        return;
      }
      showNextQuestion(questionNumber);
    }

    function showResults() {
      const resultEl = document.querySelector('#results');
      resultEl.textContent = getQuizResults(rightAnswers);
    }

    function getQuizResults(rightAnswers){
      if (rightAnswers == 3) return 'You are recognized as top JavaScript fan!';
      return `You have ${rightAnswers} right answer${rightAnswers != 1 ? 's' : ''}`;
    }

    function hideCurrentQueston(e) {
        e.target.closest('.question').classList.add('hidden');
    }

    function showNextQuestion(questionNumber){
      document.querySelector(`.question:nth-of-type(${questionNumber})`).classList.remove('hidden');
    }
}
