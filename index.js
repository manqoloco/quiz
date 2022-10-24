function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

const QueryType = {
  TrueFalse: 0,
  Multiple: 1,
  Checkboxes: 2,
};

let myArray = [
  {
    question: "do pigs fly?",
    answer: false,
    type: QueryType.TrueFalse,
  },
  {
    question: "when is my birthday?",
    choices: ["may 6th", "june 6th", "june 16th", "june 26th"],
    answer: "june 16th",
    type: QueryType.Multiple,
  },
  {
    question: "which ones are cities in Sweden?",
    choices: ["Gothenburg", "London", "Stockholm", "Rome"],
    answers: ["Gothenburg", "Stockholm"],
    type: QueryType.Checkboxes,
  },
  {
    question: "do cows really exist?",
    answer: true,
    type: QueryType.TrueFalse,
  },
  /* {
    question: "is Halloween in September?",
    answer: false,
    type: QueryType.TrueFalse
  }
  
  {
    question: "how many siblings do I have?"
    choices: ["1","2","3","4"],
    answer: "3",
    type: QueryType.Multiple
  },
  {
    question: "do cows really exist?",
    answer: true,
  },
  {
    question: "is Halloween in September?",
    answer: false,
  },*/
  /* {
    question: "which ones are capitals?"
    choices: ["Florence","Lima","Canberra","Houston"]
    answers:
    type:
  }
  {
    question: "does 2+2 = 4?",
    answer: true,
  },
  {
    question: "is Gothenburg the capital of Sweden?",
    answer: false,
  },
  {
    question: "is Sweden's flag yellow and blue?",
    answer: true,
  },
  {
    question: "is norwegian the official language in Sweden?",
    answer: false,
  },
  {
    question: "do cats usually have 6 legs?",
    answer: false,
  },
  {
    question: "do carnivores eat meat?",
    answer: true,
  },

  {
    question: "do cats have 9 lives?",
    answer: false,
  }, */
];

let showResBtn = document.querySelector("#showResults");

showResBtn.addEventListener("click", () => {
  let result = 0;
  let fs = document.querySelectorAll("fieldset");
  for (let i = 0; i < myArray.length; i++) {
    switch (myArray[i].type) {
      case QueryType.TrueFalse:
        let answer = fs[i].querySelector(`[name='input${i}']:checked`);
        if (!answer) {
          console.log("try again");
          return;
        }
        let a = answer.value === "true";
        console.log(a);
        if (myArray[i].answer == a) {
          result++;
        }
        break;

      case QueryType.Multiple:
        console.log("now in Multiple");
        break;
      case QueryType.Checkboxes:
        console.log("now in Checkboxes");
    }
  }

  // document.querySelectorAll("fieldset")[0].querySelector(`[name="input${0}"]:checked`)

  console.log(result);
  let x = document.querySelector("#result");
  x.value = result;

  let p = (result / myArray.length) * 100;

  if (p < 50) {
    x.style.color = "red";
  } else if (p >= 50 && p <= 75) {
    x.style.color = "orange";
  } else {
    x.style.color = "green";
  }
});

let index = 0;
let result = myArray
  .map((x) => {
    if (x.type == QueryType.TrueFalse) {
      return `
        <fieldset> 
        <legend>${x.question}</legend>
        <label>true</label>
        <input value="true" name="input${index}" type="radio"/>
        <label>false</label>
        <input value="false" name="input${index}" type="radio"/>

        </fieldset>`;
    } else if (x.type == QueryType.Multiple) {
      let options = x.choices
        .map((c) => {
          return `<option value="${c}">${c}</option>`;
        })
        .join("");
      return `
          <fieldset> 
          <legend>${x.question}</legend>
          <select id="${index}">
          ${options}
            </select>
          </fieldset>`;
    } else if (x.type == QueryType.Checkboxes) {
      let boxes = x.choices
        .map((b) => {
          return `<input type="checkbox" value="${b}">${b}</input> `;
        })
        .join("");
      return ` 
       <fieldset>
       <legend>${x.question}</legend>
       ${boxes}
       </fieldset>`;
    }
    index++
  })
  .join("");
let questions = document.querySelector("#questions");
questions.innerHTML = result;
