
let choosedQuestions = [];
let questionIndex = 0;


function startQuize() {
    const allQuestions = JSON.parse(localStorage.getItem("AllQuestions"));
    choosedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    displayQuestion(questionIndex)
}

// const choosedQuestions = [];
const Questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Textual Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<body>"],
      answer: "<title>",
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["color", "background-color", "bgcolor", "background"],
      answer: "background-color",
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "font", "styles"],
      answer: "style",
    },
    {
      question: "How do you create a comment in CSS?",
      options: [
        "// this is a comment",
        "<!-- this is a comment -->",
        "/* this is a comment */",
        "* this is a comment *",
      ],
      answer: "/* this is a comment */",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      answer: "<a>",
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      answer: "font-size",
    },
    {
      question: "How do you make a list item in an ordered list in HTML?",
      options: ["<li>", "<ul>", "<ol>", "<item>"],
      answer: "<li>",
    },
    {
      question: "Which property is used to change the font of an element in CSS?",
      options: ["font-style", "font-family", "font-weight", "font"],
      answer: "font-family",
    },
    {
      question: "How do you insert an image in HTML?",
      options: [
        "<img src='image.jpg'>",
        "<image src='image.jpg'>",
        "<img href='image.jpg'>",
        "<picture src='image.jpg'>",
      ],
      answer: "<img src='image.jpg'>",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "color", "font-color", "foreground-color"],
      answer: "color",
    },
    {
      question: "Which HTML element is used to define important text?",
      options: ["<b>", "<important>", "<strong>", "<i>"],
      answer: "<strong>",
    },
    {
      question: "How do you center an element horizontally in CSS?",
      options: [
        "margin-left:auto; margin-right:auto;",
        "text-align:center;",
        "margin:auto;",
        "center-horizontally:true;",
      ],
      answer: "margin:auto;",
    },
    {
      question:
        "Which attribute is used to provide an alternate text for an image in HTML?",
      options: ["title", "alt", "src", "longdesc"],
      answer: "alt",
    },
    {
      question: "How do you apply bold styling to text in CSS?",
      options: [
        "font-style:bold;",
        "font-weight:bold;",
        "text-style:bold;",
        "font-bold:true;",
      ],
      answer: "font-weight:bold;",
    },
    {
      question: "Which HTML element is used to create a line break?",
      options: ["<lb>", "<break>", "<br>", "<hr>"],
      answer: "<br>",
    },
    {
      question: "How do you select an element with id 'header' in CSS?",
      options: ["#header", ".header", "header", "id=header"],
      answer: "#header",
    },
    {
      question:
        "Which CSS property is used to add space between the content and the border of an element?",
      options: ["margin", "border-spacing", "padding", "spacing"],
      answer: "padding",
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      options: [
        "<checkbox>",
        "<input type='check'>",
        "<input type='checkbox'>",
        "<input checkbox>",
      ],
      answer: "<input type='checkbox'>",
    },
    {
      question:
        "Which property is used to change the left margin of an element in CSS?",
      options: ["padding-left", "margin-left", "left-margin", "indent-left"],
      answer: "margin-left",
    },
    {
      question: "How do you create a drop-down list in HTML?",
      options: ["<input type='dropdown'>", "<select>", "<list>", "<dropdown>"],
      answer: "<select>",
    },
    {
      question: "What is the correct syntax for linking an external CSS file?",
      options: [
        "<stylesheet>style.css</stylesheet>",
        "<style src='style.css'>",
        "<link rel='stylesheet' href='style.css'>",
        "<link src='style.css'>",
      ],
      answer: "<link rel='stylesheet' href='style.css'>",
    },
    {
      question:
        "Which CSS property is used to control the order of stacked elements?",
      options: ["z-index", "stack-order", "position", "order"],
      answer: "z-index",
    },
  ];



for (let questionIndex = 0; questionIndex < 10; questionIndex++) {
  let randomIndex = Math.floor(Math.random() * Questions.length);
  choosedQuestions.push(Questions[randomIndex]);
}

function displayQuestion () {

  document.getElementById("question").innerText = questionIndex + 1 + ". " + choosedQuestions[questionIndex].question;
  document.getElementById("op1").innerText = choosedQuestions[questionIndex].options[0];
  document.getElementById("op2").innerText = choosedQuestions[questionIndex].options[1];
  document.getElementById("op3").innerText = choosedQuestions[questionIndex].options[2];
  document.getElementById("op4").innerText = choosedQuestions[questionIndex].options[3];
  

  document.getElementById("option1").value = choosedQuestions[questionIndex].options[0];
  document.getElementById("option2").value = choosedQuestions[questionIndex].options[1];
  document.getElementById("option3").value = choosedQuestions[questionIndex].options[2];
  document.getElementById("option4").value = choosedQuestions[questionIndex].options[3];

  
  document.getElementById("count").innerText = questionIndex + 1;

  // progress path setting
  let progress = document.getElementById("progress");
  let progressWidth = (document.getElementById("count").innerText / 10) * 100;
  progress.style.width = progressWidth + "%";


  //set options to unchecked
  selectedRadio = document.querySelector("[name='options']:checked");
  if(selectedRadio) {
    selectedRadio.checked = false
  }

  //set choosed answer
  if(choosedQuestions[questionIndex].choosedAnswer) {
    let choosedAnswer = choosedQuestions[questionIndex].choosedAnswer;
    choosedAnswer = choosedAnswer.replaceAll("'", "\\'");
    document.querySelector("[name='options'][value='" + choosedAnswer + "']").checked = true;
  }
  
}

function choosedAnswer(optionIndex) {
    choosedQuestions[questionIndex]["choosedAnswer"] = choosedQuestions[questionIndex].options[optionIndex];
}

function next() {
    if(questionIndex == 9) {
        Submit();
        return
    }
    questionIndex++;
    displayQuestion()

    document.getElementById("back-button").style = "display:block";
}

function back() {
    if(questionIndex == 0) {
        return;
    }

    questionIndex--;
    displayQuestion()
    if (questionIndex == 0) {
        document.getElementById("back-button").style = "display:none";
      }
      if (questionIndex != 8) {
        document.getElementById("nextText").innerText = nextIcon;
        document.getElementById("reminder").innerHTML = reminder;
      }
      // if (questionIndex > 0) {
      //   questionIndex--;
      //   displayQuestion();
      // }
}

function Submit(){
    let score = 0;
    for(let i = 0; i < choosedQuestions.length; i++) {
        if(choosedQuestions[i].choosedAnswer == choosedQuestions[i].answer) {
            score += 10;
        }
    }


    let userTests = JSON.parse(localStorage.getItem("userTests")) || [];
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


    let usertest = {
        questions: choosedQuestions,
        score: score,
        name: loggedInUser.name,
        email: loggedInUser.email,
    }

    userTests.push(usertest)
    localStorage.setItem("userTests", JSON.stringify(userTests));

    window.location = "scoreboard.html"
}