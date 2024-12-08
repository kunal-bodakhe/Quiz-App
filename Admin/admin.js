let deleteIndex = null;

document
  .getElementById("confirmDeleteBtn")
  .addEventListener("click", deleteQuestion);
document
  .getElementById("cancelDeleteBtn")
  .addEventListener("click", closeDeletePopup);

let currentEditIndex = null; // Ensure this is defined at the top of the script

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("EditQuestionButton").addEventListener("click", saveEditedQuestion);
  document.getElementById("closeEditPopup").addEventListener("click", closeEditPopup);
  allQuestions(); // Load questions on page load
});
// document
//   .getElementById("EditQuestionButton")
//   .addEventListener("click", saveEditedQuestion);
// document
//   .getElementById("closeEditPopup")
//   .addEventListener("click", closeEditPopup);

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
for (let i = 0; i < userTable.rows; i++) {
  // Loop through each cell in the current row
  for (let j = 0; j < userTable.rows[i].cells.length; j++) {
    const cell = userTable.rows[i].cells[j];

    // Check if the cell is empty or contains 'undefined', and replace it
    if (cell.innerText === "undefined" || cell.innerText.trim() === "") {
      cell.innerText = "-";
    }
  }
}
function onMenu() {
  let dashboard = document.getElementById("dashboard");
  dashboard.classList.toggle("hide");
  let userTable = document.getElementById("userTable");
  let mcqTable = document.getElementById("allMcq");
  let questionTable = document.getElementById("allQuestionsTable");
  let hrTag = document.getElementById("hrTag");
  let questionsColumn = document.getElementById("questionsColumn");
  let adminPage = document.getElementsByClassName("hide");
  let admin = document.getElementById("admin");
  if (window.location.pathname === "/Admin/index.html") {
    if (adminPage.length > 0) {
      admin.classList.add("dashboardShow");
      console.log("working");
    } else {
      admin.classList.remove("dashboardShow");
    }
  }
  if (window.location.pathname === "/Admin/allUser.html") {
    if (adminPage.length > 0) {
      userTable.style = "margin-left: 50px;font-size: 20px;";
      // userTable.style="padding:25px 55px";
      console.log("working 2");
    } else {
      userTable.style = "margin-left: 300px;";
    }
  }
  if (window.location.pathname === "/Admin/allQuestions.html") {
    if (adminPage.length > 0) {
      mcqTable.style = "margin-left: 50px;";
      questionTable.style = "font-size:25px;";
      hrTag.style = "width:1310px;";
      questionsColumn.style = "width:81%";

      console.log("working 2");
    } else {
      mcqTable.style = "margin-left: 260px;";
      questionTable.style = "font-size:20px";
      hrTag.style = "width:1100px;";
      questionsColumn.style = "width:78%";
    }
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
  var table = document.getElementById("userTables"); // Update with your table's actual ID

  if (table) {
    // Check if the table exists
    // Loop through each row in the table (skipping the header row)
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];

      // Loop through each cell in the current row
      for (let j = 0; j < row.cells.length; j++) {
        const cell = row.cells[j];

        // Check if the cell is empty or contains 'undefined' text
        if (cell.innerText.trim() === "" || cell.innerText === "undefined") {
          cell.innerText = "-";
        }
      }
    }
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
    td.style = "text-align: center; padding:10px 30px;";
    var td1 = document.createElement("td");
    tr.append(td1);
    td1.innerText = allQuestion[i].question;
    td1.style = "width:78%";
    // var td2 = document.createElement("td");
    // tr.append(td2);
    // td2.innerText = allQuestion[i].options[0];
    // var td3 = document.createElement("td");
    // tr.append(td3);
    // td3.innerText = allQuestion[i].options[1];
    // var td4 = document.createElement("td");
    // tr.append(td4);
    // td4.innerText = allQuestion[i].options[2];
    // var td5 = document.createElement("td");
    // tr.append(td5);
    // td5.innerText = allQuestion[i].options[3];
    // var td6 = document.createElement("td");
    // tr.append(td6);
    // td6.innerText = allQuestion[i].answer;
    var td7 = document.createElement("td");
    tr.append(td7);
    td7.style = "width:150px;padding:10px 10px;";
    td7.innerHTML = `<img src="../assets/viewmore.png" width="30px" height="30px" style="padding:0px 8px;cursor:pointer" class="view-btn">
      <img src="../assets/edit.png" width="30px" height="30px" style="padding:0px 8px;cursor:pointer" class="edit-btn">
      <img src="../assets/delete.png" width="25px" height="30px" style="padding:0px 8px;cursor:pointer" class="delete-btn">
        `;
    // var td8 = document.createElement("td");
    // tr.append(td8);
    // td8.innerHTML = '<img src="../assets/edit.png" width="30px" height="30px">';
    td7.querySelector(".delete-btn").addEventListener("click", function () {
      openDeletePopup(i, allQuestion[i].question); // Pass the index and question text to the popup
    });
    // td7.querySelector(".edit-btn").addEventListener("click", function () {
    //   showEditPopup(); // Pass the index and question text to confirm deletion
    // });
    td7.querySelector(".edit-btn").addEventListener("click", function () {
      openEditPopup(
        i,
        allQuestion[i].question,
        allQuestion[i].options[0],
        allQuestion[i].options[1],
        allQuestion[i].options[2],
        allQuestion[i].options[3],
        allQuestion[i].answer
      );
    });
  }
}
function openDeletePopup(index, questionText) {
  deleteIndex = index; // Store the index of the question to delete
  document.getElementById("deleteMessage").textContent = `${questionText}`;
  document.getElementById("deletePopup").style.display = "block";
  document.getElementById("overlay").style.display = "block"; // Show overlay
}

