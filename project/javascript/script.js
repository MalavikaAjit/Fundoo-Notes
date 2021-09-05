/********password-toggle**/
$(document).on("change", ".password-toggle", function (e) {
  // const passwordToggle = document.querySelector('.password-toggle')

  // passwordToggle.addEventListener('change', function() {
  const password = document.querySelector(".showPassword");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

/***toggle sidebar**/

$(document).ready(function () {
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});

/****toggle text field***/

function openNotes() {
  // $('#form').addClass('form-open');
  document.querySelector("#note-title").style.display = "block";
  document.querySelector("#form-buttons").style.display = "block";
}

function closeNotes() {
  document.querySelector("#note-title").style.display = "none";
  document.querySelector("#form-buttons").style.display = "none";
  document.getElementById("note-text").value = "";
  document.getElementById("note-title").value = "";
  document.getElementById("note-text").style.background = "none";
  document.getElementById("note-title").style.background = "none";
  document.getElementById("form-container").style.background = "none";
  document.getElementById("form-close-button").style.background = "none";
}

const placeholder = document.querySelector("#placeholder");
const notesField = document.querySelector("#notes");

function displayNotes(newnote) {
  // const notes = JSON.parse(localStorage.getItem('notes')).reverse() || [];
  const notes = newnote;
  const hasNotes = notes.length > 0;
  placeholder.style.display = hasNotes ? "none" : "flex";
  notesField.innerHTML = notes
    .map(
      (note) => `
   
      <div class="note" style="background: ${note.color};">
      
        <div class="note-title"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" onclick=" openPopUp('${note.title}','${note.description}','${note.id}','${note.color}')">${note.title}</div>
        <div class="note-text">${note.description}</div>    
        <div class="addnote-collab" id="addnote-collab-h"></div>      
        <div class="toolbar-container">
          <div class="toolbar">         
          <i class="fas fa-trash" id="${note.id}" onclick="deleteNote(id)"></i>  
         
          <i class="material-icons">more_vert</i> 
          <i class="material-icons" id="${note.id}" onclick="archiveNote(id)">archive</i>
          <i class="material-icons  dropdown "  id="dropdownMenuButton" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
          palette
          <div class="dropdown-menu color-tooltip" aria-labelledby="dropdownMenuButton">
          <span class="color_drop">
                      <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ffffff')"id="${note.id}" style="background-color:#ffffff;"></a>

                     </span>
                     <span  class="color_drop">
                      <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#a7ffeb')" id="${note.id}" style="background-color:#a7ffeb;" ></a>

                     </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#d7aefb')" id="${note.id}"style="background-color:#d7aefb;"></a>

                       </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ccff90')" id="${note.id}" style="background-color: #ccff90;"></a>
                       </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#fbbc04')" id="${note.id}" style="background-color:#fbbc04;" ></a>

                       </span>
                         <span  class="color_drop">
                          <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#f28b82')" id="${note.id}" style="background-color:#f28b82;"></a>
                         </span>
                       
          </div>
          </i> 
          <i class="material-icons">person_add_alt</i> 
          <i class="material-icons">add_alert</i>       
          </div>
        </div>
      </div>
   `
    )
    .join("");
}
displayNotes(newnote);

function displayArchiveNotes(displaynote) {
  // const notes = JSON.parse(localStorage.getItem('archiveNotes')) || [];
  const notes = displaynote;
  const hasNotes = notes.length > 0;
  placeholder.style.display = hasNotes ? "none" : "flex";
  notesField.innerHTML = notes
    .map(
      (note) => `
     
     <div class="note style="background: ${note.color}; ">
     <div class="note-title">${note.title}</div>
     <div class="note-text">${note.description}</div>          
     <div class="toolbar-container">
       <div class="toolbar">         
       <i class="fas fa-trash" id="${note.id}" onclick="deleteNote(id)"></i>  
      
       <i class="material-icons">more_vert</i> 
       <i class="material-icons"  id="${note.id}" onclick="unArchiveNote(id)">archive</i>
       <i class="material-icons">palette</i> 
       <i class="material-icons">person_add_alt</i> 
       <i class="material-icons">add_alert</i>       
       </div>
     </div>
   </div>
     
   `
    )
    .join("");
}

function displayTrashNotes(displaynote) {
  // const notes = JSON.parse(localStorage.getItem('archiveNotes')) || [];
  const notes = displaynote;
  const hasNotes = notes.length > 0;
  placeholder.style.display = hasNotes ? "none" : "flex";
  notesField.innerHTML = notes
    .map(
      (note) => `
     
     <div class="note style="background: ${note.color}; ">
     <div class="note-title">${note.title}</div>
     <div class="note-text">${note.description}</div>          
     <div class="toolbar-container">
       <div class="toolbar">         
       <i class="fas fa-trash" id="${note.id}" onclick="deleteNote(id)"></i>  
      
       <i class="material-icons">more_vert</i> 
       <i class="material-icons" id="${note.id}" onclick="archiveNote(id)">archive</i>
       <i class="material-icons">palette</i> 
         
       <i class="material-icons">person_add_alt</i> 
       <i class="material-icons">add_alert</i>       
       </div>
     </div>
   </div>
     
   `
    )
    .join("");
}

function colourChange(colorCode) {
  document.getElementById("form-container").style.backgroundColor = colorCode;
  document.getElementById("note-title").style.backgroundColor = colorCode;
  document.getElementById("note-text").style.backgroundColor = colorCode;
  document.getElementById("form-close-button").style.backgroundColor =
    colorCode;
}

function removeTextBox() {
  $("#form-container").hide();
}

// function openModal(){
//   $('#exampleModal2').modal('toggle')
//   openPopUp(tittle,discription);
// }

function openPopUp(title, description, id, color) {
  const popUp = document.getElementById("popUp-div");

  popUp.innerHTML = "";
  if (title != null) {
    popUp.innerHTML = `
<div class="modal fade " id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true" >
      <div class="modal-dialog collab_box" role="document">
        <div class="modal-content" style="background: ${color};" id="popUpModal">
          <div class="modal-header collab_header">           
          </div>
          <div class="modal-body collab_body">
            <div class="ownerAcnt">
              <span class="">
              </span>
              <input id="updatedTitle" class="otherUserInput  mr-sm-2  dropbtn dropdown-toggle" type="text" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" value='${title}' placeholder="text" aria-label="Search" style="background: ${color};">
            </div>
            <div class="otherUser"> 
              <span class=" ">
              </span>

              <div class="dropdown show">
                <input id="updatedDescription" class="otherUserInput  mr-sm-2  dropbtn dropdown-toggle" type="text" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" value='${description}' placeholder="title" aria-label="Search" style="background: ${color};">            
              </div>
            </div>
          </div>
          <div class="modal-footer collab_footer_popup">
            <div class="toolbar_popup">
              <i class="material-icons">more_vert</i>
              <i class="material-icons" id="${id}" onclick="archiveNote(id)" data-dismiss="modal" >archive</i>
              <i class="material-icons  dropdown "  id="dropdownMenuButton" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
              palette

              <div class="dropdown-menu color-tooltip" aria-labelledby="dropdownMenuButton">
          <span class="color_drop">
                      <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ffffff')"id="${id}" style="background-color:#ffffff;"></a>

                     </span>
                     <span  class="color_drop">
                      <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#a7ffeb')" id="${id}" style="background-color:#a7ffeb;" ></a>

                     </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#d7aefb')" id="${id}"style="background-color:#d7aefb;"></a>

                       </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ccff90')" id="${id}" style="background-color: #ccff90;"></a>
                       </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#fbbc04')" id="${id}" style="background-color:#fbbc04;" ></a>

                       </span>
                         <span  class="color_drop">
                          <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#f28b82')" id="${id}" style="background-color:#f28b82;"></a>
                         </span>
                       
          </div>
              
              </i>
            
              <i class="material-icons">person_add_alt</i>
              <i class="material-icons">add_alert</i>
            </div>
            <div class="savebtn_popup">
              <button type="button" class="btn btn-secondary btn_cancel" data-dismiss="modal" onclick="updateNotes('${id}')">Save</button>
            </div>

          </div>
        </div>
      </div>
    </div>
`;
  }
}

/*****modal for collaborators***/

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
