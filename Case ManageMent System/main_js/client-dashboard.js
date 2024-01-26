var ViewerToken = localStorage.getItem("ViewerToken");

var APIURL = "https://practicetest.docusoftweb.com/PracticeServices.asmx/";
function genralAjax1(data, methosName, callback) {
  if (data !== "") {
    $.ajax({
      type: "POST",
      url: APIURL+ methosName,
      data: data,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (msg) {
       return callback(msg);
      },
      error: function (e) {
        //alert(e.statusText + " failed");

       // console.log("Network Error !\n Please check your data connection ! Try again");
        return callback(e.responseText)
      },
    });
  } else {
    //alert("else");
    $.ajax({
      type: "POST",
      url: APIURL + methosName,
      data: "{}",
      // contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (msg) {
        callback(msg);
      },
      error: function (e) {
        console.log("Network Error !\n Please check your data connection ! Try again");
      },
    });
  }
}
var agrno = localStorage.getItem("agrno");
var Email = localStorage.getItem("Email");
var password = localStorage.getItem("pass");
//var setUploadFromValueClass;

$(".companyname").text(localStorage.getItem("companyName"));
$(".compemail").text(Email);

var GetProjectId = localStorage.getItem("ProjectId");
let Customer = [
  {
    Key: "CA00",
    Name: "Allianz Trade",
    Amount: "255830.28",
    Claim: "258780.37",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  12:49:14",
    Roll: "Creditors",
  },
  {
    Key: "CA00",
    Name: "Allianz Trade",
    Amount: "255830.28",
    Claim: "258780.37",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  12:49:14",
    Roll: "Directors",
  },
  {
    Key: "CA00",
    Name: "Allianz Trade",
    Amount: "255830.28",
    Claim: "258780.37",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  12:49:14",
    Roll: "Employees",
  },
  {
    Key: "CA00",
    Name: "Allianz Trade",
    Amount: "255830.28",
    Claim: "258780.37",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  12:49:14",
    Roll: "Shareholders",
  },
  {
    Key: "CA00",
    Name: "Allianz Trade",
    Amount: "255830.28",
    Claim: "258780.37",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  12:49:14",
    Roll: "General",
  },
  {
    Key: "CA00",
    Name: "Allianz Trade",
    Amount: "255830.28",
    Claim: "258780.37",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  12:49:14",
    Roll: "Debtors",
  },
];

let Alltask_data = [
  {
    "Account Code": "216",
    Type: "B",
    Group: "REPRESENTED BY",
    Account: "Fixed Charge Account - No Interest",
    BV: "0",
    "E to R": "0",
    "Floating Charge Date": "",
    "Floating Charge Rank": "",
  },
  {
    "Account Code": "217",
    Type: "B",
    Group: "REPRESENTED BY",
    Account: "Fixed Charge Account - No Interest",
    BV: "0",
    "E to R": "0",
    "Floating Charge Date": "",
    "Floating Charge Rank": "",
  },
  {
    "Account Code": "218",
    Type: "B",
    Group: "REPRESENTED BY",
    Account: "Fixed Charge Account - No Interest",
    BV: "0",
    "E to R": "0",
    "Floating Charge Date": "",
    "Floating Charge Rank": "",
  },
  {
    "Account Code": "219",
    Type: "B",
    Group: "REPRESENTED BY",
    Account: "Fixed Charge Account - No Interest",
    BV: "0",
    "E to R": "0",
    "Floating Charge Date": "",
    "Floating Charge Rank": "",
  },
  {
    "Account Code": "220",
    Type: "B",
    Group: "REPRESENTED BY",
    Account: "Fixed Charge Account - No Interest",
    BV: "0",
    "E to R": "0",
    "Floating Charge Date": "",
    "Floating Charge Rank": "",
  },
  {
    "Account Code": "221",
    Type: "B",
    Group: "REPRESENTED BY",
    Account: "Fixed Charge Account - No Interest",
    BV: "0",
    "E to R": "0",
    "Floating Charge Date": "",
    "Floating Charge Rank": "",
  },
];
// Example array of roles
let rolesArray = [
  {
    key: "CA00",
    Name: "Allianz Trade",
    "SoA Amount": "255830.28",
    "Net Claim": "258780.37",
    "Percentage Claim": "27.30048106294",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    Secured: "0",
    Preferential: "0",
    "Floating Charge": "0",
    Ordinary: "0",
    Rejected: "0",
    "Agreed Nil Claim": "",
    "Not Yet Adj.": "258780.37",
    "Type of Claim / Status": "U",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  12:49:14",
  },
  // Add more role objects as needed
];

let directorArray = [
  {
    key: "RB00",
    Name: "Mr Moritz Braatz",
    Amount: "0",
    Claim: "0",
    "Claim Status": "AWAITED",
    "Claim Substatus": "",
    Secured: "0",
    Preferential: "0",
    "Floating Charge": "0",
    Ordinary: "0",
    Rejected: "0",
    "Agreed Nil Claim": "",
    "Not Yet Adj.": "0",
    "Type of Claim / Status": "",
    "User ID": "lacra",
    "Date Added": "11-04-2023  14:55:32",
    NI: "",
  },
  // Add more role objects as needed
];
let employesArray = [
  {
    key: "EB00",
    Name: "Mrs Katie-Ellen Blood",
    Amount: "0",
    Claim: "1099.5",
    "Claim Status": "RECEIVED",
    "Claim Substatus": "",
    Secured: "0",
    Preferential: "0",
    "Floating Charge": "0",
    Ordinary: "0",
    Rejected: "0",
    "Agreed Nil Claim": "",
    "Not Yet Adj.": "1099.5",
    "Type of Claim / Status": "",
    "User ID": "lacra",
    "Date Added": "17-05-2023  12:27:32",
    NI: "PA819513B",
  },
  // Add more role objects as needed
];
let sharehldersArray = [
  {
    key: "HB00",
    Name: "Moritz Braatz",
    "No. Of Shares": "66500",
    Other: "0",
    Preference: "0",
    Ordinary: "66500",
    "User ID": "Beanca",
    "Date Added": "17-05-2023  13:48:03",
  },
  // Add more role objects as needed
];
let generalsArray = [
  {
    key: "GA00",
    Name: "Accountant",
    Relationship: "66500",
    Amount: "0",
    Claim: "0",
    "User ID": "kn",
    "Date Added": "11-04-2023  14:55:31",
  },
  // Add more role objects as needed
];

