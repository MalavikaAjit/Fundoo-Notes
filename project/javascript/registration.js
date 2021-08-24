// import {registration} from '../service/sevice';
// var axios = require("axios");
// const axios = require("axios");

// const submit = document.getElementById("submit");
// submit.addEventListener("click", validate);
// function validate(e){
//     e.preventDefault();
//     var input_name =document.getElementById('form');
//        var nameRegex = /^[A-Za-z]{1,32}$/;
//         if (!input_name.value) {
//             $("#feedback_first").text('Please enter a value');
//         }else if(nameRegex.test(input_name.value)){
//             $("#feedback_first").text('match');
//         }else{
//             $("#feedback_first").text('Enter a valid input');
//         }

//    }
// submit = document.getElementById("submit");
// submit.addEventListener("click", validate);
// function validate_pass(e){
//        e.preventDefault();
//        var input_pass =document.getElementById('form3');
//           var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
//            if (!input_pass.value) {
//                $("#feedback_pass").text('Please enter a value');
//            }else if(passRegex.test(input_pass.value)){
//                $("#feedback_pass").text('match');
//            }else{
//                $("#feedback_pass").text('Enter a valid input');
//            }
   
//       }   

// const main_form = document.getElementById('myform')
// const form = document.getElementById('form');
// const form1 = document.getElementById('form1');
// const form2 = document.getElementById('form2');
// const form3 = document.getElementById('form3');
// const form4 = document.getElementById('form4');
// console.log(document.getElementById('form4'));
// console.log(document.getElementById('form5'));


// main_form.addEventListener("submit",(e) => {
    // e.preventDefault();
//     checkInputs();
// });
// $(document).on("keyup", "#form1", function(e) {
               
//     const last_name=form1.value.trim();
//     if(last_name===''){
//         $("#feedback_last").text('Please enter a value');
//     }else if(isLastName(last_name)){
//         $("#feedback_last").text('match');
//     }else{
//          $("#feedback_last").text('Enter a valid input');
//      }
//         });



// $("#submit").click(function(){

//     var errorMessage = "";

//     // var errorMessage = "";

//     if ($("#form").val() == "") {

//         errorMessage += "<br>first_Nmae";
//     }
//         if ($("#form1").val() == "") {

//         errorMessage += "<br>last_name";
//     }

//         if ($("#form2").val() == "") {

//         errorMessage += "<br>username";
//     }

//     if ($("#form3").val() == "") {

//         errorMessage += "<br>password";
//     }

//     if ($("#form4").val() == "") {

//         errorMessage += "<br>confirm";
//     }


    //     if ($("#passwordconfirm").val() == "") {

    //     errorMessage += "<br>Confirm password";
    // }


    // if (errorMessage != "") {
    //     errorMessage += "<p>The following field(s) are missing" + errorMessage;
    // }	


    // if (isEmail($("#email").val()) == false ) {
    //     errorMessage += "<p>Your Email address is not valid</p>";
    // }

    // if ($.isNumeric($("#phone").val()) == false) {
    //     errorMessage += "<p> Your phone Number is not valid</p>";
    // }

    // if ($("#password").val() != $("#passwordconfirm").val()) {
    //     errorMessage += "<p> Your Password does not match</p>";
    // }
    
//     if (errorMessage != "") {
//         $("#errorMessage").html(errorMessage);
//     } else {
//         // $("#successMessage").show();
//         registration;
        
//         $("#errorMessage").hide();
//     }

// });





















// $(document).on('click', '#submit', function(e) {

// //function checkInputs(e){
// 	e.preventDefault();
//     const first_name=form.value.trim();
//     const last_name=form1.value.trim();
//     const username=form2.value.trim();
//     const password=form3.value.trim();
//     const confirm=form4.value.trim();
    
    
  
        
//           if(first_name===''){
//             $("#feedback_first").text(' enter first name');
//         }else if(isFirstName(first_name)){
//              $("#feedback_first").text('match');
//             // showSuccess(first_name);
//         }else{
//              $("#feedback_first").text('Enter a valid first name');
//             // showError(first_name);
//         }
    
    
   
        
//         if(last_name===''){
//             $("#feedback_last").text(' enter last name');
//         }else if(isLastName(last_name)){
//             $("#feedback_last").text('match');
//         }else{
//              $("#feedback_last").text('Enter a valid name');
//          }
      

    
       
//      if(username===''){
//         $("#feedback_user").text(' enter a value');
//     }else if(isUsername(username)){
//         $("#feedback_user").text('match');
//     }else{
//          $("#feedback_user").text('Enter a valid imail');
//     }





   
//      if(password===''){
//         $("#feedback_pass").text(' enter a value');
//     }else if(isPassword(password)){
//         $("#feedback_pass").text('match');
//     }else{
//          $("#feedback_pass").text('Enter a valid password');
//      }



    
    
//      if(confirm===''){
//         $("#feedback_confirm").text(' enter a value');
//      }else if (password===confirm){
//         $("#feedback_confirm").text('match');
//      }else{
//         $("#feedback_confirm").text(' enter a matching password');
//      }

// });

// function isFirstName(first_name){
//     return /^[A-Za-z]{1,32}$/.test(first_name);
// }
// function isLastName(last_name){
//     return /^[A-Za-z]{1,32}$/.test(last_name);
// }

// function isPassword(password){
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(password);
// }
// function isUsername(username){
//     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)
// }
// function isPhone(phone){
//     return /[2-9]{1}\d{2}/;
// }

/********password-toggle**/
$(document).on('change', '.password-toggle', function(e) {
// const passwordToggle = document.querySelector('.password-toggle')

// passwordToggle.addEventListener('change', function() {
  const password = document.querySelector('.showPassword')
  
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
  
  
})



/***toggle sidebar**/

$( document ).ready(function() {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    
    closeBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("open");
    });
} );


/****toggle text field***/


function openNotes(){
  // $('#form').addClass('form-open');
      document.querySelector("#note-title").style.display = "block";
      document.querySelector("#form-buttons").style.display = "block";
}

function closeNotes(){
  document.querySelector("#note-title").style.display = "none";
  document.querySelector("#form-buttons").style.display = "none";
  document.getElementById('note-text').value='';
  document.getElementById('note-title').value='';
}


const placeholder = document.querySelector("#placeholder");
const notesField = document.querySelector("#notes");

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || []; 
  const hasNotes = notes.length > 0;
  placeholder.style.display = hasNotes ? 'none' : 'flex';
   notesField.innerHTML = notes.map(note => `
      <div class="note">
        <div class="note-title">${note.title}</div>
        <div class="note-text">${note.description}</div>
        <div class="toolbar-container">
          <div class="toolbar">         
          <i class="fas fa-trash" id="${note.id}" onclick="deleteNote(id)"></i>  
         
          <i class="material-icons">more_vert</i> 
          <i class="material-icons">archive</i>
          <i class="material-icons">palette</i> 
          <i class="material-icons">person_add_alt</i> 
          <i class="material-icons">add_alert</i>       
          </div>
        </div>
      </div>
   `).join("");
}
displayNotes();



/*****modal for collaborators***/

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})





//add onload 







