var ViewerToken = localStorage.getItem("ViewerToken");

var APIURL = "https://practicetest.docusoftweb.com/PracticeServices.asmx/";

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
let AllTaskList =[];
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
  $("#contacts-tab").click(function () {
    $("#contacts").addClass("active show");
    $("#documents").removeClass("active show");
    $("#dashboard").removeClass("active show");
    $("#address").removeClass("active show");
    $("#requestedDocuments").removeClass("active show");
    $("#edit-client").removeClass("active show");

    //for tabs
    $("#dashboard-tab").removeClass("mm-active");
    $("#dashboard-tab").parent().removeClass("mm-active");

    $("#contacts-tab").addClass("mm-active");
    $("#contacts-tab").parent().addClass("mm-active");

    $("#documents-tab").removeClass("mm-active");
    $("#documents-tab").parent().removeClass("mm-active");

    $("#requestedDocuments-tab").removeClass("mm-active");
    $("#requestedDocuments-tab").parent().removeClass("mm-active");

    $("#address-tab").removeClass("mm-active");
    $("#address-tab").parent().removeClass("mm-active");
    getAllContacts();
  });
  getAlltasks();
  $("#address-tab").click(function () {
    $("#address").addClass("active show");
    $("#documents").removeClass("active show");
    $("#dashboard").removeClass("active show");
    $("#contacts").removeClass("active show");
    $("#requestedDocuments").removeClass("active show");
    $("#edit-client").removeClass("active show");
    //for tabs
    $("#dashboard-tab").removeClass("mm-active");
    $("#dashboard-tab").parent().removeClass("mm-active");

    $("#contacts-tab").removeClass("mm-active");
    $("#contacts-tab").parent().removeClass("mm-active");

    $("#documents-tab").removeClass("mm-active");
    $("#documents-tab").parent().removeClass("mm-active");

    $("#requestedDocuments-tab").removeClass("mm-active");
    $("#requestedDocuments-tab").parent().removeClass("mm-active");

    $("#address-tab").addClass("mm-active");
    $("#address-tab").parent().addClass("mm-active");
     getAlltasks();
  });
  $(document).on("click", "#showhideGrid", function () {

  });
  $(document).on("click", "#documents-tab", function () {
    console.log("showdata");
    showAlltask(Alltask_data);
    // Toggle the visibility of dxDataGridAllContacts11 and dxDataGridAllContacts11_data
    // $("#dxDataGridAllContacts11, #dxDataGridAllContacts11_data").toggle();
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
        mode: "multiple",
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
      headerFilter: {
        visible: true,
      },
      filterRow: { visible: true },
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
    let showAlltask = {
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
        mode: "multiple",
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
      headerFilter: {
        visible: true,
      },
      filterRow: { visible: true },
      showColumnHeaders: true,
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
      showAlltask
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
  
  
  
  
  
  $(document).on("click", "#launch_creditor_data", function () {
    let creator_html = "creditors-profile.html";
    window.open(creator_html);
  });
  $(document).on("click", "#launch_director_data", function () {
    let director_html = "directors-profile.html";
    window.open(director_html);
  });
  $(document).on("click", "#launch_employee_data", function () {
    let employee_html = "employees-profile.html";
    window.open(employee_html);
  });
  $(document).on("click", "#launch_shareholders_data", function () {
    let shareholder_html = "shareholders-profile.html";
    window.open(shareholder_html);
  });
  $(document).on("click", "#launch_generals_data", function () {
    let general_html = "general-profile.html";
    window.open(general_html);
  });
  
});