let sideBarList = [
  {
    title: "Case Details", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-house-door"></i>`
  },
  {
    title: "Contacts", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-person"></i>`
  },
  {
    title: "Assignment Details", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-info-circle"></i>`
  },
  {
    title: "Meetings and Tasks", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-list-task"></i>`
  },
  {
    title: "Documents", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-file-earmark"></i>`
  },
  {
    title: "Chart of accounts", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-bar-chart"></i>`
  },
  {
    title: "Assets Group", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-people"></i>`
  },
  {
    title: "Monthly income/expenditure", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-wallet2"></i>`
  },
  {
    title: "Income contributions", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-people"></i>`
  },
  {
    title: "Pre-appointment details", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-calendar"></i>`
  },
  {
    title: "Postal Resolutions", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-bookmark"></i>`
  },
];

let keyFacts = [
  { title: "Case Code", value: " " },
  { title: "Pre/Post", value: " " },
  { title: "Case Name", value: " " },
  { title: "Case Progress", value: " " },
  { title: "Trading as", value: " " },
  { title: "Company Number", value: " " },
  { title: "Company Address", value: " " },
  { title: "Trading address", value: " " },
  { title: "Incorporate date", value: " " },
  { title: "Ceased trading", value: " " },
  { title: "Case Type", value: " " },
  { title: "Case Size", value: " " },
  { title: "Instructed on", value: " " },
  { title: "Appointment Date", value: " " },
  { title: "Appointed by", value: " " },
  { title: "Uploaded to portal", value: " " },
  { title: "IP release date", value: " " },
  { title: "Dissolved date", value: " " },
  { title: "VAT deregistration date", value: " " },
  { title: "Decision date", value: " " },
  { title: "Bond value", value: " " },
  { title: "Date Marked as Dead/Blocked", value: " " }
];

let keyFactsTeamRawData = [
  "Lead IP Name",
  "Lead IP Date",
  "Second IP Name",
  "Second IP Date",
  "Third IP Name",
  "Third IP Date",
  "Manager Name",
  "Manager Date",
  "Assistant Manager Name",
  "Assistant Manager Date",
  "Investigations manager Name",
  "Investigations manager Date",
  "Closures Manager Name",
  "Closures Manager Date",
  "Administrator 1 Name",
  "Administrator 1 Date",
  "Administrator 2 Name",
  "Administrator 2 Date",
];

let keyFactsIdRawData = [
  "VAT",
  "PAYE",
  "CT",
  "CIS",
  "RPS case ref",
  "Pension Scheme Reference Number",
];

let WIPFeeAppRaw = [
  "Admin and planning/Stat reporting",
  "assets",
  "investigations",
  "Creditors",
  "TOTAL Time Approval",
  "Fixed Fee",
  "Total Fee Approval",
];


