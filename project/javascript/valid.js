// import {registration} from '../service/sevice'
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

const head = {
  headers: {
          // 'Accept': 'application/json',charset=UTF-8',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
}



function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-outline error';
  const small = formControl.querySelector('small');
  small.innerText = message;
  error = true;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-outline success';
  error = false;
}
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${input.id} required`);
    }
    else {
      showSuccess(input);
    }

  });
}

const validate = () => {
  checkRequired([firstName, lastName, username, password, password2]);    //validatenotes() check([description])
  if (true) {
    let data = {                         //title &description
      "firstName": firstName.value,
      "lastName": lastName.value,
      "email": username.value,
      "service": "advance",
      "password": password.value
    }
    registration(data)              //note(data)
  }

}

const signvalidate = () => {

  checkRequired([username, password]);
  if (true) {
    let data = {
      "email": username.value,
      "password": password.value
    }
    signin(data);
  }
}


const forgotValidate = () => {

  checkRequired([username]);
  if (true) {
    let data = {
      "email": username.value,
    }
    forgotmail(data);
  }
}

const resetValidate = () => {

  checkRequired([ password, password2]);
  if (true) {
    let data = {
      "email": username.value,
      "password": password.value
    }
    resetPwd(data);
  }
}

function resetPwd(data) {

  servicereq('user/reset', 'post', data)

}
function signin(data) {

  var res =servicereq('user/login', 'post', data, 'login');
  console.log(r)

}
function registration(data) {           //notes(data)

  servicereq('user/userSignUp', 'post', data)       //notesreq('root','post',data)

}

function forgotmail(data) {

  servicereq('user/reset', 'post', data)

}

const getnote =()=>{
  servicereq('/notes/getNotesList', 'get', {})
}





function servicereq(url, meth, data, page) {
  console.log(head);
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify()
  })
    .then(response => response.json()) //resolve promises
    .then(result => {
      if (page === "login") {               
        localStorage.setItem("token", result.id);
        document.location.href('dashboard.html')
      }
      getnote();
      return console.log('Success:', result);

    })
    .catch(error => {
      console.error('Error:', error);
    });
}


/*****notes***/





const addNotes = () => {
  const description = document.getElementById('note-text').value;
  const title = document.getElementById('note-title').value;
  
  //validatenotes() check([description])
  if(description !== '' && title !== ''){
    let data = {                         //title &description
      "title": title,
      "description": description
    }
    // notesreq('notes/addNotes','post', data)
    servicereq('notes/addNotes','post', data)
  }
}
 

// function notesValidation(data) {           //notes(data)
  // let data = {                         //title &description
  //   "title": '',
  //   "description": description
  // }
//   if(document.getElementById('note-text'))
//  var res = notesreq('notes/addNotes','post', data)       //notesreq('root','post',data)

// }


// function notesreq(url, meth, data) {
//   fetch(baseUrl + url, {
//     method: meth,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8',
//       'Authorization': localStorage.getItem('token')
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json()) //resolve promises
//     .then(result => {               //result from the previous line //note->124 to 126 x
//       return console.log('Success:', result);

//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }
