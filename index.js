let answers = [true, true];

let showResBtn = document.querySelector("#showResults");

showResBtn.addEventListener("click", () => {
  for (let i = 1; i <= answers.length; i++) {
    let answer = document.querySelector(
        `[name='answer${i}']:checked`
    ).value;
    console.log(answer);
  }
  
});
