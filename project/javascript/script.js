var notes;
var collabModalForDisplayNotesHTML;
/********password-toggle**/
$(document).on("change", ".password-toggle", function (e) {
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
  document.querySelector("#note-title").style.display = "block";
  document.querySelector("#form-buttons").style.display = "block";
}

function closeNotes() {
  document.querySelector("#note-title").style.display = "none";
  document.querySelector("#form-buttons").style.display = "none";
  document.getElementById("note-text").value = "";
  document.getElementById("note-title").value = "";
  /*******************clearing the content**************/
  document.getElementById("note-text").style.background = "none";
  document.getElementById("note-title").style.background = "none";
  document.getElementById("form-container").style.background = "none";
  document.getElementById("form-close-button").style.background = "none";
  document.getElementById("display-icon-main").innerHTML = "";
  document.getElementById("searchValue").value = "";
  document.getElementById("display-avatar").style.display = "none";
}

const placeholder = document.querySelector("#placeholder");
const notesField = document.querySelector("#notes");

function displayNotes(newnote) {
  var nHTML = "";
  notes = newnote;
  console.log("notesssss", notes);
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].isDeleted == false && notes[i].isArchived == false) {
      let displayEmail = [];
      let resCollaberators = [];

      resCollaberators = notes[i].collaborators;
      if (resCollaberators !== undefined && resCollaberators.length > 0) {
        for (let j = 0; j < resCollaberators.length; j++) {
          displayEmail.push(resCollaberators[j].email);
        }
      }
      let colHTML = ``;
      for (let j = 0; j < displayEmail.length; j++) {
        colHTML +=
          `<div style="list-style-type:none" class="display-collab-letter mr-2">` +
          displayEmail[j].charAt(0).toUpperCase() +
          `</div>`;
      }
      nHTML +=
        `<div class="note" style="background: ${notes[i].color};">
      
        <div class="note-title"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" onclick=" openPopUp('${i}')">${notes[i].title}</div>
        <div class="note-text">${notes[i].description}</div>` +
        `<div class="display-collab-icon">
                      <div class="display-icon" >` +
        colHTML +
        `</div>
                    </div>` +
        ` <div class="toolbar-container">
                 <div class="toolbar">         
                 <i class="fas fa-trash" id="${notes[i].id}" onclick="deleteNote(id)"></i>  
                
                 <i class="material-icons">more_vert</i> 
                 <i class="material-icons" id="${notes[i].id}" onclick="archiveNote(id)">archive</i>
                 <i class="material-icons  dropdown "  id="dropdownMenuButton" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                 palette
                 <div class="dropdown-menu color-tooltip" aria-labelledby="dropdownMenuButton">
                 <span class="color_drop">
                             <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ffffff')"id="${notes[i].id}" style="background-color:#ffffff;"></a>
       
                            </span>
                            <span  class="color_drop">
                             <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#a7ffeb')" id="${notes[i].id}" style="background-color:#a7ffeb;" ></a>
       
                            </span>
                              <span  class="color_drop">
                               <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#d7aefb')" id="${notes[i].id}"style="background-color:#d7aefb;"></a>
       
                              </span>
                              <span  class="color_drop">
                               <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ccff90')" id="${notes[i].id}" style="background-color: #ccff90;"></a>
                              </span>
                              <span  class="color_drop">
                               <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#fbbc04')" id="${notes[i].id}" style="background-color:#fbbc04;" ></a>
       
                              </span>
                                <span  class="color_drop">
                                 <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#f28b82')" id="${notes[i].id}" style="background-color:#f28b82;"></a>
                                </span>
                              
                 </div>
                 </i> 
                 <i class="material-icons" type="button" class="btn btn-primary" data-toggle="modal"   data-target="#exampleModal3"  onclick="collabPopup('${notes[i].id}')">person_add_alt</i>
                 <i class="material-icons">add_alert</i>       
                 </div>
               </div>
             </div>
          `;
    }
  }
  document.getElementById("notes").innerHTML = nHTML;
}
displayNotes(newnote);

