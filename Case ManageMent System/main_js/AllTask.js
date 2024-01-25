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
    "Office": "1",
    "CaseCode": "AACA001",
    "Name": "AA Catering Limited",
    "Closed": "",
    "Date Marked as Dead/Blocked": "",
    "Lead IP": "Nicholas Andrew Stratten",
    "Second IP": "Hasib Howlader",
    "Staff": "NS/HH",
    "Case Manager": "",
    "Case Admin": "",
    "Cashier": "Nicola Pendry",
    "Type": "CVL",
    "JOB": "AACA001",
    "Appointed on": "",
    "Start": "",
    "Award": "",
    "Source of Work": "",
    "Bank": "",
    "Agent": "",
    "Accountant": "",
    "Solicitor": "",
    "Expected Fee Date": "",
    "Fee Basis": "Time and Expenses",
    "Fee Resolution Date": "",
    "Fee Estimate (Pre)": 6000,
    "Set Fee (Pre)": "False",
    "Fee Estimate (Post)": 1,
    "Set Fee (Post)": "False",
    "Current Fee (Manual)": "",
    "Pre App Fee (Calculated)": "",
    "Post App Fee (Calculated)": "",
    "Bank Balance (GBP)": 0,
    "Foreign Accounts": "",
    "VAT Number": "",
    "Deregistration Date": "",
    "Company Registration No": "10578497",
    "Nature of Business": "",
    "UK SIC Code": "56101",
    "Pension Scheme": "No",
    "Committee Appointed": "",
    "CourtAppointed By": "",
    "Court No": "",
    "Court Year": "",
    "A in B Ref": "",
    "OfficeUse": "",
    "OfficeUse2": "",
    "OfficeUse3": "",
    "OfficeUse4": "",
    "OfficeUse5": "",
    "Date Case Added": "10/14/2021",
    "CDDA Report Submitted": "",
    "KYC Requested": "",
    "KYC Received": "",
  },
  {
    "Office": "2",
    "CaseCode": "AACA001",
    "Name": "AA Catering Limited",
    "Closed": "",
    "Date Marked as Dead/Blocked": "",
    "Lead IP": "Nicholas Andrew Stratten",
    "Second IP": "Hasib Howlader",
    "Staff": "NS/HH",
    "Case Manager": "",
    "Case Admin": "",
    "Cashier": "Nicola Pendry",
    "Type": "CVL",
    "JOB": "AACA001",
    "Appointed on": "",
    "Start": "",
    "Award": "",
    "Source of Work": "",
    "Bank": "",
    "Agent": "",
    "Accountant": "",
    "Solicitor": "",
    "Expected Fee Date": "",
    "Fee Basis": "Time and Expenses",
    "Fee Resolution Date": "",
    "Fee Estimate (Pre)": 6000,
    "Set Fee (Pre)": "False",
    "Fee Estimate (Post)": 1,
    "Set Fee (Post)": "False",
    "Current Fee (Manual)": "",
    "Pre App Fee (Calculated)": "",
    "Post App Fee (Calculated)": "",
    "Bank Balance (GBP)": 0,
    "Foreign Accounts": "",
    "VAT Number": "",
    "Deregistration Date": "",
    "Company Registration No": "10578497",
    "Nature of Business": "",
    "UK SIC Code": "56101",
    "Pension Scheme": "No",
    "Committee Appointed": "",
    "CourtAppointed By": "",
    "Court No": "",
    "Court Year": "",
    "A in B Ref": "",
    "OfficeUse": "",
    "OfficeUse2": "",
    "OfficeUse3": "",
    "OfficeUse4": "",
    "OfficeUse5": "",
    "Date Case Added": "10/14/2021",
    "CDDA Report Submitted": "",
    "KYC Requested": "",
    "KYC Received": "",
  },
  {
    "Office": "3",
    "CaseCode": "AACA001",
    "Name": "AA Catering Limited",
    "Closed": "",
    "Date Marked as Dead/Blocked": "",
    "Lead IP": "Nicholas Andrew Stratten",
    "Second IP": "Hasib Howlader",
    "Staff": "NS/HH",
    "Case Manager": "",
    "Case Admin": "",
    "Cashier": "Nicola Pendry",
    "Type": "CVL",
    "JOB": "AACA001",
    "Appointed on": "",
    "Start": "",
    "Award": "",
    "Source of Work": "",
    "Bank": "",
    "Agent": "",
    "Accountant": "",
    "Solicitor": "",
    "Expected Fee Date": "",
    "Fee Basis": "Time and Expenses",
    "Fee Resolution Date": "",
    "Fee Estimate (Pre)": 6000,
    "Set Fee (Pre)": "False",
    "Fee Estimate (Post)": 1,
    "Set Fee (Post)": "False",
    "Current Fee (Manual)": "",
    "Pre App Fee (Calculated)": "",
    "Post App Fee (Calculated)": "",
    "Bank Balance (GBP)": 0,
    "Foreign Accounts": "",
    "VAT Number": "",
    "Deregistration Date": "",
    "Company Registration No": "10578497",
    "Nature of Business": "",
    "UK SIC Code": "56101",
    "Pension Scheme": "No",
    "Committee Appointed": "",
    "CourtAppointed By": "",
    "Court No": "",
    "Court Year": "",
    "A in B Ref": "",
    "OfficeUse": "",
    "OfficeUse2": "",
    "OfficeUse3": "",
    "OfficeUse4": "",
    "OfficeUse5": "",
    "Date Case Added": "10/14/2021",
    "CDDA Report Submitted": "",
    "KYC Requested": "",
    "KYC Received": "",
  },
  {
    "Office": "4",
    "CaseCode": "AACA001",
    "Name": "AA Catering Limited",
    "Closed": "",
    "Date Marked as Dead/Blocked": "",
    "Lead IP": "Nicholas Andrew Stratten",
    "Second IP": "Hasib Howlader",
    "Staff": "NS/HH",
    "Case Manager": "",
    "Case Admin": "",
    "Cashier": "Nicola Pendry",
    "Type": "CVL",
    "JOB": "AACA001",
    "Appointed on": "",
    "Start": "",
    "Award": "",
    "Source of Work": "",
    "Bank": "",
    "Agent": "",
    "Accountant": "",
    "Solicitor": "",
    "Expected Fee Date": "",
    "Fee Basis": "Time and Expenses",
    "Fee Resolution Date": "",
    "Fee Estimate (Pre)": 6000,
    "Set Fee (Pre)": "False",
    "Fee Estimate (Post)": 1,
    "Set Fee (Post)": "False",
    "Current Fee (Manual)": "",
    "Pre App Fee (Calculated)": "",
    "Post App Fee (Calculated)": "",
    "Bank Balance (GBP)": 0,
    "Foreign Accounts": "",
    "VAT Number": "",
    "Deregistration Date": "",
    "Company Registration No": "10578497",
    "Nature of Business": "",
    "UK SIC Code": "56101",
    "Pension Scheme": "No",
    "Committee Appointed": "",
    "CourtAppointed By": "",
    "Court No": "",
    "Court Year": "",
    "A in B Ref": "",
    "OfficeUse": "",
    "OfficeUse2": "",
    "OfficeUse3": "",
    "OfficeUse4": "",
    "OfficeUse5": "",
    "Date Case Added": "10/14/2021",
    "CDDA Report Submitted": "",
    "KYC Requested": "",
    "KYC Received": "",
  },
  {
    "Office": "5",
    "CaseCode": "AACA001",
    "Name": "AA Catering Limited",
    "Closed": "",
    "Date Marked as Dead/Blocked": "",
    "Lead IP": "Nicholas Andrew Stratten",
    "Second IP": "Hasib Howlader",
    "Staff": "NS/HH",
    "Case Manager": "",
    "Case Admin": "",
    "Cashier": "Nicola Pendry",
    "Type": "CVL",
    "JOB": "AACA001",
    "Appointed on": "",
    "Start": "",
    "Award": "",
    "Source of Work": "",
    "Bank": "",
    "Agent": "",
    "Accountant": "",
    "Solicitor": "",
    "Expected Fee Date": "",
    "Fee Basis": "Time and Expenses",
    "Fee Resolution Date": "",
    "Fee Estimate (Pre)": 6000,
    "Set Fee (Pre)": "False",
    "Fee Estimate (Post)": 1,
    "Set Fee (Post)": "False",
    "Current Fee (Manual)": "",
    "Pre App Fee (Calculated)": "",
    "Post App Fee (Calculated)": "",
    "Bank Balance (GBP)": 0,
    "Foreign Accounts": "",
    "VAT Number": "",
    "Deregistration Date": "",
    "Company Registration No": "10578497",
    "Nature of Business": "",
    "UK SIC Code": "56101",
    "Pension Scheme": "No",
    "Committee Appointed": "",
    "CourtAppointed By": "",
    "Court No": "",
    "Court Year": "",
    "A in B Ref": "",
    "OfficeUse": "",
    "OfficeUse2": "",
    "OfficeUse3": "",
    "OfficeUse4": "",
    "OfficeUse5": "",
    "Date Case Added": "10/14/2021",
    "CDDA Report Submitted": "",
    "KYC Requested": "",
    "KYC Received": "",
  }
];
var cls;
$(document).ready(function () {
  var windowHeight = window.innerHeight + "px";
    $("#dxDataGridAllContacts11").css("height", windowHeight);
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
$(document).on("click", "#showhideGrid", function () {
  console.log("showdata");

  // Toggle the visibility of dxDataGridAllContacts11 and dxDataGridAllContacts11_data
  $("#dxDataGridAllContacts11, #dxDataGridAllContacts11_data").toggle();
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
  function showContactsById(getdata) {

    let gridOptions = {
        dataSource: getdata,
        export: {
            enabled: true,
            allowExportSelectedData: true,
            fileName: "ContractTypeList"
        },
        hoverStateEnabled: true,
        scrolling: {
            useNative: true
        },
        allowColumnResizing: true,
        columnAutoWidth: true,

        selection: {
            mode: "single"
        },
        loadPanel: {
            enabled: true
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
            mode: 'virtual',
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
              dataField: "Office",
              caption: "Office",
            //   groupIndex: 0,
              width: 50,
            },
            {
              dataField: "CaseCode",
              caption: "CaseCode",
            },
  
            {
              dataField: "Name",
              caption: "Name",
            },
            {
              dataField: "Closed",
              caption: "Closed",
            },
            {
              dataField: "Date Marked as Dead/Blocked",
              caption: "Date Marked as Dead/Blocked",
            },
  
            {
              dataField: "Lead IP",
              caption: "Lead IP",
            },
            {
              dataField: "Second IP",
              caption: "Second IP",
            },
            {
              dataField: "Staff",
              caption: "Staff",
            },
            {
              dataField: "Case Manager",
              caption: "Case Manager",
            },
            {
              dataField: "Case Admin",
              caption: "Case Admin",
            },
            {
              dataField: "Cashier",
              caption: "Cashier",
            },
            {
              dataField: "Type",
              caption: "Type",
            },
            {
              dataField: "JOB",
              caption: "JOB",
            },
            {
              dataField: "Appointed on",
              caption: "Appointed on",
            },
            {
              dataField: "Start",
              caption: "Start",
            },
            {
              dataField: "Appointed on",
              caption: "Appointed on",
            },
            {
              dataField: "Start",
              caption: "Start",
            },
            {
              dataField: "Appointed on",
              caption: "Appointed on",
            },
            {
              dataField: "Start",
              caption: "Start",
            },
            {
              dataField: "Award",
              caption: "Award",
            },
            {
              dataField: "Source of Work",
              caption: "Source of Work",
            },
            {
              dataField: "Bank",
              caption: "Bank",
            },
            {
              dataField: "Agent",
              caption: "Agent",
            },
            {
              dataField: "Accountant",
              caption: "Accountant",
            },
            {
              dataField: "Solicitor",
              caption: "Solicitor",
            },
            {
              dataField: "Expected Fee Date",
              caption: "Expected Fee Date",
            },
            {
              dataField: "Fee Basis",
              caption: "Fee Basis",
            },
            {
              dataField: "Fee Resolution Date",
              caption: "Fee Resolution Date",
            },
            {
              dataField: "Fee Estimate (Pre)",
              caption: "Fee Estimate (Pre)",
            },
            {
              dataField: "Set Fee (Pre)",
              caption: "Set Fee (Pre)",
            },
            {
              dataField: "Fee Estimate (Post)",
              caption: "Fee Estimate (Post)",
            },
            {
              dataField: "Set Fee (Post)",
              caption: "Set Fee (Post)",
            },
            {
              dataField: "Current Fee (Manual)",
              caption: "Current Fee (Manual)",
            },
            {
              dataField: "Pre App Fee (Calculated)",
              caption: "Pre App Fee (Calculated)",
            },
            {
              dataField: "Post App Fee (Calculated)",
              caption: "Post App Fee (Calculated)",
            },
            {
              dataField: "Bank Balance (GBP)",
              caption: "Bank Balance (GBP)",
            },
            {
              dataField: "Foreign Accounts",
              caption: "Foreign Accounts",
            },
            {
              dataField: "VAT Number",
              caption: "VAT Number",
            },
            {
              dataField: "Deregistration Date",
              caption: "Deregistration Date",
            },
            {
              dataField: "Company Registration No",
              caption: "Company Registration No",
            },
            {
              dataField: "Nature of Business",
              caption: "Nature of Business",
            },
            {
              dataField: "UK SIC Code",
              caption: "UK SIC Code",
            },
            {
              dataField: "Pension Scheme",
              caption: "Pension Scheme",
            },
            {
              dataField: "Committee Appointed",
              caption: "Committee Appointed",
            },
            {
              dataField: "CourtAppointed By",
              caption: "CourtAppointed By",
            },
            {
              dataField: "Court No",
              caption: "Court No",
            },
            {
              dataField: "Court Year",
              caption: "Court Year",
            },
            {
              dataField: "A in B Ref",
              caption: "A in B Ref",
            },
            {
              dataField: "OfficeUse",
              caption: "OfficeUse",
            },
            {
              dataField: "OfficeUse2",
              caption: "OfficeUse2",
            },
            {
              dataField: "OfficeUse3",
              caption: "OfficeUse3",
            },
            {
              dataField: "OfficeUse4",
              caption: "OfficeUse4",
            },
            {
              dataField: "OfficeUse5",
              caption: "OfficeUse5",
            },
            {
              dataField: "Date Case Added",
              caption: "Date Case Added",
            },
            {
              dataField: "CDDA Report Submitted",
              caption: "CDDA Report Submitted",
            },
            {
              dataField: "KYC Requested",
              caption: "KYC Requested",
            },
            {
              dataField: "KYC Received",
              caption: "KYC Received",
            },
            //    {
            //        caption: 'Delete/Edit',
            //        cellTemplate: function (container, options) {
            //            container.addClass("center");
            //            $("<div class='alertContactDel' />").dxButton({
            //                icon: 'trash',
            //                onClick: function (e) {
            //                    // var grid = $("#tblallclients").dxDataGrid("instance");
            //                    console.log("Delete Row", options);
            //                }
            //            }).appendTo(container);
            //            $("<div class='' />").dxButton({
            //                icon: 'edit',
            //                onClick: function (e) {
            //                    var urladd = "add_contact.html?OriginatorNo=" + options.data["OriginatorNo"] + "&ContactNo=" + options.data["ContactNo"] + "&ProjectId=" + GetProjectId;// + "&ContactNo=" + e.data["ContactNo"];
  
            //                    window.open(urladd);
  
            //                }
            //            }).appendTo(container);
  
            //            //$("<div class='' />").dxButton({
            //            //    icon: 'plus',
            //            //    onClick: function (e) {
            //            //        var urladd = "add_contact.html?OriginatorNo=" + options.data["OriginatorNo"] + "&ContactNo=" + options.data["ContactNo"] + "&ProjectId=" + GetProjectId + "&newContact=" + "true";// + "&ContactNo=" + e.data["ContactNo"];
  
            //            //        window.open(urladd);
  
            //            //    }
            //            //}).appendTo(container);
            //        }
            //    },
          ],
        headerFilter: {
            visible: true
        },
         onRowRemoving: function (e) {
             console.log("calling on row removing");
        cls.Json_DSDeleteRequest(function(d){
       console.log("Json_DSDeleteRequest",d.data);
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

            console.log("view messsage url", e.data);
            let bta = window.btoa(JSON.stringify(e.data));
            function doubleClick() {

                var stringURl = "client-dashboard.html?Data=" + bta;
                // console.log("view messsage url",stringURl);
                window.open(stringURl);



            }

            if ((!component.clickCount) || (component.clickCount !== 1) || (component.clickKey !== e.key)) {
                initialClick();
                // SelectClickEvent("1");
                // $("#PostCodeID").val();
            }

            else if (component.clickKey == e.key) {
                if (((new Date()) - component.clickDate) <= 300)
                    doubleClick();
                else
                    initialClick();
            }


        }

    }

    // $('#DocumentRequests').dxDataGrid();




    var grid = new DevExpress.ui.dxDataGrid(document.getElementById("dxDataGridAllContacts11"), gridOptions);

    function customHeaderTemplate(header, info) {
        var iconHtml = '<span class="dx-icon dx-icon-edit"></span>'; // Example: Edit icon
        header.append('<div class="custom-header">' + iconHtml + '<div>' + info.column.caption + '</div></div>');
    }
    grid.refresh(); // or grid.repaint();


    // var grid = new DevExpress.ui.dxDataGrid(document.getElementById("DocumentRequests"), gridOptions);


    grid.columnOption("Request", "headerTemplate", customHeaderTemplate);
   


}
//   function showContactsById(GetData) {
//     dxAllcontacts = $("#dxDataGridAllContacts11")
//       .dxDataGrid({
//         dataSource: GetData,
//         //keyExpr: "OriginatorNo",
//         export: {
//           enabled: true,
//           fileName: "contacts",
//           allowExportSelectedData: true,
//         },
//         hoverStateEnabled: true,
//         // groupPanel: {
//         //   visible: true,
//         // },
//         groupPanel: { visible: true },
//         grouping: {
//             autoExpandAll: true,
//         },
        
//         stateStoring: {
//           enabled: true,
//           type: "custom",

//           customSave: function (state) {
//             saveLayoutSet = [];
//             saveLayoutSet.push(state);
//             if (localStorage.getItem("BasicLyout") == null) {
//               // alert(JSON.stringify(saveLayoutSet[0]));
//               localStorage.setItem(
//                 "BasicLyout",
//                 JSON.stringify(saveLayoutSet[0])
//               );
//             }
//           },
//         },
//         columnChooser: {
//           enabled: true,
//           mode: "select", // or "select"
//           allowSearch: true,
//         },
//         //groupPanel: {
//         //    visible: true,
//         //    allowColumnDragging: true
//         //},
//         hoverStateEnabled: true,
//         scrolling: {
//           useNative: true,
//         },

//         scrolling: {
//           columnRenderingMode: "standard",
//           mode: "standard",
//           preloadEnabled: false,
//           rowRenderingMode: "standard",
//           scrollByContent: true,
//           scrollByThumb: false,
//           showScrollbar: "onScroll",
//           useNative: "auto",
//           useNative: true,
//         },
//         //filterPanel: { visible: true },

//         //filterValue: [["Active", "=", "Yes"]],
//         filterRow: {
//           visible: true,

//           applyFilter: "auto",
//         },

//         allowColumnReordering: true,

//         allowColumnResizing: true,
//         columnAutoWidth: true,
//         showBorders: true,

//         selection: {
//           mode: "single",
//         },
//         loadPanel: {
//           enabled: true,
//         },

//         headerFilter: {
//           visible: true,
//           allowSearch: true,
//         },
//         //headerFilter: { visible: true },
//         // filterValue: [['E-Mail', 'notcontains', '@NoEmail']],
//         paging: {
//           pageSize: 50,
//           // enabled: true
//         },
//         pager: {
//           showPageSizeSelector: true,
//           showNavigationButtons: true,
//           allowedPageSizes: [50, 100, 200],
//           showInfo: true,
//         },
//         columnFixing: {
//           enabled: true,
//         },
//         showColumnHeaders: true,
//         //calculateCellValue: function (rowData) {
//         //    return rowData.FirstName + ' ' + rowData.LastName;
//         //},
//         editing: {
//           mode: "row",
//           useIcons: true,
//           allowDeleting(e) {
//             //console.log("Hello Print1",e);
//             if (e.row.data) {
//               //console.log("Hello Print",e.row.data);
//               return true;
//             }
//             return false;
//             // return !isChief(e.row.data.Admin);
//           },
//         },
//         // customizeColumns: function (columns) {
//         //     console.log(columns,"getcolumnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbs")
//         //     for (var i = 0; i < columns.length; i++) {

//         //         //if (columns[i].dataField.includes("date")) {
//         //         //    columns[i].dataType = "date";
//         //         //    //columns[i].format = localStorage.getItem("dateformat");

//         //         //    columns[i].format = "dd/MM/yyyy";

//         //         //}

//         //         if (columns[i].dataField.includes("Date")) {
//         //             columns[i].dataType = "date";
//         //             //columns[i].format = localStorage.getItem("dateformat");

//         //             columns[i].format = "dd/MM/yyyy";

//         //         }

//         //         //console.log("columns", columns[i]);
//         // 		 if (columns[i].dataField=="Main Contact") {
//         // 			 columns[i].width = "100"
//         // 		 }
//         // 		if (columns[i].dataField=="First Name") {
//         // 			 columns[i].width = "100"
//         // 		 }

//         // 		if (columns[i].dataField=="Last Name") {
//         // 			 columns[i].width = "120"
//         // 		 }

//         //         var dt = columns[i].dataField;
//         //         switch (dt) {
//         //             case "Main Contact":
//         //             case "OriginatorNo":
//         // 			case "First Name":
//         // 			case "Last Name":
//         //                 columns[i].fixed = true
//         //                 break;
//         //         }

//         //     }
//         // },
//         // onSelectionChanged: function (data) {
//         //     $(".btnAddNewContact").show();
//         //     OriginatorNo = "";
//         //     ContactEmailID = "";
//         //     ContactList = [];
//         //     var rdata = data.selectedRowsData;
//         //    // console.log(rdata[0]["OriginatorNo"]);

//         // 	$(".viewUserList").show();

//         //     $("#liAddContact").show();

//         //     $("#maincontact").prop("checked", false);
//         //     $("#inActive").prop("checked", false);
//         //     urlEditContact = "add_contact.html?OriginatorNo=" + rdata[0]["OriginatorNo"] + "&ContactNo=" + rdata[0]["ContactNo"] + "&ProjectId=" + cls.ProjectId;
//         //     for (var c = 0; c < rdata.length; c++) {
//         // 		  ContactList.push(rdata[c]);
//         //         OriginatorNo = rdata[0]["OriginatorNo"];
//         //         ContactEmailID = rdata[0]["E-Mail"];
//         //         $("#txtOriginatorNo").val(rdata[0]["OriginatorNo"]);

//         //         $("#opttitle").val(rdata[0]["Title"]);
//         //         $("#FirtsName").val(rdata[0]["First Name"]);
//         //         $("#txtCompanyName").val(rdata[0]["Company Name"]);
//         //         $("#LastName").val(rdata[0]["Last Name"]);

//         //         $("#optRole").val(rdata[0]["Role"]);
//         //         var mcon = rdata[0]["Main Contact"];

//         //         if (mcon == true) {
//         //             //alert(mcon);
//         //             $("#maincontact").prop('checked', true);
//         //             //Switchery(elem, { disabled: true });
//         //             // var switchery = new Switchery(elem, { size: 'large' });
//         //             // $("#maincontact").attr("checked");

//         //         }
//         //         else {
//         //             $("#maincontact").prop("checked", false);
//         //         }
//         //         var Acon = rdata[0]["Active"];
//         //         if (Acon == "Yes") {
//         //             $("#inActive").prop("checked", false);
//         //         }
//         //         else {
//         //             $("#inActive").prop("checked", true);
//         //         }

//         //         $("#txtGreeting").val(rdata[0]["Greeting"]);

//         //         $("#txtEmail").val(rdata[0]["E-Mail"]);

//         //         $("#txtEmailUpdate").val(rdata[0]["E-Mail"]);

//         //         $("#optManager").val(rdata[0]["ManagerName"]);

//         //         $("#txtLine1").val(rdata[0]["Address 1"]);
//         //         $("#txtLine2").val(rdata[0]["Address 2"]);

//         //         $("#txtStreet").val(rdata[0]["Town"]);

//         //         $("#txtPostcode").val(rdata[0]["Postcode"]);
//         //         $("#optCountry").val(rdata[0]["Country"]);
//         //         $("#txtTelephone").val(rdata[0]["Mobile"]);
//         //         $("#txtudfidcontactno").val(rdata[0]["ContactNo"]);
//         //         $("#comment").val(rdata[0]["Note"]);
//         //         var GetProjectId = GetProjectId;
//         //         if (GetProjectId != null && GetProjectId != "") {
//         //             GetProjectId = GetProjectId;
//         //         }
//         //         else {
//         //             GetProjectId = $("#txtProjectId").text();
//         //         }
//         //         var setverify = rdata[0]["OriginatorNo"] + "," + rdata[0]["ContactNo"] + "," + rdata[0]["E-Mail"] + "," + GetProjectId;
//         //         //alert(setverify);
//         //         $("#btnbankAcc").attr("id", setverify);
//         //         $("#btnbankLic").attr("id", setverify);
//         //         $("#btnbankNI").attr("id", setverify);
//         //         $("#btnbankPss").attr("id", setverify);
//         //     }

//         // },

//         // onCellPrepared: function (e) {

//         //     if (e.rowType === "data" && e.column.dataField === "Main Contact") {
//         //         var vimg;

//         //         if (e.value == true) {
//         //             vimg = "fa fa-user trueUser";
//         //         }
//         //         else {
//         //             vimg = "fa fa-user falseuser";
//         //         }
//         //         fieldHtml = '<i  class="' + vimg + '"></i>';

//         //         e.cellElement.html(fieldHtml);
//         //     }

//         //     if (e.rowType === "data" && e.column.dataField === "Company Name") {

//         //         var url = "client-manager.html?OriginatorNo=" + e.data["OriginatorNo"] + "&ProjectId=" + GetProjectId;// + "&ContactNo=" + e.data["ContactNo"];
//         //         var fieldHtml = '<a target="_blank" href="' + url + '">' + e.value + '</a>';
//         //         e.cellElement.html(fieldHtml);
//         //     }

//         // },

//         columns: [
//           {
//             dataField: "Office",
//             caption: "Office",
//             groupIndex: 0,
//             width: 50,
//           },
//           {
//             dataField: "CaseCode",
//             caption: "CaseCode",
//           },

//           {
//             dataField: "Name",
//             caption: "Name",
//           },
//           {
//             dataField: "Closed",
//             caption: "Closed",
//           },
//           {
//             dataField: "Date Marked as Dead/Blocked",
//             caption: "Date Marked as Dead/Blocked",
//           },

//           {
//             dataField: "Lead IP",
//             caption: "Lead IP",
//           },
//           {
//             dataField: "Second IP",
//             caption: "Second IP",
//           },
//           {
//             dataField: "Staff",
//             caption: "Staff",
//           },
//           {
//             dataField: "Case Manager",
//             caption: "Case Manager",
//           },
//           {
//             dataField: "Case Admin",
//             caption: "Case Admin",
//           },
//           {
//             dataField: "Cashier",
//             caption: "Cashier",
//           },
//           {
//             dataField: "Type",
//             caption: "Type",
//           },
//           {
//             dataField: "JOB",
//             caption: "JOB",
//           },
//           {
//             dataField: "Appointed on",
//             caption: "Appointed on",
//           },
//           {
//             dataField: "Start",
//             caption: "Start",
//           },
//           {
//             dataField: "Appointed on",
//             caption: "Appointed on",
//           },
//           {
//             dataField: "Start",
//             caption: "Start",
//           },
//           {
//             dataField: "Appointed on",
//             caption: "Appointed on",
//           },
//           {
//             dataField: "Start",
//             caption: "Start",
//           },
//           {
//             dataField: "Award",
//             caption: "Award",
//           },
//           {
//             dataField: "Source of Work",
//             caption: "Source of Work",
//           },
//           {
//             dataField: "Bank",
//             caption: "Bank",
//           },
//           {
//             dataField: "Agent",
//             caption: "Agent",
//           },
//           {
//             dataField: "Accountant",
//             caption: "Accountant",
//           },
//           {
//             dataField: "Solicitor",
//             caption: "Solicitor",
//           },
//           {
//             dataField: "Expected Fee Date",
//             caption: "Expected Fee Date",
//           },
//           {
//             dataField: "Fee Basis",
//             caption: "Fee Basis",
//           },
//           {
//             dataField: "Fee Resolution Date",
//             caption: "Fee Resolution Date",
//           },
//           {
//             dataField: "Fee Estimate (Pre)",
//             caption: "Fee Estimate (Pre)",
//           },
//           {
//             dataField: "Set Fee (Pre)",
//             caption: "Set Fee (Pre)",
//           },
//           {
//             dataField: "Fee Estimate (Post)",
//             caption: "Fee Estimate (Post)",
//           },
//           {
//             dataField: "Set Fee (Post)",
//             caption: "Set Fee (Post)",
//           },
//           {
//             dataField: "Current Fee (Manual)",
//             caption: "Current Fee (Manual)",
//           },
//           {
//             dataField: "Pre App Fee (Calculated)",
//             caption: "Pre App Fee (Calculated)",
//           },
//           {
//             dataField: "Post App Fee (Calculated)",
//             caption: "Post App Fee (Calculated)",
//           },
//           {
//             dataField: "Bank Balance (GBP)",
//             caption: "Bank Balance (GBP)",
//           },
//           {
//             dataField: "Foreign Accounts",
//             caption: "Foreign Accounts",
//           },
//           {
//             dataField: "VAT Number",
//             caption: "VAT Number",
//           },
//           {
//             dataField: "Deregistration Date",
//             caption: "Deregistration Date",
//           },
//           {
//             dataField: "Company Registration No",
//             caption: "Company Registration No",
//           },
//           {
//             dataField: "Nature of Business",
//             caption: "Nature of Business",
//           },
//           {
//             dataField: "UK SIC Code",
//             caption: "UK SIC Code",
//           },
//           {
//             dataField: "Pension Scheme",
//             caption: "Pension Scheme",
//           },
//           {
//             dataField: "Committee Appointed",
//             caption: "Committee Appointed",
//           },
//           {
//             dataField: "CourtAppointed By",
//             caption: "CourtAppointed By",
//           },
//           {
//             dataField: "Court No",
//             caption: "Court No",
//           },
//           {
//             dataField: "Court Year",
//             caption: "Court Year",
//           },
//           {
//             dataField: "A in B Ref",
//             caption: "A in B Ref",
//           },
//           {
//             dataField: "OfficeUse",
//             caption: "OfficeUse",
//           },
//           {
//             dataField: "OfficeUse2",
//             caption: "OfficeUse2",
//           },
//           {
//             dataField: "OfficeUse3",
//             caption: "OfficeUse3",
//           },
//           {
//             dataField: "OfficeUse4",
//             caption: "OfficeUse4",
//           },
//           {
//             dataField: "OfficeUse5",
//             caption: "OfficeUse5",
//           },
//           {
//             dataField: "Date Case Added",
//             caption: "Date Case Added",
//           },
//           {
//             dataField: "CDDA Report Submitted",
//             caption: "CDDA Report Submitted",
//           },
//           {
//             dataField: "KYC Requested",
//             caption: "KYC Requested",
//           },
//           {
//             dataField: "KYC Received",
//             caption: "KYC Received",
//           },
//           //    {
//           //        caption: 'Delete/Edit',
//           //        cellTemplate: function (container, options) {
//           //            container.addClass("center");
//           //            $("<div class='alertContactDel' />").dxButton({
//           //                icon: 'trash',
//           //                onClick: function (e) {
//           //                    // var grid = $("#tblallclients").dxDataGrid("instance");
//           //                    console.log("Delete Row", options);
//           //                }
//           //            }).appendTo(container);
//           //            $("<div class='' />").dxButton({
//           //                icon: 'edit',
//           //                onClick: function (e) {
//           //                    var urladd = "add_contact.html?OriginatorNo=" + options.data["OriginatorNo"] + "&ContactNo=" + options.data["ContactNo"] + "&ProjectId=" + GetProjectId;// + "&ContactNo=" + e.data["ContactNo"];

//           //                    window.open(urladd);

//           //                }
//           //            }).appendTo(container);

//           //            //$("<div class='' />").dxButton({
//           //            //    icon: 'plus',
//           //            //    onClick: function (e) {
//           //            //        var urladd = "add_contact.html?OriginatorNo=" + options.data["OriginatorNo"] + "&ContactNo=" + options.data["ContactNo"] + "&ProjectId=" + GetProjectId + "&newContact=" + "true";// + "&ContactNo=" + e.data["ContactNo"];

//           //            //        window.open(urladd);

//           //            //    }
//           //            //}).appendTo(container);
//           //        }
//           //    },
//         ],

//         onRowClick: function (e) {
//           console.log("on row click", e);

//           var component = e.component;
//           function initialClick() {
//             varGoogleid = "";
//             e.data["Postcode"] != "" && e.data["Postcode"] != null
//               ? $("#Google_Maps").show()
//               : $("#Google_Maps").hide();

//             varGoogleid = e.data["Postcode"];

//             clickUrl =
//               "add_contact.html?OriginatorNo=" +
//               e.data["OriginatorNo"] +
//               "&ContactNo=" +
//               e.data["ContactNo"] +
//               "&ProjectId=" +
//               GetProjectId +
//               "&newContact=" +
//               "true"; // + "&ContactNo=" + e.data["ContactNo"];
//             console.log("initial click for key " + e);
//             component.clickCount = 1;
//             component.clickKey = e.key;
//             component.clickDate = new Date();
//           }

//           function doubleClick() {
//             //Edata=0021:15&CNO=1
//             var urladd =
//               "add_contact_update.html?Edata=" +
//               e.data["OriginatorNo"] +
//               ":" +
//               GetProjectId +
//               "&CNO=" +
//               e.data["ContactNo"];
//             window.open(urladd);

//             console.log("second click");
//             component.clickCount = 0;
//             component.clickKey = 0;
//             component.clickDate = null;
//           }

//           if (
//             !component.clickCount ||
//             component.clickCount !== 1 ||
//             component.clickKey !== e.key
//           ) {
//             initialClick();
//           } else if (component.clickKey == e.key) {
//             if (new Date() - component.clickDate <= 300)
//               //alert("hi");
//               doubleClick();
//             else initialClick();
//           }
//         },

//         onRowRemoving: function (e) {
//           console.log("RowRemoving", e);
//           deleteContactbyemail(e);
//         },
//         onRowRemoved: function (e) {
//           console.log("RowRemoved", e);
//         },
//       })
//       .dxDataGrid("instance");
//   }

});
