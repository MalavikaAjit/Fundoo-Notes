
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

var colab = "";
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
    registration(data)
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

  checkRequired([password, password2]);
  if (true) {
    let data = {
      "email": username.value,
      "password": password.value
    }
    resetPwd(data);
  }
}

function resetPwd(data) {

  postService('post', 'user/login', data)
    .then((res) => {
      return console.log('Success:', res);

    })
    .catch((err) => {
      console.log(err)
    })

}
function signin(data) {
  if (data.email !== '') {


    postService('post', '/user/login', data)
      .then(result => {

        localStorage.setItem("token", result.id);
        if (result.id) {
          window.location.href = 'dashboard.html';
          console.log("inside120")
        }


        return console.log('Success:', result);

      })
      .catch((err) => {
        console.log(err)
      })
  }

}
function registration(data) {

  if (data.email !== '') {

    postService('post', '/user/userSignUp', data)
      .then((res) => {
        if (res.data.success == true) {
          window.location.href = 'sign-in.html';
        }

        return console.log('Success:', res);


      })
      .catch((err) => {
        console.log(err)
      })

  }
}

function forgotmail(data) {

  servicereq('user/reset', 'post', data)

}

/****converting rgb to hexacode*/

function rgb2hex(orig) {
  var rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
}

const addNotes = (isArchive = false) => {
  const description = document.getElementById('note-text').value;
  const title = document.getElementById('note-title').value;
  const userValue = document.getElementById('searchValue').value;
  const color = rgb2hex(document.getElementById('note-text').style.backgroundColor);



  // console.log(JSON.stringify([obj]))
  if (description !== '' && title !== '') {

    let data = {
      "title": title,
      "description": description,
      "collaberators": [JSON.stringify(detailsArr)],
      "isArchived": isArchive,
      "color": color

    }
  postService('post', '/notes/addNotes', data)
      .then((res) => {
        console.log(res)
        getnote();

      })
      .catch((err) => {
        console.log(err)
      })

  } else {
    closeNotes();
  }
}
function archive(isArchive) {
  addNotes(isArchive);
}
/****get notes and display **/
const getnote = () => {
  const headerss = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  }
  getService('get', '/notes/getNotesList', {}, headerss)
    .then((res) => {
      console.log(res)
      let dataObj = res.data.data;
      let newNote = dataObj.filter(
        (i) => (i.isArchived || i.isDeleted) === false
      );
      localStorage.setItem("notes", JSON.stringify(newNote));
      displayNotes(newNote);
    })
    .catch((err) => {
      console.log(err)
    })
}

getnote();

/***delete note***/


function deleteNote(id) {
  let data = {
    noteIdList: [id],
    isDeleted: true
  }
  postService('post', '/notes/trashNotes', data)
    .then((res) => {
      console.log(res)
      getnote();

    })
    .catch((err) => {
      console.log(err)
    })
}

const getTrashNote = () => {
  getService('get', '/notes/getTrashNotesList', {})
    .then((res) => {
      console.log(res)
      let dataObj = res.data.data;
      let trashNote = dataObj.filter(
        (i) => (i.isDeleted) === true
      );
      displayTrashNotes(trashNote);
    })
    .catch((err) => {
      console.log(err)
    })
}
/*****to restore deleted notes****/
function restoreTrashNote(id) {
  let data = {
    noteIdList: [id],
    isDeleted: false

  }
  postService('post', '/notes/trashNotes', data)
    .then((res) => {
      console.log(res)
      getTrashNote();

    })
    .catch((err) => {
      console.log(err)
    })
}


/*****archive */
function archiveNote(id) {
  let data = {
    noteIdList: [id],
    isArchived: true

  }
  postService('post', '/notes/archiveNotes', data)
    .then((res) => {
      console.log(res)
      getnote();

    })
    .catch((err) => {
      console.log(err)
    })
}

const getArchnote = () => {
  getService('get', '/notes/getArchiveNotesList', {})
    .then((res) => {
      console.log(res)
      let dataObj = res.data.data;
      let archNote = dataObj.filter(
        (i) => (i.isArchived) === true
      );
      displayArchiveNotes(archNote);
    })
    .catch((err) => {
      console.log(err)
    })
}
/*****to restore archived notes****/