var cls;
$(document).ready(function () {
  var windowHeight = window.innerHeight + "px";
  $("#dxDataGridAllContacts11").css("height", windowHeight);
  $("#dxDataGridAllTasks").css("height", windowHeight);
  $("#TaskTableData1").css("height", windowHeight-100);

  cls = new CommanCLS(agrno, Email, password, APIURL);
  getAllContacts();
  //   $(document).on("click", ".contactData", function () {
  //     console.log("showdata");
  //     $("#dashboard").hide();
  //      $("#contacts").show();
  //     // Toggle the visibility of dxDataGridAllContacts11 and dxDataGridAllContacts11_data
  //     //$("#dxDataGridAllContacts11, #dxDataGridAllContacts11_data").toggle();
  // });
  
  $(document).on("click", "#CreateNewTask", function () { 
    $("#CreateNewTask_modal").modal("show");
  });
  $(document).on("click", "#CreateNewWPSTask", function () { 
    $("#CreateNewWPSTask_modal").modal("show");
  });
  $(document).on("click", "#CreateNewTimingTask", function () { 
    $("#CreateNewTimingTask_modal").modal("show");
  });
  $(document).on("click", "#tab-5", function () {
    console.log("showdata");
    showAlltask(Alltask_data);
    // Toggle the visibility of dxDataGridAllContacts11 and dxDataGridAllContacts11_data
    // $("#dxDataGridAllContacts11, #dxDataGridAllContacts11_data").toggle();
  });
  getAlltasks();
  $(document).on("click", "#tab-3", function () {
    // console.log("showdata");
    // showtasksById(Alltask_data);
    console.log("show mwwtings and tasks");
    
  });

  function getAllContacts() {
    cls.getAllContactsForList(GetProjectId, function (status, Data) {
      if (status) {
        if (Data != "") {
          var JData = JSON.parse(Data);
          var strr = JData.Table;
          console.log("Get Contacts", strr);

          varContactsList = strr;
          if (strr.length > 0) {
            showContactsById(Customer);
            // showContacts_data(strr);
          } else {
            showContactsById([]);
          }
        }
      }
    });
  }
  function getAlltasks() {
    cls.Json_GetOutlookTask(function (status, Data) {
      if (status) {
      
         
          let json = Data["Table"];
           //let result = json.filter((el)=>el.Client =="William 1171");
           let result = json.filter((el) => el.Client === "William 1171");

           console.log(result,"filtered results");
          //AllTaskList = result;
          //console.log("Getalltask", Data);
          let strr = result;
          if (strr.length > 0) {
            showtasksById(strr);
            // showContacts_data(strr);
           } else {
            showtasksById([]);
         }
     
      }
    });
  }
  var SupplierList;
  let SectionList,StatusData,ValiddateArray,Work_UserObjLis,From=[]
  var isDelatedList = From == 'Completed' || From == 'Deleted';
  isDelatedList ? $('#CreateWPSTAskInRow').hide() : $('#CreateWPSTAskInRow').show();
  function showtasksById(data){
    let dataGrid = {
      dataSource: data,
      export: {
        enabled: true,
        allowExportSelectedData: true,
        fileName: "file",
      },

      scrolling: {
        useNative: true
    },

    scrolling: {
        columnRenderingMode: "standard",
        mode: "standard",
        preloadEnabled: false,
        rowRenderingMode: "standard",
        scrollByContent: true,
        scrollByThumb: false,
        showScrollbar: "onScroll",
        useNative: "auto",
        useNative: true
    },
      hoverStateEnabled: true,
      
      allowColumnResizing: true,
      columnAutoWidth: true,

      selection: {
        mode: "multiple",
      },
      loadPanel: {
        enabled: true,
      },

      // paging: {
      //    pageSize: 5
      // },
      // pager: {
      //    showPageSizeSelector: true,
      //    showNavigationButtons: true,
      //    allowedPageSizes: [5, 10, 20],
      //    showInfo: true
      // },
     
      remoteOperations: false,
      searchPanel: {
        visible: true,
        highlightCaseSensitive: true,
      },
      groupPanel: { visible: true },
      grouping: {
        autoExpandAll: true,
      },
      allowColumnReordering: true,
      rowAlternationEnabled: false,
      showBorders: true,
      //width: '100%',
      editing: {
        // mode: 'batch',
        //allowUpdating: true,
        //allowAdding: true,
        allowDeleting: true,
        // selectTextOnEditStart: true,
        // startEditAction: 'click',
      },
    //   paging: {
    //     pageSize: 100
    //     // enabled: true
    // },
    
    columnChooser: {
      enabled: true,
      mode: "select",// or "select"
      allowSearch: true
  },
  //   pager: {
  //     showPageSizeSelector: true,
  //     showNavigationButtons: true,
  //     // allowedPageSizes: [12, 20, 40],
  //     showInfo: true
  // },
      showColumnHeaders: true,
      columns: [
         
        //"ID",
        //  "UserID",
        //  "Priority", 
        //  "Recurrent", 
        {
            dataField: "ClientNo",
            caption: "Client ID",
            fixed: true,

        }, {
            dataField: "Client",
            caption: "Client Name",
           
            
        },
        {
            dataField: "SectionId",
            caption: "Section",
            lookup: {
                dataSource: SectionList,
                displayExpr: "Section",
                valueExpr: "SectionId"
            },
            calculateSortValue: "Section",
            validationRules: [{
                type: "required"
            },]
        },
        {
           dataField: "OwnerID",
           caption: "Allocated to",
           validationRules: [{
               type: "required"
           }],
           //calculateSortValue: "Section",
       },
        //{
        //    dataField: "YEDate",
        //    caption: "Year-end Date"

        //},
        //{
        //    dataField: "SubDeadline",
        //    caption: "Submission deadline"
        //},
        //{
        //    dataField: "DocRecdate",
        //    caption: "Document Receive Date"
        //},
        {
            dataField: "Start",
            caption: "Start Date",
    
    
        },
        {
            dataField: "EndDateTime",
            caption: "Due Date",
        },
        //{
        //    dataField: "ElectronicFile",
        //    caption: "Electronic files received ?",
        //    width: 100,
        //},
        //{
        //    dataField: "PaperFile",
        //    caption: "Paper files received ?"
        //    , width: 100,
        //},
        //{
        //    dataField: "Notes",
        //    caption: "Notes",
        //    width: 300,
        //    editCellTemplate: NotesEditorTemplate,
        //    customizeText: function (cellInfo) {
        //        // console.log("cell info", cellInfo);
        //        let vl = cellInfo.value;
        //        if (vl) {
        //            if (vl.includes("{\\rtf1\\deff0")) {
        //                return null;
        //            }
        //            return cellInfo.value;
        //        }

        //    }

        //},
        {
            dataField: "Subject",
            caption: "Subject",
            width: 300,


        },

        {
            dataField: "mstatus",
            caption: "Status",
            lookup: {
                dataSource: function (options) {
                    return {
                        store: StatusData,
                        filter: options.data ? ["IsTask", "=", true] : null
                    };
                },
                // dataSource: StatusData,"IsTask":true
                displayExpr: "Status",
                valueExpr: "Status"
            }
        },
        //{
        //    dataField: "AttachmentCount",
        //    caption: "AttachmentCount",
        //    headerCellTemplate: function (header, info) {

        //        $('<div>')
        //            .html('<i class="fa fa-paperclip  " aria-hidden="true"></i>')
        //            .css('font-size', '13px')
        //            .appendTo(header);
        //    }
        //},
        {
                dataField: "Source",
                caption: "Type",
                width: 70,
                // fixed: true,
                //fixedPosition: "right",
                filterType: "text",
      autoFill: false

            },
        //{
        //    dataField: "Priority",
        //    caption: "Priority"
        //},
        {
            dataField: "StageName",
            caption: "Stage Name",
            
        },

        {dataField: "Stages Complete",
            caption: "Stages Complete",
           
            
           

        }, 
     

        //"AttachmentCount",


    ],
      headerFilter: {
        visible: true,
      },
      filterRow: { visible: true },
      // allowColumnReordering: true,
      columnResizingMode: "widget",
      allowColumnResizing: true,
         paging: {
      pageSize: 20,
    },
    pager: {
      visible: true,
      // allowedPageSizes: [5, 10, 'all'],
      showPageSizeSelector: true,
      showInfo: true,
      showNavigationButtons: true,
    },
      onRowRemoving: function (e) {
        console.log("calling on row removing");
        cls.Json_DSDeleteRequest(function (d) {
          console.log("Json_DSDeleteRequest", d.data);
          //Json_GetRequest(d.data)
        });
      },

      onRowClick: function (e) {
        var component = e.component;
        function initialClick() {
          component.clickCount = 1;
          component.clickKey = e.key;
          component.clickDate = new Date();
        }
        e.data["clientid"] = cls.ClientId;
        e.data["projectid"] = cls.ProjectId;

        console.log("view messsage url", e.data["Roll"]);
       

        let bta = window.btoa(JSON.stringify(e.data));
        function doubleClick() {
          let creator = "creditors-profile.html?Data=" + bta;
          // let director = "directors-profile.html?Data=" + bta;
          // let employee = "employees-profile.html?Data=" + bta;
          // let shareholder = "shareholders-profile.html?Data=" + bta;
          // let general = "general-profile.html?Data=" + bta;
          // console.log("view messsage url",stringURl);
          window.open(creator);
        }

        if (
          !component.clickCount ||
          component.clickCount !== 1 ||
          component.clickKey !== e.key
        ) {
          initialClick();
          // SelectClickEvent("1");
          // $("#PostCodeID").val();
        } else if (component.clickKey == e.key) {
          if (new Date() - component.clickDate <= 300) doubleClick();
          else initialClick();
        }
      },
    };
  var grid = new DevExpress.ui.dxDataGrid(
    document.getElementById("TaskTableData1"),
    dataGrid
  );
  }
  function showContactsById(getdata) {
    let gridOptions = {
      dataSource: getdata,
      export: {
        enabled: true,
        allowExportSelectedData: true,
        fileName: "ContractTypeList",
      },
      hoverStateEnabled: true,
      scrolling: {
        useNative: true,
      },
      allowColumnResizing: true,
      columnAutoWidth: true,

      selection: {
        mode: "single",
      },
      loadPanel: {
        enabled: true,
      },

      //paging: {
      //    pageSize: 5
      //},
      //pager: {
      //    showPageSizeSelector: true,
      //    showNavigationButtons: true,
      //    allowedPageSizes: [5, 10, 20],
      //    showInfo: true
      //},
      scrolling: {
        mode: "virtual",
      },
      remoteOperations: false,
      searchPanel: {
        visible: true,
        highlightCaseSensitive: true,
      },
      groupPanel: { visible: true },
      grouping: {
        autoExpandAll: true,
      },
      allowColumnReordering: true,
      rowAlternationEnabled: false,
      showBorders: true,
      //width: '100%',
      editing: {
        // mode: 'batch',
        //allowUpdating: true,
        //allowAdding: true,
        allowDeleting: true,
        // selectTextOnEditStart: true,
        // startEditAction: 'click',
      },

      showColumnHeaders: true,
      columns: [
        {
          dataField: "Key",
          caption: "Key",
          //   groupIndex: 0,
          width: 50,
        },
        {
          dataField: "Name",
          caption: "Name",
        },

        {
          dataField: "Amount",
          caption: "Amount",
        },
        {
          dataField: "Claim",
          caption: "Claim",
        },
        {
          dataField: "Claim Status",
          caption: "Claim Status",
        },

        {
          dataField: "Claim Substatus",
          caption: "Claim Substatus",
        },
        {
          dataField: "User ID",
          caption: "User ID",
        },
        {
          dataField: "Date Added",
          caption: "Date Added",
        },
        {
          dataField: "Roll",
          caption: "Roll",
        },
      ],
      headerFilter: {
        visible: true,
      },
      onRowRemoving: function (e) {
        console.log("calling on row removing");
        cls.Json_DSDeleteRequest(function (d) {
          console.log("Json_DSDeleteRequest", d.data);
          //Json_GetRequest(d.data)
        });
      },

      onRowClick: function (e) {
        var component = e.component;
        function initialClick() {
          component.clickCount = 1;
          component.clickKey = e.key;
          component.clickDate = new Date();
        }
        e.data["clientid"] = cls.ClientId;
        e.data["projectid"] = cls.ProjectId;

        console.log("view messsage url", e.data["Roll"]);
        let offcanvasInstance = new bootstrap.Offcanvas(
          document.getElementById("offcanvasExample_data")
        );
        let Directors = new bootstrap.Offcanvas(
          document.getElementById("Directors_data")
        );
        let Employees = new bootstrap.Offcanvas(
          document.getElementById("Employees_data")
        );
        let Shareholders = new bootstrap.Offcanvas(
          document.getElementById("Shareholders_data")
        );
        let General = new bootstrap.Offcanvas(
          document.getElementById("General_data")
        );
        let Debtors = new bootstrap.Offcanvas(
          document.getElementById("Debtors_data")
        );

        switch (e.data["Roll"]) {
          case "Creditors":
            console.log("Creditors");
            appendRoleDataToElement(rolesArray);
            offcanvasInstance.show();
            break;

          case "Directors":
            console.log("Directors");
            appenddirector(directorArray);
            Directors.show();
            break;

          case "Employees":
            console.log("Employees");
            appendemployee(employesArray);
            Employees.show();
            break;

          case "Shareholders":
            console.log("Shareholders");
            appendshareholders(sharehldersArray);
            Shareholders.show();
            break;

          case "General":
            console.log("General");
            appendgenerals(generalsArray);
            General.show();
            break;

          case "Debtors":
            console.log("Debtors");
            Debtors.show();
            break;

          default:
            console.log("Unknown role");
            break;
        }

        let bta = window.btoa(JSON.stringify(e.data));
        function doubleClick() {
          let creator = "creditors-profile.html?Data=" + bta;
          // let director = "directors-profile.html?Data=" + bta;
          // let employee = "employees-profile.html?Data=" + bta;
          // let shareholder = "shareholders-profile.html?Data=" + bta;
          // let general = "general-profile.html?Data=" + bta;
          // console.log("view messsage url",stringURl);
          window.open(creator);
        }

        if (
          !component.clickCount ||
          component.clickCount !== 1 ||
          component.clickKey !== e.key
        ) {
          initialClick();
          // SelectClickEvent("1");
          // $("#PostCodeID").val();
        } else if (component.clickKey == e.key) {
          if (new Date() - component.clickDate <= 300) doubleClick();
          else initialClick();
        }
      },
    };

    // $('#DocumentRequests').dxDataGrid();

    var grid = new DevExpress.ui.dxDataGrid(
      document.getElementById("dxDataGridAllContacts11"),
      gridOptions
    );

    function customHeaderTemplate(header, info) {
      var iconHtml = '<span class="dx-icon dx-icon-edit"></span>'; // Example: Edit icon
      header.append(
        '<div class="custom-header">' +
        iconHtml +
        "<div>" +
        info.column.caption +
        "</div></div>"
      );
    }
    grid.refresh(); // or grid.repaint();

    // var grid = new DevExpress.ui.dxDataGrid(document.getElementById("DocumentRequests"), gridOptions);

    grid.columnOption("Request", "headerTemplate", customHeaderTemplate);
  }
  function showAlltask(getdata) {
    let gridOptions = {
      dataSource: getdata,
      export: {
        enabled: true,
        allowExportSelectedData: true,
        fileName: "ContractTypeList",
      },
      hoverStateEnabled: true,
      scrolling: {
        useNative: true,
      },
      allowColumnResizing: true,
      columnAutoWidth: true,

      selection: {
        mode: "single",
      },
      loadPanel: {
        enabled: true,
      },

      //paging: {
      //    pageSize: 5
      //},
      //pager: {
      //    showPageSizeSelector: true,
      //    showNavigationButtons: true,
      //    allowedPageSizes: [5, 10, 20],
      //    showInfo: true
      //},
      scrolling: {
        mode: "virtual",
      },
      remoteOperations: false,
      searchPanel: {
        visible: true,
        highlightCaseSensitive: true,
      },
      groupPanel: { visible: true },
      grouping: {
        autoExpandAll: true,
      },
      allowColumnReordering: true,
      rowAlternationEnabled: false,
      showBorders: true,
      //width: '100%',
      editing: {
        // mode: 'batch',
        //allowUpdating: true,
        //allowAdding: true,
        allowDeleting: true,
        // selectTextOnEditStart: true,
        // startEditAction: 'click',
      },

      showColumnHeaders: true,
      columns: [
        {
          dataField: "Account Code",
          caption: "Account Code",
          //   groupIndex: 0,
          width: 50,
        },
        {
          dataField: "Type",
          caption: "Type",
        },

        {
          dataField: "Group",
          caption: "Group",
        },
        {
          dataField: "Account",
          caption: "Account",
        },
        {
          dataField: "BV",
          caption: "BV",
        },

        {
          dataField: "E to R",
          caption: "E to R",
        },
        {
          dataField: "Floating Charge Date",
          caption: "Floating Charge Date",
        },
        {
          dataField: "Floating Charge Rank",
          caption: "Floating Charge Rank",
        },
      ],
      headerFilter: {
        visible: true,
      },
      onRowRemoving: function (e) {
        console.log("calling on row removing");
        cls.Json_DSDeleteRequest(function (d) {
          console.log("Json_DSDeleteRequest", d.data);
          //Json_GetRequest(d.data)
        });
      },

      onRowClick: function (e) {
        var component = e.component;
        function initialClick() {
          component.clickCount = 1;
          component.clickKey = e.key;
          component.clickDate = new Date();
        }
        e.data["clientid"] = cls.ClientId;
        e.data["projectid"] = cls.ProjectId;

        console.log("view messsage url", e.data["Roll"]);

        let bta = window.btoa(JSON.stringify(e.data));
        function doubleClick() {
          var stringURl = "client-dashboard.html?Data=" + bta;
          // console.log("view messsage url",stringURl);
          window.open(stringURl);
        }

        if (
          !component.clickCount ||
          component.clickCount !== 1 ||
          component.clickKey !== e.key
        ) {
          initialClick();
          // SelectClickEvent("1");
          // $("#PostCodeID").val();
        } else if (component.clickKey == e.key) {
          if (new Date() - component.clickDate <= 300) doubleClick();
          else initialClick();
        }
      },
    };

    // $('#DocumentRequests').dxDataGrid();

    var grid = new DevExpress.ui.dxDataGrid(
      document.getElementById("dxDataGridAllTasks"),
      gridOptions
    );



    function customHeaderTemplate(header, info) {
      var iconHtml = '<span class="dx-icon dx-icon-edit"></span>'; // Example: Edit icon
      header.append(
        '<div class="custom-header">' +
        iconHtml +
        "<div>" +
        info.column.caption +
        "</div></div>"
      );
    }
    grid.refresh(); // or grid.repaint();

    // var grid = new DevExpress.ui.dxDataGrid(document.getElementById("DocumentRequests"), gridOptions);

    grid.columnOption("Request", "headerTemplate", customHeaderTemplate);
  }

  //creditor function
  var isEditMode = false;

  function toggleEditMode() {
    isEditMode = !isEditMode;
    // Call the appropriate function based on the edit mode
    if (isEditMode) {
      appendRoleDataToElement_EDIT(rolesArray);
      $("#save_creditor_data").show();
      $("#edit_creditor_data").hide();
    } else {
      appendRoleDataToElement(rolesArray);
      $("#edit_creditor_data").show();
      $("#save_creditor_data").hide();
    }
  }

  //initial data
  function appendRoleDataToElement(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#creditor_data_append").empty();
    var targetElement = document.getElementById("creditor_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">${role[key]}</div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  // edit data
  function appendRoleDataToElement_EDIT(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#creditor_data_append").empty();
    var targetElement = document.getElementById("creditor_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">
                      <input type="text" class="form-control form-control-sm" style="min-height: auto;" value="${role[key]}" id="${key}_${role[key]}_input">
                  </div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  $(document).on("click", "#edit_creditor_data", function () {
    toggleEditMode();
  });
  $(document).on("click", "#save_creditor_data", function () {
    toggleEditMode();
  });

  //director function

  var directordata = false;

  function director() {
    directordata = !directordata;
    // Call the appropriate function based on the edit mode
    if (directordata) {
      appenddirector_EDIT(directorArray);
      $("#save_director_data").show();
      $("#edit_director_data").hide();
    } else {
      appenddirector(directorArray);
      $("#edit_director_data").show();
      $("#save_director_data").hide();
    }
  }

  //initial data
  function appenddirector(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#director_data_append").empty();
    var targetElement = document.getElementById("director_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">${role[key]}</div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  // edit data
  function appenddirector_EDIT(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#director_data_append").empty();
    var targetElement = document.getElementById("director_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">
                      <input type="text" class="form-control form-control-sm" style="min-height: auto;" value="${role[key]}" id="${key}_${role[key]}_input">
                  </div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  $(document).on("click", "#edit_director_data", function () {
    director();
  });
  $(document).on("click", "#save_director_data", function () {
    director();
  });

  //employee function
  var employeedata = false;

  function employee() {
    employeedata = !employeedata;
    // Call the appropriate function based on the edit mode
    if (employeedata) {
      appendemployee_EDIT(employesArray);
      $("#save_employee_data").show();
      $("#edit_employee_data").hide();
    } else {
      appendemployee(employesArray);
      $("#edit_employee_data").show();
      $("#save_employee_data").hide();
    }
  }

  //initial data
  function appendemployee(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#employee_data_append").empty();
    var targetElement = document.getElementById("employee_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">${role[key]}</div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  // edit data
  function appendemployee_EDIT(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#employee_data_append").empty();
    var targetElement = document.getElementById("employee_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">
                      <input type="text" class="form-control form-control-sm" style="min-height: auto;" value="${role[key]}" id="${key}_${role[key]}_input">
                  </div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  $(document).on("click", "#edit_employee_data", function () {
    employee();
  });
  $(document).on("click", "#save_employee_data", function () {
    employee();
  });

  //shareholders function
  var shareholdersdata = false;

  function shareholders() {
    shareholdersdata = !shareholdersdata;
    // Call the appropriate function based on the edit mode
    if (shareholdersdata) {
      appendshareholders_EDIT(sharehldersArray);
      $("#save_shareholders_data").show();
      $("#edit_shareholders_data").hide();
    } else {
      appendshareholders(sharehldersArray);
      $("#edit_shareholders_data").show();
      $("#save_shareholders_data").hide();
    }
  }

  //initial data
  function appendshareholders(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#shareholders_data_append").empty();
    var targetElement = document.getElementById("shareholders_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">${role[key]}</div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  // edit data
  function appendshareholders_EDIT(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#shareholders_data_append").empty();
    var targetElement = document.getElementById("shareholders_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">
                      <input type="text" class="form-control form-control-sm" style="min-height: auto;" value="${role[key]}" id="${key}_${role[key]}_input">
                  </div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  $(document).on("click", "#edit_shareholders_data", function () {
    shareholders();
  });
  $(document).on("click", "#save_shareholders_data", function () {
    shareholders();
  });

  //general function
  var generalsdata = false;

  function generals() {
    generalsdata = !generalsdata;
    // Call the appropriate function based on the edit mode
    if (generalsdata) {
      appendgenerals_EDIT(generalsArray);
      $("#save_generals_data").show();
      $("#edit_generals_data").hide();
    } else {
      appendgenerals(generalsArray);
      $("#edit_generals_data").show();
      $("#save_generals_data").hide();
    }
  }

  //initial data
  function appendgenerals(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#generals_data_append").empty();
    var targetElement = document.getElementById("generals_data_append");

    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";

      // Dynamically generate HTML structure based on role properties
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">${role[key]}</div>
                  </div>
              `;
        }
      }

      // Set the innerHTML of the roleDiv with the dynamic content
      roleDiv.innerHTML = htmlContent;

      // Append the roleDiv to the target element
      targetElement.appendChild(roleDiv);
    });
  }
  // edit data
  function appendgenerals_EDIT(roles) {
    // Assuming you want to append to an element with ID "creditor_data_append"
    $("#generals_data_append").empty();
    var targetElement = document.getElementById("generals_data_append");
    // Iterate through each role in the array
    roles.forEach(function (role) {
      // Create a new div element for each role
      var roleDiv = document.createElement("div");
      roleDiv.className = "card profile-card card-bx";
      var htmlContent = "";
      for (var key in role) {
        if (role.hasOwnProperty(key)) {
          htmlContent += `
                  <div class="row px-5 pb-3">
                      <div class="col-5 fw-bold">${key}</div>
                      <div class="col-5 fw-bold">
                      <input type="text" class="form-control form-control-sm" style="min-height: auto;" value="${role[key]}" id="${key}_${role[key]}_input">
                  </div>
                  </div>
              `;
        }
      }
      roleDiv.innerHTML = htmlContent;
      targetElement.appendChild(roleDiv);
    });
  }
  $(document).on("click", "#edit_generals_data", function () {
    generals();
  });
  $(document).on("click", "#save_generals_data", function () {
    generals();
  });

  //launch
  let creator_html = "creditors-profile.html";
  let director_html = "directors-profile.html";
  let employee_html = "employees-profile.html";
  let shareholder_html = "shareholders-profile.html";
  let general_html = "general-profile.html";
  $(document).on("click", "#launch_creditor_data", function () {
    window.open(creator_html);
  });
  $(document).on("click", "#launch_director_data", function () {
    window.open(director_html);
  });
  $(document).on("click", "#launch_employee_data", function () {
    window.open(employee_html);
  });
  $(document).on("click", "#launch_shareholders_data", function () {
    window.open(shareholder_html);
  });
  $(document).on("click", "#launch_generals_data", function () {
    window.open(general_html);
  });

  //sidebar code
  let menuHTML = "";
  sideBarList.map((data, i) => {
    menuHTML += `
                <li id="tab-${i}" class="tab-${i} tab-button">
                        <a style="color:#0D99FF" href="#tab-${i}-page" data-bs-toggle="pill"
                            class="nav-link tab-link-${i}" aria-expanded="false">
                            <div class="menu-icon">
                                ${data.icon}
                            </div>
                            <span class="nav-text">${data.title}</span>
                        </a>
                    </li>
                `;
  });
  document.getElementById("my-menu").innerHTML = menuHTML;
  let menuButtons = document.getElementsByClassName("tab-button");
  
  //default tab selection start
  document.getElementsByClassName("tab-0")[0].style.backgroundColor="#0D99FF";
  document.getElementsByClassName("tab-link-0")[0].style.color="white";
  document.getElementsByClassName("tab-button")[0].children[0].children[0].children[0].style.color="white";
  //default tab selection end

  function handleSideBar(liClass, aClass) {
    for (let i = 0; i < menuButtons.length; i++) {
      if (menuButtons[i].classList[0] == liClass) {
        menuButtons[i].style.backgroundColor = "#0D99FF";
        document.getElementsByClassName(aClass)[0].style.color = "white";
        document.getElementsByClassName(aClass)[0].children[0].children[0].style.color="white";
        document.getElementById(`${menuButtons[i].classList[0]}-page`).style.display = "block";
      } else {
        menuButtons[i].style.backgroundColor = "white";
        document.getElementsByClassName("tab-button")[i].children[0].children[0].children[0].style.color="#0D99FF";
        menuButtons[i].children[0].style.color = "#0D99FF";
        document.getElementById(`${menuButtons[i].classList[0]}-page`).style.display = "none";
      }
    }
  }
  for (let i = 0; i < menuButtons.length; i++) {
    if (i != 0) {
      document.getElementById(`${menuButtons[i].classList[0]}-page`).style.display = "none";
    }
    menuButtons[i].addEventListener("click", () => {
      let liClass = menuButtons[i].classList[0];
      let aClass = menuButtons[i].children[0].classList[1];
      handleSideBar(liClass, aClass);
    });
  }

  //DYNAMIC DASHBOARD fields code
  //function which makes accordion's field
  function makeFields(key) {
    let HTML = "";
    key.map((item) => {
      HTML += `
                  <div style="padding:15px 60px 0px 60px;" class="row">
                      <div class="col-5 fw-bold">
                          ${item.title}
                      </div>
                      <div class="col-5 fw-bold">
                          ${item.value}
                      </div>
                  </div>
                  `;
    });
    return HTML;
  }
  // key facts code
  let keyFactsHTML = makeFields(keyFacts);
  document.getElementById("keyFacts").innerHTML = keyFactsHTML;

  // key facts-team code
  let keyFactsTeam = keyFactsTeamRawData.map((item) => {
    return { title: item, value: " " };
  });
  let keyFactsTeamHTML = makeFields(keyFactsTeam);
  document.getElementById("keyFactsTeam").innerHTML = keyFactsTeamHTML;

  //key facts-ID code
  let keyFactsID = keyFactsIdRawData.map((item) => {
    return { title: item, value: " " };
  });
  let keyFactsIdHTML = makeFields(keyFactsID);
  document.getElementById("keyFactsId").innerHTML = keyFactsIdHTML;

  //WIP - Fee Approval
  let WIPFeeApproval = keyFactsIdRawData.map((item) => {
    return { title: item, value: " " };
  });
  let WIPFeeApprovalHTML = makeFields(WIPFeeApproval);
  document.getElementById("WIPFeeApproval").innerHTML = WIPFeeApprovalHTML;

  //dateTimePicker
  $('#datetimePicker').datetimepicker({
    format: 'DD/MM/YYYY hh:mm A',
    // minDate: moment().subtract(1, 'years'),  // Set the minimum allowed date (e.g., one year ago)
    // maxDate: moment().add(1, 'years'),  // Set the desired date format
  });

  for (let i = 1; i <= 9; i++) {
    $(`#datetimePicker${i}`).datetimepicker({
      format: 'DD/MM/YYYY hh:mm A',
    });
  }

  //code for navigate b/w client edit or normal dashboard fields
  document.getElementById("editable-dashboard").style.display="none";
  $(document).on("click","#edit-client-button",function(){
    document.getElementById("editable-dashboard").style.display="block";
    document.getElementById("dashboard").style.display="none";
  });
  $(document).on("click","#dashboard-button",function(){
    document.getElementById("editable-dashboard").style.display="none";
    document.getElementById("dashboard").style.display="block";
  });
  $(document).on('click', '#append-content-button', function () {
       
    $('#target-div').toggle();
  // Json_GetAccountUsersContactsByClient(cid);
   Json_GetForwardUserList();
});

  // Code for Notes Start
  $(document).on("click", ".CList", function () {
    setNotesEditor();
});
$(document).on("click", ".CList_wps", function () {
  setNotesEditor_wps();
});

try{
  var editorBtn = document.getElementById('editorBtn');
	var element =   document.getElementById('editor');
  let element1 =  document.getElementById('editor1');
	editorBtn.addEventListener('click', function(e) {
	  e.preventDefault();

	  if (element.isContentEditable) {
	    // Disable Editing
	    element.contentEditable = 'false';
      element1.contentEditable='false';
	    editorBtn.innerHTML = 'Enable Editing';
	    // You could save any changes here.
	  } else {
	    element.contentEditable = 'true';
      element1.contentEditable='true';
	    editorBtn.innerHTML = 'Disable Editing';
	  }
	});
}catch (e){}
let markup1 = "this is a comment"
function setNotesEditor() {
  ClassicEditor
  .create( document.querySelector( '#editors' ))
  .catch( error => {
      console.error( error );
  } );
  // CKEDITOR.replace('editors', {
  //   skin: 'moono',
  //   enterMode: CKEDITOR.ENTER_BR,
  //   shiftEnterMode:CKEDITOR.ENTER_P,
  //   toolbar: [{ name: 'basicstyles', groups: [ 'basicstyles' ], items: [ 'Bold', 'Italic', 'Underline', "-", 'TextColor', 'BGColor' ] },
  //              { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
  //              { name: 'scripts', items: [ 'Subscript', 'Superscript' ] },
  //              { name: 'justify', groups: [ 'blocks', 'align' ], items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
  //              { name: 'paragraph', groups: [ 'list', 'indent' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'] },
  //              { name: 'links', items: [ 'Link', 'Unlink' ] },
  //              { name: 'insert', items: [ 'Image'] },
  //              { name: 'spell', items: [ 'jQuerySpellChecker' ] },
  //              { name: 'table', items: [ 'Table' ] }
  //              ],
  // });
  
}


function setNotesEditor_wps() {
  ClassicEditor
  .create( document.querySelector( '#editors_wps' ) )
  .catch( error => {
      console.error( error );
  } );
  // CKEDITOR.replace('editors', {
  //   skin: 'moono',
  //   enterMode: CKEDITOR.ENTER_BR,
  //   shiftEnterMode:CKEDITOR.ENTER_P,
  //   toolbar: [{ name: 'basicstyles', groups: [ 'basicstyles' ], items: [ 'Bold', 'Italic', 'Underline', "-", 'TextColor', 'BGColor' ] },
  //              { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
  //              { name: 'scripts', items: [ 'Subscript', 'Superscript' ] },
  //              { name: 'justify', groups: [ 'blocks', 'align' ], items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
  //              { name: 'paragraph', groups: [ 'list', 'indent' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'] },
  //              { name: 'links', items: [ 'Link', 'Unlink' ] },
  //              { name: 'insert', items: [ 'Image'] },
  //              { name: 'spell', items: [ 'jQuerySpellChecker' ] },
  //              { name: 'table', items: [ 'Table' ] }
  //              ],
  // });
  
}




const markup = `
    <h2>
        <img src="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/widgets/HtmlEditor.svg" alt="HtmlEditor">
        Formatted Text Editor (HTML Editor)
    </h2>
    <br>
    <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
    <p>Supported features:</p>
    <ul>
        <li>Inline formats:
            <ul>
                <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                <li>Font, size, color changes (HTML only)</li>
            </ul>
        </li>
        <li>Block formats:
            <ul>
                <li>Headers</li>
                <li>Text alignment</li>
                <li>Lists (ordered and unordered)</li>
                <li>Code blocks</li>
                <li>Quotes</li>
            </ul>
        </li>
        <li>Custom formats</li>
        <li>HTML and Markdown support</li>
        <li>Mail-merge placeholders (for example, %username%)</li>
        <li>Adaptive toolbar for working images, links, and color formats</li>
        <li>Insert images as a link or base64 (drag and drop images to convert them to base64)</li>
        <li>Copy-paste rich content (unsupported formats are removed)</li>
        <li>Tables support</li>
    </ul>
    <br>
    <p>Supported frameworks and libraries</p>
    <table>
        <tr>
            <td><strong>jQuery</strong></td>
            <td style="text-align: right;">v2.1 - v2.2 and v3.x</td>
        </tr>
        <tr>
            <td><strong>Angular</strong></td>
            <td style="text-align: right;">v7.0.x - v10.0.x</td>
        </tr>
        <tr>
            <td><strong>React</strong></td>
            <td style="text-align: right;">v16.2+</td>
        </tr>
        <tr>
            <td><strong>Vue</strong></td>
            <td style="text-align: right;">v2.6.3+</td>
        </tr>
    </table>
`;

   //start Get Forward User List
   function getInitialsFromName(name) {
    const words = name.split(' ');
    if (words.length >= 2) {
        const firstName = words[0];
        const lastName = words[words.length - 1];
        const initials = firstName[0] + (lastName ? lastName[0] : '');
        return initials;
    } else if (words.length === 1) {
        const firstName = words[0];
        return firstName[0] + firstName[0];
    }
    return '';
}
var getInitials = function (string) {
  var names = string.split(' ');

  if (names.length >= 2) {
    
      var initials = names[1].charAt(0).toUpperCase();
      if (names.length >= 3) {
          initials += names[2].charAt(0).toUpperCase();
      }
      return initials;
  } else if (names.length === 1) {
      // If it's a single word, use the first letter of that word
      return names[0].charAt(0).toUpperCase();
  } else {
      // Handle the case when the input is empty or doesn't contain any words
      return '';
  }
};

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
function Json_GetForwardUserList() {
  let obj = {};
  obj.agrno=agrno;
  obj.Email=Email;
  obj.password=password;
  obj.ProjectId = GetProjectId;
  obj.SectionId = "-1";
  cls.Json_GetForwardUserList(obj, function (status, Data) {
      if (status) {
          var json = Data['Table'];

          console.log('Json_GetForwardUserList', json);
  cls.setForwardUser = json;
  let dd = json;
          // let result = dd.map((el) => {
          //     let o = Object.assign({}, el);
          //     o.guid = uuidv4();
          //     return o;
          // })
          
  
          let result = dd.map((el) => {
            let o = Object.assign({}, el);
            o.guid = uuidv4();
            return o;
        })

        cls.setForwardList = result;               
        // usernameArray_data1.push(result);
        let count = 0;
        let ul = "";
        //ul += `<ul class="timeline">`;
        ul = `<input style="margin-bottom: 5px" type="text" id="forwardSearch" class="form-control form-control-sm" placeholder="Search..." />`;
        ul += `<ul class="timeline" id="flist">`;
        for (let item of result) {
            count++;
            let no = "success";
            if (count % 2 == 0) {
                no = "warning";
            }
            ul += `<li class="userlistClick" name="${item.ForwardTo}" id="${item.guid}">
                                            <div class="timeline-panel">
                                                <div class="media me-2 media-${no}" style="    background: #ed990a;
color: white;">
                                                   ${getInitialsFromName(item.ForwardTo)}
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="mb-1">${item.ForwardTo}</h5>
                                                    <small class="d-block">${item.ID}</small>
                                                </div>
                                               
                                            </div>
                                        </li>`;
        }
        ul += `</ul>`;
        $("#activeuserlist_data").html(ul);
        //start search
        let searchInput = document.getElementById("forwardSearch");
        let list = document.getElementById("flist");
        let items = list.getElementsByTagName("li");
        // Add an input event listener to the search input
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        });
        ////end search box

    }


      
  })
}

    let selectAllStateUpload = false;
    let nextContactSpanId = 1;
    let nextUserSpanId = 1;
    $(document).on("click", ".userlistClick", function () {
      let gid = $(this).attr('id');

      let createNewArr = [];
      const newArray = cls.setForwardList.filter((el) => {
          if (el.guid != gid) {
              createNewArr.push(el);
          }
      });
      console.log("createNewArr", createNewArr);

      $(".txtUserName").text(getInitials($(this).attr('name')));
      usernameArray_data = [];
      const name = $(this).attr('name');
      const initials = getInitialsFromName(name);

      // Generate a unique ID for the new user span
      const spanId = `userSpan${nextUserSpanId}`;
      nextUserSpanId++;

      // Create a new user span element with the calculated initials
      const newUserSpan = $(`<span id="${spanId}" class="txtUserName mediaCustom" style="    background: #ed990a;
  color: white;">${initials}</span>`);

      // Append the new user span to the container
      $("#dynamicContainer").append(newUserSpan);
      console.log(newUserSpan[0], "newContactSpan", initials, "initials", name, "name", spanId, "spanId");
      let object = {
          "flname": initials,
          "name": name,
          "spanId": spanId
      }
      usernameArray_data.push(object);
      console.log(usernameArray_data, "usernameArray_data ");
      $("#" + gid).hide();
  });
  // Click event handler for dynamically generated spans
  $(document).on("click", ".txtUserName", function () {
      console.log("txtUserName", $(this).attr('name'));
      // Hide the clicked span
      $(this).hide();
      let count = 0;
      let ul = "";
      //ul += `<ul class="timeline">`;
      ul = `<input style="margin-bottom: 5px" type="text" id="forwardSearch" class="form-control form-control-sm" placeholder="Search..." />`;

      ul += `<ul class="timeline" id="flist">`;
      for (let item of cls.setForwardList) {
          count++;
          let no = "success";
          if (count % 2 == 0) {
              no = "warning";
          }

          ul += `<li class="userlistClick" name="${item.ForwardTo}" id="${item.guid}">
                                                  <div class="timeline-panel">
                                                      <div class="media me-2 media-${no}" style="    background: #ed990a;
  color: white;">
                                                         ${getInitialsFromName(item.ForwardTo)}
                                                      </div>
                                                      <div class="media-body">
                                                          <h5 class="mb-1">${item.ForwardTo}</h5>
                                                          <small class="d-block">${item.ID}</small>
                                                      </div>
                                                     
                                                  </div>
                                              </li>`;
      }
      ul += `</ul>`;
      $("#activeuserlist_data").html(ul);
      

  });
  CreatFolderOption([{
    "FolderID": 15,
    "Folder": "Client",
    "FolderPath": "",
    "CLMandatory": "No"
},{
  "FolderID": 13,
  "Folder": "Bin",
  "FolderPath": "",
  "CLMandatory": "No"
},{
  "FolderID": 17,
  "Folder": "Cases",
  "FolderPath": "",
  "CLMandatory": "No"
}])
  function CreatFolderOption(AllFolder, ProjectId = 17) {
    console.log("AllFolder: ", AllFolder);
    $("#Task_Folder").empty();
    for (var i = 0; i < AllFolder.length; i++) {
        $("#Task_Folder").append('<option   value="' + AllFolder[i].FolderID + '">' + AllFolder[i].Folder + '</option>');
    }
    $("#Task_Folder").val(ProjectId);
}
});
