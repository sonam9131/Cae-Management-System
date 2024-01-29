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
  {
    title: "Billing and Time Record", icon: `<i style="font-size:22px; width:32px; color:#0D99FF" class="bi bi-cash"></i>`
  }
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
  $("#dxDataGridAllTasks_timingrecord").css("height", windowHeight);
  cls = new CommanCLS(agrno, Email, password, APIURL);
  getAllContacts();
  //   $(document).on("click", ".contactData", function () {
  //     console.log("showdata");
  //     $("#dashboard").hide();
  //      $("#contacts").show();
  //     // Toggle the visibility of dxDataGridAllContacts11 and dxDataGridAllContacts11_data
  //     //$("#dxDataGridAllContacts11, #dxDataGridAllContacts11_data").toggle();
  // });
//   var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })
$(document).on("click", "#tab-11", function () {
  console.log("showdata");
Json_CRM_Timing_Record_List();
  // Toggle the visibility of dxDataGridAllContacts11 and dxDataGridAllContacts11_data
  // $("#dxDataGridAllContacts11, #dxDataGridAllContacts11_data").toggle();
});
function Json_CRM_Timing_Record_List() {
  cls.Json_CRM_Timing_Record_List((status, Data) => {
      if (status) {
         let TimeingRecord_List = Data.Table;
         
    //       console.log(TimeingRecord_List.length,"TimeingRecord_List_addedbys");
    // if(TimeingRecord_List.length>0) {
    // 	$('#TaskCount').text('  ( ' + TimeingRecord_List.length + ' )') ;
    // } else {
    // $('#TaskCount').text('0');
    // }
    
    //       dateFilter = new DateFilter(TimeingRecord_List, 'WorkDate');

          timingrecordData(TimeingRecord_List);
      }
  });
}
function timingrecordData(GetData){
// let timingrecord = $("#TimingRecordTableData1").dxDataGrid({
  let gridOptions = {
  keyExpr: "TimingID",
  dataSource: GetData,

  export: {
      enabled: true,
      fileName: "file",
      allowExportSelectedData: true
  },
  groupPanel: {
      visible: true
  },


  groupPanel: {
      visible: true,
      allowColumnDragging: true
  },
  hoverStateEnabled: true,
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
  filterRow: { visible: true, applyFilter: "auto" },

  allowColumnReordering: true,

  allowColumnResizing: true,
  columnAutoWidth: true,
  showBorders: true,
  columnChooser: {
      enabled: true,
      mode: "select",// or "select"
      allowSearch: true
  },
  selection: {
      mode: 'multiple'//"single"
  },
  loadPanel: {
      enabled: true
  },
  columnFixing: {
      enabled: true
  },
  paging: {
      pageSize: 100
      // enabled: true
  },

  headerFilter: {
      visible: true,
      allowSearch: true
  },

  pager: {
      showPageSizeSelector: true,
      showNavigationButtons: true,
      // allowedPageSizes: [12, 20, 40],
      showInfo: true
  },
  onCellPrepared: function (e) {
      var txtlink = e.value;
      var linkty = e.value;



  },
  // customizeColumns: function (columns) {

  //     for (var i = 0; i < columns.length; i++) {

  //         if (columns[i].dataField.includes("Date") || ValiddateArray.includes(columns[i].dataField.toString())) {
  //             columns[i].dataType = "date";
  //             //columns[i].format = localStorage.getItem("dateformat");
  //             columns[i].format = "dd/MM/yyyy";
  //             console.log('columns[i]', columns[i]);
  //         }
  //     }
  // },
  onEditorPreparing: function (e) {
      console.log("Response", e);


  },

  columns: [

      {
          dataField: "OriginatorNo",
          caption: "Comp ID"

      }, {
          dataField: "OriginatorName",
          caption: "Company Name"

      }, {
          dataField: "Description",
          caption: "Description",
          width: 250
      },
      {
          dataField: "WorkDate",
          caption: "Work Date"
      }, {
          dataField: "Comment",
          caption: "Comment"

      },
      {
          dataField: "WeekNo",
          caption: "Week No"
      }, {
          dataField: "Units",
          caption: "Units",
   calculateCellValue: function(rowData) {
              return rowData.Units.toFixed(2);
          }
      },

      {
          dataField: "Times",
          caption: "Duration",
   calculateCellValue: function(rowData) {
              return rowData.Times.toFixed(2);
          }
      }, {
          dataField: "Charge",
          caption: "Charge",
   calculateCellValue: function(rowData) {
              return Math.round(rowData.Charge).toFixed(2);
          }
      }
      , {
          dataField: "SectionName",
          caption: "Section"
      },
      {
          dataField: "ProjectName",
          caption: "Folder"
      }, {
          dataField: "UserName",
          caption: "User Name"
      }, {
          dataField: "TaskType",
          caption: "Soure"
      }, {
          dataField: "Contact",
          caption: "Contact"
      }, {
          dataField: "TimingID",
          caption: "ID"
      },

  ],

  summary: {
      totalItems: [{
          column: "Units",
          summaryType: "sum",
          customizeText: function (data) {
              var IntCharge = data.value;
              return Number(IntCharge) === IntCharge && IntCharge % 1 !== 0 ? parseFloat(IntCharge).toFixed(2) : IntCharge;
          }
      }, {
              column: "Times",
              summaryType: "sum",
              customizeText: function (data) {
                  var hr = parseInt(data.value);
                  var mM = parseInt((data.value - Math.floor(hr))*60);
                  return hr + 'Hrs ' + mM +' min';
                   
          }
      }, {
          column: "Charge",
          summaryType: "sum",
          customizeText: function (data) {
              var IntCharge = data.value;
              return Number(IntCharge) === IntCharge && IntCharge % 1 !== 0 ? parseFloat(IntCharge).toFixed(2) : IntCharge;

          }
      }]
  },
  onSelectionChanged: function (selectedItems) {

      SelectTimingRecord = [];
      for (var i = 0; i < selectedItems.selectedRowsData.length; i++) {
          SelectTimingRecord.push(selectedItems.selectedRowsData[i]);

      }
      console.log('SelectTimingRecord', SelectTimingRecord);
  },


  onCellDblClick: function (e) {
      TaskCommon.TIMviwerLinkOpen(e.data)
  },
  onCellClick: function (e) {
      // console.log(e);

  },
  onRowClick: function (e) {
      var component = e.component;

      function initialClick() {

          console.log('initial click for key ' + e.key);
          component.clickCount = 1;
          component.clickKey = e.key;

      }

      function doubleClick() {
          //var CCodeOrClientId = e.data.OriginatorNo;
          //Json_DsSyncSuppplierToXero(CCodeOrClientId, function (Data) {
          //    if (Data.length) {
          //        console.log('CCodeOrClientId', CCodeOrClientId);
          //        console.log('CCodeOrClientId Data', Data);
          //        var GetData = Data.filter(obj1 => obj1.FirstName != e.data.FirstName && obj1.LastName != e.data.LastName);
          //        if (GetData.length) {
          //            createPopupo_TableBody(GetData, e.data);
          //        }
          //    }
          //})

          TaskCommon.TIMviwerLinkOpen(e.data)
          component.clickCount = 0;
          component.clickKey = 0;
          component.clickDate = null;
      }

      if ((!component.clickCount) || (component.clickCount !== 1) || (component.clickKey !== e.key)) {
          initialClick();

      }

      else if (component.clickKey == e.key) {
          if (((new Date()) - component.clickDate) <= 300)
              //alert("hi");
              doubleClick();
          else
              initialClick();
      }


  },



// }).dxDataGrid("instance");
}
var grid = new DevExpress.ui.dxDataGrid(
document.getElementById("dxDataGridAllTasks_timingrecord"),
gridOptions
);
}
  $(document).on("click", "#CreateNewTask", function () { 
    $("#CreateNewTask_modal").modal("show");
    Json_GetFolders()
  });
  $(document).on("click", "#batchEntryData", function () { 
    $("#batchEntryData_modal").modal("show");
   // Json_GetFolders()
   BatchEntry();
  });
  let CRMTimer = [];
  let BEObj = {};
