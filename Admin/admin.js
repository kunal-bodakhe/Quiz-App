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
function onAddQuestions() {
  window.location = "addQuestion.html";
}
function onMenu() {
  let dashboard = document.getElementById("dashboard");
  dashboard.classList.toggle("hide");
  let userTable = document.getElementById("userTable");
  let adminPage = document.getElementsByClassName("hide");
  let admin = document.getElementById("admin");

  if (adminPage.length > 0) {
    admin.classList.add("dashboardShow");
    console.log("working")
  } else {
    admin.classList.remove("dashboardShow");
  }
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
  var tests = JSON.parse(localStorage.getItem("userTests"));
  var table = document.getElementById("allUsersTable");
  var testCountByEmail = {};
  for (const test of tests) {
    if (!testCountByEmail[test.email]) {
      testCountByEmail[test.email] = 1;
    } else {
      testCountByEmail[test.email]++;
    }
  }
  const latestScores = {};

  for (const student of allUser) {
    latestScores[student.email] = null;
  }

  for (const test of tests) {
    if (!latestScores[test.email] || test.score > latestScores[test.email]) {
      latestScores[test.email] = test.score;
    }
  }

  console.log(latestScores);

  console.log(testCountByEmail);
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
    td3.innerText = testCountByEmail[allUser[i].email];
    var td4 = document.createElement("td");
    tr.append(td4);
    td4.innerText = latestScores[allUser[i].email];
    var td5 = document.createElement("td");
    tr.append(td5);
    td5.innerHTML = `<a href="" class="view-test-btn">View All Tests</a> `;
  }
  const viewTestBtns = document.querySelectorAll(".view-test-btn");

  // Add event listener to each button
  viewTestBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Get the parent row of the clicked button
      const row = e.target.parentNode.parentNode;

      // Extract the student's information from the row
      const name = row.cells[1].textContent;
      const email = row.cells[2].textContent;
      const score = row.cells[4].textContent;
      console.log(email);

      function getTestsByEmail(email) {
        return tests.filter((test) => test.email === email);
      }

      // Email to check
      var emailToCheck = email;

      // Get tests for the email
      const testsForEmail = getTestsByEmail(emailToCheck);

      // Display the tests
      console.log(`Tests for ${emailToCheck}:`);
      testsForEmail.forEach((test) => {
        console.log(`Test: ${test.email}, Score: ${test.score}`);
      });

      // Display the test information
      // const testInfoContainer = document.getElementById('test-info');
      // testInfoContainer.innerHTML = `
      //   <h2>Test Information for ${name}</h2>
      //   <p>Email: ${email}</p>
      //   <p>Score: ${score}</p>
      // `;
    });
  });
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
    td7.innerHTML =
      '<img src="../assets/delete.png" width="30px" height="30px">';
    var td8 = document.createElement("td");
    tr.append(td8);
    td8.innerHTML = '<img src="../assets/edit.png" width="30px" height="30px">';
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

function allResult() {
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
      let coloum = document.createElement("td");
      tr1.append(coloum);
      coloum.innerText = allResults[i].questions[index].question;
    }

    var td3 = document.createElement("td");
    tr.append(td3);

    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td3.append(tr1);
      let coloum = document.createElement("td");
      tr1.append(coloum);
      coloum.innerText = allResults[i].questions[index].options[0];
    }

    var td4 = document.createElement("td");
    tr.append(td4);

    for (let index = 0; index < allResults[i].questions.length; index++) {
      let tr1 = document.createElement("tr");
      td4.append(tr1);
      let coloum = document.createElement("td");
      tr1.append(coloum);
      coloum.innerText = allResults[i].questions[index].options[1];
    }
    var td9 = document.createElement("td");
    tr.append(td9);
    td9.innerText = allResults[i].score;
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

function addQuestions() {
  var newQuestion = document.getElementById("newQuestion");
  var firstOption = document.getElementById("firstOption");
  var secondOption = document.getElementById("secondOption");
  var thirdOption = document.getElementById("thirdOption");
  var fourthOption = document.getElementById("fourthOption");
  var correctAnswer = document.getElementById("correct");

  var optionsArray = [
    firstOption.value,
    secondOption.value,
    thirdOption.value,
    fourthOption.value,
  ];
  var addedQuestion = {
    question: newQuestion.value,
    options: optionsArray,
    answer: correctAnswer.value,
  };
  Questions.push(addedQuestion);
  localStorage.setItem("AllQuestions", JSON.stringify(Questions));
  console.log(Questions);
}
