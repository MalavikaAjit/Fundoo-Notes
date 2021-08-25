

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
  const userValue = document.getElementById('searchValue').value;
  let firstLetter = userValue.charAt(1);
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

/******/

// function addCollabIcon(){
//   const userValue = document.getElementById('searchValue').value;
//   let firstLetter = userValue.charAt(1);
//  console.log(userValue.charAt(1));
// } <div class="collab_icon">${firstLetter}</div>

// function displayNotesPopup(){
//   array.forEach(element => {
//     var popup = ` <div class="note" onclick="noteBox()"></div>`
//   });
// }

// function noteBox(){
//  var notesField = `
//   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog collab_box" role="document">
//     <div class="modal-content">
//       <div class="modal-header collab_header">
//         <h5 class="modal-title" id="exampleModalLabel"> Collaborators</h5>
//       </div>
//       <div class="modal-body collab_body">
//           <div class="ownerAcnt">
//             <span class=" mailAddIcon">
//               <i class="fas fa-user-plus"></i>
//               </span>
//            <span>malavika ajit <br>abcmalavika@gmail.com</span>
//           </div>
//           <div class="otherUser">
//             <span class=" mailAddIcon">
//               <i class="fas fa-user-plus"></i>
//               </span>
            
//             <div class="dropdown show">
//               <input id="searchValue" class="otherUserInput  mr-sm-2  dropbtn dropdown-toggle" type="search" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" oninput="searchUser()" placeholder="Person or email to share with" aria-label="Search">
//               <!-- <a class="  dropdown-toggle" href="#" role="" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Dropdown link
//               </a> -->
            
//               <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="myUL">
//                 <a class="dropdown-item" href="#">Action</a>
//                 <a class="dropdown-item" href="#">Another action</a>
//                 <a class="dropdown-item" href="#">Something else here</a>
//               </div>
//             </div>
//           </div>
//       </div>
//       <div class="modal-footer collab_footer">
//         <button type="button" class="btn btn-secondary btn_cancel" data-dismiss="modal" onclick=" addNotes(); addCollabIcon(); ">Save</button>
//         <!-- <button type="button" class="btn btn-primary btn_save" onclick="addNotes()">Save</button> -->
//       </div>
//     </div>
//   </div>
// </div>

//   `
// }



