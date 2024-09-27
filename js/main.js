var Questions = [
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
// Admin's
const admins = [
  {
    email: "kunalbodakhe1230@gmail.com",
    password: "kunal@2003",
  },
];

//SCREEN LOAD CODE

window.addEventListener("load", (ev) => {
  let userProfile = document.getElementById("userProfile");
  const userImage = localStorage.getItem("loggedInUserImage");
  const isLoggedIn = localStorage.getItem("loggedInUser");

  if (userImage) {
    let loggedInUserImage = JSON.parse(
      localStorage.getItem("loggedInUserImage")
    );
    userProfile.src = loggedInUserImage;
  }

  if (isLoggedIn) {
    return;
  }

  if (window.location.pathname === "/dashboard.html") {
    window.location = "/";
  }
  if (window.location.pathname === "/question.html") {
    window.location = "/";
  }
  if (window.location.pathname === "/scoreboard.html") {
    window.location = "/";
  }
});
//
//
//
//
//SIGN-UP PAGE LOGIC
//
//
//
//
function on_signup() {
  window.location = "signup.html";
}
function signin() {
  const fullName = document.getElementById("full-Name").value;
  const email = document.getElementById("email-Id").value;
  const pass = document.getElementById("password").value;
  const NamePattern = /^[A-Za-z\s\-']+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!fullName) {
    alert("please Enter Your Full Name");
    return;
  }
  if (!NamePattern.test(fullName)) {
    alert("please Enter valid name");
    return;
  }
  if (!email) {
    alert("please Enter Your Email");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("please Enter Valid Email");
    return;
  }
  if (!pass) {
    alert("Enter the Password");
    return;
  }
  if (pass.length < 8) {
    alert("Password minimum 8 Charecter");
    return;
  }

  const userCredentials = JSON.parse(localStorage.getItem("user")) || [];
  const userExist = userCredentials.some(
    (userCredentials) => userCredentials.email === email
  );
  if (userExist) {
    alert("already exist user");
    return;
  } else {
    const newUser = {
      name: fullName,
      email: email,
      password: pass,
    };
    userCredentials.push(newUser);
    let objectConvertToString = JSON.stringify(userCredentials);
    localStorage.setItem("user", objectConvertToString);

    window.location = "index.html";

    alert("Registration Successfully");
  }
}

//LOGIN PAGE LOGIC

let user = null;

function on_login() {
  console.log("test login");
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email) {
    alert("please Enter Your Email");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("please Enter Valid Email");
    return;
  }
  if (!pass) {
    alert("Enter the Password");
    return;
  }
  if (pass.length < 8) {
    alert("Password minimum 8 Charecter");
    return;
  }

  const userCredentials = JSON.parse(localStorage.getItem("user")) || [];
  const userExist = userCredentials.filter(
    (userCredentials) => userCredentials.email === email
  );
  if (userExist.length == 1) {
    if (userExist[0].password == pass) {
      alert("Login Succesful");
      let loggedInUser = JSON.stringify(userExist);
      localStorage.setItem("loggedInUser", loggedInUser);

      window.location = "dashboard.html";
    } else {
      alert("Please Enter Valid Email or Password");
    }
  } else {
    alert("Account doesnt Exist");
  }
}
//
//
//
//
//DASHBOARD LOGIC
//
//
//
//
function on_start() {
  window.location = "question.html";
}
user = JSON.parse(localStorage.getItem("loggedInUser"));
document.getElementById("user-name").innerText = user[0].name;

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location = "index.html";
}

function profile() {
  let userProfile = document.getElementById("profileSlide");
  userProfile.classList.toggle("displayProfile");
}
function uploadImage() {
  let userProfile = document.getElementById("userProfile");
  let uploadImage = document.getElementById("uploadImage");
  let imageInput = document.getElementById("imageInput").files[0].name;
  let imagePath = "assets/" + imageInput;
  let stringedImagePath = JSON.stringify(imagePath);
  localStorage.setItem("loggedInUserImage", stringedImagePath);

  userProfile.src = imagePath;
}
//
//
//
//
//Question PAGE LOGIC
//
//
//
//
let choosedQuestions = [];
let questionIndex = 0;


startQuize();

function displayQuestion() {
  document.getElementById("question").innerText =
    questionIndex + 1 + ". " + choosedQuestions[questionIndex].question;
  document.getElementById("op1").innerText =
    choosedQuestions[questionIndex].options[0];
  document.getElementById("op2").innerText =
    choosedQuestions[questionIndex].options[1];
  document.getElementById("op3").innerText =
    choosedQuestions[questionIndex].options[2];
  document.getElementById("op4").innerText =
    choosedQuestions[questionIndex].options[3];

  document.getElementById("option1").value =
    choosedQuestions[questionIndex].options[0];
  document.getElementById("option2").value =
    choosedQuestions[questionIndex].options[1];
  document.getElementById("option3").value =
    choosedQuestions[questionIndex].options[2];
  document.getElementById("option4").value =
    choosedQuestions[questionIndex].options[3];

  document.getElementById("count").innerText = questionIndex + 1;

  // progress path setting
  let progress = document.getElementById("progress");
  let progressWidth = (document.getElementById("count").innerText / 10) * 100;
  progress.style.width = progressWidth + "%";

  //set options to unchecked
  let selectedRadio = document.querySelector("[name='options']:checked");
  if (selectedRadio) {
    selectedRadio.checked = false;
  }

  //set choosed answer
  if (choosedQuestions[questionIndex].choosedAnswer) {
    let choosedAnswer = choosedQuestions[questionIndex].choosedAnswer;
    choosedAnswer = choosedAnswer.replaceAll("'", "\\'");
    document.querySelector(
      "[name='options'][value='" + choosedAnswer + "']"
    ).checked = true;
  }
}

