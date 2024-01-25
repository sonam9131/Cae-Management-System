let portalurl = "https://portal.docusoftweb.com/clientservices.asmx/";
var sonamData = "";
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let globalData = "";
let subjectData = "";
let subjectData1 = "";

// udf var/////
let setHeader = new Set();
let udfMap = new Map();
let set_Linked_Udf, set_Udf_List, getCompanyDetails;
let setChangeValue = new Map();
//end udf var/////

function genralAjaxForPortal(data, methosName, callback) {
    //   alert(data + " " + methosName);
    if (data !== "") {
        //alert("Call1");
        $.ajax({
            type: "POST",
            url: portalurl + methosName,
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                callback(msg);
            },
            error: function (e) {
                console.log("Network Error !\n Please check your data connection ! Try again");
            }
        });
    }
    else {
        //  alert("else");
        $.ajax({
            type: "POST",
            url: this.APIURL + methosName,
            data: "{}",
            // contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                callback(msg);
            },
            error: function (e) {
                console.log("Network Error !\n Please check your data connection ! Try again");
            }
        });
    }
}

var APIURL = "https://docusoftpractice.com/PracticeServices.asmx/";

function genralAjax(data, methosName, callback) {
    //   alert(data + " " + methosName);
    if (data != "") {
        //    alert("Call1");
        $.ajax({
            type: "POST",
            url: this.APIURL + methosName,
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                callback(msg);
            },
            error: function (e) {
                console.log("Network Error !\n Please check your data connection ! Try again");

            }
        });

    }
    else {
        //  alert("else");
        $.ajax({
            type: "POST",
            url: this.APIURL + methosName,
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                callback(msg);
            },
            error: function (e) {

                console.log("Network Error !\n Please check your data connection ! Try again");

            }
        });
    }
}



var urlLetter = "https://docusoftweb.com/dsdesktopwebservice.asmx/";

function genralAjaxMore(data, methosName, callback) {
    //   alert(data + " " + methosName);
    if (data != "") {
        //    alert("Call1");
        $.ajax({
            type: "POST",
            url: this.urlLetter + methosName,
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                callback(msg);
            },
            error: function (e) {
                console.log("Network Error !\n Please check your data connection ! Try again");

            }
        });

    }
    else {
        //  alert("else");
        $.ajax({
            type: "POST",
            url: this.APIURL + methosName,
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                callback(msg);
            },
            error: function (e) {

                console.log("Network Error !\n Please check your data connection ! Try again");

            }
        });
    }
}



var agrno = localStorage.getItem("agrno");
var Email = localStorage.getItem("Email");
var password = localStorage.getItem("pass");

var DProjectId = localStorage.getItem("ProjectId");
var customActivity = "";
var EditableStageObject;
var set_next_stage;
var MainContactArray;
var allService = new AllService(agrno, Email, password, "PracticeServices.asmx/");
var UserTable = [], currentUserInfo = [], TaskDocument = [], AssignedUserList = [];
var send_link;
var isPortalUser;
var setSendLinkEmail;
let setDocumentId;
let setGuidlink, setTaskAttachment, setCrmUdf, setEmailMainContactTrue;
var StatusData = [
    {
        "Status": 'Not Started'

    }, {
        "Status": 'In Progress'

    }, {
        "Status": "Waiting on someone else"

    }, {
        "Status": "Deferred"

    },
    {
        "Status": 'Done'

    },
    {
        "Status": 'Completed'

    }
];

var PriorityData = [
    {
        "PriorityID": 0,
        "Priority": "Low"
    },
    {
        "PriorityID": 1,
        "Priority": "Normal"
    },
    {
        "PriorityID": 2,
        "Priority": "High"
    }
];

var TaskUserId, TaskFolderId, StatusClass, UpdateActivity, ActivityTableData, TaskId, TaskMode, StagesInfoData;
var FileData = [];
var fileName = [];
var Size = 0;
var fileNameArray = [];
var TaskAttechment = [];
var editor, CalstartDate, CalendDate;

var myObj = [];
var markup;


