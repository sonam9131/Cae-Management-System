
var ViewerToken = localStorage.getItem("ViewerToken");

var APIURL = "https://practicetest.docusoftweb.com/PracticeServices.asmx/";

var agrno = localStorage.getItem("agrno");
var Email = localStorage.getItem("Email");
var password = localStorage.getItem("pass");
//var setUploadFromValueClass;
var GetProjectId = localStorage.getItem("ProjectId");
let dxAllcontacts;
var cls;
$(document).ready(function () {
     cls = new CommanCLS(agrno, Email, password, APIURL);
    getAllContacts();
    function getAllContacts() {   
        cls.getAllContactsForList(GetProjectId,function(status,Data){
            if (status) {
                if (Data != "") {
                   
                    var JData = JSON.parse(Data);
                    var strr = JData.Table;
					 console.log('Get Contacts', strr);
					
					 varContactsList = strr;
					if(strr.length>0){
					 showContactsById(strr);
					}
                    else{
                        showContactsById([])
                    }
                }
            }
        })
       

    } 
function showContactsById(GetData) {
for(let item of GetData){
  $("#dxDataGridAllContacts").append(`
  <div class="col-md-4">
  <div class="card kanbanPreview-bx">
      <div class="card-body draggable-zone dropzoneContainer">								
          <div class="sub-card draggable-handle draggable p-0">
              <div class="task-card-data">
                  <div class="products">
                      <div>
                      <h6>${item["Company Name"]}</h6>
                      <span>${item["First Name"]} ${item["Last Name"]}</span>
                      </div>	
                  </div>
                  <div class="avatar-list avatar-list-stacked my-2">
                      <img src="images/contacts/pic666.jpg" class="avatar rounded-circle" alt="">
                      <img src="images/contacts/pic555.jpg" class="avatar rounded-circle" alt="">
                      <img src="images/contacts/pic1.jpg" class="avatar rounded-circle" alt="">
                      <img src="images/contacts/pic666.jpg" class="avatar rounded-circle" alt="">
                  </div>
                  <div class="my-2">
                      <span class="badge badge-primary light border-0 me-1">Issue</span>
                      <span class="badge badge-primary light border-0 ms-1">HTML</span>
                  </div>
                  <div class="d-flex align-items-center">
                      <p class="mb-0 font-w500 text-secondary me-2">Status</p>
                      <select class="default-select status-select">
                        <option value="pending">Pending</option>
                        <option value="testing">Testing</option>
                        <option value="complete">Complete</option>
                        <option value="progress">In Progress</option>
                      </select>
                  </div>
                      
              </div>	
              <div class="card-footer d-flex align-items-center justify-content-between">
                  <div class="footer-data">
                      <span>Start Date</span>
                      <p>06 Feb 2023</p>
                  </div>
                  <div class="footer-data">
                      <span>End Date</span>
                      <p>06 Feb 2023</p>
                  </div>
                  <div class="footer-data">
                      <span class="d-block">Priority</span>
                      <select class="default-select status-select">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                  </div>
              </div>
          </div>								
      </div>
  </div>
</div>   
    
   `);
}
       

    }


})