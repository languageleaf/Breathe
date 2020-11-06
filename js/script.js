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
  if (q1 == "anwser2") {
    c++;
  }

  if (q2 == "anwser2") {
    c++;
  }

  if (q3 == "anwser2") {
    c++;
  }

  if (q4 == "anwser2") {
    c++;
  }

  if (q5 == "anwser2") {
    c++;
  }

  quiz.style.display = "none";
  if (c < 3) {
    result.textContent = `You got ${c}, you are not that stressed but...`;
  } else {
    result.textContent = `You got ${c}, you are very stressed, please think about checking the relaxation techniques and the meditation for beginners...`;
  }
}
