const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navList = document.getElementsByClassName("navlist")[0];
toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

function check() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");

  if (q1 == "anwser3") {
    c++;
  }

  if (q2 == "anwser3") {
    c++;
  }

  if (q3 == "anwser3") {
    c++;
  }

  if (q4 == "anwser3") {
    c++;
  }

  if (q5 == "anwser3") {
    c++;
  }

  quiz.style.display = "none";

  if (c < 1) {
    result.textContent = ` Rarely stressed
    You're good at tackling stress and nothing really gets you down for long. You manage each situation well and keep your cool – even when things are unexpected.
    `;
  } else if (c < 3) {
    result.textContent = `A bit stressed:
Although you may show some of the classic signs of stress, you manage the situation quite well. You tend to be stressed but you’re good with de-stressing and not letting it 
`;
  } else {
    result.textContent = ` Stressed Out:
    You're showing many classic signs of stress, low energy levels, restlessness, irritability, sleep deprivation. It's time to take action to manage your stress levels. Take a look at our relaxation techniques, meditation and stress relief tips and learn how to reduce stress.
    `;
  }
}
