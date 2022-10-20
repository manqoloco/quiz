
let myArray = [
    {
       question: "do pigs fly?",
       answer: false
    },
    {
        question: "do cows really exist?",
        answer: true 
    },
    {
        question: "is Halloween in September?",
        answer: false
    },
    {
        question: "does 2+2 = 4?",
        answer: true
    },
    {
        question: "is Gothenburg the capital of Sweden?",
        answer: false
    },
    {
        question: "is Sweden's flag yellow and blue?",
        answer: true
    },
    {
        question: "is norwegian the official language in Sweden?",
        answer: false
    },
    {
        question: "do cats usually have 6 legs?",
        answer: false
    },
    {
        question: "do carnivores eat meat?",
        answer: true
    },

    {
        question: "do cats have 9 lives?",
        answer: false
    }

]

let showResBtn = document.querySelector("#showResults");

showResBtn.addEventListener("click", () => {
  let result = 0;
    for (let i = 1; i <= myArray.length; i++) {
    let answer = document.querySelector(
        `[name='answer${i}']:checked`
    );
    if(!answer) {
        console.log("try again");
        return;
    }
    if (myArray[i-1].answer == (answer === 'true')){
       result++;
    }
  }

  console.log(result);
  let x = document.querySelector("#result");
  x.value = result;
  
});




let questions = document.querySelector("#questions");

let i = 1;
myArray.forEach(q => {
   let div = document.createElement("div");
   div.appendChild(document.createElement("h1").appendChild(document.createTextNode(q.question)));
   let label1 = document.createElement("label");
   label1.for = `answer${i}A`;
   label1.innerHTML = "true";
   div.appendChild(label1);
   let input1 = document.createElement("input");
   input1.type = "radio";
   input1.name = `answer${i}`;
   input1.id = `answer${i}A`;
   input1.value = "true";
   div.appendChild(input1);
   let label2 = document.createElement("label");
   label2.for = `answer${i}B`;
   label2.innerHTML = "false";
   div.appendChild(label2);
   let input2 = document.createElement("input");
   input2.type = "radio";
   input2.name = `answer${i}`;
   input2.id = `answer${i}B`;
   input2.value = "false";
   div.appendChild(input2);   
   questions.appendChild(div);
    i++;

});