function unArchiveNote(id) {
  let data = {
    noteIdList: [id],
    isArchived: false

  }
  postService('post', '/notes/archiveNotes', data)
    .then((res) => {
      console.log(res)
      getArchnote();

    })
    .catch((err) => {
      console.log(err)
    })
}


/****color**/

function colourChangeNote(id, colorId) {
  document.getElementById('popUpModal').style.backgroundColor = colorId;
  document.getElementById('updatedTitle').style.backgroundColor = colorId;
  document.getElementById('updatedDescription').style.backgroundColor = colorId;
  let data = {
    noteIdList: [id],
    color: colorId
  }
  postService('post', '/notes/changesColorNotes', data)
    .then((res) => {
      console.log(res)
      getnote();

    })
    .catch((err) => {
      console.log(err)
    })
}

/*******update notes */

const updateNotes = (id) => {
  const title = document.querySelector('#updatedTitle ').value;
  const desc = document.querySelector('#updatedDescription ').value;
  const updateid = id;
  let data = {

    "noteId": updateid,
    "title": title,
    "description": desc,

  }
  postService('post', '/notes/updateNotes', data)
    .then((res) => {
      console.log(res)
      getnote();

    })
    .catch((err) => {
      console.log(err)
    })
}




/***collaborators  **/

var details;
var detailsArr = [];
var collabArr, displayCollabArr = [];
function collabreq(url, meth, data) {
  let innerHtml = "";
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      collabArr = result.data.details;
      for (let i = 0; i < collabArr.length; i++) {


        innerHtml += `
            <a href = "#" id="`+ i + `" onclick='addToCollabaratorList(id)' > ` + collabArr[i].email + `</a>`
        document.querySelector("#myUL").innerHTML = innerHtml
      }
    })

    .catch(error => {
      console.error('Error:', error);
    });
}
function addToCollabaratorList(i) {
  $("#searchValue").val('');
  detailsArr = [];
  detailsArr.push(collabArr[i]);
  console.log("str", detailsArr);
  let selectedEmail = collabArr[i].email;
  document.querySelector('#searchValue').value = selectedEmail
  displayCollabArr.push(selectedEmail[0]);
  console.log(displayCollabArr)

}

function displayCollabListInMain() {
  colab = document.getElementById("display-icon-main");
  let val = "";
  for (let i = 0; i < displayCollabArr.length; i++) {
    val += displayCollabArr[i].toUpperCase() + '  ';
  }
  colab.innerHTML = val ? val : '';


}

const userValue = document.getElementById('searchValue').value;
function searchUser(userValue) {

  if (userValue !== '' && userValue.length > 2) {
    let data = {
      "searchWord": userValue,
      "collaborators": JSON.stringify([userValue])
    };
    collabreq('/user/searchUserList', 'post', data);
  }
}


/***collaborators  for display notes **/


const userValueDisplay = document.getElementById('searchValueDisplay').value;
function searchUserDisplay(userValueDisplay) {

  if (userValueDisplay !== '' && userValueDisplay.length > 2) {
    let data = {
      "searchWord": userValueDisplay,
      "collaborators": JSON.stringify([userValueDisplay])
    };
    collabreqDisplay('/user/searchUserList', 'post', data);
  }
}

function collabreqDisplay(url, meth, data) {
  let innerHtml = "";
  fetch(baseUrl + url, {
    method: meth,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      collabArr = result.data.details;
      for (let i = 0; i < collabArr.length; i++) {

        innerHtml += `
            <a href = "#" id="`+ i + `" onclick='addToCollabaratorListDisplay(id)' > ` + collabArr[i].email + `</a>`
        document.querySelector("#myULDisplay").innerHTML = innerHtml
      }
    })

    .catch(error => {
      console.error('Error:', error);
    });
}
function addToCollabaratorListDisplay(i) {
  $("#searchValueDisplay").val('');
  detailsObj = {};
  detailsArr = [];
  detailsObj = collabArr[i];
  detailsArr.push(collabArr[i]);
  console.log("str", detailsArr);
  let selectedEmail = collabArr[i].email;
  document.querySelector('#searchValueDisplay').value = selectedEmail
  displayCollabArr.push(selectedEmail[0]);
  console.log(displayCollabArr)

}

function displayNotesCollab(i) {


  console.log(i);

  postService('post', "/notes/" + i + "/AddcollaboratorsNotes", detailsObj)
    .then((res) => {
      console.log(res)
      getnote();

    })
    .catch((err) => {
      console.log(err)
    })

}