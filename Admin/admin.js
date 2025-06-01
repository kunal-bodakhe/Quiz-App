

let deleteIndex = null;

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("confirmDeleteBtn")
    .addEventListener("click", deleteQuestion);
  document
    .getElementById("cancelDeleteBtn")
    .addEventListener("click", closeDeletePopup);
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("confirmLogoutBtn")
    .addEventListener("click", logout);
  document
    .getElementById("cancelLogoutBtn")
    .addEventListener("click", closeLogoutPopup);
});

let currentEditIndex = null; // Ensure this is defined at the top of the script

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("EditQuestionButton")
    .addEventListener("click", saveEditedQuestion);
  document
    .getElementById("closeEditPopup")
    .addEventListener("click", closeEditPopup);
});

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById("ViewQuestionButton").addEventListener("click", saveEditedQuestion);
  document
    .getElementById("closeViewPopup")
    .addEventListener("click", closeViewPopup);
  // this.location.reload();
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
//logout
let admin=JSON.parse(localStorage.getItem("admin"));
let adminName=document.getElementById("admin-name");
adminName.innerText=admin[0].adminName;
let logoutButton=document.getElementById("logout");
// function logout(){
//   // localStorage.removeItem("loggedInAdmin");
//   openDeletePopup(1,"hello")

//   // window.location="../index.html";
// }
function openLogoutPopup() {
  document.getElementById("logoutPopup").style.display = "block";
  document.getElementById("overlay").style.display = "block"; // Show overlay
}

