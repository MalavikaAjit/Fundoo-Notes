// import {registration} from '../service/sevice'
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

// const head = {
//   headers: {
//           // 'Accept': 'application/json',charset=UTF-8',
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem('token')
//         }
// }



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

  servicereq('user/login', 'post', data, 'login');
  

}
function registration(data) {           //notes(data)

  servicereq('user/userSignUp', 'post', data)       //notesreq('root','post',data)

}

function forgotmail(data) {

  servicereq('user/reset', 'post', data)

}


function servicereq(url, meth, data, page) {  
  
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json()) //resolve promises
    .then(result => {
      if (page === "login") {               
        localStorage.setItem("token", result.id);
        window.location.href = 'dashboard.html';
      }
      return console.log('Success:', result);

    })
    .catch(error => {
      console.error('Error:', error);
    });
}







/*****notes***/

function addNotesreq(url, meth, data, page) {  ////req for add notes 
  
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json()) //resolve promises
    .then(result => {
      if(page === "addNote")
      {
         getnote();
         
       }
      return console.log('Success:', result);

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function rgb2hex(orig){
  var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
  return (rgb && rgb.length === 4) ? "#" +
   ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
 }

const addNotes = (isArchive=false) => {
  const description = document.getElementById('note-text').value;
  const title = document.getElementById('note-title').value;
  const userValue = document.getElementById('searchValue').value;
 const color =  rgb2hex(document.getElementById('note-text').style.backgroundColor);
  let obj ={"firstName": '',
      "lastName": '',
      "email": userValue
  }
  //validatenotes() check([description])
  console.log(JSON.stringify([obj]))
  if(description !== '' && title !== ''){
    let data = {                         //title &description
      "title": title,
      "description": description,
      "collaberators":[obj],
      "isArchived":isArchive,
      "color": color
      
      }
    // notesreq('notes/addNotes','post', data)
    addNotesreq('notes/addNotes','post', data,"addNote")
    }else{
    closeNotes();
  }
}
function archive(isArchive)
{
  addNotes(isArchive);
}

const getnote =()=>{
  getNotereq('/notes/getNotesList', 'get')
}


function getNotereq(url, meth) {     //req for get note 
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    // body: JSON.stringify(data)
  })
    .then(response => response.json()) //resolve promises
    .then(result => {  
      let dataObj = result.data.data; 
      let newNote = dataObj.filter(
        (i) => (i.isArchived || i.isDeleted) === false
      );         
        localStorage.setItem("notes", JSON.stringify(newNote));
        displayNotes();
        // window.location.href = 'dashboard.html';
      return console.log('Success:', result.data.data);

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

getnote();

/***delete note***/


function deleteNote(id){
  let data = {
    noteIdList: [id],
    isDeleted: true
}
deleteNotereq('/notes/trashNotes' , 'post', data)
}

function deleteNotereq(url, meth,data) {  
  
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response =>  
    {
      getnote();
        return console.log('notes deleted');
        
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

/***collaborators **/
// const emailList = document.querySelector("#myUL");

function collabreq(url, meth, data) {  ////req for add notes 
  
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json()) //resolve promises
    .then(result => {
       collabArr = result.data.details;
       for (let details of collabArr) {
        // if (collabArr.length !== '') {
            innerHtml += `
            <a href = "#"> ${details.email}</a>`
        document.querySelector("#myUL").innerHTML = innerHtml
        }
    
      // let collabresult = collabArr.map(e => e.email)
      //    console.log('Success:', collabresult);
        //  emailList.innerHTML = collabArr.map(details =>
        //   innerHTML += 
        //   `<a href = "#"> ${details.email}</a>
        //   `).join("");
        //   document.querySelector('#searchValue').innerHTML = innerHtml
      // localStorage.setItem("collab", JSON.stringify(collabresult));
    })
    // .then(re => {
    //   console.log( re);
    // })
     .catch(error => {
      console.error('Error:', error);
    });
}

function addCollab(e){
  let email = document.getElementById('searchValue').value;
  console.log(email);
  // console.log($(this).text());
  // $("#searchValue").val($(collabArr).text());
}

// $(document).on("click","#myUL a", function(){
//   console.log($(this).text());
//   $("#searchValue").val($(this).text());
// });


// const searchUser = () => { 
//   //validatenotes() check([description])
//   if(description !== '' && title !== ''){
//     let data = {
//       searchWord: e.target.value,
//     };
//     // notesreq('notes/addNotes','post', data)
//     addNotesreq('notes/addNotes','post', data,"addNote")
//     }else{
//     closeNotes();
//   }
// }
const userValue = document.getElementById('searchValue').value;
function searchUser(userValue){
 
 if(userValue !== '' && userValue.length > 2){
  let data = {
    "searchWord": userValue,
    "collaborators": JSON.stringify([userValue])
    // collaborators: [{
    //   "firstName": e.firstName,
    //   "lastName": e.lastName,
    //   "email": e.email
    // }],
  };
  collabreq('/user/searchUserList','post',data);
 }
//  console.log(some_fun);
}


/*****archive */
function archiveNote(id){
  let data = {
    noteIdList: [id],
    isArchived: true
    
}
archiveNotereq('/notes/archiveNotes' , 'post', data)
}

function archiveNotereq(url, meth,data) {  
  
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response =>  
    {
      getnote();
        return console.log('notes archived');
        
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



const getArchnote =()=>{
  getArchiveNotereq('/notes/getArchiveNotesList', 'get')
}


function getArchiveNotereq(url, meth) {     //req for get note 
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    // body: JSON.stringify(data)
  })
    .then(response => response.json()) //resolve promises
    .then(result => {  
      let dataObj = result.data.data; 
      let archNote = dataObj.filter(
        (i) => (i.isArchived ) === true
      );         
        localStorage.setItem("archiveNotes", JSON.stringify(archNote));
        displayArchiveNotes();
        // window.location.href = 'dashboard.html';
      return console.log('Success:', result.data.data);

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

/****color**/

function colourChangeNote(id , colorId){
  let data = {
    noteIdList: [id],
    color:colorId
  }
  changeColourReq('/notes/changesColorNotes','post',data)
}

function changeColourReq(url, meth,data) {  
  
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response =>  
    {
      getnote();
        return console.log('colour changed');
        
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

/*******update notes */

const updateNotes = (id) => {
  const title = document.querySelector('#updatedTitle ').value;
  const discripption = document.querySelector('#updatedDescription ').value;
  const updateid = id;
  let data = {

      "noteId": updateid,
      "title": title,
      "description": discripption,
  }
  updatereq('/notes/updateNotes','post',data)
 }

function updatereq(url, meth,data) {  
  
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response =>  
    {
      getnote();
        
    })
    .catch(error => {
      console.error('Error:', error);
    });
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
 