function startQuize() {
  choosedQuestions = Questions.sort(() => 0.5 - Math.random()).slice(0, 10);
  displayQuestion();
}

console.log(choosedQuestions);
let QuestionsAsked = JSON.stringify(choosedQuestions);
localStorage.setItem("QuestionsAsked", QuestionsAsked);

function choosedAnswer(optionIndex) {
  choosedQuestions[questionIndex]["choosedAnswer"] =
    choosedQuestions[questionIndex].options[optionIndex];
}

function next() {
  if (questionIndex == choosedQuestions.length - 1) {
    Submit();

    return;
  }
  questionIndex++;
  displayQuestion();

  document.getElementById("back-button").style = "display:block";
}

function back() {
  if (questionIndex == 0) {
    return;
  }

  questionIndex--;
  displayQuestion();
  if (questionIndex == 0) {
    document.getElementById("back-button").style = "display:none";
  }
  // if (questionIndex != 8) {
  //   document.getElementById("nextText").innerText = nextIcon;
  //   document.getElementById("reminder").innerHTML = reminder;
  // }
}

function Submit() {
  let score = 0;
  for (let i = 0; i < choosedQuestions.length; i++) {
    if (choosedQuestions[i].choosedAnswer == choosedQuestions[i].answer) {
      score += 10;
    }
  }

  let userTests = JSON.parse(localStorage.getItem("userTests")) || [];
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  let usertest = {
    questions: choosedQuestions,
    score: score,
    name: loggedInUser[0].name,
    email: loggedInUser[0].email,
  };

  userTests.push(usertest);
  let stringarr = JSON.stringify(userTests);
  localStorage.setItem("userTests", stringarr);

  window.location = "scoreboard.html";
}
//
//
//
//
//SCOREBOARD PAGE LOGIC
//
//
//
//
function assignRanks() {
  let storedArray = JSON.parse(localStorage.getItem("userTests"));
  // const scores = storedArray.map((object) => object.score);
  let rankedTests = storedArray.sort((a, b) => b.score - a.score);

  // console.log(rankedTests);
  let rank1 = document.getElementById("rank1");
  let rank2 = document.getElementById("rank2");
  let rank3 = document.getElementById("rank3");
  let rank4 = document.getElementById("rank4");
  let rank5 = document.getElementById("rank5");
  let rank6 = document.getElementById("rank6");

  if (rankedTests.length > 0) {
    rank1.innerText = rankedTests[0].score;
  }
  if (rankedTests.length > 1) {
    rank2.innerText = rankedTests[1].score;
  }
  if (rankedTests.length > 2) {
    rank3.innerText = rankedTests[2].score;
  }
  if (rankedTests.length > 3) {
    rank4.innerText = rankedTests[3].score;
  }
  if (rankedTests.length > 4) {
    rank5.innerText = rankedTests[4].score;
  }
  if (rankedTests.length > 5) {
    rank6.innerText = rankedTests[5].score;
  }

  let Name1 = document.getElementById("name1");
  let Name2 = document.getElementById("name2");
  let Name3 = document.getElementById("name3");
  let Name4 = document.getElementById("name4");
  let Name5 = document.getElementById("name5");
  let Name6 = document.getElementById("name6");

  if (rankedTests.length > 0) {
    name1.innerText = rankedTests[0].name;
  }
  if (rankedTests.length > 1) {
    name2.innerText = rankedTests[1].name;
  }
  if (rankedTests.length > 2) {
    name3.innerText = rankedTests[2].name;
  }
  if (rankedTests.length > 3) {
    name4.innerText = rankedTests[3].name;
  }
  if (rankedTests.length > 4) {
    name5.innerText = rankedTests[4].name;
  }
  if (rankedTests.length > 5) {
    name6.innerText = rankedTests[5].name;
  }
  console.log(rankedTests[0].name);
}
//
//
//
//
// ADMIN PAGE LOGIC
//
//
//
//
function onAllUsers() {
  window.location = "allUser.html";
}
function onAllQuestions() {
  window.location = "allQuestions.html";
}
function onAllResults() {
  window.location = "allResults.html";
}
function onAddQuestions(){
  window.location="addQuestion.html"
}

//
//
//
//
// All User Page LOGIC
//
//
//
//

function allUsers() {
  var allUser = JSON.parse(localStorage.getItem("user"));
  var table = document.getElementById("allUsersTable");
  for (let i = 0; i < allUser.length; i++) {
    var tr = document.createElement("tr");
    table.append(tr);
    var td = document.createElement("td");
    tr.append(td);
    td.innerText = i + 1;
    var td1 = document.createElement("td");
    tr.append(td1);
    td1.innerText = allUser[i].name;
    var td2 = document.createElement("td");
    tr.append(td2);
    td2.innerText = allUser[i].email;
    var td3 = document.createElement("td");
    tr.append(td3);
    td3.innerText = allUser[i].password;
  }
}
//
//
//
//
// All Question Page LOGIC
//
//
//
//
function allQuestions() {
  var allQuestion = JSON.parse(localStorage.getItem("AllQuestions"));
  var table = document.getElementById("allQuestionsTable");
  for (let i = 0; i < allQuestion.length; i++) {
    var tr = document.createElement("tr");
    table.append(tr);
    var td = document.createElement("td");
    tr.append(td);
    td.innerText = i + 1;
    var td1 = document.createElement("td");
    tr.append(td1);
    td1.innerText = allQuestion[i].question;
    var td2 = document.createElement("td");
    tr.append(td2);
    td2.innerText = allQuestion[i].options[0];
    var td3 = document.createElement("td");
    tr.append(td3);
    td3.innerText = allQuestion[i].options[1];
    var td4 = document.createElement("td");
    tr.append(td4);
    td4.innerText = allQuestion[i].options[2];
    var td5 = document.createElement("td");
    tr.append(td5);
    td5.innerText = allQuestion[i].options[3];
    var td6 = document.createElement("td");
    tr.append(td6);
    td6.innerText = allQuestion[i].answer;
    var td7 = document.createElement("td");
    tr.append(td7);
    td7.innerHTML = '<img src="assets/delete.png" width="30px" height="30px">';
    var td8 = document.createElement("td");
    tr.append(td8);
    td8.innerHTML = '<img src="assets/edit.png" width="30px" height="30px">';
  }
}

//
//
//
//
// All Scores Page LOGIC
//
//
//
//

function allResult(){
  let storedArray = JSON.parse(localStorage.getItem("userTests"));
  storedArray.sort((a, b) => b.score - a.score);
  var allResults = storedArray.sort((a, b) => b.score - a.score);
  var table = document.getElementById("allResultsTable");
  for (let i = 0; i < allResults.length; i++) {
    var tr = document.createElement("tr");
    table.append(tr);
    var td = document.createElement("td");
    tr.append(td);
    td.innerText = i + 1;
    var td1 = document.createElement("td");
    tr.append(td1);

    td1.innerText = allResults[i].name;
    var td2 = document.createElement("td");
    tr.append(td2);

    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td2.append(tr1);
      let coloum= document.createElement("td");
      tr1.append(coloum)
      coloum.innerText=allResults[i].questions[index].question
    }

    var td3 = document.createElement("td");
    tr.append(td3);

    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td3.append(tr1);
      let coloum= document.createElement("td");
      tr1.append(coloum)
      coloum.innerText=allResults[i].questions[index].options[0]
    }

    var td4 = document.createElement("td");
    tr.append(td4);
    
    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td4.append(tr1);
      let coloum= document.createElement("td");
      tr1.append(coloum)
      coloum.innerText=allResults[i].questions[index].options[1]
    }

    var td5 = document.createElement("td");
    tr.append(td5);

    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td5.append(tr1);
      let coloum= document.createElement("td");
      tr1.append(coloum)
      coloum.innerText=allResults[i].questions[index].options[2]
    }

    var td6 = document.createElement("td");
    tr.append(td6);

    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td6.append(tr1);
      let coloum= document.createElement("td");
      tr1.append(coloum)
      coloum.innerText=allResults[i].questions[index].options[3]
    }

    var td7 = document.createElement("td");
    tr.append(td7);

    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td7.append(tr1);
      let coloum= document.createElement("td");
      tr1.append(coloum)
      coloum.innerText=allResults[i].questions[index].answer
    }

    var td8 = document.createElement("td");
    tr.append(td8);
    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td8.append(tr1);
      let coloum= document.createElement("td");
      tr1.append(coloum)
      coloum.innerText=allResults[i].questions[index].choosedAnswer
    }

    var td9 = document.createElement("td")
    tr.append(td9)
    td9.innerText=allResults[i].score
  }
}

//
//
//
//
// Add Question Page LOGIC
//
//
//
//

function addQuestions(){
  var newQuestion=document.getElementById("newQuestion")
  var firstOption=document.getElementById("firstOption")
  var secondOption= document.getElementById("secondOption")
  var thirdOption=document.getElementById("thirdOption")
  var fourthOption= document.getElementById("fourthOption")
  var correctAnswer=document.getElementById("correct")
  
  var optionsArray=[firstOption.value,secondOption.value,thirdOption.value,fourthOption.value]
  var addedQuestion={
    "question": newQuestion.value,
    "options":optionsArray,
    "answer":correctAnswer.value
  }
  Questions.push(addedQuestion);
  localStorage.setItem("TotalQuestions",JSON.stringify(Questions));
  console.log(Questions)
}