// Function to close the logout popup
function closeLogoutPopup() {
  document.getElementById("logoutPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Function to delete a question
function logout() {
  // console.log("done")
  // if (logoutIndex > null) {
  //   var allQuestion = JSON.parse(localStorage.getItem("AllQuestions")) || [];
  //   allQuestion.splice(logoutIndex, 1); // Remove the selected question
  //   localStorage.setItem("AllQuestions", JSON.stringify(allQuestion)); // Update localStorage
  //   // allQuestions(); // Refresh the table
    closeLogoutPopup(); // Close the popup
  //   location.reload();
  localStorage.removeItem("loggedInAdmin")
  sessionStorage.clear();
  window.location="../index.html"

  // }
}


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
  let thElements = document.querySelectorAll(".thColor");
  let mcqTable = document.getElementById("allMcq");
  let questionTable = document.getElementById("allQuestionsTable");
  let hrTag = document.getElementById("hrTag");
  let questionsColumn = document.getElementById("questionsColumn");
  let quizContainer= document.getElementById("quizContainer");
  let testDetails= document.getElementById("testDetails");
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
  if (window.location.pathname === "/Admin/user.html") {
    if (adminPage.length > 0) {
      selectedUserInfo.style = "margin:80px 0 50px 50px";
      hrTag.style = "width:1335px;";
      
        // Get all <th> elements with the class 'thColor'
        // const thElements = document.querySelectorAll(".thColor");
      
        thElements.forEach(th => {
          // Add the specified addClass and remove removeClass
          th.classList.add("questionsColumnBig");
          th.classList.remove("questionsColumns");
        });
      
      
      // Example: Toggle class when a <th> is clicked
      // document.querySelectorAll(".thColor").forEach(th => {
      //   th.addEventListener("click", () => {
      //     toggleClassOnTh("questionsColumns", "questionsColumnBig");
      //   });
      // });
  
      console.log("working 2");
    } else {
      selectedUserInfo.style = "margin-left: 260px;margin-top: 80px;background-color: #ffffff;";
      hrTag.style = "width:1100px;";
      
        // Get all <th> elements with the class 'thColor'
        
      
        thElements.forEach(th => {
          // Add the specified addClass and remove removeClass
          th.classList.add("questionsColumns");
          th.classList.remove("questionsColumnBig");
        });
      
      
      
    }
  }
  if (window.location.pathname === "/Admin/userTest.html") {
    if (adminPage.length > 0) {
      quizContainer.style = "margin-left: 50px;margin-top: 80px;";
      hrTag.style = "width:1445px;";
      testDetails.style = "width:1445px;";
      
        // Get all <th> elements with the class 'thColor'
        // const thElements = document.querySelectorAll(".thColor");
      
        thElements.forEach(th => {
          // Add the specified addClass and remove removeClass
          th.classList.add("questionsColumnBig");
          th.classList.remove("questionsColumns");
        });
      
      
      // Example: Toggle class when a <th> is clicked
      // document.querySelectorAll(".thColor").forEach(th => {
      //   th.addEventListener("click", () => {
      //     toggleClassOnTh("questionsColumns", "questionsColumnBig");
      //   });
      // });
  
      console.log("working 2");
    } else {
      quizContainer.style = "margin-left: 260px;margin-top: 80px;background-color: #ffffff;";
      // hrTag.style = "width:1100px;";
      
        // Get all <th> elements with the class 'thColor'
        
      
        thElements.forEach(th => {
          // Add the specified addClass and remove removeClass
          th.classList.add("questionsColumns");
          th.classList.remove("questionsColumnBig");
        });
      
      
      
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
    td5.innerHTML = `<p class="view-test-btn">View All Tests</p> `;
    td5.style = "color:blue;cursor:pointer;";
    td5.querySelector(".view-test-btn").addEventListener("click", function () {
      localStorage.setItem(
        "selectedUser",
        JSON.stringify({
          selectedUserName: allUser[i].name,
          selectedUserEmail: allUser[i].email,
        })
      );
      window.location = "user.html";
      // document.getElementById("selectedUserName").innerText= allUser[i].name;
      // document.getElementById("selectedUserEmail").innerText= allUser[i].email;
    });
  }
  // const viewTestBtns = document.querySelectorAll(".view-test-btn");

  // // Add event listener to each button
  // viewTestBtns.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     // Get the parent row of the clicked button
  //     const row = e.target.parentNode.parentNode;

  //     // Extract the student's information from the row
  //     const name = row.cells[1].textContent;
  //     const email = row.cells[2].textContent;
  //     const score = row.cells[4].textContent;
  //     console.log(email);

  //     function getTestsByEmail(email) {
  //       return tests.filter((test) => test.email === email);
  //     }

  //     // Email to check
  //     var emailToCheck = email;

  //     // Get tests for the email
  //     const testsForEmail = getTestsByEmail(emailToCheck);

  //     // Display the tests
  //     console.log(`Tests for ${emailToCheck}:`);
  //     testsForEmail.forEach((test) => {
  //       console.log(`Test: ${test.email}, Score: ${test.score}`);
  //     });

  //     // Display the test information
  //     // const testInfoContainer = document.getElementById('test-info');
  //     // testInfoContainer.innerHTML = `
  //     //   <h2>Test Information for ${name}</h2>
  //     //   <p>Email: ${email}</p>
  //     //   <p>Score: ${score}</p>
  //     // `;
  //   });
  // });

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

function selectedUserPage() {
  let user = JSON.parse(localStorage.getItem("selectedUser"));

  document.getElementById("selectedUserName").innerText = user.selectedUserName;
  document.getElementById("selectedUserEmail").innerText =
    user.selectedUserEmail;

  const userTests = JSON.parse(localStorage.getItem("userTests"));

  const selectedName = user.selectedUserEmail;

  const filteredTests = userTests.filter((test) => test.email === selectedName);

  console.log(`Tests given by ${selectedName}:`, filteredTests);
  let table= document.getElementById("selectedUserTests");

  for (let i = 0; i < filteredTests.length; i++) {
    var tr = document.createElement("tr");
    table.append(tr);
    var td = document.createElement("td");
    tr.append(td);
    td.innerText = i + 1;

    var td1 = document.createElement("td");
    tr.append(td1);
    if (!filteredTests[i].quizDateTimer) {
      td1.innerText= "-"     
    }else if (filteredTests[i].quizDateTimer) {
      td1.innerText=filteredTests[i].quizDateTimer.quizDate;
    }

    var td2 = document.createElement("td");
    tr.append(td2);
    td2.innerText = filteredTests[i].score;

    var td3 = document.createElement("td");
    tr.append(td3);
    var correctAnswers="0";
    for (let j = 0; j < filteredTests[i].questions.length; j++){
      if (filteredTests[i].questions[j].answer===filteredTests[i].questions[j].choosedAnswer) {
        correctAnswers++;
      }
    }
    td3.innerText = correctAnswers;

    var td4 = document.createElement("td");
    tr.append(td4);
    td4.innerHTML = `<p class="viewTest">View Test</p> `;
    td4.style = "color:blue;cursor:pointer;";
    
    td4.querySelector(".viewTest").addEventListener("click",function(){
      localStorage.setItem("test",JSON.stringify(filteredTests[i]));
      localStorage.setItem("testSrNo",JSON.stringify(i+1));
      window.location="userTest.html"
    })

    // var td5 = document.createElement("td");
    // tr.append(td5);
  }
}

function viewTestPage(){

  let user = JSON.parse(localStorage.getItem("selectedUser"));

  document.getElementById("selectedUserName").innerText = user.selectedUserName;
  document.getElementById("selectedUserEmail").innerText =
    user.selectedUserEmail;


  let test=JSON.parse(localStorage.getItem("test"));
  let testSrNo=JSON.parse(localStorage.getItem("testSrNo"));
  let testnumber=document.getElementById("testnumber");
  let scoreOfTest=document.getElementById("scoreOfTest");
  let DateOfTest=document.getElementById("DateOfTest");
  let timeTakenMinutes=document.getElementById("timeTakenMinutes");
  let timeTakenSeconds=document.getElementById("timeTakenSeconds");


  testnumber.innerText=testSrNo;
  scoreOfTest.innerText=test.score;
  DateOfTest.innerText=test.quizDateTimer.quizDate;
  timeTakenMinutes.innerText=test.quizDateTimer.quizMinutes;
  timeTakenSeconds.innerText=test.quizDateTimer.quizSeconds;

    let quizData=test.questions;

    // DOM elements
    for (let i = 0; i < quizData.length; i++) {
      // const element = quizData[i];
      let fullTest=document.getElementById("fullTest")
      let main=document.createElement("div");
      let questionContainer= document.createElement("div");
      let srNo= document.createElement("span");
      let questionElement=document.createElement("div");
      let optionsElement= document.createElement("ul");
      
      questionContainer.id="questionBox";
      questionElement.id="question";
      questionElement.classList.add("question")
      optionsElement.id="options";
      optionsElement.classList.add("options")

      main.append(questionContainer);
      questionContainer.append(srNo);
      questionContainer.append(questionElement);
      main.append(optionsElement);
      fullTest.append(main);
      
    // const questionElement = document.getElementById("question");
    // const optionsElement = document.getElementById("options");

    // Display question
    srNo.innerText=i+1
    questionElement.innerText = quizData[i].question;

    // Display options
    quizData[i].options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;

      const img = document.createElement("img");
      img.classList.add("icon");
      img.style.visibility = "hidden"; // Hide initially
      li.appendChild(img);

      li.addEventListener("click", () => handleOptionClick(li, option, img));
      optionsElement.appendChild(li);
    });

    // Handle option click
    function handleOptionClick(selectedElement, selectedOption, imgElement) {
      // Clear previous classes and icons
      document.querySelectorAll(".options li").forEach((li) => {
        li.classList.remove("correct", "incorrect", "correct-answer");
        const img = li.querySelector("img");
        if (img) img.style.visibility = "hidden";
      });

      // Highlight the choosed answer
      if (selectedOption === quizData.answer) {
        selectedElement.classList.add("correct");
        imgElement.src = "../assets/tick.png";
      } else {
        selectedElement.classList.add("incorrect");
        imgElement.src = "../assets/cross.png";
      }
      imgElement.style.visibility = "visible";

      // Highlight the correct answer
      const answerElement = Array.from(optionsElement.children).find(
        (li) => li.textContent === quizData[i].answer
      );
      if (answerElement) {
        answerElement.classList.add("correct-answer");
        const correctImg = answerElement.querySelector("img");
        correctImg.src = "../assets/tick.png";
        correctImg.style.visibility = "visible";
      }
    }

    // Automatically highlight choosedAnswer and answer
    const choosedAnswerElement = Array.from(optionsElement.children).find(
      (li) => li.textContent === quizData[i].choosedAnswer
    );
    if (choosedAnswerElement) {
      const img = choosedAnswerElement.querySelector("img");
      if (quizData[i].choosedAnswer === quizData[i].answer) {
        choosedAnswerElement.classList.add("correct");
        img.src = "../assets/tick.png";
      } else {
        choosedAnswerElement.classList.add("incorrect");
        img.src = "../assets/cross.png";
      }
      img.style.visibility = "visible";
    }

    const answerElement = Array.from(optionsElement.children).find(
      (li) => li.textContent === quizData[i].answer
    );
    if (answerElement) {
      const img = answerElement.querySelector("img");
      answerElement.classList.add("correct-answer");
      img.src = "../assets/tick.png";
      img.style.visibility = "visible";
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
    td7.querySelector(".view-btn").addEventListener("click", function () {
      openViewPopup(
        i,
        allQuestion[i].question,
        allQuestion[i].options[0],
        allQuestion[i].options[1],
        allQuestion[i].options[2],
        allQuestion[i].options[3],
        allQuestion[i].answer
      ); // Pass the index and question text to the popup
    });
  }
}
function openDeletePopup(index, questionText) {
  deleteIndex = index; // Store the index of the question to delete
  document.getElementById("deleteMessage").textContent = `${questionText}`;
  document.getElementById("deletePopup").style.display = "block";
  document.getElementById("overlay").style.display = "block"; // Show overlay
  console.log(deleteIndex)
}

// Function to close the delete popup
function closeDeletePopup() {
  deleteIndex = null; // Reset the index
  document.getElementById("deletePopup").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Function to delete a question
function deleteQuestion() {
  // console.log("done")
  // window.location="../index.html"
  if (deleteIndex >=0) {
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
  console.log(currentEditIndex);
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

  closeEditPopup();
  location.reload(); // Close the popup
}

function openViewPopup(index, questionText, op1, op2, op3, op4, ans) {
  currentEditIndex = index; // Store the index of the question being edited
  document.getElementById("originalQuestion").innerText = questionText; // Populate the textarea with the current question
  document.getElementById("option1").innerText = op1;
  document.getElementById("option2").innerText = op2;
  document.getElementById("option3").innerText = op3;
  document.getElementById("option4").innerText = op4;
  document.getElementById("answer").innerText = ans;

  document.getElementById("viewPopup").style.display = "block"; // Show the popup
  document.getElementById("viewQuestionPopup").style.display = "flex";
}

function closeViewPopup() {
  document.getElementById("viewPopup").style.display = "none"; // hide the popup
  document.getElementById("viewQuestionPopup").style.display = "none";
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
// const quizQuestions = [];

//   document.getElementById('submitQuestionButton').addEventListener('click', function() {
//     // Get input values
//     const question = document.getElementById('newQuestion').value;
//     const option1 = document.getElementById('firstOption').value;
//     const option2 = document.getElementById('secondOption').value;
//     const option3 = document.getElementById('thirdOption').value;
//     const option4 = document.getElementById('fourthOption').value;
//     const correctAnswerIndex = document.getElementById('correct').value;
  
//     // Validate inputs
//     if (!question || !option1 || !option2 || !option3 || !option4) {
//       alert('Please fill in all fields.');
//       return;
//     }
  
//     // Create the quiz question object
//     const quizQuestion = {
//       question: question,
//       options: [option1, option2, option3, option4],
//       answer: {
//         index: correctAnswerIndex,
//         text: [option1, option2, option3, option4][correctAnswerIndex - 1]
//       }
//     };
  
//     // Add the question to the array
//     quizQuestions.push(quizQuestion);
  
//     // Reset the form
//     document.getElementById('quizForm').reset();
  
//     // Display the updated array
//     // displayQuestions();
//     console.log(quizQuestions)
//   });

  // function displayQuestions() {
  //   const output = document.getElementById('output');
  //   output.textContent = JSON.stringify(quizQuestions, null, 2);
  // }  

function addQuestions() {

  

  console.log("hello working")
  var newQuestion = document.getElementById("newQuestion").value;
  var firstOption = document.getElementById("firstOption").value;
  var secondOption = document.getElementById("secondOption").value;
  var thirdOption = document.getElementById("thirdOption").value;
  var fourthOption = document.getElementById("fourthOption").value;
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var correctAnswer="";
  if (one.selected) {
    correctAnswer=firstOption
  }else if (two.selected) {
    correctAnswer=secondOption
  }else if (three.selected) {
    correctAnswer=thirdOption
  }else if(four.selected){
    correctAnswer=fourthOption
  }

  if (
    firstOption.trim() !== "" &&
    secondOption.trim() !== "" &&
    thirdOption.trim() !== "" &&
    fourthOption.trim() !== "" &&
    newQuestion.trim() !== ""
    // correctAnswer.trim() !== ""
  ) {
    var optionsArray = [firstOption, secondOption, thirdOption, fourthOption];
    var addedQuestion = {
      question: newQuestion,
      options: optionsArray,
      answer: correctAnswer,
    };
    let Questions = JSON.parse(localStorage.getItem("AllQuestions"));
    Questions.push(addedQuestion);
    localStorage.setItem("AllQuestions", JSON.stringify(Questions));
    console.log(Questions);

    location.reload();
  } else {
    alert("every space should be filled");
  }
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

// function allResult() {
//   let storedArray = JSON.parse(localStorage.getItem("userTests"));
//   storedArray.sort((a, b) => b.score - a.score);
//   var allResults = storedArray.sort((a, b) => b.score - a.score);
//   var table = document.getElementById("allResultsTable");
//   for (let i = 0; i < allResults.length; i++) {
//     var tr = document.createElement("tr");
//     table.append(tr);
//     var td = document.createElement("td");
//     tr.append(td);
//     td = i + 1;
//     var td1 = document.createElement("td");
//     tr.append(td1);

//     td1.innerText = allResults[i].name;
//     var td2 = document.createElement("td");
//     tr.append(td2);

//     for (let index = 0; index < allResults[i].questions.length; index++) {
//       let tr1 = document.createElement("tr");
//       td2.append(tr1);
//       let coloum = document.createElement("td");
//       tr1.append(coloum);
//       coloum.innerText = allResults[i].questions[index].question;
//     }

//     var td3 = document.createElement("td");
//     tr.append(td3);

//     for (let index = 0; index < allResults[i].questions.length; index++) {
//       let tr1 = document.createElement("tr");
//       td3.append(tr1);
//       let coloum = document.createElement("td");
//       tr1.append(coloum);
//       coloum.innerText = allResults[i].questions[index].options[0];
//     }

//     var td4 = document.createElement("td");
//     tr.append(td4);

//     for (let index = 0; index < allResults[i].questions.length; index++) {
//       let tr1 = document.createElement("tr");
//       td4.append(tr1);
//       let coloum = document.createElement("td");
//       tr1.append(coloum);
//       coloum.innerText = allResults[i].questions[index].options[1];
//     }
//     var td9 = document.createElement("td");
//     tr.append(td9);
//     td9.innerText = allResults[i].score;
//   }
// }

//
//
//
//
// Add Question Page LOGIC
//
//
//
//