// Function to close the delete popup
function closeDeletePopup() {
  deleteIndex = null; // Reset the index
  document.getElementById("deletePopup").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Function to delete a question
function deleteQuestion() {
  if (deleteIndex > null) {
    var allQuestion = JSON.parse(localStorage.getItem("AllQuestions")) || [];
    allQuestion.splice(deleteIndex, 1); // Remove the selected question
    localStorage.setItem("AllQuestions", JSON.stringify(allQuestion)); // Update localStorage
    // allQuestions(); // Refresh the table
    closeDeletePopup(); // Close the popup
    location.reload();
  }
}

function openEditPopup(index, questionText, op1, op2, op3, op4, ans) {
  currentEditIndex = index; // Store the index of the question being edited
  document.getElementById("question").value = questionText; // Populate the textarea with the current question
  document.getElementById("optionOne").value = op1;
  document.getElementById("optionTwo").value = op2;
  document.getElementById("optionThree").value = op3;
  document.getElementById("optionFour").value = op4;
  document.getElementById("correctAnswer").value = ans;
  document.getElementById("editPopup").style.display = "flex"; // Show the popup
  document.getElementById("editQuestionPopup").style.display = "flex";
}

function closeEditPopup() {
  
  document.getElementById("editPopup").style.display = "none"; // Hide the popup
  document.getElementById("editQuestionPopup").style.display = "none";
  currentEditIndex = null; // Reset the index
  console.log(currentEditIndex)
}

function saveEditedQuestion() {
  var allQuestion = JSON.parse(localStorage.getItem("AllQuestions")) || [];
  var updatedQuestion = document.getElementById("question").value; // Get the updated question
  var updatedOptionOne = document.getElementById("optionOne").value;
  var updatedOptionTwo = document.getElementById("optionTwo").value;
  var updatedOptionThree = document.getElementById("optionThree").value;
  var updatedOptionFour = document.getElementById("optionFour").value;
  var updatedCorrectAnswer = document.getElementById("correctAnswer").value;

  if (
    currentEditIndex !== null &&
    updatedQuestion.trim() !== "" &&
    updatedOptionOne.trim() !== "" &&
    updatedOptionTwo.trim() !== "" &&
    updatedOptionThree.trim() !== "" &&
    updatedOptionFour.trim() !== "" &&
    updatedCorrectAnswer.trim() !== ""
  ) {
    allQuestion[currentEditIndex].question = updatedQuestion; // Update the question in the array
    allQuestion[currentEditIndex].options[0] = updatedOptionOne;
    allQuestion[currentEditIndex].options[1] = updatedOptionTwo;
    allQuestion[currentEditIndex].options[2] = updatedOptionThree;
    allQuestion[currentEditIndex].options[3] = updatedOptionFour;
    allQuestion[currentEditIndex].answer = updatedCorrectAnswer;
    localStorage.setItem("AllQuestions", JSON.stringify(allQuestion)); // Update localStorage
    location.reload(); // Refresh the table
  }

  closeEditPopup(); // Close the popup
}

function showPopup() {
  let addQuestionPopup = document.getElementById("addQuestionPopup");
  let showAddQuestionsPopup = document.getElementsByClassName("showAddPopup");
  if (showAddQuestionsPopup.length == 0) {
    addQuestionPopup.classList.add("showAddPopup");
    addQuestionPopup.style = "display:flex;";
  }
}
function hidePopup() {
  let addQuestionPopup = document.getElementById("addQuestionPopup");
  let showAddQuestionsPopup = document.getElementsByClassName("showAddPopup");
  if (showAddQuestionsPopup.length > 0) {
    addQuestionPopup.classList.remove("showAddPopup");
    addQuestionPopup.style = "display:hide;";
  }
}

function addQuestions() {
  // console.log("hello working")
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
  let Questions = JSON.parse(localStorage.getItem("AllQuestions"));
  Questions.push(addedQuestion);
  localStorage.setItem("AllQuestions", JSON.stringify(Questions));
  console.log(Questions);

  location.reload();
}
// function deleteQuestion(index) {
//   // Get the questions from localStorage
//   var allQuestion = JSON.parse(localStorage.getItem("AllQuestions")) || [];

//   // Remove the selected question
//   allQuestion.splice(index, 1);

//   // Update localStorage with the new array
//   localStorage.setItem("AllQuestions", JSON.stringify(allQuestion));

//   // Refresh the table
//   // allQuestions();

//   // Log the updated array to the console
//   // console.log("Updated Questions Array:", allQuestion);
//   location.reload();
// }
// function confirmDelete(index, questionText) {
//   // Show confirmation popup
//   const userConfirmed = confirm(
//     `Are you sure you want to delete this question?\n\n"${questionText}"`
//   );

//   // If confirmed, proceed with deletion
//   if (userConfirmed) {
//     deleteQuestion(index);
//   }
// }

// Attach event listeners for the delete popup buttons

// function showEditPopup() {
//   let showEditQuestionsPopup = document.getElementsByClassName("showEditPopup");
//   let editQuestionPopup = document.getElementById("editQuestionPopup");
//   if (showEditQuestionsPopup.length == 0) {
//     editQuestionPopup.classList.add("showEditPopup");
//     editQuestionPopup.style = "display:flex;";
//   }
// }
// function hideEditPopup() {
//   let showEditQuestionsPopup = document.getElementsByClassName("showEditPopup");
//   let editQuestionPopup = document.getElementById("editQuestionPopup");
//   if (showEditQuestionsPopup.length > 0) {
//     editQuestionPopup.classList.remove("showEditPopup");
//     editQuestionPopup.style = "display:hide;";
//   }
// }

// // Attach event listeners for save and cancel buttons in the popup
// document.getElementById("EditQuestionButton").addEventListener("click", saveEditedQuestion);
// document.getElementById("closeButton").addEventListener("click", closeEditPopup);

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