BEObj.ProjectId = GetProjectId;
BEObj.SectionId = '';
BEObj.ClientId = '';
BEObj.UserId = '';
BEObj.Description = '';
BEObj.Date = '';
BEObj.IsProjectId = false;
BEObj.IsSectionId = false;
BEObj.IsClientId = false;
BEObj.IsUserId = false;
BEObj.IsDescription = false;
BEObj.IsDate = false;
  function BatchEntry() {
    var selectedUserId = '-1';

    // CRMTimer.TR_BantchTableData = [];
    var LastRowTempData = {};

    LastRowTempData.ListCount = 0;
    dataGrid = $('#TR_BantchTable').dxDataGrid({
        dataSource: CRMTimer,
        keyExpr: 'ID',
        showBorders: true,
        paging: {
            enabled: false,
        },
        editing: {
            mode: 'batch',
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true,
            selectTextOnEditStart: true,
            startEditAction: 'click',
        },
        hoverStateEnabled: true,
        scrolling: {
          useNative: true,
        },
        remoteOperations: true,
        repaintChangesOnly: true,
        selection: {
          mode: "single",
        },
        loadPanel: {
          enabled: true,
        },
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
        showColumnHeaders: true,
        headerFilter: {
          visible: true,
        },
        onInitNewRow(e) {
            console.log('e', e);
            console.log('e', BEObj);
            BEObj.Overwrite = false;
           // dataGrid.saveEditData()
            LastRowTempData.Overwrite = false;
            var size = Object.keys(LastRowTempData).length;
            BEObj.IsProjectId = document.querySelector("#ChkFolder").checked;
            BEObj.IsSectionId = document.querySelector("#ChkSection").checked;//ChkSection
            BEObj.IsClientId = document.querySelector("#ChkClient").checked;
            BEObj.IsUserId = document.querySelector("#ChkUser").checked;
            BEObj.IsDescription = document.querySelector("#ChkDescription").checked;
            BEObj.IsDate = document.querySelector("#ChkDate").checked;
            console.log('Insert LastRowTempData',LastRowTempData);
            console.log(size > 2);
            e.data.Overwrite = false;
            selectedUserId = 0;
            if (size > 5) { 
                BEObj.IsProjectId ? e.data.FolderID = LastRowTempData.ProjectId : '';
                BEObj.IsSectionId ? e.data.Section = LastRowTempData.Section : '';
                BEObj.IsSectionId ? e.data.SectionId = LastRowTempData.SectionId : '';
                BEObj.IsClientId ? e.data.Client = LastRowTempData.Client : '';
                BEObj.IsClientId ? e.data.ClientId = LastRowTempData.ClientId : '';
                BEObj.IsDate ? e.data.WorkDate = LastRowTempData.WorkDate : '';
                BEObj.IsUserId ? e.data.UserName = LastRowTempData.UserName : '';
                BEObj.IsUserId ? e.data.UserId = LastRowTempData.UserId : '';
                BEObj.IsDescription ? e.data.Description = LastRowTempData.Description : '';
            }  
           
        },
        onEditingStart(e) {
            console.log('EditingStart',e);
        },
        onRowInserting(e) {
            console.log('RowInserting', e);
        },
        onRowInserted() {
            console.log('RowInserted');
        },
        onRowUpdating() {
            console.log('RowUpdating');
        },
        onRowUpdated() {
            console.log('RowUpdated');
        },
        onRowRemoving() {
            console.log('RowRemoving');
        },
        onRowRemoved() {
            console.log('RowRemoved');
        },
        onSaving() {
            console.log('Saving');
        },
        onSaved() {
            console.log('Saved');
        },
        onEditCanceling() {
            console.log('EditCanceling');
        },
        onEditCanceled() {
            console.log('EditCanceled');
        },
        columns: [
            
            {
                dataField: 'FolderID',
                caption: 'Folder',
                width: 145,
                setCellValue(rowData, value) {
                    rowData.FolderID = value;
                    rowData.SectionId = null;

                    rowData.ClinetID = null;  
                    BEObj.IsProjectId = document.querySelector("#ChkFolder").checked; 
                    //BEObj.ProjectId = BEObj.IsProjectId ? value : BEObj.ProjectId;
                    LastRowTempData.ProjectId = value;
                    LastRowTempData.ListCount = 1;
                },

                validationRules: [{ type: 'required' }],
                lookup: {
                    dataSource: CRMTimer.FolderListData,
                    valueExpr: "FolderID",
                    displayExpr: "Folder",
                    value: BEObj.IsProjectId ? BEObj.ProjectId : GetProjectId,

                }
            },
            {
                dataField: 'Section',
                caption: 'Section',
                width: 145,
                validationRules: [{ type: 'required' }],
                editCellTemplate: CreateSectionSelection,
                setCellValue(rowData, value) {
                    rowData.Section = value.Section; 
                    rowData.SectionId = value.SectionId;
                    BEObj.Section = BEObj.IsSectionId ? value.Section : BEObj.SectionId;
                    BEObj.SectionId = BEObj.IsSectionId ? value.SectionId : BEObj.SectionId;
                    LastRowTempData.SectionId = value.SectionId;
                    LastRowTempData.Section = value.Section;
                },
            },
            {
                dataField: 'SubSection',
                caption: 'SubSection',
                width: 145,
                editCellTemplate: CreateSubSectionSelection,
                setCellValue(rowData, value) {
                    rowData.SubSection = value;
                    rowData.SubSectionId = CRMTimer.SubSectionList[0].SubSectionId;
                   // BEObj.IsSubSectionId = document.querySelector("#ChkSection").checked;
                    LastRowTempData.SubSectionId = value;
                    // BEObj.SectionId = BEObj.IsSectionId ? value : BEObj.SectionId;

                },
            },

            {
                dataField: 'Client',
                caption: 'Client',
                width: 145,
                editCellTemplate: CreateClientSelection,
                setCellValue(rowData, value) {
                    rowData.Client = value.Client;
                    rowData.ClientId = value.ClientId;
                    
                    BEObj.ClientId = BEObj.IsClientId ? value.ClientId : BEObj.ClientId;
                    BEObj.Client = BEObj.IsClientId ? value.Client : BEObj.Client;
                    
                    LastRowTempData.Client = value.Client;
                    LastRowTempData.ClientId = value.ClientId;
                },
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'Contact',
                caption: 'Contact',
                width: 145,
                editCellTemplate: CreateContactSelection,
                setCellValue(rowData, value) {
                    //ContactNo
                    rowData.ContactNo = value.ContactNo;
                    rowData.Contact = value.Contact;
                    LastRowTempData.ContactNo = value.ContactNo;
                    LastRowTempData.Contact = value.Contact;
                },
               // validationRules: [{ type: 'required' }],
            },

            {
                dataField: 'Description',
                caption: 'Description',
                width: 150, 
                editCellTemplate: CreateTextArear,
                validationRules: [{ type: 'required' }],
                setCellValue(rowData, value) {
                    rowData.Description = value;
                   /// BEObj.IsDescription = document.querySelector("#ChkDescription").checked;
                    BEObj.Description = BEObj.IsDescription ? value : BEObj.Description;
                    LastRowTempData.Description = value;
                },
                 
            },{
                dataField: 'Comment',
                caption: 'Comment',
                width: 150, 
                editCellTemplate: CreateTextArear,
                //validationRules: [{ type: 'required' }],
                setCellValue(rowData, value) {
                    rowData.Comment = value;
                   /// BEObj.IsDescription = document.querySelector("#ChkDescription").checked;
                   // BEObj.Comment = BEObj.IsDescription ? value : BEObj.Description;
                    LastRowTempData.Comment = value;
                },
                 
            },{
                dataField: 'Duration',
                caption: 'Duration',
                width: 125,
                dataType: 'number',
                validationRules: [{ type: 'required' }],
                setCellValue(rowData, value) {
                    console.log('LastRowTempData_testing', LastRowTempData);
                    if (!LastRowTempData.Overwrite) {
                        rowData.Charge = SetCharge(value);
                    } 
                    rowData.Duration = value;
                    LastRowTempData.Duration = value;
                },
            },
            {
                dataField: 'Charge',
                caption: 'Charge',
                width: 110,
                dataType: 'number',
                validationRules: [{ type: 'required' }],
                setCellValue(rowData, value) {
                    if (LastRowTempData.Overwrite) { 
						console.log('LastRowTempData_testing1', value);
                        rowData.Charge = value; 
                        LastRowTempData.Charge =value;
                    }
                },
            },
             {
                dataField: 'Overwrite',
                 caption: 'Overwrite',
                 width: 50, 
                 editCellTemplate: CreateOverwriteCheckbox,
                 setCellValue(rowData, value) {
                     rowData.Overwrite = value;  
                     LastRowTempData.Overwrite = value;
                     if (!value) {
                         SetCharge(LastRowTempData.Duration);
                     }
                 },
            },

            {
                dataField: 'WorkDate',
                dataType: 'date',
                caption: 'Date',
                width: 120,
                format : "dd/MM/yyyy",
                validationRules: [{ type: 'required' }],
                setCellValue(rowData, value) {
                    rowData.WorkDate = value;
                    //BEObj.IsDate = document.querySelector("#ChkDate").checked;
                    LastRowTempData.WorkDate = value;
                    BEObj.Date = BEObj.IsDate ? value : BEObj.Date;
                },
            },
            {
                dataField: 'UserName',
                caption: 'User ',
                width: 150,
                //lookup: {
                //    dataSource: CRMTimer.UserListData,
                //    valueExpr: "UserId",
                //    displayExpr: "UserName"
                //},
                editCellTemplate: CreateUserSelection,
                validationRules: [{ type: 'required' }],

                setCellValue(rowData, value) {
                    console.log('LastRowTempData', value);
                    rowData.UserId = value.UserId; 
                    rowData.UserName = value.UserName; 
                    rowData.Charge = SetCharge(LastRowTempData.Duration); 
                    LastRowTempData.UserName = value.UserName;
                    LastRowTempData.UserId = value.UserId; 
                },
            },
        ],

    }).dxDataGrid('instance');



    function CreateOverwriteCheckbox(cellElement, cellInfo) {
        $('<div>').dxCheckBox({
            value: cellInfo.data.Overwrite,
            onValueChanged(data) { 
                cellInfo.setValue(data.value); 
            },
        }).appendTo(cellElement);

    }

    function CreateTextArear(cellElement, cellInfo) { 
        console.log('CreateTextArear fail1', cellInfo);
        console.log('CreateTextArear fail2', cellElement);
        $('<div>').dxTextArea({
            value: cellInfo.displayValue,
            onValueChanged(data) {
                cellInfo.setValue(data.value);
            },
            height: 90,
        }).appendTo(cellElement);
      
    }

    function SetCharge(deuration) {
        if (!LastRowTempData.Overwrite) {
            var UserId = BEObj.IsUserId ? LastRowTempData.UserId : selectedUserId;
            var TblUserRoleList = CRMTimer.UserListData.filter(o => o.UserId == UserId);
            var Rate = TblUserRoleList.length ? TblUserRoleList[0].RoleRate : 0;
            var Charge = deuration * Rate;
            return Charge;
        }
    }
    function CreateUserSelection(cellElement, cellInfo) {

        $('<div>').dxSelectBox({
            dataSource: CRMTimer.UserListData,
            valueExpr: "UserId",
            displayExpr: "UserName",
            searchEnabled: true,
            onValueChanged(e) {
                e.component.option('value', e.value);
                const selectedItem = e.component.option('selectedItem');
                console.log('value', e.value);
                console.log(selectedItem.Client);
                CRMTimer.ClientListData = [];
                var obj = {
                    'UserId': selectedItem.UserId,
                    'UserName': selectedItem.UserName,
                }
                //CRMTimer.UserListData.push(obj);

                selectedUserId = selectedItem.UserId;
                BEObj.IsUserId = document.querySelector("#ChkUser").checked;
                BEObj.UserId = BEObj.IsUserId ? selectedItem.UserId : BEObj.UserId;
                LastRowTempData.UserId = selectedItem.UserId;
                LastRowTempData.UserName = selectedItem.UserName;

                cellInfo.setValue(obj);
                console.log(cellInfo)
            },
        }).appendTo(cellElement);
    }

    function CreateClientSelection(cellElement, cellInfo) {
        console.log('CreatReference fail1', cellInfo.data);
        console.log('CreatReference fail2', cellElement);
        TaskCommon.Json_GetClientsByFolder(cellInfo.data.FolderID, (Staus, Data1) => {
            //  Staus ? CreatReference(Data1.Table1, ClientNo) : console.log('CreatReference fail');
            console.log('CreatReference fail3', Data1.Table1);

            if (Staus) {
                $('<div>').dxSelectBox({
                    dataSource: Data1.Table1,
                    valueExpr: 'ClientID',
                    displayExpr: 'Client',
                    searchEnabled: true,
                    onValueChanged(e) {
                        e.component.option('value', e.value);
                        const selectedItem = e.component.option('selectedItem');
                        console.log('value', e.value);
                        console.log(selectedItem.Client);
                        CRMTimer.ClientListData = [];
                        var obj = {
                            'ClientId': selectedItem.ClientID,
                            'Client': selectedItem.Client,
                        }
                        CRMTimer.ClientListData.push(obj);

                        console.log(CRMTimer.ClientListData[0].ClientId);
                        console.log(CRMTimer.ClientListData)
                        //cellInfo.values[6] = selectedItem.ClientID;
                        //cellInfo.setCellValue = (rowData, value) => {
                        //    rowData.ClientID = selectedItem.ClientID;
                        //};
                       
                        cellInfo.setValue(obj);
                        console.log(cellInfo)
                    },
                }).appendTo(cellElement);

            }

        });

    }
    function CreateSectionSelection(cellElement, cellInfo) {
        console.log('CreatReference fail1', cellInfo.data);
        console.log('CreatReference fail2', cellElement);
        TaskCommon.Json_GetSections(cellInfo.data.FolderID, (Staus, Data1) => {
            //  Staus ? CreatReference(Data1.Table1, ClientNo) : console.log('CreatReference fail');
            console.log('CreatReference fail3', Data1.Table);
            CRMTimer.SectionListData = Data1.Table;

            if (Staus) {

                $('<div>').dxSelectBox({
                    dataSource: Data1.Table,
                    valueExpr: 'SecID',
                    displayExpr: 'Sec',
                    searchEnabled: true,
                    onValueChanged(e) {
                        e.component.option('value', e.value);

                        const selectedItem = e.component.option('selectedItem');
                        //  CRMTimer.SectionListData[0].SectionId
                        var obj = {
                            'SectionId': selectedItem.SecID,
                            'Section': selectedItem.Sec,
                        }
                        CRMTimer.SectionListData[0] = obj;
                        console.log(e.component._changedValue);
                        if (BEObj.IsSectionId) {
                            cellInfo.setValue(obj);
                        } else {
                            cellInfo.setValue(obj);
                        }
                      

                    },
                }).appendTo(cellElement);

            }

        });


    }
    function CreateContactSelection(cellElement, cellInfo) {
        console.log('CreatReference fail1', cellInfo.data);
          console.log('CreatReference fail2', cellElement);

        TaskCommon.Json_GetAllContactsByClientID(cellInfo.data.FolderID, cellInfo.data.ClientId, (status, Data) => {
              if (status) {
                  CRMTimer.ContactList = Data.Table;  
                  var ContactUpdatedList = CRMTimer.ContactList.map((o) => {
                      o.FullName = o['First Name'] + ' ' + o['Last Name'];

                      return o;
                  });
                      $('<div>').dxSelectBox({
                          dataSource: ContactUpdatedList,
                          valueExpr: 'ContactNo',
                          displayExpr: 'FullName',
                          searchEnabled: true,
                          onValueChanged(e) {
                              e.component.option('value', e.value);

                              const selectedItem = e.component.option('selectedItem');
                              //  CRMTimer.SectionListData[0].SectionId ContactNo Contact
                              var obj = {
                                  'ContactNo': selectedItem.ContactNo,
                                  'Contact': selectedItem['FullName'],
                              }
                              CRMTimer.ContactList[0] = obj;
                              console.log(e.component._changedValue);
                              cellInfo.setValue(obj);


                          },
                      }).appendTo(cellElement);
 



              }
          });
      
    }
     function CreateSubSectionSelection(cellElement, cellInfo) {  
         TaskCommon.Json_GetSubSections(cellInfo.data.FolderID, cellInfo.data.SectionId, (status, Data) => {
              if (status) {
                  CRMTimer.SubSectionList = Data.Table1;  

                      $('<div>').dxSelectBox({
                          dataSource: Data.Table1,
                          valueExpr: 'SubSectionID',
                          displayExpr: 'SubSection',
                          searchEnabled: true,
                          onValueChanged(e) {
                              e.component.option('value', e.value);

                              const selectedItem = e.component.option('selectedItem');
                              //  CRMTimer.SectionListData[0].SectionId
                              var obj = {
                                  'SubSectionID': selectedItem.SubSectionID,
                                  'SubSection': selectedItem['SubSection'],
                              }
                              CRMTimer.SubSectionList[0] = obj;
                              BEObj
                              console.log(e.component._changedValue);
                              if (BEObj.IsSectionId) {
                                  cellInfo.setValue(BEObj.SubSectionID);
                              } else {
                                  cellInfo.setValue(selectedItem['SubSection']);
                              }


                          },
                      }).appendTo(cellElement);
              }
          });
      
    }

}
  // $('[data-toggle="popover"]').popover()
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      // var activeUserData = Json_GetForwardUserList();

      //   // Ensure that the function returns the correct HTML content
      //   console.log('Active User Data:', activeUserData);
        return `<div class="col">
      
        <div class="avatar-list avatar-list-stacked my-2 table-responsive" id="popover_dynamicContainer" style="display:flex;width:400px">

        </div> 
    </div>  <div id="popover_targetdiv" class="row" style="display:none">
    <div class="col-xl-12">
   

        <div class="card-body">
            <div class="widget-media dz-scroll height370  px-4">
                <div id="popover_activeuserlist_data"></div>
            </div>
        </div>
    </div>


</div>`;
    }
    
});

// Use jQuery for event handling
$(document).on('input', '#popover_input', function() {
  var inputValue = $(this).val();
  console.log('Input value:', inputValue);
});
  $(document).on("click", "#cardHeader", function () { 
    console.log("cardHeadercardHeader");
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
  function showAlltask11(getdata) {
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
      document.getElementById("dxDataGridAllTasks_test"),
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
    Json_GetForwardUserList();
    $('#target-div').toggle();
  // Json_GetAccountUsersContactsByClient(cid);
   
});
$(document).on('click', '#appendcontentpop', function () {
  Json_GetFolders();
  //$('#target-div').toggle();
// Json_GetAccountUsersContactsByClient(cid);

 
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
  // $('[data-toggle="popover"]').popover('show');
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
// Json_GetFolders()


function Json_GetFolders() {
  // $('[data-toggle="popover"]').popover('show');
  let obj = {};
  obj.agrno=agrno;
  obj.Email=Email;
  obj.password=password;
  // obj.ProjectId = GetProjectId;
  // obj.SectionId = "-1";
  cls.Json_GetFolders(obj, function (status, Data) {
      if (status) {
          var json = Data['Table'];

          console.log('Json_GetForwardUserListuuuuuuuut', json);
  // cls.setForwardUser = json;
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
       ul = `<input type="text" id="pop_forwardSearch" class="form-control form-control-sm" placeholder="Search..." />`;

        ul += `<ul class="timeline" id="pop_flist">`;
        for (let item of result) {
            count++;
            let no = "success";
            if (count % 2 == 0) {
                no = "warning";
            }
            ul += `<li class="userlistClick" name="${item.Folder}" id="${item.FolderID}">
                                            <div class="timeline-panel">
                                            <i style="font-size:22px; width:32px; color:#0D99FF;padding-right: 15px;" class="bi bi-wallet2 hidedata_sonam" id=""></i>
                                                <div class="media-body">
                                                    <h5 class="mb-1">${item.Folder}</h5>
                                                    <small class="d-block">${item.FolderID}</small>
                                                </div>
                                               
                                            </div>
                                        </li>`;
        }
        ul += `</ul>`;
        $("#popover_activeuserlist_data").html(ul);
        
        
        //start search
        // let searchInput = document.getElementById("pop_forwardSearch");
        // let list = document.getElementById("pop_flist");
        // let items = list.getElementsByTagName("li");
        // // Add an input event listener to the search input
        // searchInput.addEventListener("input", function () {
        //     const searchTerm = searchInput.value.toLowerCase();
        //     for (let i = 0; i < items.length; i++) {
        //         const item = items[i];
        //         const text = item.textContent.toLowerCase();
        //         if (text.includes(searchTerm)) {
        //             item.style.display = "block";
        //         } else {
        //             item.style.display = "none";
        //         }
        //     }
        // });
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
      if(usernameArray_data.length>0){
        $('[data-toggle="popover"]').popover('hide');
        // $(".hidedata_sonam").hide();
        $(".hidedata_sonam_parent").html(`  <div class="card-header" style="padding: 0.5rem 1.25rem 0.5rem;" >
        <h4 class="heading mb-0 hidedata_sonam"  >  <i style="font-size:22px; width:32px; color:#0D99FF;padding-right: 15px;" class="bi bi-wallet2  datatogggle" data-toggle="popover" data-modal="false" id="appendcontentpop"></i> ${usernameArray_data[0].name}</h4>
        
        
        </div>`)
      }
   
      $("#" + gid).hide();
  });

  $(document).on("click", ".datatogggle", function () {
    console.log("sddddddddddddddddd");
    $('[data-toggle="popover"]').popover({
      html: true,
      content: function () {
        // var activeUserData = Json_GetForwardUserList();
  
        //   // Ensure that the function returns the correct HTML content
        //   console.log('Active User Data:', activeUserData);
          return `<div class="col">
        
          <div class="avatar-list avatar-list-stacked my-2 table-responsive" id="popover_dynamicContainer" style="display:flex;width:400px">
  
          </div> 
      </div>  <div id="popover_targetdiv" class="row" style="display:none">
      <div class="col-xl-12">
     
  
          <div class="card-body">
              <div class="widget-media dz-scroll height370  px-4">
                  <div id="popover_activeuserlist_data"></div>
              </div>
          </div>
      </div>
  
  
  </div>`;
      }
      
  });
  })
  
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