function collabPopup(i) {
  console.log("hellooo", i);
  document.getElementById("collabDisplayNotes").innerHTML = "";
  collabModalForDisplayNotesHTML = `
<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog collab_box" role="document">
        <div class=" contentDisplayCollab">
          <div class="modal-header collab_header">
            <h5 class="modal-title" id="exampleModalLabel">Collaborators New</h5>
          </div>
          <div class="modal-body collab_body">
            <div class="ownerAcnt">
              <span class="mailAddIcon">
                <i class="fas fa-user-plus"></i>
              </span>
              <span class="ownerMailId">abcmalavika@gmail.com</span>
            </div>
            <div class="otherUser">
              <span class="mailAddIcon">
                <i class="fas fa-user-plus"></i>
              </span>

              <div class="dropdown droplist show">
              <input id="searchValueDisplay" class="otherUserInput mr-sm-2 dropbtn dropdown-toggle" type="search"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              oninput="searchUserDisplay(event.target.value)" placeholder="Person or email to share with"
              aria-label="Search" autocomplete="off" />
           
              

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="myULDisplay">
                  <a class="dropdown-item" href="#"></a>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer collab_footer" id="saveButtonForDisplay">
           
              <button type="button" class="btn btn-primary btn_save" data-dismiss="modal"
              onclick="displayNotesCollab('${i}')">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
`;
  document.getElementById("collabDisplayNotes").innerHTML =
    collabModalForDisplayNotesHTML;
}

function displayArchiveNotes(displaynote) {
  var nHTML = "";
  const notes = displaynote;
  console.log("notesssssarch", notes);
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].isArchived == true) {
      let displayEmail = [];
      let resCollaberators = [];

      resCollaberators = notes[i].collaborators;
      if (resCollaberators !== undefined && resCollaberators.length > 0) {
        for (let j = 0; j < resCollaberators.length; j++) {
          displayEmail.push(resCollaberators[j].email);
        }
      }
      let colHTML = ``;
      for (let j = 0; j < displayEmail.length; j++) {
        colHTML +=
          `<div style="list-style-type:none" class="display-collab-letter mr-2">` +
          displayEmail[j].charAt(0).toUpperCase() +
          `</div>`;
      }
      nHTML +=
        `
     
     <div class="note" style="background: ${notes[i].color}; ">   
     <div class="note-title">${notes[i].title}</div>
     <div class="note-text">${notes[i].description}</div>  ` +
        `<div class="display-collab-icon">
                   <div class="display-icon" >` +
        colHTML +
        `</div>
                 </div>` +
        `        
     <div class="toolbar-container">
       <div class="toolbar">         
       <i class="fas fa-trash" id="${notes[i].id}" onclick="deleteNote(id)"></i>  
      
       <i class="material-icons">more_vert</i> 
       <i class="material-icons"  id="${notes[i].id}" onclick="unArchiveNote(id)">archive</i>
       <i class="material-icons">palette</i> 
       <i class="material-icons">person_add_alt</i> 
       <i class="material-icons">add_alert</i>       
       </div>
     </div>
   </div>
     
   `;
    }
  }
  notesField.innerHTML = nHTML;
}

function displayTrashNotes(displaynote) {
  var nHTML = "";
  const notes = displaynote;
  console.log("notesssssarch", notes);
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].isDeleted == true) {
      let displayEmail = [];
      let resCollaberators = [];

      resCollaberators = notes[i].collaborators;
      if (resCollaberators !== undefined && resCollaberators.length > 0) {
        for (let j = 0; j < resCollaberators.length; j++) {
          displayEmail.push(resCollaberators[j].email);
        }
      }
      let colHTML = ``;
      for (let j = 0; j < displayEmail.length; j++) {
        colHTML +=
          `<div style="list-style-type:none" class="display-collab-letter mr-2">` +
          displayEmail[j].charAt(0).toUpperCase() +
          `</div>`;
      }
      nHTML +=
        `
     
    <div class="note" style="background:${notes[i].color}; ">
     <div class="note-title">${notes[i].title}</div>
     <div class="note-text">${notes[i].description}</div>  ` +
        `<div class="display-collab-icon">
                   <div class="display-icon" >` +
        colHTML +
        `</div>
                 </div>` +
        `           
     <div class="toolbar-container">
       <div class="toolbar"  style="float:right;">         
       <i class="fas fa-trash-restore" id="${notes[i].id}" onclick="restoreTrashNote(id)"></i>     
       </div>
     </div>
   </div>
     
   `;
    }
  }
  notesField.innerHTML = nHTML;
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
$(".display-avatar").hide();
function removeAvatar() {
  var searchField = document.getElementById("searchValue").value;
  if (searchField !== "") {
    $(".display-avatar").show();
  }
}


