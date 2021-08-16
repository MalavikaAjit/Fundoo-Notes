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

const main_form = document.getElementById('myform')
const form = document.getElementById('form');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
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
$(document).on('click', '#submit', function(e) {

//function checkInputs(e){
	e.preventDefault();

    // const first_name=form.value.trim();
    // const last_name=form1.value.trim();
    // const username=form2.value.trim();
    // const password=form3.value.trim();
    // const confirm=form4.value.trim();
    
    
    if(document.getElementById("form")!=null){
        const first_name=form.value.trim();
          if(first_name===''){
            $("#feedback_first").text('Please enter a value');
        }else if(isFirstName(first_name)){
             $("#feedback_first").text('match');
            // showSuccess(first_name);
        }else{
             $("#feedback_first").text('Enter a valid input');
            // showError(first_name);
         }
    }
    
    if(document.getElementById("form1")!=null){
        const last_name=form1.value.trim();
        if(last_name===''){
            $("#feedback_last").text('Please enter a value');
        }else if(isLastName(last_name)){
            $("#feedback_last").text('match');
        }else{
             $("#feedback_last").text('Enter a valid input');
         }
    }    

    if(document.getElementById("form2")!=null){
        const username=form2.value.trim();
     if(username===''){
        $("#feedback_user").text('Please enter a value');
    }else if(isUsername(username)){
        $("#feedback_user").text('match');
    }else{
         $("#feedback_user").text('Enter a valid input');
    }
}



if(document.getElementById("form3")!=null){
    const password=form3.value.trim();
     if(password===''){
        $("#feedback_pass").text('Please enter a value');
    }else if(isPassword(password)){
        $("#feedback_pass").text('match');
    }else{
         $("#feedback_pass").text('Enter a valid input');
     }
}

if(document.getElementById("form4") && document.getElementById("form3")!=null){
    const confirm=form4.value.trim();
    const password=form3.value.trim();
     if(confirm===''){
        $("#feedback_confirm").text('Please enter a value');
     }else if (password===confirm){
        $("#feedback_confirm").text('match');
     }else{
        $("#feedback_confirm").text('Please enter a value');
     }
}
});

function isFirstName(first_name){
    return /^[A-Za-z]{1,32}$/.test(first_name);
}
function isLastName(last_name){
    return /^[A-Za-z]{1,32}$/.test(last_name);
}

function isPassword(password){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(password);
}
function isUsername(username){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)
}
function isPhone(phone){
    return /[2-9]{1}\d{2}/;
}


// showError=(first_name)=>{
//     document.getElementById(first_name).addClass("error");
//     $("#feedback_first").text('Enter a valid input');
// }
// showSuccess=(first_name)=>{
//     document.getElementById(first_name).removeClass("error");
//     $("#feedback_first").text('match');
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


$(document).on('click', '#sign-in #submit', function(e) {

    //function checkInputs(e){
        e.preventDefault();
        const username=form2.value.trim();
    
    
         if(username===''){
            $("#feedback_user").text('Please enter a value');
        }else if(i){
            $("#feedback_user").text('match');
        }else{
             $("#feedback_user").text('Enter a valid input');
         }
    


}