$(document).ready(function () {

    if (!agrno && !Email && !password) {
        window.location.href = "https://docusoftpractice.com?redirecturl=" + escape(window.location.href);
    }

    //$(document).ready(function() {
    //$("#DU_Submit_upload").addClass("disabled");


    // });
    $(document).on("change", ".commanClass", function () {

        myObj.push($(this).attr('name') ? $(this).attr('name') : "");
        console.log(myObj.toString(), "MYOBJECT");
    });

    $(document).on("click", "#changesineditor", function () {

        myObj.push($(this).attr('name') ? $(this).attr('name') : "");
        //console.log(myObj.toString(), "MYOBJECT_sonam");
    });

    var cls = new CommanCLS(agrno, Email, password, "PracticeServices.asmx/");
    cls.Json_GetUserTheme(function (status, Data) {
        if (status) {
            console.log("theme_121_CRM ", Data);
            localStorage.setItem("cssTheme", Data);
            if (localStorage.getItem("cssTheme")) {

                document.documentElement.style.setProperty('--main-bg-color', localStorage.getItem("cssTheme"));
                document.documentElement.style.setProperty('--text-color', '#ffffff');
                $(':root').css('--main-bg-color', localStorage.getItem("cssTheme"));
                $(':root').css('--text-color', "#ffffff");

            }
        }
    });

    var navBar = new NavBar();
    navBar.createNavBar();
    var params = new window.URLSearchParams(window.location.search);
    var ParamsObj = params.get('Code') ? JSON.parse(window.atob(params.get('Code'))) : params.get('Code');


    TaskId = '0';
    $('#StageTabDiv').hide();
    $('#requestDocument').hide();
    $('#TabActivity').hide();
    if (ParamsObj) {
        console.log(ParamsObj, "ParamsObj");
        if (ParamsObj.startDate) {
            CalstartDate = ParamsObj.startDate;
            CalendDate = ParamsObj.endDate;
        } else {
            TaskId = ParamsObj.TaskId;
            TaskFolderId = ParamsObj.FolderID;
            TaskUserId = ParamsObj.UserID;
            TaskMode = ParamsObj.Mode;
            $('#TabActivity').show()
        }
    }
    else {




        console.log($("#Task_AssociateWithClient").val(), "client_id", $("#Task_Section").val())
        $("#TaskEditHeader_header").text("New CRM Task");
    }



    UpdateActivity = new Update_Activities();
    TaskCommon = new Task(agrno, Email, password, "PracticeServices.asmx/");
    OnPageLoad();
    TaskCommon.validationforEndTime();
    StatusClass = new MsgStatus({
        "padding": "5px",
        "color": "white",
        "background": "green"
    }, {
        "padding": "5px",
        "color": "white",
        "background": "red"
    });
    function OnPageLoad() {
        $('.msgRename').fadeOut('slow');
        TaskCommon.Json_Get_CRM_UserByProjectId(DProjectId, function (Staus, Data1) {
            var UserTable = Data1.Table;
            [currentUserInfo] = UserTable.filter(Filter => Filter.loggedInUser == "True");
            CreateUserList(UserTable);
            if (ParamsObj == null) {

                $('#TimingRecordListDiv').hide();
                $('#TimingRecordDiv').hide();
                $('#OnLoadStart').hide();
                $('#EndTaskTime').hide();
                $('#btnMarkComplete').hide();
                LoadNewTask();
            } else if ('TaskId' in ParamsObj) {
                $('#OnLoadStart').show();
                $('#EndTaskTime').show();
                $('#btnMarkComplete').show();
                LoadUpdate()
            } else if ('startDate' in ParamsObj) {

                $('#TimingRecordListDiv').hide();
                $('#TimingRecordDiv').hide();
                $('#OnLoadStart').hide();
                $('#EndTaskTime').hide();
                $('#btnMarkComplete').hide();
                LoadNewTask('calendar');
            } else {

                $('#TimingRecordListDiv').hide();
                $('#TimingRecordDiv').hide();
                $('#OnLoadStart').hide();
                $('#EndTaskTime').hide();
                $('#btnMarkComplete').hide();
                LoadNewTask();
            }
        });
    }

    function LoadUpdate() {
        Json_GetTaskAttachmentGuid();
        // Json_Get_CRM_SavedTask_ByTaskId

        document.title = "Docusoft | Edit CRM Task";
        TaskCommon.Json_Get_CRM_SavedTask_ByTaskId(TaskId, function (Staus, Data) {
            console.log(Data, "ACTIVIITY12S")
            ActivityTableData = Data.T1;
            var TaskDetailInfo = Data.T2[0];
            globalData = Data.T2[0];
            var AssigneeAndDetailTable = Data.T3;
            var TaskStagesTable = Data.T4;
            var MeargTaskTable = Data.T5;
            var TaskAttachmentTable = Data.T6;
            FilTaskDetail(TaskDetailInfo);
            UpdateActivity.SetTaskInfo = TaskDetailInfo;
            UpdateActivity.SetAssigneeCount = AssigneeAndDetailTable.length;
            UpdateActivity.SetOldAssigneeCount = AssigneeAndDetailTable.length;
            UpdateActivity.SetAttachmentCount = TaskAttachmentTable.length;

            if (TaskStagesTable.length > 0) {
                $("#Task_Folder").prop("disabled", true);
                $("#Task_AssociateWithClient").prop("disabled", true);
                $("#TaskEditHeader_header").text("Edit Process Task");
                document.title = "Docusoft | Edit Process Task";
                $('#StageTabDiv').show();
                $('#requestDocument').show();
                console.log("TaskStagesTable", TaskStagesTable);
                setTimeout(() => {
                    createStagesTableBody(TaskStagesTable);
                }, 2000);


                CRM_GET_Process_stage_role_section_udf();
            }
            console.log(ActivityTableData, "ActivityTableData123");
            createActivityTableBody(ActivityTableData);
            $('#RecurrenceDiv').hide();
            $('.NotRecurrenceClass').removeClass('col-md-2');
            $('.NotRecurrenceClass').addClass('col-md-3');
            AddedAssigneeAndDetailTable(AssigneeAndDetailTable);

            setTimeout(() => {
                if (TaskDetailInfo.FolderID && TaskDetailInfo.AssociatedWithID) {
                    TaskCommon.Json_ExplorerSearchDoc(TaskDetailInfo.FolderID, TaskDetailInfo.AssociatedWithID, function (status, Data) {
                        if (status) {
                            console.log('Json_ExplorerSearchDoc', Data.Table6);
                            DocumentTableData = Data.Table6;
                            let json = Data.Table6;
                            if (json.length > 0) {
                                CreateDocumentTable(Data.Table6, true);
                            }


                            setTimeout(() => {
                                AddTaskAttachment(TaskAttachmentTable);
                            }, 2000);


                            console.log('Json_ExplorerSearchDoc', Data.Table6);
                            if (json) {
                                DocumentTableData = json;
                                let json1 = json;
                                if (json1.length > 0) {
                                    CreateDocumentTable(json, true);
                                }
                            }
                            else {
                                CreateDocumentTable([], false);
                            }

                        }
                    });
                }


                TaskCommon.Json_GetHtmlFromRtf(TaskDetailInfo.Notes, function (status, Data) {
                    if (status) {
                        //alert(Data);
                        let get_crm_task = document.getElementsByClassName("TaskEditHeader");
                        console.log(get_crm_task, "get_crm_task11");

                        let get_crm_task33 = document.getElementById("TaskEditHeader_header");
                        console.log(get_crm_task33.innerHTML, "get_crm_task112233");

                        if (get_crm_task33.innerHTML.trim() == "Edit CRM Task") {

                            editor.option("value", Data);
                            //editor.option("value", Data);
                            //editor.option("value", TaskDetailInfo.Notes);
                            let encodedData = window.btoa(editor.option("value"));
                            UpdateActivity.NotesOld = encodedData;
                            //if(TaskDetailInfo.Notes){
                            //	editor.option("value", TaskDetailInfo.Notes ? TaskDetailInfo.Notes : "");
                            //} else if(Data){
                            // editor.option("value", Data ? Data : "");
                            //} else {
                            //editor.option("value", "");
                            //}

                        }
                        else if (get_crm_task33.innerHTML.trim() == "Edit Process Task") {

                            // editor.option("value", Data);
                            // editor.option("value", Data);
                            // let encodedData = window.btoa(editor.option("value"));
                            // UpdateActivity.NotesOld = encodedData;
                            if (TaskDetailInfo.Notes) {
                                console.log(Data, "get_Data_notes112", TaskDetailInfo.Notes);
                                editor.option("value", Data);
                                //editor.option("value", TaskDetailInfo.Notes);
                                // let encodedData = window.btoa(editor.option("value"));
                                // UpdateActivity.NotesOld = encodedData;
                                // console.log(encodedData,"get_Data_notes_sonam",TaskDetailInfo.Notes);
                                // editor.option("value", encodedData);
                            } else if (Data) {

                                editor.option("value", Data);
                            } else {
                                console.log(Data, "get_Data_notes11");
                                editor.option("value", "");
                            }
                        }
                        else {
                            //editor.option("value", TaskDetailInfo.Notes);
                            let encodedData = window.btoa(editor.option("value"));
                            UpdateActivity.NotesOld = encodedData;
                            editor.option("value", Data);
                        }
                        // localStorage.setItem("setData_Notes",TaskDetailInfo.Notes);
                        // editor.value = Data;  
                    }
                });
            }, 3000);

            CRMTimer.Json_CRM_Timing_Record_List();


        });

    }

    function CRM_GET_Process_stage_role_section_udf() {
        let obj = {};
        obj.udfID = "2";
        obj.projectID = GetProjectId;
        console.log("CRM_GET_Process_stage_role_section_udf", obj);
        cls.CRM_GET_Process_stage_role_section_udf(obj, function (status, data) {
            let json = JSON.parse(data);
            console.log("CRM_GET_Process_stage_role_section_udf", json);
        })
    }



    $(document).on("change", '#Task_AssociateWithClient', function () {
        TaskCommon.Json_ExplorerSearchDoc($('#Task_Folder').val(), $('#Task_AssociateWithClient').val(), function (status, Data) {
            if (status) {
                console.log('Json_ExplorerSearchDoc', Data.Table6);
                if (Data.Table6.length > 0) {
                    DocumentTableData = Data.Table6;
                    CreateDocumentTable(Data.Table6, true);
                }

                // if (CRMTimer.IsStop) {		
                //TaskCommon.Json_GetAllContactsByClientID($('#Task_Folder').val(), $('#Task_AssociateWithClient').val(),(status,Data) => {
                //   if (status) {
                //  var ContactList = Data.Table;
                //  var MainContactArray = ContactList;
                //  CreatContact(MainContactArray,false);

                //}
                // });

                //}
            }
        });
    });
    $(document).on("click", "#btnMarkComplete", function () {

        const checkboxes = document.querySelectorAll('input[name="checkGroup"]:checked');
        const checkedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
        console.log("checked user", checkedValues.join(','), [checkedValues], checkedValues);


        var TaskIdArray = [TaskId];

        $("#myModalLabel").text("Do you want to Mark it as Complete ?")
        $("#mi-modal").modal('show');
        $("#modal-btn-si").off('click').on("click", () => {
            //  loaderHideShow();
            TaskCommon.CRM_MultipleTaskCompletionUpdate(TaskIdArray.join(','), checkedValues.join(','), function (status) {
                if (status) {
                    // alert('Tasks Complete Success');
                    //AddToActivityTAble($("#Task_Subject").val() + " has been marked as completed by" + " " + localStorage.getItem('UserName'));
                    cls.createAlertCom(` Task Completed Succesfully`, 'success', true, false, 'pageMessages');
                    $('#btnMarkComplete').hide();
                    // setTimeout(() => { window.close(); }, 2000);
                    setTimeout(function () {
                        // $("#Task_Submit").trigger("click");
                        AddToActivityTAble($("#Task_Subject").val() + " has been marked as completed by" + " " + localStorage.getItem('UserName'));
                        let finish_data = {};
                        finish_data.agrno = agrno;
                        finish_data.LinkGuid = setSendLinkEmail;
                        console.log(finish_data, "finish_data111");
                        cls.Json_FinishTaskAttachmentStatusByGuid(finish_data, function (status, data) {
                            if (status) {
                                // Json_GetTaskAttachmentGuid();
                                //Json_Get_CRM_Stages_and_SubStages_ByTaskId(TaskId);
                                //$("#DU_Submit_upload").removeClass("fa-ban"); // Remove the current icon class
                                //$("#DU_Submit_upload").addClass("fa-link fa-solid"); // Add the new icon class
                                // $("#DU_Submit_upload").attr("id", "newID_Unfinished"); // Change the ID attribute

                                console.log(data, "finished_api_call");

                                //cls.createAlertCom(`Link has been Disabled!`, 'danger', true, false, 'pageMessages');
                            }

                        });
                        setTimeout(() => { window.close(); }, 2000);
                    }, 1500)

                }

            });

            $("#mi-modal").modal('hide');
        });
        //write by sc for on all complete stage after activity
        GetActivityTable();

    });



    $(document).on("click", "#ClientCard", function () {
        if ($('#Task_AssociateWithClient').val() != '') {
            window.open('client-manager.html?OriginatorNo=' + $('#Task_AssociateWithClient').val() + '&ProjectId=' + $('#Task_Folder').val());
        } else {
            //  alert('! Client is Required');
            cls.createAlertCom(` ! Client is Required`, 'danger', true, false, 'pageMessages');
            // StatusClass.ShowMsg('! Client is Required', false);

        }
    });



    function createActivityTableBody(data) {
        console.log('data:himanshu chk ', data);
        ActivityTableData = data;
        $('#ActivityTable').empty();
        let notesStr;
        var ActivityTable = '';
        for (Acivity of data) {
            ActivityTable = '<tr id="' + Acivity.ActivityId + '">';
            // ActivityTable += '<td>' + Acivity.ActivityId + ' </td>';
            ActivityTable += '<td>' + TaskCommon.MyDate(Acivity.ActivityDate, 'WithTime') + ' </td>';
            console.log(ActivityTable, "Activity_sonam111", TaskCommon);
            //localStorage.getItem("folder_change")
            ///if ($("#Task_ActivityText").val() == "") {
            //  console.log(customActivity, "customActivity")
            //console.log($("#select2-Task_Folder-container").val(), "select2-Task_Folder-container")
            //let activity_data =`Changes in ${}`
            // console.log("you_are_right")
            // }
            notesStr = Acivity.Notes
            console.log(notesStr, "noteStr")
            if (notesStr) {
                if (notesStr.length > 60) {
                    ActivityTable += '<td title="' + notesStr + '">' + notesStr.substring(0, 60) + ' ....</td>';
                } else {
                    ActivityTable += '<td title="' + notesStr + '">' + notesStr + ' </td>';

                }
            }


            ActivityTable += '<td>' + Acivity.username + ' </td>';
            ActivityTable += '</tr>';
            $('#ActivityTable').append(ActivityTable);
        }

    }


    $(document).on("click", '#ActivityTable tr', function () {
        let id = this.id;
        if (TaskMode != "Completed" || TaskMode != "Deleted") {
            $('#ActivityTable tr').removeClass('selected');
            $(this).addClass('selected');
            let array1 = ActivityTableData.filter(Filter => Filter.ActivityId == id);
            const secondTdElement = this.querySelector('td:nth-child(2)');
            console.log(secondTdElement, "secondTdElement");
            const taskCreatedText = secondTdElement.textContent;
            console.log(taskCreatedText, "taskCreatedText");
            const taskCreatedText11 = secondTdElement.getAttribute('title');

            console.log(taskCreatedText11, "taskCreatedText11");
            //$('#Task_ActivityText').val(array1[0].Notes);
            $('#Task_ActivityText').val(taskCreatedText11);
            $('#Task_ActivityText').prop('disabled', true);
            $('#AddActivity').prop('disabled', true);
            $('#NewAddActivity').show();
        }
        else {
            $('#ActivityTable tr').removeClass('selected');
            $(this).addClass('selected');
            let array1 = ActivityTableData.filter(Filter => Filter.ActivityId == id);
            const secondTdElement = this.querySelector('td:nth-child(2)');
            console.log(secondTdElement, "secondTdElement");
            const taskCreatedText = secondTdElement.textContent;
            console.log(taskCreatedText, "taskCreatedText");
            const taskCreatedText11 = secondTdElement.getAttribute('title');

            console.log(taskCreatedText11, "taskCreatedText11");
            console.log('array1', array1);
            //$('#Task_ActivityText').val(array1[0].Notes);
            $('#Task_ActivityText').val(taskCreatedText11);
        }

    });
    // NewAddActivity
    $('#NewAddActivity').hide();

    $(document).on("click", '#AddActivity', function () {
        let Note = $('#Task_ActivityText').val();
        if (Note != '' && Note != null) {
            TaskCommon.Json_AddSupplierActivity(Note, (status) => {
                if (status) {
                    TaskCommon.Json_Get_CRM_Task_ActivityByTaskId(TaskId, (status1, Data) => {
                        if (status1) {
                            console.log(Data.Table, "GETING_ACTIVITY")
                            createActivityTableBody(Data.Table);
                            $('#Task_ActivityText').val('');
                        }
                    });
                }
            });

        } else {
            StatusClass.ShowMsg('Please Add a Note!', false);

        }
    });
    $(document).on("click", '#NewAddActivity', function () {
        $('#Task_ActivityText').val('');
        $('#Task_ActivityText').prop('disabled', false);
        $('#AddActivity').prop('disabled', false);
        $('#ActivityTable tr').removeClass('selected');
        $(this).hide()
    });

    const AddTaskAttachment = (TaskAttachmentTable) => {
        for (var AttachmentObj of TaskAttachmentTable) {
            if (AttachmentObj.Type == "DMS") {
                AddDocument(AttachmentObj.ItemId);
            } else if (AttachmentObj.Type == "task") {
                AddAttechment(AttachmentObj.DestinationPath, AttachmentObj.AttachId);
            }
        }

    };


    const AddedAssigneeAndDetailTable = (AssigneeAndDetailTable) => {
        for (var obj of AssigneeAndDetailTable) {
            $('#chk' + obj.UserID).prop('checked', true);
            $('#Sta' + obj.UserID).text(obj.Status)
            $('#Sta' + obj.UserID).show();
            if (obj.Status == 'Completed') {
                $('#Sta' + obj.UserID).css({ 'color': 'green' });
                $('#Sta' + obj.UserID).prop('disabled', true);
            }
            // AssignedUserList.push(obj.UserID);
            $('#Task_DetailsText').val(obj.Details);

        }
    };
    function FilTaskDetail(TaskDetailInfo) {
        let projectId = TaskDetailInfo.FolderID;
        let SectioId = TaskDetailInfo.TypeOfTaskID ? TaskDetailInfo.TypeOfTaskID : "-1";

        let StartDateTime = TaskDetailInfo.StartDateTime;
        let EndDateTime = TaskDetailInfo.EndDateTime;
        let Subject = TaskDetailInfo.Subject;
        let ReminderSet = TaskDetailInfo.ReminderSet;
        let Priority = TaskDetailInfo.Priority;
        let Status = TaskDetailInfo.Status;
        let PercentComplete = TaskDetailInfo.PercentComplete;
        TaskCommon.PercentComplete = TaskDetailInfo.PercentComplete;
        let OwnerID = TaskDetailInfo.OwnerID;
        let Notes = TaskDetailInfo.Notes;


        //markup=Notes;
        let CilentID = TaskDetailInfo.AssociatedWithID;
        TaskCommon.CilentID = CilentID;
        Json_GetCRMUDFValuesByClientId(CilentID);
        TaskCommon.projectId = projectId;
        $('#RecurrenceTab').hide();
        $('#Task_Subject').val(Subject);
        $('#Task_Complete').val(PercentComplete);
        $('#showComplete').text(PercentComplete + '%');
        //setNotesEditor();

        document.getElementById("Task_Date_EndBy").value = TaskCommon.MyDate(EndDateTime) != '1900-01-01' ? TaskCommon.MyDate(EndDateTime) : '';
        document.getElementById("Task_StartTime").value = TaskCommon.MyDate(StartDateTime) != '1900-01-01' ? TaskCommon.MyDate(StartDateTime) : '';
        document.getElementById("Task_EndTime").value = TaskCommon.MyDate(EndDateTime) != '1900-01-01' ? TaskCommon.MyDate(EndDateTime) : '';
        document.getElementById("Task_EndTime").min = TaskCommon.MyDate(StartDateTime) != '1900-01-01' ? TaskCommon.MyDate(StartDateTime) : '';
        document.getElementById("Task_ReminderDate").value = TaskCommon.MyDate(StartDateTime) != '1900-01-01' ? TaskCommon.MyDate(StartDateTime) : '';
        SetPriorityData(Priority);
        SetStatusData(Status);
        //markup=Notes;
        // TaskCommon.Json_GetHtmlFromRtf(Notes, function (status, Data) {
        //     if (status) {
        //		console.log("Json_GetHtmlFromRtf",Data);
        ///		markup=Data;
        //	}
        // })

        TaskCommon.Json_GetFolders(function (Staus, Data1) {

            var myData = Data1.Table ? Data1.Table : Data1.Table1;
            Staus ? CreatFolderOption(myData, projectId) : console.log('CreatFolderOption Fail');
            //CreatFolderOption(Data1.Table, projectId) : console.log('CreatFolderOption Fail');
        });
        TaskCommon.Json_GetClientsByFolder(projectId, function (Staus, Data1) { Staus ? CreatReference(Data1.Table1, CilentID) : console.log('CreatReference fail'); });
        TaskCommon.Json_GetSections(projectId, function (Staus, Data1) { Staus ? Creatsection(Data1.Table, SectioId) : console.log('Creatsection fail'); });

        // $('#chkElectronicFil esReceived').prop('checked', TaskDetailInfo.ElectronicFile);
        // $('#chkReminderDate').prop('checked', ReminderSet);
        // $('#chkPaper_files_received').prop('checked', TaskDetailInfo.PaperFile);
        TaskDetailInfo.YEDate ? $('#Task_Year_End_Date').val(TaskCommon.MyDate(TaskDetailInfo.YEDate) != '1900-01-01' ? TaskCommon.MyDate(TaskDetailInfo.YEDate) : '') : '';
        TaskDetailInfo.DocRecdate ? $('#Task_Documents_received_date').val(TaskCommon.MyDate(TaskDetailInfo.DocRecdate) != '1900-01-01' ? TaskCommon.MyDate(TaskDetailInfo.DocRecdate) : '') : '';
        TaskDetailInfo.SubDeadline ? $('#Task_SubmissionDeadline').val(TaskCommon.MyDate(TaskDetailInfo.SubDeadline) != '1900-01-01' ? TaskCommon.MyDate(TaskDetailInfo.SubDeadline) : '') : '';
        document.getElementById("Task_ReminderDate").value = TaskCommon.MyDate(StartDateTime) != '1900-01-01' ? TaskCommon.MyDate(StartDateTime) : '';
        document.getElementById("Task_ReminderDate").max = TaskCommon.MyDate(StartDateTime) != '1900-01-01' ? TaskCommon.MyDate(StartDateTime) : '';
        $('#Task_Owner').val(OwnerID);
        //myObj=[];
        // $('#Task_Owner').trigger('change');
        //myObj=[];

        TaskCommon.Json_GetAllContactsByClientID(projectId, CilentID, (status, Data) => {
            if (status) {
                var ContactList = Data.Table;
                MainContactArray = ContactList;
                let result = MainContactArray.filter((el) => el["Main Contact"] == true);
                if (result.length > 0) {
                    setEmailMainContactTrue = result[0]["E-Mail"];
                }

                console.log('MainContactArray', MainContactArray);
                CreatContact(MainContactArray);
                checkPortaUser();
            }
        });

        if (TaskDetailInfo.ReminderSet == true) {
            TaskCommon.ShowReminderDate(TaskDetailInfo.StartDateTime, TaskDetailInfo.ReminderMinutesBeforeStart);
        } else {
            $("#Task_ReminderDate").prop('disabled', true);
            $('#chkReminderDate').prop('checked', false);
        }
        //.trigger('click')
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            TaskDetailInfo.PaperFile ? $('#chkPaper_files_received').val(true) : '';
            TaskDetailInfo.ElectronicFile ? $('#chkElectronicFilesReceived').val(true) : '';

            TaskDetailInfo.ReminderSet ? $('#chkReminderDate').val(true) : '';

        } else {
            TaskDetailInfo.PaperFile ? $('#chkPaper_files_received').val(true).trigger('click') : '';
            TaskDetailInfo.ElectronicFile ? $('#chkElectronicFilesReceived').val(true).trigger('click') : '';

            TaskDetailInfo.ReminderSet ? $('#chkReminderDate').val(true).trigger('click') : '';

        }


        console.log('TaskDetailInfo', TaskDetailInfo.PercentComplete);
        if (TaskDetailInfo.PercentComplete == 100) {
            $('#SaveTask').hide();
            $('#AddDocument').hide();
            $('#AddActivity').hide();
            $('#ShowAddAttachment').hide();
            $('#OnLoadStart').hide();
            $('#StartTaskTime').hide();
            $('#EndTaskTime').hide();
            $('#btnMarkComplete').hide();
            $("#Task_Submit").prop('disabled', true);
            if ($("#Task_Status").val() != "Completed") {
                $("#Task_Status").val('Completed');
                // $("#Task_Submit").trigger("click");
            }


        }



        if (OwnerID != currentUserInfo.DSUserID) {
            $('[isOwner="true"]').each(function (i, obj) {
                console.log('i', i);
                console.log('isOwner', obj.id);
                var SelectSelector = '#select2-' + obj.id + '-container';
                $(obj).attr('disabled', 'disabled');
                $(SelectSelector).css('cursor', 'no-drop');
                // select2-Task_Folder-container

            });
        }

    }


    function SetPriorityData(PriorityID = 1) {
        $("#Task_Priority").empty();
        for (PriorityOBJ of PriorityData) {
            $("#Task_Priority").append('<option   value="' + PriorityOBJ.PriorityID + '">' + PriorityOBJ.Priority + '</option>');
        }
        $("#Task_Priority").val(PriorityID);

    }
    function SetStatusData(Status = 'Not Started') {
        $("#Task_Status").empty();
        for (StatusOBJ of StatusData) {
            $("#Task_Status").append('<option   value="' + StatusOBJ.Status + '">' + StatusOBJ.Status + '</option>');
        }
        $("#Task_Status").val(Status);

    }

    function LoadNewTask(From = '') {
        if (From == 'calendar') {
            document.getElementById("Task_StartTime").value = TaskCommon.SETServerDateFormat1(CalstartDate);
            document.getElementById("Task_EndTime").value = TaskCommon.SETServerDateFormat1(CalendDate);
        } else {

            document.getElementById("Task_StartTime").value = TaskCommon.cuureantDate();
            document.getElementById("Task_EndTime").value = TaskCommon.AfterCuureantDate();

        }

        document.getElementById("Task_Date_EndBy").value = TaskCommon.AfterCuureantDate();
        document.getElementById("Task_EndTime").min = TaskCommon.cuureantDate();
        document.getElementById("Task_ReminderDate").value = TaskCommon.cuureantDate();
        SetPriorityData();
        SetStatusData();
        TaskCommon.Json_GetFolders(function (Staus, Data1) {

            var myData = Data1.Table ? Data1.Table : Data1.Table1;
            Staus ? CreatFolderOption(myData) : console.log('CreatFolderOption Fail');
            //Staus ? CreatFolderOption(Data1.Table) : console.log('CreatFolderOption Fail'); 
        });
        TaskCommon.Json_GetClientsByFolder(DProjectId, function (Staus, Data1) { Staus ? CreatReference(Data1.Table1) : console.log('CreatReference fail'); });
        TaskCommon.Json_GetSections(DProjectId, function (Staus, Data1) { Staus ? Creatsection(Data1.Table) : console.log('Creatsection fail'); });

    }

    function CreateUserList(tableData) {
        $("#Userlist").empty();
        $("#Task_Owner").empty();

        $("#AssignedUserList").empty();
        for (let User of tableData) {
            $("#Task_Owner").append('<option   value="' + User.DSUserID + '">' + User.DisplayName + '</option>');
            //if (User.loggedInUser == "True") {
            //below sonam 
            //console.log(JSON.parse(localStorage.getItem("setOwnerId")).OwnerID,"Get_Owner11",localStorage.getItem("intUserId"));
            if (User.loggedInUser == "True") {
                $("#Userlist").append('<li class="list-group-item li-padding" id="' + User.DSUserID + '"><label class="UserSearch"><input type="checkbox" class="CheckUser" name="checkGroup" value="' + User.DSUserID + '" checked id="chk' + User.DSUserID + '"/><span></span>' + User.DisplayName + '</label> <span id="Sta' + User.DSUserID + '" class="StausCSS" >Not Started </span></li>');
                $("#AssignedUserList").append(' <li class="list-group-item li-padding" id="' + User.DSUserID + '">' + User.DisplayName + '</li>');
                //$("#Task_Owner").val(User.DSUserID);
                //let const_data = localStorage.getItem('setOwnerId')
                //console.log(const_data,"Owner_data");
                //localStorage.getItem(JSON.parse(setOwnerId));
                //console.log(JSON.parse(localStorage.getItem("setOwnerId")).OwnerID,"Get_Owner11",localStorage.getItem('setOwnerId'));
                try {
                    //console.log("owner id",JSON.parse(localStorage.getItem("setOwnerId")).OwnerID)

                    //$("#Task_Owner").val(JSON.parse(localStorage.getItem("setOwnerId")).OwnerID);
                    //$("#Task_Owner").val(JSON.parse(localStorage.getItem("someDataget")).OwnerID);
                } catch (e) {
                    console.log(e);
                }


                $("#Chkuserlist").text(User.DisplayName);
                $("#LoginUserId").val(User.DSUserID);
                // AssignedUserList.push($("#Task_Owner").val());

            } else {

                $("#Userlist").append(' <li class="list-group-item li-padding" id="' + User.DSUserID + '"><label class="UserSearch"><input type="checkbox" class="CheckUser" name="checkGroup" value="' + User.DSUserID + '" id="chk' + User.DSUserID + '"/><span></span>' + User.DisplayName + '</label> <span id="Sta' + User.DSUserID + '" style="display: none;" class="StausCSS"> Not Started </span></li>');

            }
        }

        setTimeout(() => {
            // $("#Task_Owner").val(localStorage.getItem("intUserId"));
            //$("#select2-Task_Owner-container").text(localStorage.getItem("UserName"));
        }, 1000)


    }
    function CreatFolderOption(AllFolder, ProjectId = DProjectId) {
        console.log("AllFolder: ", AllFolder);
        $("#Task_Folder").empty();
        for (var i = 0; i < AllFolder.length; i++) {
            $("#Task_Folder").append('<option   value="' + AllFolder[i].FolderID + '">' + AllFolder[i].Folder + '</option>');
        }
        $("#Task_Folder").val(ProjectId);
    }
    function CreatReference(AllReference, clientId = '') {
        $("#Task_AssociateWithClient").empty();
        $("#Task_AssociateWithClient").append('<option value="">------Select--------</option>');
        for (var i = 0; i < AllReference.length; i++) {
            $("#Task_AssociateWithClient").append('<option   value="' + AllReference[i].ClientID + '">' + AllReference[i].Client + '</option>');
        }
        $("#Task_AssociateWithClient").val(clientId);
        console.log($("#Task_AssociateWithClient").val(clientId), "client_id222");

    }
    function CreatContact(AllMainContact, bool = true) {
        $("#Timing_Contact").empty();
        $("#Timing_Contact").append('<option value="0">------Select--------</option>');
        for (var i = 0; i < AllMainContact.length; i++) {
            var Name = AllMainContact[i]['First Name'] + ' ' + AllMainContact[i]['Last Name'];
            $("#Timing_Contact").append('<option   value="' + AllMainContact[i].ContactNo + '">' + Name + '</option>');
        }
        if (bool) {
            $('#TimingRecordDiv').hide();
        }
    }
    function Creatsection(Allsection, sectionId = '-1') {
        SectionList = [];

        $("#Task_Section").empty();
        $("#Task_Section").append('<option value="-1">------Select--------</option>');
        for (var i = 0; i < Allsection.length; i++) {
            if (!SectionList.some(o => o.SectionId == Allsection[i].SecID)) {
                var obj = {};
                obj.SectionId = Allsection[i].SecID;
                obj.Section = Allsection[i].Sec;
                SectionList.push(obj);
                $("#Task_Section").append('<option   value="' + Allsection[i].SecID + '">' + Allsection[i].Sec + '</option>');

            }
        }
        $("#Task_Section").val(sectionId);
    }


    $(document).on("change", "#Task_Folder", function () {
        var FolderID = this.value;
        //$('.msgRename').html("Please reAssigne Assigne User").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "red" }); //also show a success message 
        //$('.msgRename').delay(3500).fadeOut('slow');
        cls.createAlertCom(` Please Re-Assign Assigne User`, 'danger', true, false, 'pageMessages');
        TaskCommon.Json_GetClientsByFolder(FolderID, function (Staus, Data1) { Staus ? CreatReference(Data1.Table1) : console.log('CreatReference fail'); });
        TaskCommon.Json_GetSections(FolderID, function (Staus, Data1) { Staus ? Creatsection(Data1.Table) : console.log('Creatsection fail'); });

    });
    $(document).on('change', '#Userlist .CheckUser', function () {
        var Value = $(this).prop('checked');
        var Idstr = this.id;
        var ID = Idstr.substr(3);

        if (Value) {
            // AssignedUserList.push(ID);
            // $('#Sta' + obj.UserID).text(obj.Status)
            $('#Sta' + ID).show();
        } else {
            $('#Sta' + ID).hide();
            //AssignedUserList.pop(AssignedUserList.indexOf(ID));
        }

    });
    $(document).on("change", "#Task_Complete", function () {

        var CopletePercentage = this.value;//showComplete .css({ "padding": "5px", "color": "white", "background": "red" })
        if (CopletePercentage == '100') {
            $('#showComplete').text(CopletePercentage + '%').css({ "background": "green" });
        } else {
            $('#showComplete').text(CopletePercentage + '%').css({ "background": "#d42027" });
        }


    });


    /// Task Task_ReminderDate Start

    $("#Task_StartTime").change(function () {
        // //alert(this.value);
        document.getElementById("Task_ReminderDate").value = this.value;
        document.getElementById("Task_EndTime").value = this.value;
        document.getElementById("Task_ReminderDate").max = this.value;
        document.getElementById("Task_EndTime").min = this.value;
    });


    $(document).on("change", "#chkReminderDate", function () {
        if ($(this).is(":checked")) {
            document.getElementById("Task_ReminderDate").max = $('#Task_StartTime').val();
            $("#Task_ReminderDate").prop('disabled', false);
        }
        else if ($(this).is(":not(:checked)")) {
            $("#Task_ReminderDate").prop('disabled', true);
        }
    });


    /// Task Task_ReminderDate end
    /// Task CRM Attachment Start



    function FileTypeImagePath(fileName) {
        // for (var i = 0; i < fileName.length; i++) {
        Typest = fileName.lastIndexOf(".");
        var Type = fileName.slice(Typest + 1);
        // var type = Type.toLowerCase();
        ////alert(type);
        var vimg;
        //var vimg;

        var typechk = Type.toLowerCase();

        if (typechk === "pdf") {

            vimg = "fa fa-file-pdf-o";

        }
        else if (typechk === "rtf") {
            vimg = "fas fa-file-alt";

        }
        else if (typechk === "msg" || typechk === "eml") {
            vimg = "fa fa-envelope";

        }

        else if (typechk === "docx" || typechk === "doc") {
            vimg = "fas fa-file-word";

        }
        else if (typechk === "zip") {
            vimg = "fas fa-file-archive";

        }
        else if (typechk == "txt") {
            vimg = "search_icon/txt.png";

        }
        else if (typechk === "pptx") {
            vimg = "fa fa-file-powerpoint-o";

        }

        else if (typechk === "mp4") {
            vimg = "fas fa-file-video";

        }
        else if (typechk === "png") {
            vimg = "fa fa-file-image-o";

        }
        else if (typechk === "xlsx" || typechk === "xls") {
            vimg = "fa fa-file-excel-o";

        }
        else if (typechk === "TIFF" || typechk === "TIF") {
            vimg = "fa fa-file-image-o";

        }
        else if (typechk === "html" || typechk === "htm") {
            vimg = "fab fa-html5";


        }
        else {
            vimg = "far fa-images";

        }
        return vimg;
        // ////////////////////alert(vimg); 
        return vimg;
    }


    function FileType(fileName) {
        // for (var i = 0; i < fileName.length; i++) {
        Typest = fileName.lastIndexOf(".");
        var Type = fileName.slice(Typest + 1);
        var type = Type.toUpperCase();
        return type;
    }


    $(document).on("change", '#UploadFile', function () {
        var counter = -1, file;
        var regex = /^([a-zA-Z0-9\s_\\.\-:])/;
        while (file = this.files[++counter]) {

            var reader = new FileReader();

            reader.onloadend = (function (file) {

                return function () {
                    //  var mailAttachment = {};
                    fileName = file.name;
                    var filesize = file.size;

                    //  if (chk === true) {
                    byteData = this.result;
                    console.log("byteData11111=====", byteData);
                    fileByte = byteData.split(';')[1].replace("base64,", "");

                    if (regex.test(fileName.toLowerCase())) {
                        var TestSize = Size + filesize;
                        if (TestSize < "36634040") {
                            var OBJ = {};
                            OBJ.byteData = fileByte;
                            OBJ.fileName = fileName;
                            //OBJ.filesize = filesize;
                            // OBJ.fileDate = file.lastModified; 
                            fileNameArray.push(fileName);
                            FileUpload(fileName, fileByte);
                            FileData.push(OBJ);

                        }
                    } else {
                        $.alert({
                            title: 'Alert!',
                            content: fileName + ' is not a valid  file Name pleace remove special cherecter in file name.',
                        });
                        return false;
                    }

                    console.log("  fil", file);
                    console.log("FileData fil", FileData);

                };

            })(file);

            reader.readAsDataURL(file);

        }
    });


    //$(document).on("change", '#UploadFile', function () {
    //    alert('test');
    //});

    var i = 0;
    function AddAttechment(path, TaskId = '0') {
        let fileName, Typest;
        fileName = path;
        Typest = fileName.lastIndexOf("\\");
        fileName = fileName.slice(Typest + 1);
        console.log('FileName', fileName);
        var encodedData = window.btoa(fileName);
        let obj = {};
        obj.FileName = fileName;
        obj.Path = path;
        TaskAttechment.push(obj);
        //alert(fileName)
        console.log('TaskAttechment', obj);
        let str = fileName.replace(/[_\W]+/g, "-");
        $("#TaskAttechment").append('<li class="list-group-item Delte' + i + '"  > <i class="' + FileTypeImagePath(fileName) + '" aria-hidden="true"></i> ' + fileName + '<i class="fa fa-trash float_Right Dlt" id="Dlt' + encodedData + ',' + TaskId + ',' + i + '"  aria-hidden="true" ></i><i class="fa fa-download float_Right Upload px-4" id="Upload' + encodedData + ',' + TaskId + ',' + i + '"  aria-hidden="true" ></i ></li>');
        i++;
    }

    $(document).on("click", "#btnResetDelete", function () {
        AddToActivityTAble(" Uploaded documents removed by" + " " + localStorage.getItem('UserName'));

        let obj = {};
        obj.TaskId = TaskId;
        obj.StageId = 0;
        obj.SubStageId = 0;
        cls.Json_ResetTaskAttachmentLink(obj, function (status, data) {
            console.log("Json_ResetTaskAttachmentLink", data);
            if (status) {

                cls.createAlertCom(` Reset Documents`, 'danger', true, false, 'pageMessages');

                Json_GetTaskAttachmentList();
                $("#resetAlertDoct").modal("hide");
            }
        })

    });
    $(document).on("click", "#btnDelete", function () {
        $("#resetAlertDoct").modal("hide");

    });
    $(document).on("click", ".resetDocument", function () {
        $("#resetAlertDoct").modal("show");
    })

    $(document).on("click", ".refreshDocuments", function () {
        Json_GetTaskAttachmentList();
    })
    Json_GetTaskAttachmentList();
    function Json_GetTaskAttachmentList() {
        let obj = {};
        obj.TaskId = TaskId;
        obj.StageId = 0;
        obj.SubStageId = 0;
        cls.Json_GetTaskAttachmentList(obj, function (status, data) {
            console.log("Json_GetTaskAttachmentList", data);
            if (status) {

                RequestedDocumentList(data);
                let data_parse = JSON.parse(data);
                console.log(data_parse, "data_parse")
                if (data_parse.Table && data_parse.Table.length > 0) {
                    console.log("working_if_condition");
                    //$("#DU_Submit_upload").removeClass("disabled");
                    $('.resetDocument').css('display', 'block');
                    $('.reviewandFinish').css('display', 'block');

                } else {
                    $('.resetDocument').css('display', 'none');
                    $('.reviewandFinish').css('display', 'none');
                }
            }
        })
    }

    $(document).on("click", "#DU_Submit_upload", function () {
        $("#selectservicesmodal").modal("show");



    })

    $(document).on("click", "#newID_Unfinished", function () {
        $("#selectservicesmodal_unfinished").modal("show");

    })
    $(document).on("click", "#btnServiceSeleted", function () {
        AddToActivityTAble("Upload link disabled  by " + " " + localStorage.getItem('UserName'));
        console.log("working", setSendLinkEmail);
        $('#hidemodalshowlinkexpire').hide();
        $("#selectservicesmodal").modal("hide");
        let finish_data = {};
        finish_data.agrno = agrno;
        finish_data.LinkGuid = setSendLinkEmail;
        console.log("working_finish_data", finish_data)
        cls.Json_FinishTaskAttachmentStatusByGuid(finish_data, function (status, data) {
            if (status) {
                // Json_GetTaskAttachmentGuid();
                //Json_Get_CRM_Stages_and_SubStages_ByTaskId(TaskId);
                $("#DU_Submit_upload").removeClass("fa-ban"); // Remove the current icon class
                $("#DU_Submit_upload").addClass("fa-link fa-solid"); // Add the new icon class
                $("#DU_Submit_upload").attr("id", "newID_Unfinished"); // Change the ID attribute

                console.log(data, "finished_api_call");

                cls.createAlertCom(`Link has been Disabled!`, 'danger', true, false, 'pageMessages');
            }

        })
        // $('#message_link').text('Link is expired');
        // $('.expired').addClass('display-block');

    });
    $(document).on("click", "#btnServiceSeleted_unfinished", function () {
        AddToActivityTAble("Upload link enabled by " + " " + localStorage.getItem('UserName'));
        console.log("working", setSendLinkEmail);
        $('#hidemodalshowlinkexpire').hide();
        $("#selectservicesmodal_unfinished").modal("hide");
        let finish_data = {};
        finish_data.TaskId = TaskId;
        finish_data.StageId = "0";
        finish_data.SubStageId = "0";
        console.log("working_finish_data", finish_data)
        cls.Json_UnfinishTaskAttachmentLink(finish_data, function (status, data) {
            if (status) {
                console.log(data, "finished_api_call");
                // Json_Get_CRM_Stages_and_SubStages_ByTaskId(TaskId);
                //Json_GetTaskAttachmentGuid();
                $("#newID_Unfinished").removeClass("fa-link fa-solid"); // Remove the current icon class
                $("#newID_Unfinished").addClass("fa-ban"); // Add the new icon class
                $("#newID_Unfinished").attr("id", "DU_Submit_upload"); // Change the ID attribute

                cls.createAlertCom(`Link has been Enabled`, 'success', true, false, 'pageMessages');
            }

        })
        // $('#message_link').text('Link is expired');
        // $('.expired').addClass('display-block');

    });
    function RequestedDocumentList(data) {
        $("#TaskAttechmentListGuid").empty();

        let str = JSON.parse(data);
        console.log('TaskAttechment', str);
        let json = str.Table;
        let counter = 0;
        if (json.length > 0) {
            for (let itm of json) {

                counter++;
                let name = itm.FileName.substring(0, itm.FileName.lastIndexOf('.'))
                console.log('test for document', itm.ItemId, itm.FileName);
                if (itm.ItemId) {
                    $("#TaskAttechmentListGuid").append(`<li class="list-group-item"> ${name} <i style="cursor: pointer;" class="fa fa-trash float_Right deleteDocument px-4" id="${itm.LinkGuid}" name="${itm.FileName}" title="Delete Document"></i> <i title="View Document" style="cursor: pointer;" class="fa fa-eye float_Right viewDocument px-4" id="${itm.ItemId}" name="${itm.FileName}"></i>  <i style="cursor: pointer;" class="fa fa-download float_Right dowloadClick px-4" id="${itm.LinkGuid}" name="${itm.FileName}" title="Download Document"></i> </li>
			  </li>
			`);
                }
                else {
                    $("#TaskAttechmentListGuid").append(`<li class="list-group-item"> ${name}<i style="cursor: pointer;" class="fa fa-trash float_Right deleteDocument px-4" id="${itm.LinkGuid}" name="${itm.FileName}" title="Delete Document"></i> <i title="Upload to Docusoft" style="cursor: pointer;" class="fa fa-upload float_Right uploadClick px-4 " id="upl${counter + itm.LinkGuid}" name="${itm.FileName}"></i>  <i style="cursor: pointer;" class="fa fa-download float_Right dowloadClick px-4" id="${itm.LinkGuid}" name="${itm.FileName}" title="Download Document"></i> 
			
			</li>`);
                }

            }
        }
    }



    $(document).on("click", ".uploadClick", function () {

        let name = $(this).attr("name");
        let str = $(this).attr("id");
        setDocumentId = str.substr("4");// $(this).attr("id");
        // console.log("Register Item", str,setDocumentId);
        let discription = name.substring(0, name.lastIndexOf('.'))

        $("#" + str).addClass("fa-spinner fa-spin");
        $("#" + str).removeClass("fa-upload");

        let obj = {};
        obj.FileName = name;
        obj.TaskId = TaskId;
        obj.StageId = 0;
        obj.SubStageId = 0;
        cls.Json_GetTaskAttachmentFileData(obj, function (status, data) {
            let str = JSON.parse(data);
            let json = str.Table;
            console.log(json, "getfiledata");
            var Obj = {};
            Obj.sectionId = "1";
            Obj.deptId = "0";
            Obj.folderId = TaskFolderId;
            Obj.categoryId = "0";
            Obj.subSectionId = "0";
            Obj.retForMonth = "-1";
            Obj.deptName = "";
            Obj.folderName = "";
            Obj.originatorId = TaskCommon.CilentID;
            Obj.senderId = TaskCommon.CilentID;
            Obj.sectionName = "";
            Obj.extDescription = "";
            Obj.docDirection = "";
            Obj.description = discription; //$("#subjectemail").val();
            Obj.priority = "";
            Obj.stickyNote = "";
            Obj.fileName = json[0].FileName;
            Obj.forActionList = "";
            Obj.forInformationList = "";
            Obj.forGroupList = "";
            Obj.uDFList = "";
            Obj.sUDFList = "";
            Obj.clientname = localStorage.getItem("companyName");
            Obj.receiveDate = cls.SETDate(cls.CurrentDate());
            Obj.actionByDate = cls.SETDate(cls.CurrentDate());
            Obj.actionDate = cls.SETDate(cls.CurrentDate());
            Obj.docViewedDate = cls.SETDate(cls.CurrentDate());
            Obj.strb64 = json[0].FileData;
            Obj.strtxt64 = "";
            Obj.EmailMessageId = "";

            cls.Json_RegisterItemForAttachment(Obj, function (bln, data) {
                if (bln) {
                    console.log(json, "Register_Item", data);
                    let obj = JSON.parse(data);
                    if (obj.Status) {

                        let o = {};
                        o.LinkGuid = json[0].LinkGuid;
                        o.FileName = name;
                        o.ItemId = obj.ItemId
                        TaskCommon.Json_SetTaskAttachmentLinkItemId(o, function (status, DataA) {
                            if (status) {
                                console.log("Register Item Json_SetTaskAttachmentLinkItemId", DataA);
                            }
                        })
                        setTimeout(() => {
                            //$(".uploadClick").addClass("fa-spinner fa-spin");
                            //$(".uploadClick").removeClass("fa-upload");
                            Json_GetTaskAttachmentList();
                        }, 1500)

                        cls.createAlertCom(` Upload to DocuSoft Successfully`, 'success', true, false, 'pageMessages');


                    }
                }
            })


        })
    })


    $(document).on("click", ".viewDocument", function () {
        let gid = $(this).attr("id");
        console.log("Register Item", gid);

        TaskCommon.Json_ExplorerSearchDoc($('#Task_Folder').val(), $('#Task_AssociateWithClient').val(), function (status, Data) {

            if (status) {
                console.log('Json_ExplorerSearchDoc', Data.Table6);
                if (Data.Table6.length > 0) {
                    DocumentTableData = Data.Table6;
                    let result = DocumentTableData.filter((el) => el["Registration No."] == gid);
                    console.log("Json_GetTaskAttachmentStatusByGuid", result);
                    if (result.length > 0) {
                        // $("#"+setDocumentId).addClass("fa-eye");
                        //$("#"+setDocumentId).addClass("viewDocument");
                        //$("#"+setDocumentId).removeClass("fa-upload");
                        //	$("#"+setDocumentId).removeClass("uploadClick");
                        var IsApproved = result[0]["IsApproved"] ? result[0]["IsApproved"] : "";
                        var PortalDocId = result[0]["PortalDocId"] ? result[0]["PortalDocId"] : "";
                        var PortalID = "";
                        var IsApp = "";
                        if (IsApproved === "SIG" && PortalDocId !== "") {
                            IsApp = IsApproved;
                            PortalID = PortalDocId;
                        }
                        else {
                            IsApp = "";
                            PortalID = "";
                        }
                        var url = "https://mydocusoft.com";
                        strurlDBL = url + "/viewer.html?GuidG=" + result[0]["Guid"] + "&srtAgreement=" + agrno + "&strItemId=" + result[0]["Registration No."] + "&filetype=" + result[0]["Type"] + "&ViewerToken=" + ViewerToken + "&IsApp=" + IsApp + "&PortalID=" + PortalID;
                        window.open(strurlDBL);

                    }
                }
            }
        })
    })

    function Json_GetTaskAttachmentStatusByGuid(uid) {
        let obj = {};
        obj.LinkGuid = uid;
        obj.agrno = agrno;
        cls.Json_GetTaskAttachmentStatusByGuid(obj, function (status, data) {
            if (status) {
                let json = JSON.parse(data);
                let tabl = json.Table;
                console.log("Json_GetTaskAttachmentStatusByGuid", tabl);
                setTaskAttachment = tabl;
                setTimeout(() => {
                    if (tabl.length > 0) {

                        $("#newID_Unfinished").removeClass("fa-link fa-solid"); // Remove the current icon class
                        $("#newID_Unfinished").addClass("fa-ban"); // Add the new icon class
                        $("#newID_Unfinished").attr("id", "DU_Submit_upload"); // Change the ID attribute



                    }
                    else {

                        $("#DU_Submit_upload").removeClass("fa-ban"); // Remove the current icon class
                        $("#DU_Submit_upload").addClass("fa-link fa-solid"); // Add the new icon class
                        $("#DU_Submit_upload").attr("id", "newID_Unfinished"); // Change the ID attribute


                    }
                }, 2000)


            }
        })
    }


    $(document).on("click", ".dowloadClick", function () {
        let name = $(this).attr("name");
        let obj = {};
        obj.FileName = name;
        obj.TaskId = TaskId;
        obj.StageId = 0;
        obj.SubStageId = 0;
        cls.Json_GetTaskAttachmentFileData(obj, function (status, data) {
            let str = JSON.parse(data);
            let json = str.Table;
            console.log("File Data", json);
            const link = document.createElement('a');
            link.href = `data:application/octet-stream;base64,${json[0].FileData}`;
            link.download = name;
            link.click();
        })
    })



    $(document).on("click", ".deleteDocument", function () {

        cls.setFileNameForDelete = $(this).attr("name");
        $("#document_delete_conrm").modal("show");
    })
    $(document).on("click", "#btnDocumentDlete", function () {
        let obj = {};
        obj.FileName = cls.setFileNameForDelete;
        obj.TaskId = TaskId;
        obj.StageId = 0;
        obj.SubStageId = 0;
        cls.Json_DeleteTaskAttachmentByName(obj, function (status, data) {
            if (status) {
                cls.createAlertCom(` ${cls.setFileNameForDelete} Deleted`, 'danger', true, false, 'pageMessages');
                Json_GetTaskAttachmentList();
                setTimeout(function () {
                    $("#document_delete_conrm").delay(2000).fadeOut("slow").modal("hide");
                }, 1500);

                console.log(data, "data_delete");
                AddToActivityTAble(cls.setFileNameForDelete + " deleted  by " + " " + localStorage.getItem('UserName'));

            }
        })

    })



    async function FileUpload(FileName, FileBase64) {
        var OBJ = {};
        OBJ.base64File = FileBase64;
        OBJ.FileName = FileName;
        allService.CreateNewServiceParamObject('SaveTaskAttachments', OBJ, true);
        var ParamName = "Param_" + 'SaveTaskAttachments';
        console.log('SaveTaskAttachments', allService[ParamName]);
        await allService.CallNewService('SaveTaskAttachments', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                if (JData.Status === "Success") {
                    console.log('SaveTaskAttachments', JData);
                    var dencodedData = window.atob(JData.Message);
                    AddAttechment(dencodedData);
                }
            }
        });
    }

    $(document).on("click", '.Upload', function () {

        let idstr = this.id;
        let id = idstr.substring(6);
        let IdArray = id.split(',');
        var dencodedData = window.atob(IdArray[0]);
        var TaskAttechment1 = TaskAttechment.filter(item => item.FileName === dencodedData);
        console.log('TaskAttechment', TaskAttechment1[0].Path);
        var EncodeBase64 = window.btoa(TaskAttechment1[0].Path);
        // loaderHideShow();

        DownLoadAttachment(EncodeBase64);

    });

    function DownLoadAttachment(Path) {
        OBJ = {};
        OBJ.agrno = agrno;
        OBJ.Email = Email;
        OBJ.password = password;
        OBJ.path = Path;
        allService.CreateNewServiceParamObject('GetBase64FromFilePath', OBJ, true);
        allService.CallNewService('GetBase64FromFilePath', function (status, Data) {

            if (status) {
                var jsonObj = JSON.parse(Data);
                if (jsonObj.Status === "Success") {
                    var dencodedData = window.atob(Path);
                    var fileName = dencodedData;
                    var Typest = fileName.lastIndexOf("\\");
                    fileName = fileName.slice(Typest + 1);
                    console.log('FileName', fileName);
                    console.log("jsonObj.Status", jsonObj.Message);
                    var a = document.createElement("a"); //Create <a>
                    a.href = "data:" + FileType(fileName) + ";base64," + jsonObj.Message; //Image Base64 Goes here
                    a.download = fileName; //File name Here
                    a.click(); //Downloaded file

                }

            }
        });
    }



    $(document).on("click", '.Dlt', function () {

        let idstr = this.id;
        let id = idstr.substring(3);
        let IdArray = id.split(',');
        $("#myModalLabel").text("Are you sure to Delete this Attachment?");
        $("#mi-modal").modal('show');
        $("#modal-btn-si").off('click').on("click", function () {

            DeletTaskAttachment(IdArray[0], IdArray[1], IdArray[2]);
            $("#mi-modal").modal('hide');
        });
    });


    function DeletTaskAttachment(fileName, TaskId = '0', count) {
        var dencodedData = window.atob(fileName);
        var OBJ = {};
        OBJ.fileName = dencodedData;
        OBJ.TaskId = TaskId;
        //OBJ.EmailId = localStorage.getItem("Email");
        allService.CreateNewServiceParamObject('DeleteTasksAttachment', OBJ, true);
        allService.CallNewService('DeleteTasksAttachment', function (status, Data) {
            if (status) {
                var jsonObj = JSON.parse(Data);
                if (jsonObj.Status === "Success") {

                    let str = dencodedData.replace(/[_\W]+/g, "-");
                    $('.Delte' + count).hide();
                    TaskAttechment.splice(TaskAttechment.findIndex(item => item.FileName === dencodedData), 1);
                    console.log('TaskAttechment', TaskAttechment);
                    console.log('dencodedData', dencodedData);
                }

            }

        });
    }

    /// Task CRM Attachment End

    $(document).on("click", '#DocumentTab', function () {
        //Json_ExplorerSearchDoc();
    });




    var DocumentTableData;


    function getfileextension(filetype) {
        var vimg;

        var typechk = filetype.toLowerCase();

        if (typechk === "pdf") {

            vimg = "fa fa-file-pdf-o";

        }
        else if (typechk === "rtf") {
            vimg = "fas fa-file-alt";

        }
        else if (typechk === "msg" || typechk === "eml") {
            vimg = "fa fa-envelope";

        }

        else if (typechk === "docx" || typechk === "doc") {
            vimg = "fas fa-file-word";

        }
        else if (typechk === "zip") {
            vimg = "fas fa-file-archive";

        }
        else if (typechk == "txt") {
            vimg = "search_icon/txt.png";

        }
        else if (typechk === "pptx") {
            vimg = "fa fa-file-powerpoint-o";

        }

        else if (typechk === "mp4") {
            vimg = "fas fa-file-video";

        }
        else if (typechk === "png") {
            vimg = "fa fa-file-image-o";

        }
        else if (typechk === "xlsx" || typechk === "xls") {
            vimg = "fa fa-file-excel-o";

        }
        else if (typechk === "TIFF" || typechk === "TIF") {
            vimg = "fa fa-file-image-o";

        }
        else if (typechk === "html" || typechk === "htm") {
            vimg = "fab fa-html5";


        }
        else {
            vimg = "far fa-images";

        }
        return vimg;

    }

    function ShowDocDescription(data, bool) {

        var lastext = '...';
        var Discreption = '';
        if (bool) {
            if (data.length > 30) {

                Discreption = '<span data-toggle="tooltip" title="' + data + '">' + data.substr(0, 25) + lastext + '</span>';

            }
            else {
                Discreption = '<span data-toggle="tooltip" title="' + data + '">' + data + '</span>';
            }
        } else {
            if (data.length > 50) {

                Discreption = '<span data-toggle="tooltip" title="' + data + '">' + data.substr(0, 48) + lastext + '</span>';

            }
            else {
                Discreption = '<span data-toggle="tooltip" title="' + data + '">' + data + '</span>';
            }
        }

        return Discreption;
    }


    function CreateDocumentTable(data, bool = false) {
        console.log('data:himanshu chk ', data);
        console.log('data:himanshu data.length ', data.length);


        try {
            $('#DocumentTable1').css({ "width": "auto !important" });
            if ($.fn.DataTable.isDataTable("#DocumentTable1")) {
                $('#DocumentTable1').DataTable().clear().destroy();
                $($.fn.dataTable.tables(true)).DataTable()
                    .columns.adjust();
            }
        }
        catch (err) {
            setTimeout(function () {
                CreateDocumentTable(data);
                // loaderHideShow(false);
            }, 3000);
        }
        DocumentTablevar = $('#DocumentTable1').DataTable({
            dom: 'Bfrtip',
            "paging": false,
            "ordering": false,
            "info": false,
            //lengthMenu: [
            //    [100],
            //    ['100 rows']
            //],
            buttons: [
                'pageLength'
            ],

            //responsive: true,

            //select: true,
            "jQueryUI": true,
            //"order": [[4, "desc"]],
            orderCellsTop: true,
            // scrollX: true,
            scrollY: 300,

            paging: true,

            data: data,
            rowId: 'Registration No.',
            columns: [
                {
                    render: function (data, type, row) {

                        if (type === "display") {

                            //var type1 = row["Type"];
                            //////alert(type);

                            return '<i class="' + getfileextension(row["Type"]) + '"><i/>';

                        } else {
                            return '';
                        }
                    }
                },
                {
                    render: function (data, type, row) {


                        return ShowDocDescription(row.Description, bool);

                    }
                },
                { "data": ["Section"] },

                {
                    render: function (data, type, row) {


                        var date = row["Received Date"];
                        var date1 = parseJsonDateformate(date);
                        if (type === "sort" || type === "type") {
                            return date;
                        }
                        // var dateC;
                        if (date != "" && date != null && date != 'undefined') {
                            if (date1 != "" && date1 != null && date1 != 'undefined') {
                                return date1;
                            }
                        }
                        else {
                            return "";
                        }
                    }
                },

                {
                    render: function (data, type, row) {

                        var date10 = row["Item Date"];
                        if (type === "sort" || type === "type") {
                            return date10;
                        }
                        // var dateC;
                        if (date10 != "" && date10 != null && date10 != 'undefined') {
                            return parseJsonDateformate(date10);
                        }
                        else {
                            return "";
                        }
                    }
                }
            ]
            ,
            rowCallback: function (row, data) {


                $(row).addClass('case1');
                var rowid = data["Registration No."];             //alert(data.Path);
                $(row).attr('id', rowid);

            }

        });


        // buttonClickSubmitDisableAndEnable("#DocTab", false);
        setTimeout(function () {
            // alert('test');
            $('#DocumentTable1').css({ "width": "auto !important" });

        }, 3000);

    }


    $('#DocumentTable1  thead tr').clone(true).appendTo('#DocumentTable1  thead');

    $('#DocumentTable1  thead tr:eq(1) th').each(function (i) {
        // //alert(i);
        // var title = $(this).text();
        $(this).html('<input  type="text" id="ser' + i + '"  style="width:100%;"  />');

        $('input', this).on('keyup change', function () {
            if (DocumentTablevar.column(i).search() !== this.value) {
                DocumentTablevar
                    .column(i)
                    .search(this.value)
                    .draw();
            }
        });
    });



    function DMS_Attachment_Viewer(RegistrationNo) {
        var GetTaskInfoByTaskId;
        if (TaskDocument.some(person => person.RegistrationID == RegistrationNo)) {
            var [InfoObj] = TaskDocument.filter(Filter => Filter["RegistrationID"] == RegistrationNo);
            GetTaskInfoByTaskId = InfoObj.Data[0];

        } else if (DocumentTableData.some(person => person["Registration No."] == RegistrationNo)) {
            var [InfoObj] = DocumentTableData.filter(Filter => Filter["Registration No."] == RegistrationNo);
            GetTaskInfoByTaskId = InfoObj;
        }


        if (GetTaskInfoByTaskId) {
            console.log('GetTaskInfoByTaskId', GetTaskInfoByTaskId);
            var GuidG = GetTaskInfoByTaskId.Guid;
            if (GuidG == 'undefined' || GuidG == null) {
                GuidG = GetTaskInfoByTaskId.GUID;
            }
            let filetype = GetTaskInfoByTaskId.Type;
            console.log('filetype', filetype);
            var lhost = location.host;
            var prt = location.protocol;
            var strItemId = GetTaskInfoByTaskId["Registration No."];
            let ViewerToken = localStorage.getItem('ViewerToken'); //PortalDocId
            var IsApproved = GetTaskInfoByTaskId.PortalDocId;
            var PortalDocId = GetTaskInfoByTaskId.IsApproved;
            if (IsApproved === "SIG" && IsApproved == null && PortalDocId !== "" && PortalDocId !== null) {
                IsApp = IsApproved;
                PortalID = PortalDocId;
            }
            else {
                IsApp = "";
                PortalID = "";
            }
            //var strurl = prt + "//" + lhost + "/viewer.html?GuidG=" + GuidG + "&srtAgreement=" + agrno + "&strItemId=" + ItemId + "&actiontype=" + actionstr + "&filetype=" + filetype.trim() + "&workid=" + workid + "&ViewerToken=" + ViewerToken + "";
            // var strurl = prt + "//" + lhost + "/viewer.html?GuidG=" + GuidG + "&srtAgreement=" + agrno + "&strItemId=" + strItemId + "&filetype=" + filetype.trim() + "&ViewerToken=" + ViewerToken + "&IsApp=" + IsApp + "&PortalID=" + PortalID;
            var strurl = "https://mydocusoft.com/viewer.html?" + GuidG + "&srtAgreement=" + agrno + "&strItemId=" + strItemId + "&filetype=" + filetype.trim() + "&ViewerToken=" + ViewerToken + "&IsApp=" + IsApp + "&PortalID=" + PortalID;

            window.open(strurl);
        }


    }

    $(document).on("dblclick", "#DocumentTable1 tr", function () {
        let RegistrationNo = this.id;
        DMS_Attachment_Viewer(RegistrationNo)
    });
    $(document).on("click", ".DocView", function () {
        let id = this.id;
        let RegistrationNo = id.substr(3);
        //  alert(RegistrationNo);
        DMS_Attachment_Viewer(RegistrationNo)
    });



    $(document).on("click", "#DocumentTable1 tr", function () {
        $(this).toggleClass("selected");
        $(this).toggleClass("AddDoc");

    });
    $(document).on("click", "#AddDocument", function () {

        $('.AddDoc').each(function () {
            let id = this.id;
            AddDocument(id);
        });

        $("#DocumentTable1 tr").removeClass("selected");
        $("#DocumentTable1 tr").removeClass("AddDoc");
    });
    $(document).on("click", ".DocDlt", function () {
        let idst = this.id;
        let id = idst.substring(3);
        DeleteTaskDocument(id);

    });


    async function Json_GetItemSummary(ItemId) {
        OBJ = {};
        OBJ.agrno = agrno;
        OBJ.Email = Email;
        OBJ.password = password;
        OBJ.ItemId = ItemId;
        data = JSON.stringify(OBJ);
        console.log('data', data);
        genralAjax(data, 'Json_GetItemSummary', function (returnValue) {
            console.log('returnValue', returnValue);
            var str = JSON.parse(JSON.stringify(returnValue));

            if (str.d != '') {
                loaderHideShow(false);
                // alert('Task Marked Complete Successfully');
                var itemInfo = JSON.parse(str.d);
                console.log('str', itemInfo.Table[0]);
                createDMSAttamentList(itemInfo.Table);

            }
        });
    }

    function AddDocument(AddDocumentId) {
        if (TaskDocument.some(person => person.RegistrationID == AddDocumentId)) {
            $('#MsgDoc').html("The Document Already Exist in List").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "red", "border-radius": "8px", "font-weight": "bold" }); //also show a success message 
            $('#MsgDoc').delay(2500).fadeOut('slow');
        } else {
            try {
                if (DocumentTableData.some(person => person["Registration No."] == AddDocumentId)) {
                    User = DocumentTableData.filter(Filter => Filter["Registration No."] == AddDocumentId);

                    createDMSAttamentList(User);

                } else {
                    Json_GetItemSummary(AddDocumentId);
                }
            } catch {
                Json_GetItemSummary(AddDocumentId);
            }



        }

        //$("#" + id).remove();
    }

    function createDMSAttamentList(User) {

        let fileName, Typest;
        fileName = User[0].Path;
        Typest = fileName.lastIndexOf("\\");
        fileName = fileName.slice(Typest + 1);
        console.log('FileName', fileName);
        let obj = {};
        obj.RegistrationID = User[0]["Registration No."];
        obj.Path = User[0].Path;
        obj.Data = User;
        TaskDocument.push(obj);
        let Description = User[0].Description;

        if (Description.length > 40) {
            $("#AddDocList").append('<li class="list-group-item Documente" id="Doc' + User[0]["Registration No."] + '"  > <i class="' + FileTypeImagePath(fileName) + '"  aria-hidden="true"></i> ' + Description.substring(0, 35) + '......<i class="fa fa-eye float_Right DocView ml-3" id="viw' + User[0]["Registration No."] + '"  aria-hidden="true" ></i><i class="fa fa-trash float_Right DocDlt" id="Dlt' + User[0]["Registration No."] + '"  aria-hidden="true" ></i></li>');
        } else {
            $("#AddDocList").append('<li class="list-group-item  Documente" id="Doc' + User[0]["Registration No."] + '"  > <i class="' + FileTypeImagePath(fileName) + '"  aria-hidden="true"></i> ' + Description + '<i class="fa fa-eye float_Right DocView ml-3" id="viw' + User[0]["Registration No."] + '"  aria-hidden="true" ></i><i class="fa fa-trash float_Right DocDlt" id="Dlt' + User[0]["Registration No."] + '"  aria-hidden="true" ></i></li>');
        }


    }



    function DeleteTaskDocument(RegistrationNo) {
        console.log('TaskDocument', TaskDocument);
        TaskDocument.splice(TaskAttechment.findIndex(item => item.RegistrationID === RegistrationNo), 1);
        console.log('TaskDocument delete ', TaskDocument);
        $('#Doc' + RegistrationNo).remove();
    }


    // Code for Recurrence  start
    $('.heidAll').hide();
    $('#dailyDiv').show();
    $('.heidAll1').hide();
    $('#RecurrenceTab').hide();
    $(document).on("change", "#ChkTaskRecurrence", function () {
        if ($(this).is(":checked")) {
            $('#RecurrenceTab').show();
            $("#Task_Week_Preiod_Monthly").prop('disabled', true);
            $("#Task_Day_Preiod_Monthly").prop('disabled', true);
            $("#Task_Day_Every_Monthly").prop('disabled', true);
            $("#Task_Week_Preiod_Yearly").prop('disabled', true);
            $("#Task_Day_Preiod_Yearly").prop('disabled', true);
            $("#Task_Month_Preiod_Yearly").prop('disabled', true);

        }
        else if ($(this).is(":not(:checked)")) {
            $('#RecurrenceTab').hide();
        }
    });
    $("#ChkRecurrence").prop('disabled', true);
    $('.RadioDWMY').on('change', function () {
        switch ($(this).val()) {
            case '0':
                $('.heidAll').hide();
                $('#dailyDiv').show();
                break;
            case '1':
                $('.heidAll').hide();
                $('#WeeklyDiv').show();
                break;
            case '2':
                $('.heidAll').hide();
                $('#MonthlyDiv').show();
                break;
            case '3':
                $('.heidAll').hide();
                $('#YearlyDiv').show();
                break;
        }
    });
    $('.RadioDAB').on('change', function () {
        switch ($(this).val()) {
            case '0':
                $('.heidAll1').hide();
                break;
            case '1':
                $('.heidAll1').hide();
                $('#ShowEndAfter').show();
                break;
            case '2':
                $('.heidAll1').hide();
                $('#ShowEndBy').show();
                break;
        }
    });
    $('.RadioMonthly').on('change', function () {
        switch ($(this).val()) {
            case 'Month1':

                $("#Task_Date_Monthly").prop('disabled', false);
                $("#Task_Date_Every_Monthly").prop('disabled', false);
                $("#Task_Week_Preiod_Monthly").prop('disabled', true);
                $("#Task_Day_Preiod_Monthly").prop('disabled', true);
                $("#Task_Day_Every_Monthly").prop('disabled', true);

                break;
            case 'Month2':
                $("#Task_Date_Monthly").prop('disabled', true);
                $("#Task_Date_Every_Monthly").prop('disabled', true);
                $("#Task_Week_Preiod_Monthly").prop('disabled', false);
                $("#Task_Day_Preiod_Monthly").prop('disabled', false);
                $("#Task_Day_Every_Monthly").prop('disabled', false);
                break;
        }
    });
    $('.RadioDaily').on('change', function () {
        switch ($(this).val()) {
            case 'Daily1':

                $("#Task_Every_Daily").prop('disabled', false);


                break;
            case 'Daily2':
                $("#Task_Every_Daily").prop('disabled', true);
                break;
        }
    });
    $('.RadioYearly').on('change', function () {
        switch ($(this).val()) {
            case 'Year1':

                $("#Task_Month_Yearly").prop('disabled', false);
                $("#Task_Month_Every_Yearly").prop('disabled', false);
                $("#Task_Week_Preiod_Yearly").prop('disabled', true);
                $("#Task_Day_Preiod_Yearly").prop('disabled', true);
                $("#Task_Month_Preiod_Yearly").prop('disabled', true);

                break;
            case 'Year2':
                $("#Task_Month_Yearly").prop('disabled', true);
                $("#Task_Month_Every_Yearly").prop('disabled', true);
                $("#Task_Week_Preiod_Yearly").prop('disabled', false);
                $("#Task_Day_Preiod_Yearly").prop('disabled', false);
                $("#Task_Month_Preiod_Yearly").prop('disabled', false);
                break;
        }
    });

    $(document).on("click", "#ShowRecurrence3", function () {
        $("#RecurrenceViewModal").modal('show');
    })
    $(document).on("click", "#RecurrenceSubmit", function () {
        $("#ChkRecurrence").prop('checked', true);
        $("#RemoveRecurrence").prop('disabled', false);
        $("#RecurrenceViewModal").modal('hide');
    })
    $(document).on("click", "#RemoveRecurrence", function () {
        $("#ChkRecurrence").prop('checked', false);
        $("#RemoveRecurrence").prop('disabled', true);
        $("#RecurrenceViewModal").modal('hide');
        $("#Task_Week_Preiod_Monthly").prop('disabled', true);
        $("#Task_Day_Preiod_Monthly").prop('disabled', true);
        $("#Task_Day_Every_Monthly").prop('disabled', true);
        $("#Task_Week_Preiod_Yearly").prop('disabled', true);
        $("#Task_Day_Preiod_Yearly").prop('disabled', true);
        $("#Task_Month_Preiod_Yearly").prop('disabled', true);

    })
    // Code for Recurrence  end





    // Code for Notes Start
    $(document).on("click", ".CList", function () {
        //setNotesEditor();
    })
    editor = $(".html-editor").dxHtmlEditor({
        height: 200,

        toolbar: {
            items: [
                "undo", "redo", "separator",
                {
                    name: "size",
                    acceptedValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"]
                },
                {
                    name: "font",
                    acceptedValues: ["Arial", "Courier New", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Verdana"]
                },
                "separator", "bold", "italic", "strike", "underline", "separator",
                "alignLeft", "alignCenter", "alignRight", "alignJustify", "separator",
                "orderedList", "bulletList", "separator",
                {
                    name: "header",
                    acceptedValues: [false, 1, 2, 3, 4, 5]
                }, "separator",
                "color", "background", "separator",
                "link", "image", "separator",
                "clear", "codeBlock", "blockquote", "separator",
                "insertTable", "deleteTable",
                "insertRowAbove", "insertRowBelow", "deleteRow",
                "insertColumnLeft", "insertColumnRight", "deleteColumn"
            ]
        },
        mediaResizing: {
            enabled: true
        }
    }).dxHtmlEditor("instance");
    function setNotesEditor() {
        //value= markup
        editor = $("#changesineditor").dxHtmlEditor({
            height: 200,
            value: markup,
            toolbar: {
                items: [
                    "undo", "redo", "separator",
                    {
                        name: "size",
                        acceptedValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"]
                    },
                    {
                        name: "font",
                        acceptedValues: ["Arial", "Courier New", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Verdana"]
                    },
                    "separator", "bold", "italic", "strike", "underline", "separator",
                    "alignLeft", "alignCenter", "alignRight", "alignJustify", "separator",
                    "orderedList", "bulletList", "separator",
                    {
                        name: "header",
                        acceptedValues: [false, 1, 2, 3, 4, 5]
                    }, "separator",
                    "color", "background", "separator",
                    "link", "image", "separator",
                    "clear", "codeBlock", "blockquote", "separator",
                    "insertTable", "deleteTable",
                    "insertRowAbove", "insertRowBelow", "deleteRow",
                    "insertColumnLeft", "insertColumnRight", "deleteColumn"
                ]
            },
            mediaResizing: {
                enabled: true
            }
        }).dxHtmlEditor("instance");
    }

    // Code for Notes end


    // Code for Save and Update Task Start



    $(document).on("click", "#Task_Submit,#SaveTask", function () {
        if (myObj.length > 0) {
            TaskCommon.Json_AddSupplierActivity(myObj.toString(), (status) => {
                if (status) {
                    TaskCommon.Json_Get_CRM_Task_ActivityByTaskId(TaskId, (status1, Data) => {
                        if (status1) {
                            console.log(Data.Table, "GETING_ACTIVITY")
                            createActivityTableBody(Data.Table);
                            $('#Task_ActivityText').val('');
                            myObj.length = 0;
                            //location.reload();
                        }
                    });
                }
            });
        }

        if ($('#Task_Section').val() == "-1") {
            $('#OwnershipRequired-Task_Section').html('! section is Required');
            $('#Task_Section').focus();
            $('#OwnershipRequired-Task_Section').fadeIn('slow');
            $('#OwnershipRequired-Task_Section').delay(2800).fadeOut('slow');
        } else if ($('#Task_AssociateWithClient').val() == "") {
            $('#OwnershipRequired-Task_AssociateWithClient').html('! Client is Required');
            $('#OwnershipRequired-Task_AssociateWithClient').fadeIn('slow');
            $('#OwnershipRequired-Task_AssociateWithClient').delay(2800).fadeOut('slow');
        } else {
            if (TaskId == '0') {

                TaskCommon.Json_CRM_Task_Save(TaskId)
            } else {

                EndTimeSubmit();
                TaskCommon.Json_CRM_Task_Save_Update(TaskId);
            }
            //console.log('editorInstance', editor.option("value"));


        }

        // TaskCommon.Json_Get_CRM_Task_ActivityByTaskId(TaskId, (status1, Data) => {
        // if (status1) {
        //   console.log(Data.Table, "GETING_ACTIVITY");
        //   AddToActivityTAble($("#Task_Subject").val() + " has been marked as completed by" + " " + localStorage.getItem('UserName'));
        //   createActivityTableBody(Data.Table);
        //   $('#Task_ActivityText').val('');
        //location.reload();
        // }
        //});


    });



    function checkPortaUser() {
        $("#portalbutton").empty();
        const obj = {};
        obj.intProjectId = TaskCommon.projectId;
        obj.strOrignatorNumber = TaskCommon.CilentID;
        cls.Json_GetClientCardDetails(obj, function (status, data) {
            if (status) {
                const parseData = JSON.parse(data);
                let tbl6 = parseData.Table6;
                if (MainContactArray.length > 0) {
                    let contact = MainContactArray.filter((el) => el["Main Contact"] == true);
                    if (contact.length > 0) {
                        let result = tbl6.filter((el) => el["E-Mail"] == contact[0]["E-Mail"]);
                        console.log('Json_GetClientCardDetails1', contact);
                        console.log('Json_GetClientCardDetails', result);
                        if (result.length > 0) {
                            isPortalUser = result[0]["Portal User"];
                        }
                    }


                }

            }
        });
        // document.getElementById("tosendmail").value = $("#txtEmail").val();
    }


    // Code for Save and Update Task End
    // Code for Add Assign Task start


    // Code for Add Assign Task End

    //code for stages is Start
    function createStagesTableBody(data) {
        checkAllStageCompleted(data);
        //let data = datas.map((el) => Object.assign({ "Action": "Portal" }, el));

        // data = data.map((el)=>{
        // let o =Object.assign({},el);
        //   o.icon="";
        //  return o;
        // })

        console.log('data: chk 11', data);
        console.log('data: data.length ', data.length);
        if (data.length > 0) {
            $('#StageLi').show();
        }
        try {

            $('#StageTable').css({ "width": "auto !important" });
            if ($.fn.DataTable.isDataTable("#StageTable")) {
                $('#StageTable').DataTable().clear().destroy();
            }
        }
        catch (err) {
            setTimeout(function () {
                createStagesTableBody(data);
                loaderHideShow(false);
            }, 3000);
        }
        var data1 = data;
        StagesTable = $('#StageTable').DataTable({
            dom: 'Bfrtip',
            "paging": false,
            "ordering": true,
            "info": false,
            lengthMenu: [
                [100],
                ['100 rows']
            ],
            buttons: [
                'pageLength'
            ],
            //responsive: true,
            //scrollY:"300px", //StagesTableHeight,
            // scrollCollapse: true,
            colReorder: true,
            stateSave: true,
            //fixedColumns: true,
            // select: true, 
            "jQueryUI": true,
            data: data1 ? data1 : null,
            rowId: 'StageId',
            columns: [


                {
                    render: function (data, type, row) {

                        if (type == "display") {
                            if (row['SubStageId'] == '0') {
                                return row["SubStageName"];
                            } else {
                                return '';
                            }

                        } else {
                            return '';
                        }

                    }
                },

                {
                    render: function (data, type, row) {
                        var date = row["DueDate"];
                        if (type === "sort" || type === "type") {
                            return date;
                        }
                        // var dateC;
                        if (date != "" && date != null && date != 'undefined') {
                            // if (isDateBeforeToday(new Date(parseInt(date.substr(6)))) && row["Status"] != "Completed") {
                            //    return '<span style="color: #d42027;">' + parseJsonDateformate(date) + '</span>';
                            // } else {
                            return '<span>' + parseJsonDateformate(date) ? parseJsonDateformate(date) : "" + '</span>';
                            // }

                        }
                        else {
                            return "";
                        }
                    }
                },

                { "data": ["Comments"] },
                { "data": ["AssginToName"] },
                { "data": ["CompleteByName"] },
                {
                    render: function (data, type, row) {
                        var date = row["CompletionDate"];
                        let dtdate = parseJsonDateformate(date);
                        let finaldate = dtdate != "01/01/1900" ? dtdate : "";

                        console.log('dtdate sk', finaldate);

                        if (type === "sort" || type === "type") {
                            return date;
                        }
                        // var dateC;
                        if (date) {

                            // if (isDateBeforeToday(new Date(parseInt(date.substr(6)))) && row["Status"] != "Completed") {

                            //    return '<span style="color: #d42027;">' + parseJsonDateformate(date) + '</span>';
                            // } else {
                            return '<span>' + finaldate + '</span>';
                            // }

                        }
                        else {
                            return "";
                        }
                    }
                },
                {
                    render: function (data, type, row) {
                        if (type == "display") {
                            if (row["Complete"] == true) {
                                if ($("#Task_Status").val() == "Completed") {
                                    $('.reviewandFinish').addClass('disabled_icon');
                                    $('.resetDocument').addClass('disabled_icon');
                                    $('.refreshDocuments').addClass('disabled_icon');
                                    $('.refreshDocuments').addClass('disabled_icon');
                                    $('.deleteDocument').addClass('disabled_icon');
                                    $(".StausCSS").text("Completed").css("color", "green");
                                }
                                else {
                                    $(".StausCSS").text("In Progress").css("color", "green");
                                }

                                return '<label><input type="checkbox" class="StgCheckboxClass" disabled checked id="StgChk' + row["StageId"] + '-' + row["SubStageId"] + '"><span></span></label>';
                            } else {
                                return '<label><input type="checkbox" class="StgCheckboxClass" id="StgChk' + row["StageId"] + '-' + row["SubStageId"] + '"><span></span></label>';
                            }

                        } else {
                            return '';
                        }

                    }
                },
                {
                    render: function (data, type, row) {
                        if (type == "display") {
                            if (row["AssginToName"] == "Admin") {
                                if (row["Action"] == 0) {
                                    console.log(row["Action"], "Action_data");
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light StgEditBtn Editable"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-sticky-note"></i></button>';
                                }
                                else if (row["Action"] == 1) {
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light Editable"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-envelope"></i></button>';
                                }
                                else if (row["Action"] == 2) {
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-commenting"></i></button>';
                                }
                                else if (row["Action"] == 3) {
                                    return ' <div style="display: flex;"><button type="button" class="btn btn-danger waves-effect waves-light btnPortal"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-globe"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light isPortalUser" title="Create Portal"  id="PEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-plus-circle" aria-hidden="true"></i></button></div>';
                                }
                                else if (row["Action"] == 4) {
                                    return ' <div style="display: flex;"> <button type="button" class="btn btn-danger waves-effect waves-light documentRequest"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-paperclip"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light onlysendlink" name="sendlink" title="Send Link for Document Upload" id="SEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-envelope"></i></button></div>';
                                }
                                else {
                                    return ' <button type="button"  disabled class="btn btn-danger waves-effect waves-light"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-check-square"></i></button>';
                                }
                            }
                            else if (row["Complete"] == true) {
                                if (row["Action"] == 0) {
                                    console.log(row["Action"], "Action_data");
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light StgEditBtn Editable"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-sticky-note"></i></button>';
                                }
                                else if (row["Action"] == 1) {
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light Editable"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-envelope"></i></button>';
                                }
                                else if (row["Action"] == 2) {
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-commenting"></i></button>';
                                }
                                else if (row["Action"] == 3) {
                                    return ' <div style="display: flex;"><button type="button" class="btn btn-danger waves-effect waves-light btnPortal"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-globe"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light isPortalUser" title="Create Portal" style="display:none"  id="PEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-plus-circle" aria-hidden="true"></i></button></div>';
                                }
                                else if (row["Action"] == 4) {
                                    return ' <div style="display: flex;"> <button type="button" class="btn btn-danger waves-effect waves-light documentRequest"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-paperclip"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light onlysendlink" name="sendlink" title="Send Link for Document Upload" id="SEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-envelope"></i></button></div>';
                                }
                                else {
                                    return ' <button type="button"  disabled class="btn btn-danger waves-effect waves-light"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-check-square"></i></button>';
                                }

                            }




                            else {
                                if (row["Action"] == 1) {
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light" disabled id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-envelope"></i></button>';
                                }
                                else if (row["Action"] == 3) {
                                    return ' <div style="display: flex;"><button type="button" class="btn btn-danger waves-effect waves-light btnPortal"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-globe"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light isPortalUser" title="Create Portal"  id="PEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-plus-circle" aria-hidden="true"></i></button></div>';

                                }
                                else if (row["Action"] == 4) {
                                    if (setTaskAttachment.length > 0) {

                                        return '<div style="display: flex;"> <button type="button" class="btn btn-danger waves-effect waves-light documentRequest"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-paperclip"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light onlysendlink" name="sendlink" title="Send Link for Document Upload" id="SEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-envelope"></i></button></div>';

                                        //return '<div style="display: flex;"> <button type="button" class="btn btn-danger waves-effect waves-light documentRequest"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-paperclip"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light onlysendlink" style="display:none" name="sendlink" title="Send Link for Document Upload" id="SEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-envelope"></i></button></div>';



                                    }
                                    else {
                                        return '<div style="display: flex;"> <button type="button" class="btn btn-danger waves-effect waves-light documentRequest"  id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-paperclip"></i></button> <button type="button" class="btn btn-danger waves-effect waves-light onlysendlink" name="sendlink" title="Send Link for Document Upload" id="SEdit' + row["StageId"] + '-' + row["SubStageId"] + '"><i class="fa fa-envelope"></i></button></div>';
                                    }

                                }
                                else {
                                    return ' <button type="button" class="btn btn-danger waves-effect waves-light StgEditBtn" id="Edit' + row["StageId"] + '-' + row["SubStageId"] + '" ><i class="fa fa-check-square"></i></button> ';
                                }
                            }
                        } else {
                            return '';
                        }

                    }
                }

            ]

        });
        // $('#StageTable').css({ "width": "auto !important" });

        setStages(data);
    }



    function setStages(data) {
        StagesInfoData = data;
        let array1 = data.filter(Filter => Filter.AssignTo == currentUserInfo.DSUserID);
        let j = 1;
        let stagesId = data[0].StageId;
        if (array1.length > 0) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].AssignTo == '-1') {
                    $('#StgChk' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');
                    $('#Edit' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');
                    $('#SEdit' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');
                    $('#PEdit' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');
                }

                if (data[i].Complete == true && data[j].Complete == false && data[j].AssignTo == currentUserInfo.DSUserID) {
                    if (data[j].SubStageId == 0) {
                        // $('#StgChk' + data[j+1].StageId + '-' + data[j+1].SubStageId).addClass('Editable');
                        if (data[j].Complete == false && data[j].AssignTo == currentUserInfo.DSUserID) {
                            $('#Edit' + data[j].StageId + '-' + data[j].SubStageId).addClass('Editable');
                            $('#SEdit' + data[j].StageId + '-' + data[j].SubStageId).addClass('Editable');
                            $('#PEdit' + data[j].StageId + '-' + data[j].SubStageId).addClass('Editable');

                        }
                        console.log('data[j]', data[j + 1]);
                    } else {
                        //$('#StgChk' + data[j].StageId + '-' + data[j].SubStageId).addClass('Editable');
                        $('#Edit' + data[j].StageId + '-' + data[j].SubStageId).addClass('Editable');
                        $('#SEdit' + data[j].StageId + '-' + data[j].SubStageId).addClass('Editable');
                        $('#PEdit' + data[j].StageId + '-' + data[j].SubStageId).addClass('Editable');
                        console.log('data[j]', data[j]);
                    }

                } else if (data[i].Complete == false) {
                    let StgChk = '#StgChk' + data[i].StageId + '-' + data[i].SubStageId;
                    let Edit = '#Edit' + data[i].StageId + '-' + data[i].SubStageId;
                    let SEdit = '#SEdit' + data[i].StageId + '-' + data[i].SubStageId;
                    let PEdit = '#PEdit' + data[i].StageId + '-' + data[i].SubStageId;

                    if (stagesId == data[i].StageId && data[i].AssignTo == currentUserInfo.DSUserID) {
                        //stagesId = data[i].StageId;
                        $('#StgChk' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');
                        $(Edit).addClass('Editable');
                        $(SEdit).addClass('Editable');
                        $(PEdit).addClass('Editable');
                    }
                    else {
                        if (data[i]["AssginToName"] == "Admin") {
                            $('#StgChk' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');
                            $(Edit).addClass('Editable');
                            $(SEdit).addClass('Editable');
                            $(PEdit).addClass('Editable');
                        }
                        else {
                            $(StgChk).prop('disabled', true);
                            $(Edit).prop('disabled', true);
                            $(SEdit).prop('disabled', true);
                            $(PEdit).prop('disabled', true);
                        }


                    }
                }
                j++;
            }

            $('.Editable').prop('disabled', false);

            $(".btnPortal").removeClass('Editable');
            $(".isPortalUser").removeClass('Editable');

            $(".documentRequest").removeClass('Editable');
            $(".onlysendlink").removeClass('Editable');

        }
        else {
            $('.StgCheckboxClass').prop('disabled', true);
            $('.StgEditBtn').prop('disabled', true);
            $('.btnPortal').prop('disabled', true);
            $('.documentRequest').prop('disabled', true);
            $('.onlysendlink').prop('disabled', true);
            $(".isPortalUser").prop('disabled', true);

            for (var i = 0; i < data.length; i++) {
                if (data[i].AssignTo == '-1' || data[i].AssignTo == '0') {
                    // $('#StgChk' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');
                    $('#Edit' + data[i].StageId + '-' + data[i].SubStageId).addClass('Editable');

                }
            }
            $('.Editable').prop('disabled', false);

        }

        setTimeout(() => {
            if (isPortalUser) {
                $(".isPortalUser").hide();
            }
            else {
                $(".isPortalUser").show();
            }
        }, 1500)



    }

    function GetTemplates(arr) {
        console.log("get stages list", arr);
        // let filterMainContactList = TaskCommon.ContactList ? TaskCommon.ContactList.filter(v => v["Main Contact"] == true) : console.log("no conact");

        switch (arr.Action) {
            case 1:
                TaskCommon.Json_GetWebTemplatesList(function (status, data) {
                    let strw = EditableStageObject.StageId + "-" + EditableStageObject.SubStageId;
                    $("#Edit" + strw).prop('disabled', true);
                    $("#Edit" + strw + " i").addClass("fa-spinner fa-spin");
                    $("#Edit" + strw + " i").removeClass("fa-envelope");

                    if (status) {
                        let json = JSON.parse(data);
                        let res = json.Table;
                        console.log("webTepm", res);

                        let result = res.filter(v => v.TemplateID == arr["TemplateId"]);
                        // TaskCommon.setTemplate = result;
                        Json_GetStandardLetterData(arr);
                    }
                })
                break;
            case 2:
                TaskCommon.Json_GetSMSTemplate(function (status, data) {
                    console.log("data", TaskCommon.setStagesInfoData);
                    if (status) {
                        let json = JSON.parse(data);
                        let res = json.Table;
                        let result = res.filter(v => v.TemplateId == arr["TemplateId"]);
                        TaskCommon.setTemplate = result;
                        console.log("smsTepm", result);
                        let obj = {};
                        obj.projectid = TaskFolderId;
                        if (false) {
                            // obj.MobileNo = filterMainContactList[0]["Mobile"] ? filterMainContactList[0]["Mobile"] : alert("Invalid Mobile No " + filterMainContactList[0]["Mobile"]);
                        }
                        else {
                            alert("Invalid Mobile No");
                            return false;
                        }

                        obj.Message = result[0].ByteData;
                        console.log("send temp", obj);
                        TaskCommon.Json_SendSMS(obj, function (status, data) {
                            console.log("Response Email", data);
                        })
                    }
                })
                break;
            case 0:
                console.log("None Stages", arr);
                Json_Get_CRM_UpdateStages_ProcessTask(arr);

                break
            default:
                console.log("Action 0", arr);
                //Json_Get_CRM_UpdateStages_ProcessTask();


                break;
        }
    }


    let createportalArr = [
        "Preset Memorable Data",
        "Issue Reminders",
        "Exclude Message Link",
        "Keep SignedIn",
        "Allow Upload",
        "Change Profile",
        "LoggedIn",
        "Blocked"
    ];



    $(document).on('click', '.isPortalUser', function (e) {
        createPortalfun();
        $("#createPortalmodal").modal('show');
    })
    function createPortalfun() {

        let createPortal = "";
        for (let [key, item] of Object.entries(createportalArr)) {
            createPortal += `
                <div class="col-sm-4">
                <div class="form-check mt-3"> 
                  <lable>${item}</lable>
                <input class="form-check-input"  type="checkbox"  id="porat${key}">
                  <label class="form-check-label" for="porat${key}">
                  ${item}
                  </label>
                </div>
                </div>
                `;
        };

        $("#createPortal").html(createPortal);
    }


    $("#btnCreatePortal").click(() => {
        $("#btnCreatePortal").prop("disabled", true);
        let result = MainContactArray.filter((el) => el["Main Contact"] == true);
        if (result.length > 0) {
            let obj = {};
            obj.accid = agrno;
            obj.email = Email;
            obj.password = password;
            obj.PresetMemorableData = $("#porat0").is(":checked");
            obj.IssueReminders = $("#porat1").is(":checked");
            obj.ExcludeMessageLink = $("#porat2").is(":checked");
            obj.KeepSignedIn = $("#porat3").is(":checked");
            obj.AllowUpload = $("#porat4").is(":checked");
            obj.ChangeProfile = $("#porat5").is(":checked");
            obj.LoggedIn = $("#porat6").is(":checked");
            obj.Blocked = $("#porat7").is(":checked");
            obj.emailAddress = result[0]["E-Mail"]  //$("#txtEmail").val();
            obj.ccode = TaskCommon.CilentID;
            obj.clientName = $("#select2-Task_AssociateWithClient-container").text();
            console.log("PortalUserAccountCreated_Json", obj);

            let jsdata = JSON.stringify(obj);

            genralAjaxForPortal(jsdata, 'PortalUserAccountCreated_Json', function (returnValue) {
                var str = JSON.parse(JSON.stringify(returnValue));
                console.log("created portal", str.d);
                if (!str.d) {
                    //$(".createportal").text(`Portal Created`).css(objcss).fadeIn('slow');
                    //$(".createportal").delay(2000).fadeOut('slow');
                    cls.createAlertCom(' Portal Created Successfully', 'success', true, false, 'pageMessages');
                    //CallApiAfterCreatePortal();
                    checkPortaUser();
                    $("#createPortalmodal").delay(2000).fadeOut('slow').modal('hide');
                    $(".isPortalUser").prop("disabled", true);
                    $("#btnCreatePortal").prop("disabled", false);
                    //Json_Get_CRM_Stages_and_SubStages_ByTaskId(TaskId);
                }
            });
        }
        else {
            cls.createAlertCom(' Email is not valid pls try again', 'danger', true, false, 'pageMessages');

        }



    })






    $(document).on('click', '.onlysendlink', function (e) {
        send_link = this.name;
        console.log("link data", name);
        let idStr = this.id;
        let idArray = idStr.substring(5).split('-');
        let array1 = StagesInfoData.filter(Filter => Filter.StageId == idArray[0] && Filter.SubStageId == idArray[1]);
        EditableStageObject = array1[0];

        if (EditableStageObject.Action == 4) {
            Json_GetTaskAttachmentGuid();
        }
        console.log(globalData, "EditableStageObject_00", EditableStageObject);
        let obj = {};
        obj.udfid = globalData.ProcessUDF;
        obj.StageId = EditableStageObject.StageId;
        obj.OriginatorNo = globalData.AssociatedWithID;
        cls.Json_GetProcessStageEmailId(obj, function (Staus, Data) {
            if (Staus) {
                if (Data) {

                    let parse_Data = JSON.parse(Data);
                    console.log(parse_Data, "Json_GetProcessStageEmailId");
                    //	$("#txtSend_Email_Request").val(Data);
                    subjectData = parse_Data;
                }

            }

        });

        $('.onlysendlink').attr('disabled', 'disabled');
        setTimeout(function () {
            $("#" + idStr).removeAttr('disabled');
        }, 5000)
        //AddToActivityTAble($("#Task_Subject").val() + " link has been sent successfully by" + " " + localStorage.getItem('UserName'));
    })

    $(document).on('click', '.documentRequest', function (e) {
        send_link = "";
        $(".showdata").html("");
        $('#NotesText').val("");
        $("#StagesUpdateSubmit").addClass("documentRequestUpdate");
        $("#StagesUpdateSubmit").removeClass("portalSataupdate");
        $("#StagesUpdateSubmit").removeClass("StagesUpdateSubmit");

        let idStr = this.id;
        let idArray = idStr.substring(4).split('-');
        let array1 = StagesInfoData.filter(Filter => Filter.StageId == idArray[0] && Filter.SubStageId == idArray[1]);
        set_next_stage = StagesInfoData.filter(Filter => Filter.RowNo == array1[0].RowNo + 1);
        EditableStageObject = array1[0];
        $(".showdata").html(`Updating stage:` + array1[0].SubStageName);
        $("#StagesUpdateSubmit").val("");


        $('#StagesUpdateModal').modal('show');

    });


    $(document).on("click", ".documentRequestUpdate", function () {

        if (EditableStageObject.Action == 4) {

            // Json_GetTaskAttachmentGuid();
            //Json_Get_CRM_UpdateStages_ProcessTask(EditableStageObject);
            updateStages();
        }

    })


    function Json_GetTaskAttachmentGuid() {
        let obj = {};
        obj.TaskId = TaskId;
        obj.StageId = 0;
        obj.SubStageId = 0;
        cls.Json_GetTaskAttachmentGuid(obj, function (status, data) {
            if (status) {
                if (data != "Failed") {
                    console.log("Json_GetTaskAttachmentGuid", data);
                    Json_GetTaskAttachmentStatusByGuid(data);
                    setSendLinkEmail = data
                    SendLinkEmail(data)
                }
                else {
                    alert("Invalid GUID");
                }

            }
        })
    }

    function getSignature() {

        let object = {};
        object.accId = localStorage.getItem("agrno");
        object.email = localStorage.getItem("Email");
        object.password = localStorage.getItem("pass");
        object.managerEmail = localStorage.getItem("Email");
        const jsdata = JSON.stringify(object);
        genralAjaxForPortal(jsdata, 'GetUsersEmailSignature_Json', function (returnValue) {
            console.log(returnValue, "returnValue", returnValue);
            let str = JSON.parse(JSON.stringify(returnValue));
            let json = str.d;
            if (json) {
                console.log("returnValue1", json);
                const data_byte = atob(json);
                setTimeout(() => {
                    const htmlEditor = $("#dxhtmlEditor").dxHtmlEditor("instance");
                    const dxHtmlBody = htmlEditor.option("value");
                    let setData = dxHtmlBody + data_byte;

                    dxHtmlEditorFun(setData);
                    $("#btnAddEmailSignature_SendEail").prop("disabled", true);
                }, 1000);
            } else {

                //alert("No Signature");
                cls.createAlertCom(' No Signature', 'danger', true, false, 'pageMessages_praposal');
            }


        });

    }
    function getSignature_Document_stage() {

        let object = {};
        object.accId = localStorage.getItem("agrno");
        object.email = localStorage.getItem("Email");
        object.password = localStorage.getItem("pass");
        object.managerEmail = localStorage.getItem("Email");
        const jsdata = JSON.stringify(object);
        genralAjaxForPortal(jsdata, 'GetUsersEmailSignature_Json', function (returnValue) {
            console.log(returnValue, "returnValue", returnValue);
            let str = JSON.parse(JSON.stringify(returnValue));
            let json = str.d;
            if (json) {
                console.log("returnValue1", json);
                const data_byte = atob(json);
                setTimeout(() => {
                    const htmlEditor = $("#dxhtmlEditor_Requested").dxHtmlEditor("instance");
                    const dxHtmlBody = htmlEditor.option("value");
                    let setData = dxHtmlBody + data_byte;
                    dxHtmlEditorFun_Requested(setData);
                    $("#btnAddEmailSignature").prop("disabled", true);
                }, 1000);
            } else {

                //alert("No Signature");
                cls.createAlertCom(' No Signature', 'danger', true, false, 'pageMessages_praposal');
            }


        });

    }
    $("#btnAddEmailSignature_SendEail").prop("disabled", false);
    $(document).on("click", "#btnAddEmailSignature_SendEail", function () {
        getSignature();

    });

    $(document).on("click", "#btnAddEmailSignature", function () {
        getSignature_Document_stage();

    });



    $(document).on("click", "#btnSend_email_Request", function () {
        const htmlEditor = $("#dxhtmlEditor_Requested").dxHtmlEditor("instance");
        const dxHtmlBody = htmlEditor.option("value");
        //write editor above
        //var dxHtmlBody = tinymce.get('editor2').getContent();
        //TaskCommon.Json_SendMail(obj, function (status, data) {
        //console.log($("#txtSubject_send_Request").val(),"Response_Email", data);
        //if (status) {						
        //$("#requisteddocument_modal").delay(2000).fadeOut('slow').modal('hide');
        //  cls.createAlertCom(` Link Sent Successfully`, 'success', true, false, 'pageMessages');

        // }
        // }) 
        console.log(EditableStageObject, "EditableStageObject_00");
        let result = MainContactArray.filter((el) => el["Main Contact"] == true);
        if (result.length > 0) {
            RequestedDocumentSEndMail(dxHtmlBody, EditableStageObject, result[0]["E-Mail"]);
        }
        AddToActivityTAble($("#Task_Subject").val() + " link has been sent successfully by" + " " + localStorage.getItem('UserName'));
    })

    function RequestedDocumentSEndMail(dxHtmlBody) {
        console.log(subjectData, "subjectData");
        let obj = {};
        obj.Subject = $("#txtSubject_send_Request").val() ? $("#txtSubject_send_Request").val() : "";
        obj.Body = dxHtmlBody;
        obj.FromMail = localStorage.getItem("Email");
        if ($("#txtSend_Email_Request").val().match(validRegex) && $("#txtSend_Email_Request").val()) {
            obj.ToEmail = $("#txtSend_Email_Request").val();// "patrick.docusoft@outlook.com";//email ? email : alert("Invalie EmailId");
        }
        else {
            cls.createAlertCom(` Invalid email address!`, 'warning', true, false, 'pageMessages');
            $("#txtSend_Email_Request").focus();
            return false;
        }

        obj.strFileName = "";
        obj.Byte = "";
        TaskCommon.Json_SendMail(obj, function (status, data) {
            console.log($("#txtSubject_send_Request").val(), "Response_Email", data);
            if (status) {
                $("#requisteddocument_modal").delay(2000).fadeOut('slow').modal('hide');
                cls.createAlertCom(` Link Sent Successfully`, 'success', true, false, 'pageMessages');

            }
        })
    }




    function Json_GetCRMUDFValuesByClientId(cid) {
        let obj = {};
        obj.ProjectId = TaskFolderId;
        obj.ClientId = cid;
        cls.Json_GetCRMUDFValuesByClientId(obj, function (status, data) {
            if (status) {
                let json = JSON.parse(data);
                setCrmUdf = json.Table1;
                console.log("Json_GetCRMUDFValuesByClientId", data);

            }
        })
    }


    function SendLinkEmail() {
        //let strw = EditableStageObject.StageId+"-"+EditableStageObject.SubStageId;
        if (MainContactArray) {

            if (MainContactArray.length > 0) {
                let result = MainContactArray.filter((el) => el["Main Contact"] == true);

                if (result.length > 0) {


                    //console.log("Umer kk",strw);


                    //$("#txtSend_Email_Request").val(result[0]["E-Mail"]);
                    //$("#txtSubject_send_Request").val(EditableStageObject["SubStageName"] ? EditableStageObject["SubStageName"] : "");
                    //$("#dxRequestTitle").text(EditableStageObject["SubStageName"]);
                    //$("#requisteddocument_modal").modal('show');

                    var obj1 = {
                        Guid: setSendLinkEmail,
                        agrno: agrno,
                        Email: Email
                    };
                    let str = JSON.stringify(obj1);

                    let bta = btoa(str);

                    var obj1 = {};
                    obj1.strUserId = EditableStageObject.AssignTo;
                    TaskCommon.Json_GetSupplierManager(obj1, function (status, data) {
                        if (status) {
                            let json = JSON.parse(data);
                            let tbl = json.Table;
                            const currentDate = new Date();
                            const formattedDate = formatDate(currentDate);
                            console.log(tbl, "tble_udf_data");
                            //const object = {};
                            //object.OriginatorNo = $('#Task_AssociateWithClient').val();
                            //object.projectid = $('#Task_Folder').val();
                            ////console.log(object,"object_data");
                            //TaskCommon.Json_GetSupplierUdf(object, function(status,data) {
                            //if(status){
                            //console.log(data,"data_get_bysuppplier");
                            ////}  

                            //});
                            let crmudfName;
                            if (setCrmUdf.length > 0) {
                                for (let itm of setCrmUdf) {
                                    if (itm.UserDefFieldID == "4") {
                                        crmudfName = itm.UdfValue;
                                    }
                                }

                            }


                            let txtBody = `Hi ${result[0]["First Name"]},<br />  <br>
							 
							 Thank you for your interest in our mortgage service. <br> <br>

We are glad to inform you that we were able to qualify your mortgage application number ${crmudfName}.

The following documents are required to proceed with the mortgage process:<br>
1. Utility bills<br>
2. Proof of benefits received<br>
3. P60 form from your employer<br>
4. Your last three months’ payslips<br>
5. Passport or driving licence <br>
6. Bank statements of your current account for the last three to six months<br>
7. Statement of two to three years’ accounts from an accountant if you’re self-employed<br>
8. Tax return form SA302 if you have earnings from more than one source or are self-employed<br>
9. Self-employed people should look to provide information alongside their tax return, which supports what the SA302 says about their income, such as bank statements.<br> <br>

							 Please click on the following link to upload <a target="_blank" href="https://docusoftpractice.com/account/upload_document.html?Code=${bta}">Open Upload Page</a>`;

                            //dxHtmlEditorFun_Requested(txtBody); 
                            GetTempForRequestedDocument(bta);

                            //$("#SEdit"+strw+" i").removeClass("fa-spinner fa-spin");
                            //$("#SEdit"+strw+" i").addClass("fa-envelope");

                        }
                    })



                }
                else {

                    var obj = {};
                    obj.strUserId = EditableStageObject.AssignTo;
                    TaskCommon.Json_GetSupplierManager(obj, function (status, data) {
                        if (status) {
                            let json = JSON.parse(data);
                            let tbl = json.Table;
                            const currentDate = new Date();
                            const formattedDate = formatDate(currentDate);
                            //alert("Invalid Email ID and Send Email",tbl[0].UserName);
                            alert("Invalid Email ID and Send Email", tbl[0].UserName);
                            let txtBody = `Hi ${tbl[0].UserName}, An Email was scheduled to be sent to ${localStorage.getItem("companyName")} on ${formattedDate},
                 but failed as a valid email address  was not found in the client details. Please add an email address and try again. Stage: ${EditableStageObject.SubStageName}. Email not sent as a valid email address was not found on in the client details. Client manager has been informed.`;
                            sendEmailTemplate(txtBody, EditableStageObject, tbl[0].UserEmail);
                            $("#StagesUpdateModal").modal("hide");
                            $('#btnCloseModal').trigger('click');
                        }
                    })

                }
            }
            else {
                alert("A main contact is not allocated to the selected client. Please assign a main contact and try again.");
            }
        }
    }




    function GetTempForRequestedDocument(bta) {
        let strw = EditableStageObject.StageId + "-" + EditableStageObject.SubStageId;
        $("#SEdit" + strw + " i").addClass("fa-spinner fa-spin");
        $("#SEdit" + strw + " i").removeClass("fa-envelope");

        if (setEmailMainContactTrue) {
            let ob = {};
            ob.agrno = agrno;
            ob.UserEmail = Email;
            ob.password = password;
            ob.ContactEmail = setEmailMainContactTrue;
            ob.strFolderId = TaskFolderId;
            ob.strSectionId = parseInt($('#Task_Section').val());
            ob.strTemplateId = EditableStageObject["TemplateId"];
            ob.strClientId = TaskCommon.CilentID;
            let data = JSON.stringify(ob);
            genralAjaxMore(data, 'Json_GetStandardLetterData', function (returnValue) {
                var str = JSON.parse(JSON.stringify(returnValue));
                if (str.d != '') {
                    TaskCommon.Json_GetHtmlFromRtf(str.d, function (status, Data) {
                        if (status) {

                           $("#txtSubject_send_Request").val(EditableStageObject.Subject ? EditableStageObject.Subject : "");

                            $("#requisteddocument_modal").modal('show');
                            $("#btnAddEmailSignature").prop("disabled", false);
                            $("#dxRequestTitle").text(`${EditableStageObject["SubStageName"]}`);
                            $(".modal-header .close").css(cssobj);
                            $(".modal-header").css("display", "flex");

                            const obj = {};
                            obj.intProjectId = TaskCommon.projectId;
                            obj.strOrignatorNumber = TaskCommon.CilentID;
                            cls.Json_GetClientCardDetails(obj, function (status, data) {
                                if (status) {
                                    const parseData = JSON.parse(data);
                                    let tbl6 = parseData.Table1;
                                    // if(tbl6.length>0){
                                    //  $("#txtSend_Email_Request").val(subjectData ? subjectData : tbl6[0]["Email"]);
                                    //}else{
                                    //$("#txtSend_Email_Request").val(subjectData ? subjectData : setEmailMainContactTrue);
                                    // }	
                                    if (subjectData) {
                                        $("#txtSend_Email_Request").val(subjectData.EmailId);
                                        
                                    }
                                    else if (setEmailMainContactTrue) {
                                        $("#txtSend_Email_Request").val(setEmailMainContactTrue);
                                    } else {
                                        $("#txtSend_Email_Request").val(tbl6[0]["Email"]);
                                    }
                                }
                            });




                            //  $("#txtSubject_send_Request").val($("#select2-Task_AssociateWithClient-container").text() + "  " + EditableStageObject["SubStageName"]);
                            let datawithlink = Data + `<br> <p>Please click on the following link to upload <a target="_blank" href="https://docusoftpractice.com/account/upload_document.html?Code=${bta}">Open Upload Page</a></p>`;
                            dxHtmlEditorFun_Requested(datawithlink);
                            $("#SEdit" + strw + " i").removeClass("fa-spinner fa-spin");
                            $("#SEdit" + strw + " i").addClass("fa-envelope");

                        }
                    });

                }
            });
        }
    }




    function dxHtmlEditorFun_Requested(markup) {
        console.log(markup, "markup_data");

        //tinymce.get("editor2").getBody().innerHTML=markup;
        const editor = $('#dxhtmlEditor_Requested').dxHtmlEditor({
            height: 350,
            value: markup,
            imageUpload: {
                tabs: ['file', 'url'],
                fileUploadMode: 'base64',
            },
            toolbar: {
                items: [
                    'undo', 'redo', 'separator',
                    {
                        name: 'size',
                        acceptedValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
                    },
                    {
                        name: 'font',
                        acceptedValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
                    },
                    'separator', 'bold', 'italic', 'strike', 'underline', 'separator',
                    'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'separator',
                    'orderedList', 'bulletList', 'separator',
                    {
                        name: 'header',
                        acceptedValues: [false, 1, 2, 3, 4, 5],
                    }, 'separator',
                    'color', 'background', 'separator',
                    'link', 'image', 'separator',
                    'clear', 'codeBlock', 'blockquote', 'separator',
                    'insertTable', 'deleteTable',
                    'insertRowAbove', 'insertRowBelow', 'deleteRow',
                    'insertColumnLeft', 'insertColumnRight', 'deleteColumn',
                ],
            },

        }).dxHtmlEditor('instance');



    }



    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }



    $(document).on('click', '.btnPortal', function (e) {
        $(".showdata").html("");
        $('#NotesText').val("");
        $("#StagesUpdateSubmit").addClass("portalSataupdate");
        $("#StagesUpdateSubmit").removeClass("documentRequestUpdate");
        $("#StagesUpdateSubmit").removeClass("StagesUpdateSubmit");
        let idStr = this.id;
        let idArray = idStr.substring(4).split('-');
        let array1 = StagesInfoData.filter(Filter => Filter.StageId == idArray[0] && Filter.SubStageId == idArray[1]);
        let res = StagesInfoData.filter(Filter => Filter.RowNo == array1[0].RowNo + 1);
        set_next_stage = StagesInfoData.filter(Filter => Filter.RowNo == array1[0].RowNo + 1);
        EditableStageObject = array1[0];
        console.log("EditableStageObject", EditableStageObject)
        $("#StagesUpdateSubmit").val("");
        let result = MainContactArray.filter((el) => el["Main Contact"] == true);
        if (result.length > 0) {
            let cemail = result[0]["E-Mail"];
            Json_Get_CRM_Stages_and_SubStages_ByTaskId(EditableStageObject.TaskID);
            var stringURl = "https://portal.docusoftweb.com/Compose.aspx?accid=" + agrno + "&email=" + Email + "&check=" + localStorage.getItem("pass") + "&sendclient=" + TaskCommon.CilentID + "&sendemail=" + cemail + "&clientname=" + $("#select2-Task_AssociateWithClient-container").text() + "&TaskId=" + TaskId + "&StageId=" + EditableStageObject.StageId + "&Subject=" + EditableStageObject.Subject;
            window.open(stringURl);
            $("#StagesUpdateModal").modal("hide");
            $('#btnCloseModal').trigger('click');
        }

    });


    $(document).on("click", ".portalSataupdate", function () {




    })


    function portalStages() {
        let prom = $("#NotesText").val();
        OBJ = {};
        OBJ.agrno = agrno;
        OBJ.Email = Email;
        OBJ.password = password;
        OBJ.TaskID = TaskId;
        OBJ.StageId = EditableStageObject.StageId;
        OBJ.SubStageID = EditableStageObject.SubStageId;
        OBJ.Comments = prom ? prom : "";
        OBJ.AssociateWithID = EditableStageObject.AssignTo;
        if (EditableStageObject.AssignTo == "-1" || EditableStageObject.AssignTo == "0") {
            OBJ.AssociateWithID = currentUserInfo.DSUserID;
        }
        OBJ.StageName = EditableStageObject.SubStageName;
        OBJ.SubStageName = EditableStageObject.SubStageName;
        TaskCommon.Json_Get_CRM_UpdateStages_ProcessTask(OBJ, function (status, data) {
            if (status) {
                var cemail = "";
                if (MainContactArray.length > 0) {
                    let result = MainContactArray.filter((el) => el["Main Contact"] == true);
                    if (result.length > 0) {
                        cemail = result[0]["E-Mail"];
                        Json_Get_CRM_Stages_and_SubStages_ByTaskId(EditableStageObject.TaskID);
                        var stringURl = "https://portal.docusoftweb.com/Compose.aspx?accid=" + agrno + "&email=" + Email + "&check=" + localStorage.getItem("pass") + "&sendclient=" + TaskCommon.CilentID + "&sendemail=" + cemail + "&clientname=" + $("#select2-Task_AssociateWithClient-container").text() + "&TaskId=" + TaskId + "&StageId=" + EditableStageObject.StageId + "&Subject=" + $("#Task_Subject").val();

                        window.open(stringURl);
                        $("#StagesUpdateModal").modal("hide");
                        $('#btnCloseModal').trigger('click');

                        let companyName = localStorage.getItem("companyName");
                        let comm22 = EditableStageObject.SubStageName + ` Stage of ` + $("#Task_Subject").val() + ` has been completed`;

                        if (set_next_stage.length > 0) {
                            if (set_next_stage[0].Action != "2" && !EditableStageObject.Complete) {
                                //nextStageEnailSend();
                            }
                        }

                    }
                    else {
                        alert("Email is not valid plz try again");
                    }
                }

                let comm = EditableStageObject.SubStageName + ` Stage of/ ` + $("#Task_Subject").val() ? $("#Task_Subject").val() : "task started on " + $("#Task_StartTime").val();
                // AddToActivityTAble(comm);
                //GetActivityTable();

                return false;
            }
        })

    }

    function GetActivityTable() {
        TaskCommon.Json_Get_CRM_Task_ActivityByTaskId(TaskId, (status1, Data) => {
            if (status1) {
                console.log(Data.Table, "GETING_ACTIVITY_GetActivityTable")
                createActivityTableBody(Data.Table);
            }
        });
    }

    function AddToActivityTAble(comment) {
        TaskCommon.Json_AddSupplierActivity(comment, (status) => {
            if (status) {
                TaskCommon.Json_Get_CRM_Task_ActivityByTaskId(TaskId, (status1, Data) => {
                    if (status1) {
                        console.log(Data.Table, "GETING_ACTIVITY_AddToActivityTAble")
                        createActivityTableBody(Data.Table);
                    }
                });
            }
        });
    }


    $(document).on("click", '.Editable', function () {
        $(".showdata").html("");
        $("#StagesUpdateSubmit").addClass("StagesUpdateSubmit");
        $("#StagesUpdateSubmit").removeClass("portalSataupdate");

        let idStr = this.id;
        let idArray = idStr.substring(4).split('-');
        let array1 = StagesInfoData.filter(Filter => Filter.StageId == idArray[0] && Filter.SubStageId == idArray[1]);
        $(".showdata").text("Update Stage: " + array1[0].SubStageName);
        GetTemplates(array1[0]);
        set_next_stage = StagesInfoData.filter(Filter => Filter.RowNo == array1[0].RowNo + 1);
        EditableStageObject = array1[0];
        let obj = {};
        obj.udfid = globalData.ProcessUDF;
        obj.StageId = EditableStageObject.StageId;
        obj.OriginatorNo = globalData.AssociatedWithID;
        cls.Json_GetProcessStageEmailId(obj, function (Staus, Data) {
            if (Staus) {
                if (Data) {
                    let parse_Data1 = JSON.parse(Data);
                    console.log(parse_Data1, "Json_GetProcessStageEmailId");
                    //	$("#txtSend_Email_Request").val(Data);
                    subjectData1 = parse_Data1;
                }

            }

        });
        //ind = parseFloat(array1[0].RowNo);
        // clientTable.cell({ row: ind, column: 2 }).data(DescriptionID);
        $('#NotesText').val("");
        // $('#StagesUpdateModal').modal('show');
        // StagesTable.cell({ row: ind, column: 1 }).data('New value for row 2 column 1');
        // StagesTable.cell({ row: ind, column: 2 }).data('test');
    });


    var cssobj = {
        "margin-top": "-2px",
        "right": "10px",
        "position": "absolute",
        "top": "12px"
    };

    function Json_GetStandardLetterData(res) {
        var o = {};
        o.OriginatorNo = TaskCommon.CilentID;
        cls.Json_GetSupplierEmail(o, function (status, data) {
            if (status) {
                let json = JSON.parse(data);
                let tbl = json.Table;
                let result = MainContactArray.filter((el) => el["Main Contact"] == true);
                console.log(res, "result");
                if (result.length > 0) {
                    let ob = {};
                    ob.agrno = agrno;
                    ob.UserEmail = Email;
                    ob.password = password;
                    ob.ContactEmail = result[0]["E-Mail"];
                    ob.strFolderId = TaskFolderId;
                    ob.strSectionId = parseInt($('#Task_Section').val());
                    ob.strTemplateId = res["TemplateId"];
                    ob.strClientId = TaskCommon.CilentID;//OriginatorNo 					
                    let data = JSON.stringify(ob);
                    genralAjaxMore(data, 'Json_GetStandardLetterData', function (returnValue) {
                        var str = JSON.parse(JSON.stringify(returnValue));
                        if (str.d != '') {
                            //var str = JSON.parse(JSON.stringify(data));
                            console.log("Standar Letter", str.d);
                            TaskCommon.Json_GetHtmlFromRtf(str.d, function (status, Data) {
                                if (status) {
                                    $("#composemail_modal").modal('show');
                                    $("#btnAddEmailSignature_SendEail").prop("disabled", false);

                                    console.log("rtf to html", Data);
                                    // sendEmailTemplate(Data, res, result[0]["E-Mail"]);	
                                    $("#dxTitle").text(`${res["SubStageName"]}`);
                                    $(".modal-header .close").css(cssobj);
                                    $(".modal-header").css("display", "flex");


                                    const obj = {};
                                    obj.intProjectId = TaskCommon.projectId;
                                    obj.strOrignatorNumber = TaskCommon.CilentID;
                                    cls.Json_GetClientCardDetails(obj, function (status, data) {
                                        if (status) {
                                            const parseData = JSON.parse(data);
                                            let tbl6 = parseData.Table1;
                                            if (subjectData1) {
                                                $("#txtSend_Email").val(subjectData1.EmailId);
                                                $("#txtSubject_send").val(res.Subject?res.Subject:"");
                                            }
                                            else if (result[0]["E-Mail"]) {
                                                $("#txtSend_Email").val(result[0]["E-Mail"]);
                                            } else {
                                                $("#txtSend_Email").val(tbl6[0]["Email"]);
                                            }

                                        }
                                    });


                                    //$("#txtSubject_send").val($("#select2-Task_AssociateWithClient-container").text() + " " + res["SubStageName"]);
                                    dxHtmlEditorFun(Data);

                                }
                            });

                        }
                    });
                }
                else {
                    // alert("Email is not Valid");
                    var obj = {};
                    obj.strUserId = res.AssignTo;
                    TaskCommon.Json_GetSupplierManager(obj, function (status, data) {
                        if (status) {
                            let json = JSON.parse(data);
                            let tbl = json.Table;
                            const currentDate = new Date();
                            const formattedDate = formatDate(currentDate);
                            let txtBody = `Hi ${tbl[0].UserName}, An Email was scheduled to be sent to ${localStorage.getItem("InsertContact")} on ${formattedDate},
                 but failed as a valid email address  was not found in the client details. Please add an email address and try again. Stage: ${res.SubStageName}. Email not sent as a valid email address was not found on in the client details. Client manager has been informed.`;

                            let obj = {};
                            obj.Subject = $("#select2-Task_AssociateWithClient-container").text() + " " + res["SubStageName"];
                            obj.Body = txtBody;
                            obj.FromMail = localStorage.getItem("Email");

                            obj.ToEmail = setEmailMainContactTrue ? setEmailMainContactTrue : alert("Main Contect is not set");// "patrick.docusoft@outlook.com";//email ? email : alert("Invalie EmailId");
                            obj.strFileName = "test";
                            obj.Byte = "";
                            TaskCommon.Json_SendMail(obj, function (status, data) {
                                console.log("Response Email", data);
                                if (status) {
                                    $("#StagesUpdateModal").modal("hide");
                                    $('#btnCloseModal').trigger('click');

                                }
                            })

                        }

                    })

                }
            }
            else {

            }
        })

    }

    function dxHtmlEditorFun(markup) {

        //tinymce.get("editor1").getBody().innerHTML=markup;
        const editor = $('#dxhtmlEditor').dxHtmlEditor({
            height: 350,
            value: markup,
            imageUpload: {
                tabs: ['file', 'url'],
                fileUploadMode: 'base64',
            },
            toolbar: {
                items: [
                    'undo', 'redo', 'separator',
                    {
                        name: 'size',
                        acceptedValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
                    },
                    {
                        name: 'font',
                        acceptedValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
                    },
                    'separator', 'bold', 'italic', 'strike', 'underline', 'separator',
                    'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'separator',
                    'orderedList', 'bulletList', 'separator',
                    {
                        name: 'header',
                        acceptedValues: [false, 1, 2, 3, 4, 5],
                    }, 'separator',
                    'color', 'background', 'separator',
                    'link', 'image', 'separator',
                    'clear', 'codeBlock', 'blockquote', 'separator',
                    'insertTable', 'deleteTable',
                    'insertRowAbove', 'insertRowBelow', 'deleteRow',
                    'insertColumnLeft', 'insertColumnRight', 'deleteColumn',
                ],
            },

        }).dxHtmlEditor('instance');

        let strw = EditableStageObject.StageId + "-" + EditableStageObject.SubStageId;
        $("#Edit" + strw).prop('disabled', false);
        $("#Edit" + strw + " i").removeClass("fa-spinner fa-spin");
        $("#Edit" + strw + " i").addClass("fa-envelope");

    }


    $(document).on("click", "#btnSend_email", function () {
        const htmlEditor = $("#dxhtmlEditor").dxHtmlEditor("instance");
        const dxHtmlBody = htmlEditor.option("value");
        //right code above
        //var dxHtmlBody = tinymce.get('editor1').getContent();
        let result = MainContactArray.filter((el) => el["Main Contact"] == true);
        if (result.length > 0) {
            sendEmailTemplate(dxHtmlBody, EditableStageObject, result[0]["E-Mail"]);
        }


    })



    function Next_Stage_sendEmailTemplate(bytdata, stgList, email) {
        let obj = {};
        obj.Subject = $("#select2-Task_AssociateWithClient-container").text() + " " + stgList["SubStageName"];
        obj.Body = bytdata;
        obj.FromMail = localStorage.getItem("Email");
        obj.ToEmail = setEmailMainContactTrue;//"patrick.docusoft@outlook.com";//email ? email : alert("Invalie EmailId");
        obj.strFileName = "test";
        obj.Byte = "";
        TaskCommon.Json_SendMail(obj, function (status, data) {
            console.log($("#txtSubject_send_Request").val(), "Response EmailS", data);
            if (status) {
                // Json_Get_CRM_UpdateStages_ProcessTask(EditableStageObject);	
                //$("#composemail_modal").delay(2000).fadeOut('slow').modal('hide');				
                let comm33 = EditableStageObject.SubStageName + ` Stage of ` + $("#Task_Subject").val() + ` has been completed`;
                // cls.createAlertCom(` ${"Email Sent Successfully"}`, 'success', true, false, 'pageMessages');				
                //let comm = EditableStageObject.SubStageName + ` Stage of/ ` + $("#Task_Subject").val() ? $("#Task_Subject").val() : "task started on " + $("#Task_StartTime").val();
                /// AddToActivityTAble(comm);
                GetActivityTable();
            }
        })
    }



    function sendEmailTemplate(bytdata, stgList, email) {
        let obj = {};
        //obj.Subject = $("#select2-Task_AssociateWithClient-container").text() + " " + stgList["SubStageName"];
        obj.Subject = $("#txtSubject_send").val() ? $("#txtSubject_send").val() : "";
        obj.Body = bytdata;
        obj.FromMail = localStorage.getItem("Email");

        if ($("#txtSend_Email").val().match(validRegex) && $("#txtSend_Email").val()) {
            obj.ToEmail = $("#txtSend_Email").val();// "patrick.docusoft@outlook.com";//email ? email : alert("Invalie EmailId");
        }
        else {
            cls.createAlertCom(` Invalid email address!`, 'warning', true, false, 'pageMessages');
            $("#txtSend_Email").focus();
            return false;
        }

        // obj.ToEmail =setEmailMainContactTrue; //"patrick.docusoft@outlook.com";//email ? email : alert("Invalie EmailId");
        obj.strFileName = "test";
        obj.Byte = "";
        TaskCommon.Json_SendMail(obj, function (status, data) {
            console.log("Response Email", data);
            if (status) {
                Json_Get_CRM_UpdateStages_ProcessTask(EditableStageObject);
                $("#composemail_modal").delay(2000).fadeOut('slow').modal('hide');
                let comm33 = EditableStageObject.SubStageName + ` Stage of ` + $("#Task_Subject").val() + ` has been completed`;
                cls.createAlertCom(` ${"Email Sent Successfully"}`, 'success', true, false, 'pageMessages');
                //let comm = EditableStageObject.SubStageName + ` Stage of/ ` + $("#Task_Subject").val() ? $("#Task_Subject").val() : "task started on " + $("#Task_StartTime").val();
                /// AddToActivityTAble(comm);
                GetActivityTable();
            }
        })
    }


    $(document).on("click", "#skipstage", function () {
        $("#composemail_modal").modal('hide');
        Json_Get_CRM_UpdateStages_ProcessTask(EditableStageObject);

    })



    function Json_Get_CRM_UpdateStages_ProcessTask(arr) {
        $(".showdata").html("");
        // let array1 = StagesInfoData.filter(Filter => Filter.StageId == EditableStageObject.StageId && Filter.SubStageId == 0);
        //let next = StagesInfoData.filter(Filter => Filter.RowNo == array1[0].RowNo + 1);
        $("#StagesUpdateSubmit").val("");
        $(".showdata").html(`Updating stage:` + arr.SubStageName);
        $('#StagesUpdateModal').modal('show');

    }


    $(document).on("click", ".StagesUpdateSubmit", function () {
        updateStages();
    })

    function updateStages() {
        //console.log("activityfrom")
        let com = $("#NotesText").val();
        OBJ = {};
        OBJ.agrno = agrno;
        OBJ.Email = Email;
        OBJ.password = password;
        OBJ.TaskID = EditableStageObject.TaskID;
        OBJ.StageId = EditableStageObject.StageId;
        OBJ.SubStageID = EditableStageObject.SubStageId;
        OBJ.Comments = com ? com : "";
        OBJ.AssociateWithID = EditableStageObject.AssignTo;
        if (EditableStageObject.AssignTo == "-1" || EditableStageObject.AssignTo == "0") {
            OBJ.AssociateWithID = currentUserInfo.DSUserID;
        }
        OBJ.StageName = EditableStageObject.SubStageName;
        OBJ.SubStageName = EditableStageObject.SubStageName;
        TaskCommon.Json_Get_CRM_UpdateStages_ProcessTask(OBJ, function (status, data) {
            if (status) {
                //var gettable = JSON.parse(data);
                // console.log('gettable sk', gettable);
                if (set_next_stage.length > 0) {
                    if (set_next_stage[0].Action != "2" && !EditableStageObject.Complete) {
                        nextStageEnailSend();
                    }
                }
                $('#StagesUpdateModal').modal('hide');
                $('#btnCloseModal').trigger('click');
                let comm33 = EditableStageObject.SubStageName + ` Stage of ` + $("#Task_Subject").val() + ` has been completed`;
                Json_Get_CRM_Stages_and_SubStages_ByTaskId(EditableStageObject.TaskID);
                cls.createAlertCom(` ${comm33}`, 'success', true, false, 'pageMessages');
                let comm = EditableStageObject.SubStageName + ` Stage of/ ` + $("#Task_Subject").val() ? $("#Task_Subject").val() : "task started on " + $("#Task_StartTime").val();
                // AddToActivityTAble(comm);
                GetActivityTable();

            }
        })
    }

    function nextStageEnailSend() {
        if (set_next_stage.length > 0) {
            var obj = {};
            obj.strUserId = set_next_stage[0].AssignTo;
            TaskCommon.Json_GetActiveUserById(obj, function (status, data) {
                if (status) {
                    let json = JSON.parse(data);
                    let tbl = json.Table;
                    if (tbl.length > 0) {
                        let txtBody = `Hi ${tbl[0].UserName},<br /> Stage: ${set_next_stage[0].SubStageName}, of Process: ${$("#Task_Subject").val()} is now available for action. Please click on the following link to launch the task: <a href=${window.location.href}>View Task</a>`;
                        Next_Stage_sendEmailTemplate(txtBody, set_next_stage[0], tbl[0].UserEmail);
                    }
                    // cls.createAlertCom(` Send Email`, 'success', true, false, 'pageMessages');
                }
            })
        }


    }


    function Json_Get_CRM_Stages_and_SubStages_ByTaskId(TaskID) {
        TaskCommon.Json_Get_CRM_SavedTask_ByTaskId(TaskId, function (Staus, Data) {
            var TaskStagesTable = Data.T4;
            createStagesTableBody(TaskStagesTable);
            checkAllStageCompleted(TaskStagesTable);
            $('#btnCloseModal').trigger('click');
            $('#StagesUpdateModal').modal('hide');
        })
    }

    function checkAllStageCompleted(res) {
        if (res.length > 0) {
            let wcall = true;
            for (let item of res) {
                if (!item.Complete) {
                    wcall = false;
                    break;
                }
            }
            if (wcall) {
                $("#btnMarkComplete").trigger("click");
                $("#Task_Status").val("Completed");
                $("#select2-Task_Status-container").text("Completed");

                $('#Task_Complete').val(100);
                $('#showComplete').text(100 + '%');

                if (TaskCommon.PercentComplete == 100) {
                    $("#mi-modal").modal('hide');
                }


            }
        }
    }



    //Code Start For Timing Record 

    var CRMTimer = new Timer();
    CRMTimer.LoadReqiuedData();
    $('#StartTaskTime').hide();
    $('#chkOverwriteCharge').val(false);
    // $('#TimingRecordDiv').hide();
    $("#Task_Charge").prop('disabled', true);
    $(document).on("click", '#OnLoadStart', function () {
        $('#TimingRecordDiv').show()
        CRMTimer.OnLoad();
    });


    $(document).on("click", '#IconStart', function () {
        if (CRMTimer.IsStop) {
            CRMTimer.Stop()
        } else {
            CRMTimer.IsStop = true;
            CRMTimer.Start();
        }

    });

    $(document).on("click", '#EndTaskTime', function () {
        EndTimeSubmit();
    });

    function EndTimeSubmit() {
        if (CRMTimer.IsStop) {
            CRMTimer.END_Timer();
            var obj = {};
            obj.TID = 0;
            obj.LUserId = currentUserInfo.DSUserID;
            obj.FolderID = $('#Task_Folder').val();
            obj.SectionId = $('#Task_Section').val();
            obj.SubSectionID = '-1';
            obj.OriginatorNo = $('#Task_AssociateWithClient').val();
            obj.Description = $('#Task_Subject').val();
            obj.Duration = $('#Task_Duration').val();
            obj.Charge = $('#Task_Charge').val();
            obj.Overwritten = $('#chkOverwriteCharge').val();
            obj.Comment = $('#Task_Comment').val();
            obj.TaskType = 'CRM';
            obj.ContactNo = $('#Timing_Contact').val();
            console.log(obj.ContactNo, "obj.ContactNo", $('#Timing_Contact').val())
            obj.WorkDate = TaskCommon.cuureantDate();

            CRMTimer.Time = obj;
            CRMTimer.SaveTimingRecord(function (status) {
                if (status) {
                    // $('.msgRename').html("Timing record Save ").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "green" }); //also show a success message 
                    //$('.msgRename').delay(2000).fadeOut('slow');
                    cls.createAlertCom(` Timing record Save Successfully`, 'success', true, false, 'pageMessages');
                    $('#TimingRecordDiv').hide();
                    CRMTimer.Json_CRM_Timing_Record_List();
                }
            });

        }

    }

    $(document).on("change", "#chkOverwriteCharge", function () {
        if ($(this).is(":checked")) {
            $("#Task_Charge").prop('disabled', false);
        }
        else if ($(this).is(":not(:checked)")) {
            $("#Task_Charge").prop('disabled', true);
        }
    });





    //udf list///////////////////////////////////////////////////////

    cls.Json_GetForwardUserListUDFList(TaskFolderId, function (status, data) {
        if (status) {
            //console.log("Json_GetForwardUserListUDFList",data)
            cls.setForwardUserList = data;

        }

    })

    function fillManager(gid, udfvalue) {
        $(".managerlist").empty();

        let js = JSON.parse(cls.setForwardUserList);
        let tbl = js.Table;
        if (tbl.length > 0) {
            $(".managerlist").append(`<option></option>`);
            for (let item of tbl) {
                $(".managerlist").append('<option value="' + item.ForwardTo + '">' + item.ForwardTo + '</option>');

            }
        }

    }

    function formatDate_udf(dateString) {
        const formattedDate = moment(dateString, "MMM DD YYYY hh:mmA").format("DD/MM/YYYY");
        return formattedDate;
    }
    function Json_GetClientCardDetails() {
        //alert(pid, orgn);
        set_Udf_List = "";
        set_Linked_Udf = [];

        var obj = {};
        obj.intProjectId = TaskFolderId;
        obj.strOrignatorNumber = TaskCommon.CilentID;
        allService.CreateNewServiceParamObject('Json_GetClientCardDetails', obj, true);

        allService.CallNewService('Json_GetClientCardDetails', function (status, Data) {
            if (status) {

                if (Data != "") {

                    // companyDetailsShow(Data);
                    var gettable = JSON.parse(Data);
                    var companyDetails = gettable.Table3;
                    setUdfListForlink = gettable.Table3;
                    set_Udf_List = gettable.Table3;
                    var cTable = gettable.Table;
                    //console.log("allService table", cTable);
                    if (cTable.length > 0) {
                        getUdfColleps(cTable);
                    }
                    if (companyDetails.length > 0) {
                        for (var j = 0; j < companyDetails.length; j++) {
                            setHeader.add(companyDetails[j].TagName);
                        }
                        for (var parent of setHeader) {
                            var subHeaderData = new Set();
                            for (var k = 0; k < companyDetails.length; k++) {
                                if (companyDetails[k].TagName == parent) {
                                    subHeaderData.add(companyDetails[k]);
                                }
                            }
                            udfMap.set(parent, subHeaderData);
                        }
                    }

                }

            }
        });
    }

    function getUdfColleps(data) {
        $("#listUdf").empty();
        $("#listUdf").text("");
        for (var i = 0; i < data.length; i++) {
            if (data[i].TagName) {
                $("#listUdf").append(`
				<div class="list-group">
  <a  id='src${data[i].TagId}' name='${data[i].TagName}' href="#" class="list-group-item list-group-item-action clickUdfsho33 udftagcssn  udfs${data[i].TagId}">${data[i].TagName} <span style="float: right;"><i class="fa fa-arrow-right" aria-hidden="true"></i></span></a>  
</div>       
               `);
            }
        }
    }

    $(document).on('click', '#udflistmodal', function () {
        Json_GetClientCardDetails();
        $("#udflist_modal").modal('show');
    })

    let udfClientSet = new Set();
    let setArrUdfvalue;
    $(document).on('click', '.clickUdfsho33', function () {
		udfClientSet.clear();
        let udfDetailsval = "";
        $("#udfDetails").empty();
        //alert('id');
        setArrUdfvalue = [];
        var udfValue;
        var ChekDetails = $(this).attr('name');
        var src = $(this).attr('id');
        let idd = src.substr("3");

        $(".clickUdfsho33").removeClass('udftagafter1');
        $(".udfs" + idd).addClass('udftagafter1');


        $(".clickUdfsho33").removeClass('active');
        $("#src" + idd).addClass('active');

        $('#icon' + idd).children('.fa').toggleClass('fa-chevron-up fa-chevron-down');
        $(".colleps" + idd).toggle("slow", function () {
        });

        $('#icon' + idd).children('.fa').toggleClass('fa-chevron-up fa-chevron-down');
        var clickedArr = udfMap.get(ChekDetails);
        let createArr = Array.from(clickedArr);

        function findIndexByFieldName(fieldName) {
            return createArr.findIndex((item) => item.Name === fieldName);
        }
        const annualChargeIndex = findIndexByFieldName("Annual Charge");
        if (annualChargeIndex !== -1) {
            const annualChargeObject = createArr.splice(annualChargeIndex, 1)[0];
            createArr.push(annualChargeObject);
        }
        const monthlyChargeIndex = findIndexByFieldName("Monthly Charge");
        if (monthlyChargeIndex !== -1) {
            const monthlyChargeObject = createArr.splice(monthlyChargeIndex, 1)[0];
            createArr.push(monthlyChargeObject);
        }
        //var cudf = udfMap.get(ChekDetails);
        //console.log("udf id Set client 1", udfClientSet); 

        console.log(createArr, "clickedArr", clickedArr);
        var CHDetails = new Map();

        if (createArr != undefined && createArr != null) {
            $(".udfclient" + idd).empty();

            for (var item of createArr) {

                if (item.FieldName != null && item.FieldName != "" && getCompanyDetails != undefined) {
                    for (const [key, value] of Object.entries(getCompanyDetails[0])) {
                        if (item.FieldName === key) {
                            console.log("field_name111_sonam", key, value);
                            //var ress = getCompanyDetails.
                            CHDetails.set(key, value);
                        }
                    }

                }


                switch (item.UserDefFieldTypeID) {

                    case 1:

                        switch (item.TextControlValue) {
                            case "Integer":
                                if (item.UdfValue) {
                                    $("#udfDetails").append(`
                                      <div class="form-group row contactdetails">

                                          <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css " ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>                                            
                                            <div class="col-md-5 col-sm-5 col-xs-5"><input type="number" id="'${item.UserDefFieldID}_${item.UserDefFieldTypeID}_ ${item.TextControlValue}_UDF" value = '${item.UdfValue}' class="form-control udfclss"  />
                                            </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                    </div>`);

                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val(item.UdfValue);
                                    udfClientSet.add('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'
                                    if (val) {
                                        $('#' + getid).val(val);
                                        // $('#chk'+getid).prop("checked", true);
                                        // $('#'+getid).prop("disabled", false);
                                    }

                                } else {
                                    $("#udfDetails").append(`
                                        <div class="form-group row contactdetails">
                                             <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox"  checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>
                                            <div class="col-md-5 col-sm-5 col-xs-5"><input type="number" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF" disabled  class="form-control udfclss"  />
                                            </div>
                                            <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                    </div>`);

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }
                                }

                                break;
                            case "String":

                                if (item.UdfValue) {
                                    $("#udfDetails").append(`
                               <div class="form-group row contactdetails">
                                            <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF" id="chk${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>
                                            <div class="col-md-5 col-sm-5 col-xs-5">
                                            <input  type="text" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF" value = '${item.UdfValue}' class="form-control udfclss"  />
                                        </div>
                                       <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                   </div>`);

                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val(item.UdfValue);
                                    udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');

                                    if (item.Name == "Monthly Charge" || item.Name == "Annual Charge") {
                                        let gid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF';
                                        $("#chk" + gid).prop("disabled", true);
                                        $("#chk" + gid).removeAttr("checked");
                                        $("#" + gid).prop("disabled", true);

                                    }

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }


                                } else {
                                    $("#udfDetails").append(`<div class="form-group row contactdetails">
                                            <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css"><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF" id="chk${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>
                                            <div class="col-md-5 col-sm-5 col-xs-5">
                                            <input disabled type="text" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF" value = '${item.UdfValue}' class="form-control udfclss"  />
                                        </div>
                                       <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                   </div>`);
                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val("");

                                    if (item.Name == "Monthly Charge" || item.Name == "Annual Charge") {
                                        let gid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF';
                                        $("#chk" + gid).prop("disabled", true);
                                        $("#" + gid).prop("disabled", true);

                                    }
                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }

                                }

                                break;
                            case "Currency":

                                if (item.UdfValue) {
                                    $("#udfDetails").append(`<div class="form-group row contactdetails">
                                        <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>                                          
                                           <div class="col-md-5 col-sm-5 col-xs-5"><input type="text" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  value = '${item.UdfValue}' class="form-control udfclss"  />
                                        </div>
                               <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                    </div>`);
                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val(item.UdfValue);
                                    udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }


                                } else {
                                    $("#udfDetails").append(`
                                      <div class="form-group row contactdetails">
                              <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>

                                              
                                               <div class="col-md-5 col-sm-5 col-xs-5"><input disabled type="text" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="form-control udfclss"  />
                                            </div>
                                         <div class="col-md-2 col-sm-2 col-xs-2">
                                      </div>
                                        </div>`);
                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val("");

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    if (val) {
                                        $('#' + val).val(val);
                                        $('#chk' + val).prop("checked", true);
                                        $('#' + val).prop("disabled", false);
                                    }

                                }
                                break;
                            case "Date":
                                if (item.UdfValue) {
                                    $("#udfDetails").append(`
                                         <div class="form-group row contactdetails">
<label class="control-label col-md-5 col-sm-5 col-xs-5"><i class="fa fa-info-circle servicerequireicon" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="${item.TooltipText ? item.TooltipText : ""}"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox"  checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt linkchk${item.UserDefFieldID}" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>
                                          
                                           <div class="col-md-5 col-sm-5 col-xs-5"><input  placeholder="dd/mm/yyyy" type="text" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  name="blnproccess" class="form-control example1 udfclss link${item.UserDefFieldID}" autocomplete="off"/>
                                         </div>
                                         <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                       </div>`);


                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val(formatDate_udf(item.UdfValue));
                                    udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    //fillLinkUdf();
                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }

                                } else {
                                    $("#udfDetails").append(`
                                         <div class="form-group row contactdetails">
<label class="control-label col-md-5 col-sm-5 col-xs-5"><i class="fa fa-info-circle servicerequireicon" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="${item.TooltipText ? item.TooltipText : ""}"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                   <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt linkchk${item.UserDefFieldID}" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>
                                          
                                           <div class="col-md-5 col-sm-5 col-xs-5"><input name="blnproccess"  placeholder="dd/mm/yyyy" type="text" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF" disabled   class="form-control example1 udfclss link${item.UserDefFieldID}" autocomplete="off"/>
                                         </div>
                                         <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                       </div>`);
                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val("");

                                    udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    $('#' + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').trigger("change");
                                    fillLinkUdf();

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);
                                        $('#chk' + getid).prop("checked", true);
                                        $('#' + getid).prop("disabled", false);
                                    }

                                }

                                break;
                            case "Memo":

                                if (item.UdfValue) {
                                    $("#udfDetails").append(`
                                        <div class="form-group row contactdetails">
                            <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>                                           
                                            <div class="col-md-5 col-sm-5 col-xs-5">
                                            <textarea value="${item.UdfValue}" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="form-control udfclss" maxlength="255" rows="3">
                                            </textarea>
                                        </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                        </div>`);
                                    $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val(item.UdfValue);
                                    udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }

                                } else {
                                    $("#udfDetails").append(`<div class="form-group row contactdetails">
<label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input   type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>

                                             
                                             <div class="col-md-5 col-sm-5 col-xs-5">
                                           <textarea disabled  id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="form-control udfclss" maxlength="255" rows="3"></textarea>
                                        </div>
                                         <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                        </div>`);
                                    $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val("");

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }

                                }

                                break;
                            case "Decimal":

                                if (item.UdfValue) {
                                    $("#udfDetails").append(`<div class="form-group row contactdetails">
<label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input checked type="checkbox"  checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>

                                       
                                       <div class="col-md-5 col-sm-5 col-xs-5">
                                      <input type="number" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  value = '${item.Name}'  class="form-control udfclss"  />
                                     </div>
                                       <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                    </div>`);
                                    $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val(item.UdfValue);
                                    udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val(item.UdfValue);

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);
                                        // $('#chk'+getid).prop("checked", true);
                                        // $('#'+getid).prop("disabled", false);
                                    }

                                } else {
                                    $("#udfDetails").append(`<div class="form-group row contactdetails">
<label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>
                                    <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" >${item.Name}</label>
                                    <div class="col-md-5 col-sm-5 col-xs-5"><input type="number" disabled id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="form-control udfclss"  />
                                    </div>
                                    <div class="col-md-1 col-sm-1 col-xs-1"></div>
                                    </div>`);
                                    $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF').val("");

                                    var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                                    let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF'

                                    if (val) {
                                        $('#' + getid).val(val);

                                    }

                                }

                                break;

                        }

                        break;
                    case 2:

                        if (item.UdfValue) {
                            $("#udfDetails").append(`<div class="form-group row contactdetails">
<label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>

                                
                                 
                                   <div class="col-md-5 col-sm-5 col-xs-5">
                                  <select  name="select"  id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF" class="form-control  udfclss selectClient" style="width:100%"></select>
                                 </div> 
                               <div class="col-md-1 col-sm-1 col-xs-1">
                            </div></div>`);

                            udfselecteoptionclient(item.Options, item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF', item.UdfValue);
                            $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF').val(item.UdfValue.charAt(0).toUpperCase() + item.UdfValue.slice(1));
                            udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF');

                            var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF');
                            let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF';

                            if (val) {
                                $('#' + getid).val(val);

                            }

                        } else if (item.Options) {
                            $("#udfDetails").append(`<div class="form-group row contactdetails">
<label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css"  ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>

                               
                               
                               <div class="col-md-5 col-sm-5 col-xs-5">
                                   <select  name="select" disabled   id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF" class="form-control  udfclss selectClient" style="width:100%"></select>
                              </div>
                               <div class="col-md-1 col-sm-1 col-xs-1">
                            </div>
                           </div>`);

                            udfselecteoptionclient(item.Options, item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF', item.UdfValue);
                            $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF').val("");


                            var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF');
                            let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF';

                            if (val) {
                                $('#' + getid).val(val);

                            }
                        } else {
                            $("#udfDetails").append(`<div class="form-group row contactdetails">
                          <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" >
                               <i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>
                                
                               
                                <div class="col-md-5 col-sm-5 col-xs-5">
                                <select disabled  name="select"  id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF" class="form-control  udfclss selectClient" style="width:100%"></select>
                                </div>
<div class="col-md-1 col-sm-1 col-xs-1"></div>
</div>`);

                            $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF').val("");

                            var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF');
                            let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF';

                            if (val) {
                                $('#' + getid).val(val);

                            }


                        }

                        break;

                    case 10:
                    case "Boolean":


                        if (item.UdfValue) {
                            $("#udfDetails").append(`<div class="form-group row contactdetails">
 <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input checked type="checkbox"  checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>  


<div class="col-md-5 col-sm-5 col-xs-5"><label class="switch">
<input type="checkbox" id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="chkw js-switch udfclss"  checked  />
<span class="slider round"></span></label>
</div>
<div class="col-md-1 col-sm-1 col-xs-1"></div>
</div>`);
                            udfClientSet.add(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');

                            var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                            let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF';

                            if (val) {
                                $('#' + getid).val(val);

                            }
                        } else {

                            $("#udfDetails").append(`<div class="form-group row contactdetails">
 <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css label_css" ><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>  

<div class="col-md-5 col-sm-5 col-xs-5"><label class="switch">
<input type="checkbox" disabled ${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF"  class="chkw js-switch udfclss"  />
<span class="slider round"></span></label>
</div>
<div class="col-md-1 col-sm-1 col-xs-1"></div>
</div>`);

                            var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF');
                            let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + item.TextControlValue + '_' + 'UDF';

                            if (val) {
                                $('#' + getid).val(val);

                            }

                        }
                        break;
                    case 15: {

                        if (item.UdfValue) {
                            $("#udfDetails").append(`<div class="form-group row contactdetails">
 <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css"><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" checked name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div>                               
                               
                                <div class="col-md-5 col-sm-5 col-xs-5">
                                <select  name="select"  id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF" class="form-control  udfclss selectClient managerlist" style="width:100%"></select>
                                </div>
                             <div class="col-md-1 col-sm-1 col-xs-1"></div>
                            </div>`);
                            let gid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF';

                            setArrUdfvalue.push({
                                id: gid,
                                value: item.UdfValue
                            });

                            setTimeout(function () {

                                fillManager(gid, item.UdfValue);
                                var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF');
                                let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF';

                                if (val) {
                                    $('#' + getid).val(val);
                                }
                            }, 1000)
                        } else {
                            $("#udfDetails").append(`<div class="form-group row contactdetails">
                                   <label class="control-label col-md-5 col-sm-5 col-xs-5 label_css"><i class="fa fa-info-circle servicerequireicon" aria-hidden="true"></i> ${item.Name}</label>
                                            <div class="col-md-1 col-sm-1 col-xs-1">
                                                 <label class="switch">
                                                  <input  type="checkbox" name="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF"  class="enabledtxt" />
                                                   <span class="slider round"></span>
                                                </label>
                                            </div> 
                               
                                <div class="col-md-5 col-sm-5 col-xs-5">
                                <select  name="select" disabled  id="${item.UserDefFieldID}_${item.UserDefFieldTypeID}_UDF" class="form-control  udfclss selectClient managerlist" style="width:100%"></select>
                                </div>
                             <div class="col-md-1 col-sm-1 col-xs-1"></div>
                            </div>`);
                            $("#" + item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF').val("");
                            let gid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF';
                            setTimeout(function () {
                                fillManager(gid, item.UdfValue);
                                var val = setChangeValue.get(item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF');
                                let getid = item.UserDefFieldID + '_' + item.UserDefFieldTypeID + '_' + 'UDF';

                                if (val) {
                                    $('#' + getid).val(val);
                                }

                            }, 1000)




                        }



                        setTimeout(function () {
                            if (setArrUdfvalue.length > 0) {
                                for (let item of setArrUdfvalue) {
                                    $("#" + item.id).val(item.value);
                                }

                            }
                        }, 2000)
                    }
                        break;

                }


                if (item.TagName == "Service Required") {

                    let dd = `${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF`;

                    $("#" + dd).addClass("calculation numericInput_data");

                    if (item.Name == "Annual Charge") {
                        let dd = `${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF`;
                        $("#" + dd).addClass("annualcharges");
                        $("#" + dd).removeClass("calculation");
                    }
                    if (item.Name == "Monthly Charge") {
                        let dd = `${item.UserDefFieldID}_${item.UserDefFieldTypeID}_${item.TextControlValue}_UDF`;
                        $("#" + dd).addClass("monthlycharges");
                        $("#" + dd).removeClass("calculation");
                    }
                }
            }

        } else {
            $(".udfclient" + idd).append('<div class="form-group row contactdetails"><label class="control-label col-md-4 col-sm-4 col-xs-4"></label><div class="col-md-8 col-sm-8 col-xs-8">No data found</div></div>');
        }

        $('.example1').datepicker({
            autoclose: true,
            format: "dd/mm/yyyy"
        });

    });



    function udfselecteoptionclient(vv, udf, udfname) {
        //var vv = cudf[i].Options;
        var cc = vv.split("@;");
        for (var j = 0; j < cc.length; j++) {
            // console.log("value", cc[j]);
            $('#' + udf).append('<option value="' + cc[j] + '">' + cc[j] + '</option>');
        }
        // console.log("option", '#' + udf);
        setTimeout(() => {
            $('#' + udf).val(udfname);
        }, 1000)

    }

    $(document).on('click', '.enabledtxt', function () {
        let getid = this.name;
        // console.log($(this).is(':checked'));
        let udfString = $(this).attr('name');
        let str = udfString.split("_");
        if ($(this).is(':checked')) {
            // console.log("#" + getid.trim());
            $("#" + getid).prop("disabled", false);
            udfClientSet.add(udfString);
            Json_GetLinkedUdfByProcessUdf(str[0]);

            let result = setUdfListForlink.filter((el) => el.UserDefFieldID == str[0]);

            if (result.length > 0) {
                $("#src" + result[0].Tag).off('click');

            }

        } else {



            udfClientSet.add(udfString);

            let anu = $(".annualcharges").val();
            let mon = $(".monthlycharges").val();


            $("#" + getid).prop("disabled", true);
            $("#" + getid).val("");

            $(".annualcharges").val(anu);
            $(".monthlycharges").val(mon);
            let udfidb = $(this).attr('id');

            if (udfidb.includes('chk')) {
                calculationfun();
            }

        }
    });


    function Json_GetLinkedUdfByProcessUdf(udfid) {
        let obj = {};
        obj.ProcessUdfid = udfid;
        obj.projectid = localStorage.getItem('DefaultFolderID');
        cls.Json_GetLinkedUdfByProcessUdf(obj, function (status, data) {
            if (status) {
                let json = JSON.parse(data);
                let tbl = json.Table;
                if (tbl.length > 0) {

                    let result = set_Udf_List.filter((el) => el.ProjectId == localStorage.getItem("DefaultFolderID"));

                    for (let item of result) {
                        if (item.Name == tbl[0].Name) {

                            let gid = `${tbl[0].UserDefFieldID}_${tbl[0].UserDefFieldTypeID}_${tbl[0].TextControlValue}_UDF`;
                            let getval = $("#" + gid).val();
                            Json_GetUdfValueByLinkedUdf(gid);

                        }
                    }

                }

            }

        })
    }


    function fillLinkUdf() {


        if (set_Linked_Udf.length > 0) {

            for (let linkudf of set_Linked_Udf) {
                if (set_Udf_List.length > 0) {
                    for (let udflist of set_Udf_List) {

                        if (linkudf.Name == udflist.Name) {

                            $(".link" + linkudf.UdfId).val(YYMMDDRes(linkudf.UdfValue));
                            $(".link" + linkudf.UdfId).removeAttr("disabled");
                            $(".linkchk" + linkudf.UdfId).prop("checked", true);

                        }
                    }
                }
            }
        }
    }

    function YYMMDD(splt) {
        let sp = splt.split("/");
        //console.log("yymmdd", sp);
        let formet = sp[2] + "/" + sp[1] + "/" + sp[0];
        return formet;
    }

    function YYMMDDRes(splt) {
        let sp = splt.split("-");
        //console.log("yymmdd", sp);
        let formet = sp[2] + "/" + sp[1] + "/" + sp[0];
        return formet;
    }


    function linkudf_response() {
		$("#dammyudf").empty();
 let createId =new Set();
        if (setUDFValueByLinkUdf.length > 0) {
            for (let itm of setUDFValueByLinkUdf) {
                let conf = confirm(`${itm.Name} is linked with the field you have changed. Would you like to update it to ${YYMMDDRes(itm.UdfValue)} ?`);
                let result = setUdfListForlink.filter((el) => el.UserDefFieldID == itm.UdfId);
                // console.log("result_of_data itm1", result);
                if (result.length > 0) {
                    // $("#src" + result[0].Tag).click();
                    //$("#src"+result[0].Tag).attr("id","res"+result[0].Tag);
                }

                if (conf) {
                    set_Linked_Udf.push({
                        Name: itm.Name,
                        UdfId: itm.UdfId,
                        UdfValue: itm.UdfValue
                    });
                    fillLinkUdf();
		result = set_Udf_List.filter((el) => {
			if(el.UserDefFieldID == itm.UdfId){				
				createId.add(el.UserDefFieldID+"_"+el.UserDefFieldTypeID+"_"+el.TextControlValue+"_"+"UDF");
				$("#dammyudf").append(`<div class="col-md-5 col-sm-5 col-xs-5">${el.Name} <input name="blnproccess"  placeholder="dd/mm/yyyy" type="text" id="${el.UserDefFieldID}_${el.UserDefFieldTypeID}_${el.TextControlValue}_UDF" disabled   class="form-control example1 udfclss link${el.UserDefFieldID}" autocomplete="off"/>
                                         </div>`);
			  }
			});
			setTimeout(()=>{
			saveUdfFun(createId,itm.Name,itm.UdfValue,true);
			},1500)
					
					
                }

            }
        }

    }



    function fillLinkUdf() {

        let result;
    
        if (set_Linked_Udf.length > 0) {

            for (let linkudf of set_Linked_Udf) {
             
                if (set_Udf_List.length > 0) {
                    for (let udflist of set_Udf_List) {
                        if (linkudf.Name == udflist.Name) {
                            $(".link" + linkudf.UdfId).val(YYMMDDRes(linkudf.UdfValue));
                            $(".link" + linkudf.UdfId).removeAttr("disabled");
                            $(".linkchk" + linkudf.UdfId).prop("checked", true);

                        }
                    }
                }

               

            }

             

           


        }
    }

    function Json_GetUdfValueByLinkedUdf(udfid) {
        let str = udfid.split("_");
        var obj = {};
        obj.LinkedUdfId = str[0];
        obj.projectid = localStorage.getItem("DefaultFolderID");
        obj.LinkedDateValue = YYMMDD($("#" + udfid).val());


        allService.CreateNewServiceParamObject('Json_GetUdfValueByLinkedUdf', obj, true);
        allService.CallNewService('Json_GetUdfValueByLinkedUdf', function (status, Data) {
            if (status) {
                let json = JSON.parse(Data);
                let res = json[""];
                if (res.length > 0) {
                    setUDFValueByLinkUdf = res;
                    linkudf_response();
                }
                fillLinkUdf();
            }
        });

    }

    $(document).on("change", ".udfclss", function () {
        // console.log("udf link 047");

        var udfString = $(this).attr('id');

        let bln = $(this).attr("name");

        if (udfString.includes("Date")) {
            Json_GetUdfValueByLinkedUdf(udfString);
        }

        if ($(this).is(':checked')) {
            $(this).attr('value', 'True');
        } else {
            $(this).attr('value', 'False');
        }

        udfClientSet.add(udfString);

        if ($(this).val()) {
            setChangeValue.set(udfString, $(this).val())
            console.log("udfString2", setChangeValue);
        }


        console.log("udf id Set client", udfClientSet);
    });

    $(document).on("click", ".btnClientDetailsSave", function () {

        saveUdfFun(udfClientSet);
    })

    function saveUdfFun(udfClientSet,udfname,udfdate,tru) {
        if (udfClientSet.size > 0) {
            var udf_set = new Set();
            for (let val of udfClientSet) {
                var getvalue = $("#" + val).val() ? $("#" + val).val() : "";
                if (val.includes("Date") && getvalue) {
                    let sp = getvalue.split("/");
                    let formet = sp[2] + "/" + sp[1] + "/" + sp[0];
                    udf_set.add(val + ":" + formet);
                } else {
                    udf_set.add(val + ":" + getvalue);
                };
            }
            var arr = Array.from(udf_set);

            var obj = {};
            obj.OriginatorNo = TaskCommon.CilentID;
            obj.ProjectId = TaskFolderId;
            obj.ContactUDFString = "";
            obj.ContactNo = "";
            obj.ClientUDFString = arr.join(',');
            allService.CreateNewServiceParamObject('Json_CRMSaveUDFValues', obj, true);
            allService.CallNewService('Json_CRMSaveUDFValues', function (status, Data) {
                if (status) {
                    var prs = JSON.parse(Data);
                    var json = prs.Status;
                    if (json === "Success") {
						if(tru){
						  cls.createAlertCom(`${udfname} has been set to ${udfdate} `, 'success', true, false, 'pageMessagesudf');
						}
						else{
							cls.createAlertCom(` Update UDF Succesfully`, 'success', true, false, 'pageMessagesudf');
						}
						
                        

                        $('.msgUdf').delay(1000).fadeOut('slow');
                    }
                }
            });

        }

    }


    $(document).on("keyup", ".calculation", function () {
        calculationfun();
    })

    function calculationfun() {
        var calculated_total_sum = 0;
        $(".calculation").each(function (e, ind) {
            var get_textbox_value = $(this).val();
            if ($.isNumeric(get_textbox_value)) {
                calculated_total_sum += parseFloat(get_textbox_value);
            }
            // console.log(calculated_total_sum)
        });

        $(".annualcharges").val(calculated_total_sum);
        let mon = calculated_total_sum / 12;
        $(".monthlycharges").val(mon.toFixed(2));

        $(".annualcharges").prop('disabled', true);
        $(".monthlycharges").prop('disabled', true);

        let annualchk = $(".annualcharges").attr('id');

        udfClientSet.add(annualchk);
        setChangeValue.set(annualchk, calculated_total_sum);
        $(`input[name='${annualchk}']`).prop('checked', false);

        let monthchk = $(".monthlycharges").attr('id');
        udfClientSet.add(monthchk);
        setChangeValue.set(monthchk, mon.toFixed(2));
        $(`input[name='${monthchk}']`).prop('checked', false);

    }

    //end udf list //////////////////////////////////////////////////









    //Code END For Timing Record 
});