function openPopUp(i) {
  const popUp = document.getElementById("popUp-div");
  console.log("i", i);
  console.log("title", notes[i]);
  console.log("notes", notes[i].title);
  console.log("notes12", notes[i].description);
  console.log("notescolor", notes[i].color);
  console.log("notesid", notes[i].id);
  console.log("notescollab", notes[i].collaborators);
  // console.log(id);
  let resCollaberators = [];
  let displayEmail = [];
  resCollaberators = notes[i].collaborators;
  if (resCollaberators !== undefined && resCollaberators.length > 0) {
    for (let j = 0; j < resCollaberators.length; j++) {
      displayEmail.push(resCollaberators[j].email);
    }
  }
  console.log("hey hey", displayEmail);
  let colHTML = ``;
  for (let j = 0; j < displayEmail.length; j++) {
    colHTML +=
      `<div style="list-style-type:none" class="display-collab-letter mr-2">` +
      displayEmail[j].charAt(0).toUpperCase() +
      `</div>`;
  }
  // console.log(color);
  popUp.innerHTML = "";
  if (notes[i].title != null) {
    popUp.innerHTML =
      `
<div class="modal fade " id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true" >
      <div class="modal-dialog collab_box" role="document">
        <div class=" contentPopup" style="background: ${notes[i].color};" id="popUpModal">
          <div class="modal-header collab_header">           
          </div>
          <div class="modal-body collab_body">
            <div class="ownerAcnt">
              <span class="">
              </span>
              <input id="updatedTitle" class="otherUserInput  mr-sm-2  dropbtn dropdown-toggle" type="text" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" value='${notes[i].title}' placeholder="text" aria-label="Search" style="background: ${notes[i].color};">
            </div>
            <div class="otherUser"> 
              <span class=" ">
              </span>

              <div class="dropdown show">
                <input id="updatedDescription" class="otherUserInput  mr-sm-2  dropbtn dropdown-toggle" type="text" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" value='${notes[i].description}' placeholder="title" aria-label="Search" style="background: ${notes[i].color};">            
              </div>
            </div>
          </div>
          <div class="display-collab-icon">
                      <div class="display-icon-popup mb-2"  >` +
      colHTML +
      `</div>
            </div>
          <div class="modal-footer collab_footer_popup">
          <div class="row" style="width:100%">
            <div class="col-6">
            <div class="toolbar_popup">
              <i class="material-icons">more_vert</i>
              <i class="material-icons" id="${notes[i].id}" onclick="archiveNote(id)" data-dismiss="modal" >archive</i>
              <i class="material-icons  dropdown "  id="dropdownMenuButton" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
              palette
         
              <div class="dropdown-menu color-tooltip" aria-labelledby="dropdownMenuButton">
          <span class="color_drop">
                      <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ffffff')"id="${notes[i].id}" style="background-color:#ffffff;"></a>

                     </span>
                     <span  class="color_drop">
                      <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#a7ffeb')" id="${notes[i].id}" style="background-color:#a7ffeb;" ></a>

                     </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#d7aefb')" id="${notes[i].id}"style="background-color:#d7aefb;"></a>

                       </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#ccff90')" id="${notes[i].id}" style="background-color: #ccff90;"></a>
                       </span>
                       <span  class="color_drop">
                        <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#fbbc04')" id="${notes[i].id}" style="background-color:#fbbc04;" ></a>

                       </span>
                         <span  class="color_drop">
                          <a class="dropdown-item color-option" href="#" onclick="colourChangeNote(this.id,'#f28b82')" id="${notes[i].id}" style="background-color:#f28b82;"></a>
                         </span>
                       
          </div>
              
              </i>
            
              <i class="material-icons" type="button" class="btn btn-primary" data-toggle="modal"  data-dismiss="modal"  data-target="#exampleModal3"  onclick="collabPopup('${notes[i].id}')">person_add_alt</i>
              <i class="material-icons">add_alert</i>
            </div>
            </div>
            <div class="col-6">
            <div class="savebtn_popup">
              <button type="button" class="btn btn-secondary btn_cancel" data-dismiss="modal" onclick="updateNotes('${notes[i].id}')">Save</button>
            </div>
            </div>
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
