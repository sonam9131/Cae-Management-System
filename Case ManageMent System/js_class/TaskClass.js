//All Constant
const DiviedForDuration = 10;

class MsgStatus {
    constructor(SCssobj, FCssobj) {
        this.ScssObj = SCssobj;
        this.FcssObj = FCssobj;
        
    }

    ShowMsg(Msg,bool) {
        if (bool) {
            $('.msgRename').html(`${Msg}`).fadeIn('slow').css(this.ScssObj); //also show a success message 
            $('.msgRename').delay(2800).fadeOut('slow');
        } else { 
            $('.msgRename').html(`${Msg} `).fadeIn('slow').css(this.FcssObj); //also show a success message 
            $('.msgRename').delay(2800).fadeOut('slow');
        }
    }
}


class Task extends AllService{
    constructor(agrno, Email, password, APIUrl) {
        super(agrno, Email, password, APIUrl);
        //setTimeout(() => { this.CreateSetingNavDinamic()},2000);
    }
    Json_GetOutlookTask(callBack) { 
        super.CreateNewServiceParamObject('Json_CRM_GetOutlookTask');
        super.CallNewService('Json_CRM_GetOutlookTask', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_CRM_GetOutlookTask', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }


    validationforEndTime() {
        //window.onbeforeunload = function (event) {
        //    console.log('Confirm Confirm');
        //    return confirm("Confirm refresh");
        //};
       
    }

    


    createSubsectionBySection(FolderID, SectionId, SubSectionId='-1'){
        this.Json_GetSubSections(FolderID, SectionId, (status, Data) => {
            if (status) {
                var DataSource = Data.Table1;
                $("#Task_SubSection").empty();
                SubSectionId = SubSectionId ? SubSectionId : '-1';
                $("#Task_SubSection").append('<option value="-1">------Select--------</option>');
                DataSource.length ? $('#SubSectionDiv').show() : $('#SubSectionDiv').hide();
                for (var { SubSectionID, SubSection } of DataSource) {
                    $("#Task_SubSection").append('<option   value="' + SubSectionID + '">' + SubSection + '</option>');
                }

                $("#Task_SubSection").val(SubSectionId);
            } else {
                $('#SubSectionDiv').hide()
            }
        });
}
    
 SETServerDateFormat1(date1) {

     var parsedDate = date1.includes('Date') ? new Date(parseInt(date1.substr(6))) : date1;
    var d = new Date(parsedDate);
    var dd = d.getDate();
    var mm = d.getMonth() + 1;

    var yy = d.getFullYear();
     var DateVal, date;
    if (dd < "10" || mm < "10") {
        if (dd < "10" && mm < '10') {
            return date = yy + "-0" + mm + "-0" + dd;
        } else if (dd < "10") {
            return date = yy + "-" + mm + "-0" + dd;
        } else if (mm < "10") {
            return date = yy + "-0" + mm + "-" + dd;
        }

    } else {
        return DateVal = yy + "-" + mm + "-" + dd;
    }
}



    Json_Get_CRM_UserByProjectId(ProjectId,callBack) {
        var obj = {};
        obj.ProjectId = ProjectId;
        super.CreateNewServiceParamObject('Json_Get_CRM_UserByProjectId', obj, true);
        super.CallNewService('Json_Get_CRM_UserByProjectId', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_Get_CRM_UserByProjectId', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }
    Json_GetClientsByFolder(ProjectId, callBack) {
        var obj = {};
        obj.ProjectId = ProjectId;
        super.CreateNewServiceParamObject('Json_GetClientsByFolder', obj, true);
        super.CallNewService('Json_GetClientsByFolder', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_Get_CRM_UserByProjectId', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }
    Json_Get_CRM_SavedTask_ByTaskId(TaskID, callBack) {
        var obj = {};
        obj.TaskId = TaskID;
        super.CreateNewServiceParamObject('Json_Get_CRM_SavedTask_ByTaskId', obj, true);
        super.CallNewService('Json_Get_CRM_SavedTask_ByTaskId', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_Get_CRM_SavedTask_ByTaskId', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }
    Json_GetSections(ProjectId,  callBack) {
        var obj = {};
        obj.ProjectId = ProjectId;
        
        super.CreateNewServiceParamObject('Json_GetSections', obj, true);
        super.CallNewService('Json_GetSections', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_GetSections', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }

    Json_GetCategory(SectionId, callBack) {
        var obj = {};
        obj.SectionId = SectionId;
        
        super.CreateNewServiceParamObject('Json_GetCategory', obj, true);
        super.CallNewService('Json_GetCategory', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_GetCategory', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }

    Json_GetSubSections(ProjectId, SectionId, callBack) {
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.SectionId = SectionId;
        super.CreateNewServiceParamObject('Json_GetSubSections', obj, true);
        super.CallNewService('Json_GetSubSections', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_GetSubSections', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }

    Json_GetFolders(callBack) { 
        super.CreateNewServiceParamObject('Json_GetFolders');
        super.CallNewService('Json_GetFolders', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            var Mdata=JData.Table?Data.Table : JData.Table1
            console.log('Json_GetFolders', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }
    Json_GetFolderData(ProjectId,callBack) { 
        var obj = {};
        obj.SectionId = "-1";
        obj.ClientId = "";
        obj.ProjectId = ProjectId;
        super.CreateNewServiceParamObject('Json_GetFolderData', obj, true);
        super.CallNewService('Json_GetFolderData', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_CRM_GetOutlookTask', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }

    AddAndUpdateWPS_InViewer(TaskId = 0, callBack) { 
        var RecurrenceParameter = new ClientRecurrenceParameter();
        var obj = {}; 
        obj.ClientIsRecurrence = $('#ChkTaskRecurrence').prop('checked');
        obj.StartDate = this.SETDate(this.cuureantDate());
        obj.ClientEnd = $('#Task_Date_EndBy').val() ? this.SETDate($('#Task_Date_EndBy').val()) : "1900/01/01";
        obj.ClientDayNumber = RecurrenceParameter.ClientDayNumber();
        obj.ClientMonth = RecurrenceParameter.ClientMonth();
        obj.ClientOccurrenceCount = RecurrenceParameter.ClientOccurrenceCount();
        obj.ClientPeriodicity = RecurrenceParameter.ClientPeriodicity();
        obj.ClientRecurrenceRange = RecurrenceParameter.ClientRecurrenceRange;
        obj.ClientRecurrenceType = RecurrenceParameter.ClientRecurrenceType;
        obj.ClientWeekDays = RecurrenceParameter.ClientWeekDays();
        obj.ClientWeekOfMonth = RecurrenceParameter.ClientWeekOfMonth();
        obj.OwnerID = $('#Task_Owner').val();
        var Work_UserIdList = [];
        Work_UserIdList.push(currentUserInfo.DSUserID);
        if (currentUserInfo.DSUserID != $('#Task_Owner').val()) {
            Work_UserIdList.push($('#Task_Owner').val());
        }

        obj.AssignedToID = Work_UserIdList.join(',');
        obj.AssociateWithID = $('#Task_AssociateWithClient').val();//ClientId value
        obj.FolderId = DProjectId;
        obj.Subject = '';
        obj.TypeofTaskID = $('#Task_Section').val() ;//Section value
        obj.EndDateTime = $('#Task_EndTime').val() ? this.SETDate($('#Task_EndTime').val()) : "1900/01/01";
        obj.StartDateTime = $('#Task_StartTime').val() ? this.SETDate($('#Task_StartTime').val()) : "1900/01/01";;
        obj.Status = $('#Task_Status').val()   ;
        obj.Priority = 1;
        obj.PercentComplete = 0;
        obj.ReminderSet = false;
        obj.ReminderDateTime = this.SETDate(this.cuureantDate());
        obj.TaskNo = TaskId;
        obj.Attachments = '';
        obj.Details = '';
        obj.YEDate = $('#Task_Year_End_Date').val() ? this.SETDate($('#Task_Year_End_Date').val()) : "1900/01/01";
        obj.SubDeadline = $('#Task_SubmissionDeadline').val() ? this.SETDate($('#Task_SubmissionDeadline').val()) : "1900/01/01";
        obj.DocRecdate = $('#Task_Documents_received_date').val() ? this.SETDate($('#Task_Documents_received_date').val()) : "1900/01/01";
        obj.ElectronicFile = $('#chkElectronicFilesReceived').prop('checked')? true : false;
        obj.PaperFile = $('#chkPaper_files_received').prop('checked') ? true : false;
        obj.TaskSource = 'WPS';
        obj.Notes = $('#Task_Notes').val();
        console.log(obj);

        super.CreateNewServiceParamObject('Json_WorkPlanner_Save_and_Update', obj, true);
        super.CallNewService('Json_WorkPlanner_Save_and_Update', function (status, Data) {
            if (status) {
                let Jsondata = JSON.parse(Data);
                if (Jsondata.Status == "success") {
                    //  $("#btnRefresh").trigger('click');
                    return callBack(true);
                } else {
                    return callBack(false);
                }
            }
        });
    }


    
    Json_CRM_Task_UpdateOtherParam(TaskId = 0, callBack) {
        var obj = {};
        obj.TaskID = TaskId; obj.YEDate = $('#Task_Year_End_Date').val() ? this.SETDate($('#Task_Year_End_Date').val()) : "1900/01/01";
        obj.SubDeadline = $('#Task_SubmissionDeadline').val() ? this.SETDate($('#Task_SubmissionDeadline').val()) : "1900/01/01";
        obj.DocRecdate = $('#Task_Documents_received_date').val() ? this.SETDate($('#Task_Documents_received_date').val()) : "1900/01/01";
        obj.ElectronicFile = $('#chkElectronicFilesReceived').is(':checked');
        obj.PaperFile = $('#chkPaper_files_received').is(':checked'); 
        super.CreateNewServiceParamObject('Json_CRM_Task_UpdateOtherParam', obj, true);
        super.CallNewService('Json_CRM_Task_UpdateOtherParam', function (status, Data) {
            if (status) { 
                if (Data == "Success") { 
                    return callBack(true);
                } else {
                    return callBack(false);
                }
            } else {
                return callBack(false);
            }
        });
    }
     Json_CRM_Task_Save_Dev(e, TaskId = 0, notesBool = false, callBack) {
    console.log("Save Data", e.data);
    var WorkTaskInfo = e.data;
    var RecurrenceParameter = new ClientRecurrenceParameter();
        var obj = {};
    obj.ClientIsRecurrence = false;
    obj.StartDate = this.SETDate(this.cuureantDate());
    obj.ClientEnd = this.SETDate(this.cuureantDate());
    obj.ClientDayNumber = RecurrenceParameter.ClientDayNumber();
    obj.ClientMonth = RecurrenceParameter.ClientMonth();
    obj.ClientOccurrenceCount = RecurrenceParameter.ClientOccurrenceCount();
    obj.ClientPeriodicity = RecurrenceParameter.ClientPeriodicity();
    obj.ClientRecurrenceRange = RecurrenceParameter.ClientRecurrenceRange;
    obj.ClientRecurrenceType = RecurrenceParameter.ClientRecurrenceType;
    obj.ClientWeekDays = RecurrenceParameter.ClientWeekDays();
    obj.ClientWeekOfMonth = RecurrenceParameter.ClientWeekOfMonth();
    obj.OwnerID = WorkTaskInfo.OwnerID;
   var Work_UserIdList = [];
    Work_UserIdList.push(currentUserInfo.DSUserID);
    if (currentUserInfo.DSUserID != WorkTaskInfo.OwnerID) {
        Work_UserIdList.push(WorkTaskInfo.OwnerID);
    }

    obj.AssignedToID = Work_UserIdList.join(',');
    obj.AssociateWithID = WorkTaskInfo.ClientNo;//ClientId value
        obj.FolderId = DProjectId;
        obj.Subject = WorkTaskInfo.Source != 'CRM' ? '' : WorkTaskInfo.Subject;
     obj.TypeofTaskID = WorkTaskInfo.SectionId;//Section value
    obj.EndDateTime = WorkTaskInfo.EndDateTime ? this.SETDate(WorkTaskInfo.EndDateTime) : "1900/01/01";
    obj.StartDateTime = WorkTaskInfo.Start ? this.SETDate(WorkTaskInfo.Start) : "1900/01/01";;
    obj.Status = WorkTaskInfo.mstatus ? WorkTaskInfo.mstatus : StatusData[0].Status;
    obj.Priority = 1;
    obj.PercentComplete = 0;
    obj.ReminderSet = false;
    obj.ReminderDateTime = this.SETDate(this.cuureantDate());
    obj.TaskNo = TaskId;
    obj.Attachments = '';
    obj.Details = '';
    obj.YEDate = WorkTaskInfo.YEDate ? this.SETDate(WorkTaskInfo.YEDate) : "1900/01/01";
    obj.SubDeadline = WorkTaskInfo.SubDeadline ? this.SETDate(WorkTaskInfo.SubDeadline) : "1900/01/01";
    obj.DocRecdate = WorkTaskInfo.DocRecdate ? this.SETDate(WorkTaskInfo.DocRecdate) : "1900/01/01";
    obj.ElectronicFile = WorkTaskInfo.ElectronicFile ? true : false;
    obj.PaperFile = WorkTaskInfo.PaperFile ? true : false;
    obj.TaskSource = WorkTaskInfo.Source ? WorkTaskInfo.Source :'WPS';
    obj.Notes = WorkTaskInfo.Source != 'CRM' ? (notesBool ? e.value : (WorkTaskInfo.Notes ? WorkTaskInfo.Notes : '')):'';
    console.log(obj);
     
    super.CreateNewServiceParamObject('Json_WorkPlanner_Save_and_Update', obj, true);
    super.CallNewService('Json_WorkPlanner_Save_and_Update', function (status, Data) {
        if (status) { 
            let Jsondata = JSON.parse(Data);
        if (Jsondata.Status == "success") {
          //  $("#btnRefresh").trigger('click');
            return callBack(true);
        } else {
            return callBack(false);
        }
    } 
  });
}


    
    Json_CRM_Task_Save(TaskId = '0') {
    var RecurrenceParameter = new ClientRecurrenceParameter();
    let obj = {};
    //obj.agrno = agrno;
    //obj.Email = Email;
    //obj.password = password;
      
    obj.ClientIsRecurrence = $('#ChkTaskRecurrence').is(':checked');
    obj.StartDate = this.SETDate($('#Task_StartTime').val());
    obj.ClientEnd = $('#Task_Date_EndBy').val() ? this.SETDate($('#Task_Date_EndBy').val()) : this.SETDate($('#Task_StartTime').val());
    obj.ClientDayNumber = RecurrenceParameter.ClientDayNumber();
    obj.ClientMonth = RecurrenceParameter.ClientMonth();
    obj.ClientOccurrenceCount = RecurrenceParameter.ClientOccurrenceCount();
    obj.ClientPeriodicity = RecurrenceParameter.ClientPeriodicity();
    obj.ClientRecurrenceRange = RecurrenceParameter.ClientRecurrenceRange;
    obj.ClientRecurrenceType = RecurrenceParameter.ClientRecurrenceType;
    obj.ClientWeekDays = RecurrenceParameter.ClientWeekDays();
    obj.ClientWeekOfMonth = RecurrenceParameter.ClientWeekOfMonth();
    obj.OwnerID = $("#Task_Owner").val();

    if (AssignedUserList.includes($("#Task_Owner").val())) {
        obj.AssignedToID = AssignedUserList.join(',');
    } else {
        AssignedUserList.push($("#Task_Owner").val());
        obj.AssignedToID = AssignedUserList.join(',');
    }

    obj.AssociateWithID = $('#Task_AssociateWithClient').val();
    obj.FolderId = $('#Task_Folder').val();
    obj.Subject = $('#Task_Subject').val();
    obj.TypeofTaskID = $('#Task_Section').val();
    obj.EndDateTime = this.SETDate($('#Task_EndTime').val());
    obj.StartDateTime = this.SETDate($('#Task_StartTime').val());
    obj.Status = $('#Task_Status').val();
    obj.Priority = $('#Task_Priority').val();
    obj.PercentComplete = $('#Task_Complete').val();
    obj.ReminderSet = $('#chkReminderDate').is(':checked');
    if ($('#chkReminderDate').is(':checked') == true) {
        obj.ReminderDateTime = this.SETDate($('#Task_ReminderDate').val());
    } else {
        obj.ReminderDateTime = this.SETDate($('#Task_StartTime').val());
    }
    obj.TaskNo = TaskId;

    let AttschmentPathArray = [];
    for (let Attachment of TaskAttechment) {
        AttschmentPathArray.push(Attachment.Path);
    }
    obj.Attachments = AttschmentPathArray.join('|');
    obj.Details = $('#Task_DetailsText').val();
    //obj.Notes = Notes;
    //  var DemoDate = new Date();
    obj.YEDate = $('#Task_Year_End_Date').val() ? this.SETDate($('#Task_Year_End_Date').val()) : "1900/01/01";
    obj.SubDeadline = $('#Task_SubmissionDeadline').val() ? this.SETDate($('#Task_SubmissionDeadline').val()) : "1900/01/01";
    obj.DocRecdate = $('#Task_Documents_received_date').val() ? this.SETDate($('#Task_Documents_received_date').val()) : "1900/01/01";
    obj.ElectronicFile = $('#chkElectronicFilesReceived').is(':checked');
    obj.PaperFile = $('#chkPaper_files_received').is(':checked');
    obj.Notes = '';
        obj.TaskSource = '';
        var ObjThis = this;
        var methodName = TaskId == '0' ? 'Json_CRM_Task_Save' :'Json_CRM_Task_Update';
        TaskId != '0' ?  obj.ActivityMsg = UpdateActivity.ActivityMsg :'';
        super.CreateNewServiceParamObject(methodName, obj, true);
        super.CallNewService(methodName, function (status, Data) {

        if (status) {
            let Jsondata = JSON.parse(Data);
            if (Jsondata.Status == "success") {
                let Notes = editor.option("value") ? editor.option("value") : '<p></p>';

                let encodedData = window.btoa(Notes);
                console.log("encodedData: ", encodedData);
                UpdateActivity.NotesNew = encodedData;
                ObjThis.Json_GetRtfFromHtml(encodedData, function (status, Data) {
                    if (status) {
                        let IteamIdArray = [];

                        $('.Documente').each(function () {
                            let idstr = this.id;
                            var IteamId = idstr.substr(3);
                            IteamIdArray.push(IteamId);
                            console.log('IteamIdDo', IteamId);
                        });  
                        let DMSItems = IteamIdArray.join('|');

                        UpdateActivity.SetAttachmentCountNew = TaskAttechment.length + IteamIdArray.length;
                        ObjThis.Json_CRM_TaskDMSAttachmentInsert(Jsondata.Message, DMSItems, Data, function (status, Data) {
                            if (status) {
                                ObjThis.Json_CRM_Task_UpdateOtherParam(Jsondata.Message, (status1) => {
                                    if (status1) {
                                        $('.msgRename').html("Task Created ").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "green" }); //also show a success message 
                                        $('.msgRename').delay(2800).fadeOut('slow');
                                        // alert("Task Created ");
                                        setTimeout(function () { window.close(); }, 3000);
                                    }
                                }); 
                            } 
                        });
                    }
                   

                });

            }
        }


    });
}

    Json_CRM_Task_Save_Update(TaskId = '0') { 
        let obj = {}; 
        if (AssignedUserList.includes($("#Task_Owner").val())) {
            obj.AssignedToID = AssignedUserList.join(',');
        } else {
            AssignedUserList.push($("#Task_Owner").val());
            obj.AssignedToID = AssignedUserList.join(',');
        }

          
        obj.TaskID = TaskId;
        obj.DMSItems = '';
        let AttschmentPathArray = [];
        for (let Attachment of TaskAttechment) {
            //alert(Attachment.Path);
            AttschmentPathArray.push(Attachment.Path);
        }
        obj.Attachments = AttschmentPathArray.join('|');
        
        obj.Notes = '';
        obj.Details = $('#Task_DetailsText').val();
          
        obj.ReminderSet = $('#chkReminderDate').is(':checked');
        if ($('#chkReminderDate').is(':checked') == true) {
            obj.ReminderDateTime = this.SETDate($('#Task_ReminderDate').val());
        } else {
            obj.ReminderDateTime = this.SETDate($('#Task_StartTime').val());
        } 
        obj.StartDateTime = this.SETDate($('#Task_StartTime').val());
        //int OwnerID, string AssociateWithID, int FolderId,
        //    string Subject, int TypeofTaskID, DateTime EndDateTime,
        //        string Status, int Priority, int PercentComplete
        //obj.OwnerID = $('#Task_Owner').val();
        obj.OwnerID = $("#Task_Owner").val();
        
       // UpdateActivity.getActivityMsg();
        obj.AssociateWithID = $('#Task_AssociateWithClient').val();
        obj.FolderId = $('#Task_Folder').val();
        obj.Subject = $('#Task_Subject').val();
        obj.TypeofTaskID = $('#Task_Section').val();
        obj.EndDateTime = this.SETDate($('#Task_EndTime').val());
        obj.Status = $('#Task_Status').val();
        obj.Priority = $('#Task_Priority').val();
        obj.PercentComplete = $('#Task_Complete').val();
        obj.ActivityMsg = UpdateActivity.ActivityMsg;
        obj.YEDate = $('#Task_Year_End_Date').val() ? this.SETDate($('#Task_Year_End_Date').val()) : "1900/01/01";
        obj.SubDeadline = $('#Task_SubmissionDeadline').val() ? this.SETDate($('#Task_SubmissionDeadline').val()) : "1900/01/01";
        obj.DocRecdate = $('#Task_Documents_received_date').val() ? this.SETDate($('#Task_Documents_received_date').val()) : "1900/01/01";
        obj.ElectronicFile = $('#chkElectronicFilesReceived').is(':checked');
        obj.PaperFile = $('#chkPaper_files_received').is(':checked');
        let data = JSON.stringify(obj);
        console.log('Data', data);
        var ObjThis = this;
        var methodName ='Json_CRM_Task_Update';
        TaskId != '0' ? obj.ActivityMsg = UpdateActivity.ActivityMsg : '';
        super.CreateNewServiceParamObject(methodName, obj, true);
        super.CallNewService(methodName, function (status, Data) {

            if (status) {
                let Jsondata = JSON.parse(Data);
                if (Jsondata.Status == "success") {
                    let Notes = editor.option("value") ? editor.option("value") : '<p></p>';

                    var StrHtml = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>"
                    StrHtml += "<html xmlns='http://www.w3.org/1999/xhtml'>"
                    StrHtml += "<head>"
                    StrHtml += ' <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>';
                    StrHtml += '</title>';
                    StrHtml += '  <style type="text/css"> .cs2654AE3A{text - align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}';
                    StrHtml += '.csC8F6D76{color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;}'
                    StrHtml += '</style>';
                    StrHtml += '</head>';
                    StrHtml += '<body>';
                    StrHtml += Notes; 
                    StrHtml += '</html>'; 
                    let encodedData = window.btoa(StrHtml);
                    console.log("encodedData: ", encodedData);
                    ObjThis.Json_GetRtfFromHtml(encodedData, function (status, Data) {
                        if (status) {
                            let IteamIdArray = [];

                            $('.Documente').each(function () {
                                let idstr = this.id;
                                var IteamId = idstr.substr(3);
                                IteamIdArray.push(IteamId);
                                console.log('IteamIdDo', IteamId);
                            });
                            let DMSItems = IteamIdArray.join('|');
                            ObjThis.Json_CRM_TaskDMSAttachmentInsert(Jsondata.Message, DMSItems, Data, function (status, Data) {
                                $('.msgRename').html("Task Updated ").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "green" }); //also show a success message 
                                $('.msgRename').delay(2800).fadeOut('slow');
                                //alert("Task Updated ");
                                setTimeout(function () { location.reload(); }, 3000);

                            });
                        }


                    });

                }
            }


        });
    }


    
  Json_CRM_TaskDetailInfo_Update(TaskId, DMSItems, Notes) { 
    obj.TaskID = TaskId;
    obj.DMSItems = DMSItems;
    let AttschmentPathArray = [];
    for (let Attachment of TaskAttechment) {
        //alert(Attachment.Path);
        AttschmentPathArray.push(Attachment.Path);
    }
    obj.Attachments = AttschmentPathArray.join('|');
    obj.Notes = Notes;
    obj.Details = $('#Task_DetailsText').val();
    if ($("#AssignedToIDArray").val() != '') {
        obj.AssignedToID = $("#AssignedToIDArray").val();
    } else {
        obj.AssignedToID = $("#AssignedToIDArray").val();
    }

    obj.ReminderSet = $('#chkReminderDate').is(':checked');
    if ($('#chkReminderDate').is(':checked') == true) {
        obj.ReminderDateTime = this.SETDate($('#Task_ReminderDate').val());
    } else {
        obj.ReminderDateTime = this.SETDate($('#Task_StartTime').val());
    }
    obj.StartDateTime = this.SETDate($('#Task_StartTime').val());
  
    if ($("#Task_Owner").val() != null) {
        obj.OwnerID = $("#Task_Owner").val();
    } else {
        obj.OwnerID = $("#loginOwner1").val();
    }
  //  UpdateActivity.getActivityMsg();
    obj.AssociateWithID = $('#Task_AssociateWithClient').val();
    obj.FolderId = $('#Task_Folder').val();
    obj.Subject = $('#Task_Subject').val();
    obj.TypeofTaskID = $('#Task_Section').val();
    obj.EndDateTime = this.SETDate($('#Task_EndTime').val());
    obj.Status = $('#Task_Status').val();
    obj.Priority = $('#Task_Priority').val();
    obj.PercentComplete = $('#Task_Complete').val();
    obj.ActivityMsg = UpdateActivity.ActivityMsg;
    obj.YEDate = this.SETDate($('#Task_Year_End_Date').val());
    obj.SubDeadline = this.SETDate($('#Task_SubmissionDeadline').val());
    obj.DocRecdate = this.SETDate($('#Task_Documents_received_date').val());
    obj.ElectronicFile = $('#chkElectronicFilesReceived').is(':checked');
    obj.PaperFile = $('#chkPaper_files_received').is(':checked');
    let data = JSON.stringify(obj);
    console.log('Data', data);
    genralAjax(data, 'Json_CRM_Task_Update', function (returnValue) {
        console.log(returnValue);
        var str = JSON.parse(JSON.stringify(returnValue));
        if (str != "") {
            console.log(str.d);
            let Jsondata = JSON.parse(str.d);
            if (Jsondata.Status == "success") {
                // Json_AddSupplierActivity(UpdateActivity.ActivityMsg, false)
                $('.msgRename').html("Task Updated ").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "green" }); //also show a success message 
                $('.msgRename').delay(2800).fadeOut('slow');
                setTimeout(function () { 
                    if ($('#Task_Complete').val() == "100") {
                        location.href = 'CRMTaskiViwer.html?TaskID=' + TaskId + '&UserId=' + localStorage.getItem('intUserId') + '&ViwerMode=Completed&FId=' + $('#Task_Folder').val();
                    } else {
                        location.reload();
                    }
                }, 3000);
                // $("#btnRefresh").trigger('click');
            }
        }

    });

}


 Json_CRM_TaskDMSAttachmentInsert(TaskID, DMSItems, Notes, callBack) {
        var obj = {}
        obj.TaskID = TaskID;
        obj.DMSItems = DMSItems;
        obj.Notes = Notes;
        super.CreateNewServiceParamObject('Json_CRM_TaskDMSAttachmentInsert', obj, true);
        super.CallNewService('Json_CRM_TaskDMSAttachmentInsert', function (status, Data) {
            if (status ) {
                var JData = Data != '' ? JSON.parse(Data): "";
                console.log('Json_CRM_TaskDMSAttachmentInsert', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
            //if (status) {
            //    var gettable = JSON.parse(Data);
            //    console.log('gettable', gettable);
            //    $('.msgRename').html("Task Created ").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "green" }); //also show a success message 
            //    $('.msgRename').delay(2800).fadeOut('slow');time            //    alert("Task Created ");
            //    setTimeout(function () { location.href = 'TaskList.html'; }, 3000);


            //}

        });

    }

    Json_GetRtfFromHtml(strHtml, callBack) { 
        var obj = {};
        obj.strHtml = strHtml; 
        super.CreateNewServiceParamObject('Json_GetRtfFromHtml', obj, true);
        super.CallNewService('Json_GetRtfFromHtml', function (status, Data) {
            if (status && Data != '') {
                var JData = JSON.parse(Data);
                console.log('Json_CRM_TaskDMSAttachmentInsert', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
            //if (status) { 
            //    let Jsondata = JSON.parse(Data);
            //    console.log('Jsondata', Jsondata);
            //    let IteamIdArray = [];

            //    $('.Documente').each(function () {
            //        let idstr = this.id;
            //        var IteamId = idstr.substr(3);
            //        IteamIdArray.push(IteamId);
            //        console.log('IteamIdDo', IteamId);
            //    });
            //    let DMSItems = IteamIdArray.join('|');
            //    objThis.Json_CRM_TaskDMSAttachmentInsert(TaskId, DMSItems, Jsondata);

            //}

        });
    }
    Json_GetHtmlFromRtf(strRtf, callBack) { 
        var obj = {};
        obj.strRtf = strRtf; 
        super.CreateNewServiceParamObject('Json_GetHtmlFromRtf', obj, true);
        super.CallNewService('Json_GetHtmlFromRtf', function (status, Data) {
            if (status && Data != '') {
                var JData = JSON.parse(Data);
                console.log('Json_CRM_TaskDMSAttachmentInsert', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
            //if (status) { 
            //    let Jsondata = JSON.parse(Data);
            //    console.log('Jsondata', Jsondata);
            //    let IteamIdArray = [];

            //    $('.Documente').each(function () {
            //        let idstr = this.id;
            //        var IteamId = idstr.substr(3);
            //        IteamIdArray.push(IteamId);
            //        console.log('IteamIdDo', IteamId);
            //    });
            //    let DMSItems = IteamIdArray.join('|');
            //    objThis.Json_CRM_TaskDMSAttachmentInsert(TaskId, DMSItems, Jsondata);

            //}

        });
    }


    CRM_MultipleTaskCompletionUpdate(TaskIds,UserIDs,callBack) { 
        var obj = {};
        obj.TaskIds = TaskIds;
        obj.UserIDs = UserIDs;
        super.CreateNewServiceParamObject('CRM_MultipleTaskCompletionUpdate', obj, true);
        super.CallNewService('CRM_MultipleTaskCompletionUpdate', function (status, Data) {
            if (Data == 'Success') { 
            return callBack(true);
            } else {
            return callBack(false);
        }
    });
    }

    TIMviwerLinkOpen(TaskInfObj) {
        console.log(TaskInfObj);
    var lhost = location.host;
    var strurl;
     var prt = location.protocol; 
     var Obj = {};
        Obj.TID = TaskInfObj.TimingID;
        Obj.FolderID = TaskInfObj.FolderID;

        
        strurl = prt + "//" + lhost + "/account/newtime.html?Code=" + window.btoa(JSON.stringify(Obj));
      
    window.open(strurl);
    }
    CRMviwerLinkOpen(TaskInfObj, Mode = 'Task') {
    var lhost = location.host;
    var strurl;
     var prt = location.protocol; 
     var Obj = {};
     Obj.TaskId = TaskInfObj.ID;
     Obj.FolderID = TaskInfObj.FolderID;
     Obj.UserID = TaskInfObj.UserID;
     Obj.Mode = Mode;

     strurl = prt + "//" + lhost + "/account/newtask.html?Code=" + window.btoa(JSON.stringify(Obj));
      if (TaskInfObj.mstatus != "Deleted") { 
       window.open(strurl);
		 }
    }

    WPSviwerLinkOpen(TaskInfObj,Mode = 'Task') {
    var lhost = location.host;
    var strurl;
    var prt = location.protocol;
        var Obj = {};
        Obj.TaskId = TaskInfObj.ID;
        Obj.FolderID = TaskInfObj.FolderID;
        Obj.UserID = TaskInfObj.UserID;
        Obj.Mode = Mode;
        strurl = prt + "//" + lhost + "/account/WPSViewer.html?Code=" + window.btoa(JSON.stringify(Obj));
         if (TaskInfObj.mstatus != "Deleted") { 
       window.open(strurl);
		 }

}

  viwerLinkOpen(GetTaskInfoByTaskId) {

    var GuidG = GetTaskInfoByTaskId.GUID;
    let fileName = GetTaskInfoByTaskId.Path;
    let Typest = fileName.lastIndexOf(".");
    var Type = fileName.slice(Typest + 1);
    var filetype = Type.toLowerCase();
    console.log('filetype', filetype);
    var lhost = location.host;
    var prt = location.protocol;
    var ItemId = GetTaskInfoByTaskId.ID;
    let ViewerToken = localStorage.getItem('ViewerToken');
    let actionstr = "ForInfo";
    if (GetTaskInfoByTaskId.ForAction == "Yes") {
        actionstr = "ForAction";
    }
    let workid = GetTaskInfoByTaskId.WorkID

      var strurl = "https://www.mydocusoft.com/viewer.html?srtAgreement=" + agrno + "&SCode=" + password + "&SEmail=" + Email +"&GuidG=" + GuidG + "&strItemId=" + ItemId + "&actiontype=" + actionstr + "&filetype=" + filetype.trim() + "&workid=" + workid + "&ViewerToken=" + ViewerToken + "";
     // alert(strurl);
   //   var strurl = "https://www.mydocusoft.com/viewer.html?srtAgreement=" + agrno + "&SCode=" + password + "&GuidG=" + GuidG + "&SEmail=" + Email + "&strItemId=" + ItemId + "&filetype=." + filetype.trim() + "&workid=" + workid + "&ViewerToken=" + ViewerToken + "&actiontype=" + actionstr + "&IsApp=&PortalID=";
    window.open(strurl);
    }
    Json_AddSupplierActivity(Notes, callBack) {
        let obj = {}; 
        obj.OriginatorNo = $('#Task_AssociateWithClient').val();
        obj.ActionReminder = '';
        obj.Notes = Notes;
        obj.Status = 'sys';
        obj.TaskId = TaskId;
        obj.TaskName = '';
        obj.ActivityLevelID = '';
        obj.ItemId = ''; 
        super.CreateNewServiceParamObject('Json_AddSupplierActivity', obj, true);
        super.CallNewService('Json_AddSupplierActivity', function (status, Data) {
            if (Data == 'Success') { 
            return callBack(true);
            } else {
            return callBack(false);
        }
    });
    }
    Json_Get_CRM_Task_ActivityByTaskId(TaskID, callBack) { 
        var obj = {};
        obj.TaskID = TaskID; 
        super.CreateNewServiceParamObject('Json_Get_CRM_Task_ActivityByTaskId', obj, true);
        super.CallNewService('Json_Get_CRM_Task_ActivityByTaskId', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_Get_CRM_SavedTask_ByTaskId', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
    });
    }
    
    Json_ExplorerSearchDoc(ProjectId, ClientId, callBack) { 
        var obj = {};  
        obj.ProjectId = ProjectId;
        obj.ClientId = ClientId;
        obj.sectionId = '-1';
        super.CreateNewServiceParamObject('Json_ExplorerSearchDoc', obj, true);
        super.CallNewService('Json_ExplorerSearchDoc', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_ExplorerSearchDoc', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
    });
    }
    Json_Get_CRM_TaskDeleteByTaskIDs(TaskInfoArray, callBack) { 
        var obj = {};
        obj.TaskInfoArray = TaskInfoArray; 
        super.CreateNewServiceParamObject('Json_Get_CRM_TaskDeleteByTaskIDs', obj, true);
        super.CallNewService('Json_Get_CRM_TaskDeleteByTaskIDs', function (status, Data) {
            if (Data == 'Success') { 
            return callBack(true);
            } else {
            return callBack(false);
        }
    });
    }

    ShowReminderDate(StartDate, ReminderMinute) {
        var num = ReminderMinute;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        let day = Math.round(rhours / 24);
        var parsedDate = new Date(parseInt(StartDate.substr(6)));
        var d = new Date(parsedDate);
        d.setDate(d.getDate() + day);
        console.log(' Task_ReminderDate day ', day);
        console.log(' Task_ReminderDate d.getDate() + day ', d.getDate() + day);
        console.log(' Task_ReminderDate d ', d);
        var dd = d.getDate();
        var mm = d.getMonth() + 1;
        var yy = d.getFullYear();
        var date;
        if (dd < "10" || mm < "10") {
            if (dd < "10" && mm < '10') {
                date = yy + "-0" + mm + "-0" + dd;
            } else if (dd < "10") {
                date = yy + "-" + mm + "-0" + dd;
            } else if (mm < "10") {
                date = yy + "-0" + mm + "-" + dd;
            }

        } else {
            date = yy + "-" + mm + "-" + dd;
        }
        console.log(' Task_ReminderDate ', date);
        document.getElementById("Task_ReminderDate").value = date;
        $("#Task_ReminderDate").prop('disabled', false);
       // $('#chkReminderDate').prop('checked', true);

    }

 MyDate(date1, bool = false) {
    // var todate = $("#MailJsonDate").val();
    var parsedDate = new Date(parseInt(date1.substr(6)));
    var d = new Date(parsedDate);
    var dd = d.getDate();
    var mm = d.getMonth() + 1;
    var mm1 = d.getMonth();
    var tt = d.toLocaleTimeString();
     var yy = d.getFullYear();
     var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     var mS1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    var date;
     if (bool == false) {
         if (dd < "10" || mm < "10") {
             if (dd < "10" && mm < '10') {
                 return date = yy + "-0" + mm + "-0" + dd;
             } else if (dd < "10") {
                 return date = yy + "-" + mm + "-0" + dd;
             } else if (mm < "10") {
                 return date = yy + "-0" + mm + "-" + dd;
             }

         } else {
             return date = yy + "-" + mm + "-" + dd;
         }
     } else if (bool == true) { 
         var dateC = mS1[dd - 1] + ' ' + mS[mm1] + ' ' + yy;
         // //alert(dateC);
         return dateC;


     } else if (bool == 'WithTime'){
         let dateC = mS1[dd - 1] + ' ' + mS[mm1] + ' ' + yy + ' ' + tt;
         // //alert(dateC);
         return dateC;
     }

}
   AfterCuureantDate() {
    // var todate = $("#MailJsonDate").val();
    //var parsedDate = new Date(parseInt(todate.substr(6)));
    var d = new Date();
    d.setDate(d.getDate() + 1);
    var dd = d.getDate();
    var mm = d.getMonth() + 1;
    var yy = d.getFullYear();
    var date;
    if (dd < "10" || mm < "10") {
        if (dd < "10" && mm < '10') {
            return date = yy + "-0" + mm + "-0" + dd;
        } else if (dd < "10") {
            return date = yy + "-" + mm + "-0" + dd;
        } else if (mm < "10") {
            return date = yy + "-0" + mm + "-" + dd;
        }

    } else {
        return date = yy + "-" + mm + "-" + dd;
    }
} 


   SETDate(date) {
    var d = new Date(date);
    var dd = d.getDate();
    var mm = d.getMonth() + 1;

    var yy = d.getFullYear();
    var DateVal;
    if (dd < "10" || mm < "10") {
        if (dd < "10" && mm < '10') {
            return date = yy + "/0" + mm + "/0" + dd;
        } else if (dd < "10") {
            return date = yy + "/" + mm + "/0" + dd;
        } else if (mm < "10") {
            return date = yy + "/0" + mm + "/" + dd;
        }

    } else {
        return DateVal = yy + "/" + mm + "/" + dd;
    }
}

    DateAfterOrBeforeCurrent(AfterCount, BeforeCount = '0') {
        var date = new Date();
        if (BeforeCount == '0') {
            date.setDate(date.getDate() + AfterCount);
        } else if (BeforeCount == '0') {
            date.setDate(date.getDate() + AfterCount);
        }
        console.log(date);
        return date;
    }

 cuureantDate() { 
    var d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth() + 1;

    var yy = d.getFullYear();
    var date;
    if (dd < "10" || mm < "10") {
        if (dd < "10" && mm < '10') {
            return date = yy + "-0" + mm + "-0" + dd;
        } else if (dd < "10") {
            return date = yy + "-" + mm + "-0" + dd;
        } else if (mm < "10") {
            return date = yy + "-0" + mm + "-" + dd;
        }

    } else {
        return date = yy + "-" + mm + "-" + dd;
    }
    }

    Json_GetAllContactsByClientID(ProjectId, ClientId, callBack) {
        //Json_GetAllContactsByClientID(string agrno, string Email, string password, string ClientID, int ProjectID)
        var obj = {};
        obj.ProjectID = ProjectId;
        obj.ClientID = ClientId;
        // obj.sectionId = '-1';
        super.CreateNewServiceParamObject('Json_GetAllContactsByClientID', obj, true);
        super.CallNewService('Json_GetAllContactsByClientID', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_GetAllContactsByClientID', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
        });
    }

    Json_GetTimingRecordById(TID, callBack) {
        var obj = {};
        obj.TID = TID
        super.CreateNewServiceParamObject('Json_GetTimingRecordById', obj, true);
        super.CallNewService('Json_GetTimingRecordById', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_GetTimingRecordById', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
        });
    }

    Json_DeleteTimingRecords(callBack) {
        var Obj = {};
        Obj.Tid = this.TID;
        console.log('Json_DeleteTimingRecords', Obj);
        super.CreateNewServiceParamObject('Json_DeleteTimingRecords', Obj, true);
        super.CallNewService('Json_DeleteTimingRecords', function (status, Data) {
            if (status) { 
                return callBack(true, Data);
            } else {
                return callBack(false, '');
            }
        });
    }

     Json_CRM_Timing_Record_List(callBack) {
         
        super.CreateNewServiceParamObject('Json_CRM_Timing_Record_List');
        super.CallNewService('Json_CRM_Timing_Record_List', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_CRM_Timing_Record_List', JData);
				if(JData !=""){
				 return callBack(true, JData);
				}
               
            } else {
                return callBack(false, []);
            }
        });
    }

    Json_SaveTimingRecords(obj, callBack) { 
        super.CreateNewServiceParamObject('Json_SaveTimingRecords', obj, true);
        super.CallNewService('Json_SaveTimingRecords', function (status, Data) {
            if (Data == 'Success') {
                return callBack(true);
            } else {
                return callBack(false);
            }
        });
    } 



    Json_GetCustmizeTimeUnit(callBack) {

        super.CreateNewServiceParamObject('Json_GetCustmizeTimeUnit');
        super.CallNewService('Json_GetCustmizeTimeUnit', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_GetCustmizeTimeUnit', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
        });
    }


    Json_GetHiddenUserWithRoleList(callBack) {

        super.CreateNewServiceParamObject('Json_GetHiddenUserWithRoleList');
        super.CallNewService('Json_GetHiddenUserWithRoleList', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_GetHiddenUserWithRoleList', JData);
                return callBack(true, JData);
            } else {
                return callBack(false, []);
            }
        });
    }

    Json_CRM_Timing_Record_List(callBack) {

        super.CreateNewServiceParamObject('Json_CRM_Timing_Record_List');
        super.CallNewService('Json_CRM_Timing_Record_List', function (status, Data) {
            if (status) {
					if(Data !=""){
                var JData = JSON.parse(Data);
                console.log('Json_CRM_Timing_Record_List', JData);			
				 return callBack(true, JData);
					}
                
            } else {
                return callBack(false, []);
            }
        });
    }

}

class ClientRecurrenceParameter {
    constructor() {
        this.RecurrenceBool = $('#ChkTaskRecurrence').is(':checked');
        this.Task_TypeId = $("input[name='TaskType']:checked").val();
        this.Task_RangId = $("input[name='TaskRange']:checked").val();
    }
    get ClientRecurrenceRange() {
        return this.Task_RangId;
    }
    get ClientRecurrenceType() {
        return this.Task_TypeId;
    }
    ClientDayNumber() {
        if (this.RecurrenceBool) {
            if (this.Task_TypeId == '2') {
                return $('#Task_Date_Monthly').val();
            } else if (this.Task_TypeId == '3') {
                return $('#Task_Month_Every_Yearly').val();
            } else {
                return '1';
            }
        } else {
            return '1';
        }

    }
    ClientMonth() {
        if (this.RecurrenceBool) {
            let Task_SubTypeId = $("input[name='TaskYearly']:checked").val();
            if (this.Task_TypeId == '3' && Task_SubTypeId == 'Year1') {
                return $('#Task_Month_Yearly').val();
            } else if (this.Task_TypeId == '3' && Task_SubTypeId == 'Year2') {
                return $('#Task_Month_Preiod_Yearly').val();
            } else {
                return '1';
            }
        } else {
            return '1';
        }
    }
    ClientWeekOfMonth() {
        if (this.RecurrenceBool) {
            let Task_SubTypeId = $("input[name='TaskYearly']:checked").val();
            let Task_SubTypeId1 = $("input[name='TaskMonthly']:checked").val();
            if (this.Task_TypeId == '3' && Task_SubTypeId == 'Year1') {
                return '-1';
            } else if (this.Task_TypeId == '3' && Task_SubTypeId == 'Year2') {
                return $('#Task_Week_Preiod_Yearly').val();
            } else if (this.Task_TypeId == '2' && Task_SubTypeId1 == 'Month1') {
                return '-1';
            } else if (this.Task_TypeId == '2' && Task_SubTypeId1 == 'Month2') {
                return $('#Task_Week_Preiod_Monthly').val();
            } else {
                return '1';
            }
        } else {
            return '1';
        }
    }
    ClientPeriodicity() {
        if (this.RecurrenceBool) {
            ////alert(this.Task_TypeId);
            switch (this.Task_TypeId) {
                case '0':
                    return $('#Task_Every_Daily').val();
                case '1':
                    return $('#Task_EveryWeek_Weekly').val();
                case '2':
                    let Task_SubTypeId = $("input[name='TaskMonthly']:checked").val();
                    let result;
                    if (Task_SubTypeId == 'Month1') {
                        result = $('#Task_Date_Every_Monthly').val();
                    } else if (Task_SubTypeId == 'Month2') {
                        result = $('#Task_Day_Every_Monthly').val();
                    }
                    return result;

                default:
                    return '1';
            }
        } else {
            return '1';
        }
    }
    ClientOccurrenceCount() {
        if (this.RecurrenceBool) {
            if (this.Task_RangId == '1') {
                return $('#Task_occurrences_EndAfter').val();
            } else {
                return '1';
            }
        } else {
            return '1';
        }

    }
    ClientWeekDays() {
        let Task_SubTypeId = $("input[name='TaskDaily']:checked").val();
        if (this.RecurrenceBool) {

            if (this.Task_TypeId == '1') {
                let DayId = [];
                $('.DayChak').filter(':checked').each(function () {
                    let id = this.id;
                    DayId.push(id);
                });
                console.log(DayId);
                if (DayId.length > 0) {
                    return DayId[0];
                } else {
                    return '0';
                }
            } else if (this.Task_TypeId == '0' && Task_SubTypeId == 'Daily2') {
                return '62';
            } else if (this.Task_TypeId == '2') {
                return $('#Task_Day_Preiod_Monthly').val();
            } else if (this.Task_TypeId == '3') {
                return $('#Task_Day_Preiod_Yearly').val();
            } else {
                return '0';
            }
        } else {
            return '1';
        }

    }

}


class CRMBtnView {
    IsCRM() { 
        $('#TaskCompletedPanal').show();
        $('#TaskDeletePanal').show();
        $('#TaskCustomFilterList').show();
        $('#btnMarkComplete').show();
        $('#DeleteTaskMenu').show(); 
    }

    IsWPS() {
        $('#TaskCompletedPanal').hide();
        $('#TaskDeletePanal').hide(); 
        $('#TaskCustomFilterList').hide(); 
        $('#btnMarkComplete').show();
        $('#DeleteTaskMenu').show(); 
    }

    IsDMS() {
        $('#TaskCompletedPanal').hide();
        $('#TaskDeletePanal').hide(); 
        $('#btnMarkComplete').hide(); 
        $('#DeleteTaskMenu').hide(); 
        $('#TaskCustomFilterList').hide(); 
        //$('#TaskCustomFilterList').hide(); 
    }

    AllTask() {

        $('#TaskCompletedPanal').show();
        $('#TaskDeletePanal').show();
        $('#TaskCustomFilterList').show();
        $('#btnMarkComplete').show();
        $('#DeleteTaskMenu').show(); 
    }
}

class FilterDatabetweenDate {
    constructor(AllTaskList) {
        let datec = new Date().setHours(0, 0, 0, 0);
        this.StartDate = datec;
        this.AllTaskList = AllTaskList; 
    }

   DateAfterOrBeforeCurrent(AfterCount, BeforeCount = '0') {
    var date = new Date();
       if (BeforeCount == '0') {
          // var date = new Date();
        date.setDate(date.getDate() + AfterCount);
    } else if (BeforeCount == '0') {
        date.setDate(date.getDate() + AfterCount);
    }
    console.log(date);
    return date;
}



    SETDate(date) {
        var d = new Date(date);
        var dd = d.getDate();
        var mm = d.getMonth() + 1;

        var yy = d.getFullYear();
        var DateVal;
        if (dd < "10" || mm < "10") {
            if (dd < "10" && mm < '10') {
                return date = yy + "/0" + mm + "/0" + dd;
            } else if (dd < "10") {
                return date = yy + "/" + mm + "/0" + dd;
            } else if (mm < "10") {
                return date = yy + "/0" + mm + "/" + dd;
            }

        } else {
            return DateVal = yy + "/" + mm + "/" + dd;
        }
    }


    Next7Days(EndDate) {
        let ed = new Date(EndDate).getTime();
        let sd = this.StartDate;
        let startDate = new Date(this.StartDate);
        let result = this.AllTaskList.filter(Task => {
            let todate = Task.SortOrder;
            var parsedDate = new Date(parseInt(todate.substr(6)));
            var time = new Date(parsedDate).getTime();
            return (sd < time && time < ed);
        });
        console.log('startDate', startDate);
        console.log('EndDate', EndDate);
        $("#TaskTableData1").dxDataGrid("instance").columnOption("Start", "filterValue", [this.SETDate(startDate), this.SETDate(EndDate)]);
        dataGrid.filter(["Start", ">=", this.SETDate(startDate)], ["Start", "<=", this.SETDate(EndDate)]);
        
        console.log(result);
       // WPS_createTableBody(result, "AllTask", 'TaskTableData1');
    }

    Overdue() {
        let sd = this.StartDate;
        let result = this.AllTaskList.filter(Task => {
            if (Task.EndDateTime != null) {
                let todate = Task.EndDateTime;
                var parsedDate = new Date(parseInt(todate.substr(6)));
                var time = new Date(parsedDate).getTime();
                if (time < sd) {
                    console.log('sd', sd)
                    console.log('sd', time)
                }

                return (time < sd);
            }

        });
        WPS_createTableBody(result, "AllTask", 'TaskTableData1');
    }
    ToDay() {
        let sd = this.StartDate;
        let result = this.AllTaskList.filter(Task => {
            if (Task.EndDateTime != null) {

                let todate = Task.EndDateTime;
                var parsedDate = new Date(parseInt(todate.substr(6))).setHours(0, 0, 0, 0);
                var time = new Date(parsedDate).getTime();
                if (time === sd) {

                    console.log('sd time1', sd);
                    console.log('time1', time);
                    console.log('time1', time === sd);
                } else {

                    console.log('sd time', sd);
                    console.log('time', time);
                    console.log('time', time === sd);
                }
                return (time === sd);
            }
        });
        console.log(result);
        WPS_createTableBody(result, "AllTask", 'TaskTableData1');
    }



}

class Update_Activities {
    constructor() {
        this.TaskInfo = {};
        this.ActivityMsg = '';
        this.AssigneeCount = 0;
        this.AttachmentCount = 0;
        this.AttachmentCountNew = 0;
        this.NotesOld = '';
        this.NotesNew = '';
        this.OldAssigneeCount = 0;
    }


    set SetNotesOld(value) {
        this.NotesOld = value;
    }
    set SetNotesNew(value) {
        this.NotesNew = value;
    }

    set SetTaskInfo(value) {
        this.TaskInfo = value;
    }

    set SetAttachmentCountNew(value) {
        this.AttachmentCountNew = value;
    }

    set SetAttachmentCount(value) {
        this.AttachmentCount = value;
    }

    set SetAssigneeCount(value) {
        this.AssigneeCount = value;
    }
    set SetOldAssigneeCount(value) {
        this.OldAssigneeCount = value;
    }

    getActivityMsg() {
        var str = [];
        if (this.TaskInfo.FolderID != $('#Task_Folder').val()) {
            str.push('Folder change to "' + $('#Task_Folder :selected').text() + '"'); //select2-Task_Folder-container
        }

        if (this.TaskInfo.AssociatedWithID != $('#Task_AssociateWithClient').val()) {
            str.push('Client  change to "' + $('#Task_AssociateWithClient :selected').text() + '"');
        }

        if (this.TaskInfo.TypeOfTaskID != $('#Task_Section').val()) {
            str.push('Section change to "' + $('#Task_Section :selected').text() + '"');
        }
        if (this.TaskInfo.Subject != $('#Task_Subject').val()) {
            str.push('Subject change to "' + $('#Task_Subject').val() + '"');
        }
        if (this.TaskInfo.OwnerID != $('#loginOwner1').val()) {
            var ownerName = $('#loginOwner1').val() ? $('#loginOwner1').val() : $('#Task_Owner :selected').text();
            str.push('Owner change to "' + ownerName + '"');
        }
        if (this.TaskInfo.Details != $('#Task_DetailsText').val()) {
            str.push('Detail change to "' + $('#Task_DetailsText').val() + '"');
        }

        if (this.TaskInfo.Priority != $('#Task_Priority').val()) {
            str.push('Priority change to"' + $('#Task_Priority :selected').text() + '"');
        }

        if (this.TaskInfo.Status != $('#Task_Status').val()) {
            str.push('Status change to "' + $('#Task_Status').val() + '"');
        }

        var EndDateTime = this.TaskInfo.EndDateTime;
        var EndDateTime1 = new Date(parseInt(EndDateTime.substr(6)));
        var EndDateTime2 = new Date($('#Task_EndTime').val());
        EndDateTime2.setHours(0, 0, 0, 0);
        if (EndDateTime1.getTime() !== EndDateTime2.getTime()) {
            str.push('Enddate change to "' + EndDateTime2 + '"');

        }

        var StartDateTime = this.TaskInfo.StartDateTime
        var StartDateTime1 = StartDateTime ? new Date(parseInt(StartDateTime.substr(6))) : '';
        var StartDateTime2 = new Date($('#Task_StartTime').val());
        StartDateTime2.setHours(0, 0, 0, 0);
        if (StartDateTime1 == '') {
            str.push('Startdate change to"' + StartDateTime2);
        } else if (StartDateTime1.getTime() !== StartDateTime2.getTime()) {
            str.push('Startdate change to"' + StartDateTime2 + '"');

        }
        var ReminderDate2 = new Date($('#Task_ReminderDate').val());
        ReminderDate2.setHours(0, 0, 0, 0);
        if (this.TaskInfo.ReminderSet) {
            var ReminderMi = this.TaskInfo.ReminderMinutesBeforeStart;
            var num = ReminderMi;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            let day = Math.round(rhours / 24);
            var parsedDate = new Date(parseInt(StartDateTime.substr(6)));
            var d = new Date(parsedDate);
            d.setDate(d.getDate() + day);
            var ReminderDate1 = d;
            // var ReminderDate1 = ReminderDate ? new Date(parseInt(ReminderDate.substr(6))): '';

            if (ReminderDate1 == '') {
                str.push('ReminderDate  change to "' + ReminderDate2 + '"');
            } else if (ReminderDate1.getTime() !== ReminderDate2.getTime()) {
                str.push('ReminderDate  change to "' + ReminderDate2 + '"');
            } else if (this.TaskInfo.ReminderSet != $('#chkReminderDate').prop('checked')) {
                var strremider = $('#chkReminderDate').prop('checked') ? 'on" and ReminderDate  change to "' + ReminderDate2 : 'off';
                str.push('Reminder  Status change to"' + strremider + '"');
            }
        } else if (this.TaskInfo.ReminderSet != $('#chkReminderDate').prop('checked')) {
            var strremider = $('#chkReminderDate').prop('checked') ? 'on" and ReminderDate  change to "' + ReminderDate2 : 'off';
            str.push('Reminder  Status change to"' + strremider + '"');
        }


        var AssigneeStr = this.TaskInfo.AssignedToID;
        var AssigneeArray = this.OldAssigneeCount;

        if (this.OldAssigneeCount != this.AssigneeCount) {
            var Astr = (this.OldAssigneeCount > this.AssigneeCount ? (this.OldAssigneeCount - this.AssigneeCount + ' Assignee Remove') : (this.AssigneeCount - this.OldAssigneeCount + ' new Assignee Add'));
            str.push(Astr);
        }

        if (this.AttachmentCount != this.AttachmentCountNew) {
            var Astr = (this.AttachmentCount > this.AttachmentCountNew ? (this.AttachmentCount - this.AttachmentCountNew + ' Attachment Remove') : (this.AttachmentCountNew - this.AttachmentCount + ' new Attachment Add'));
            str.push(Astr);

        }

        if ($('#Task_Complete').val() != this.TaskInfo.PercentComplete) {
            str.push('Complete % is change to "' + $('#Task_Complete').val() + ' % "');

        }

        if (this.TaskInfo.ElectronicFile != $('#chkElectronicFilesReceived').prop('checked')) {
            var strremider = $('#chkElectronicFilesReceived').prop('checked') ? 'Electronic File Received' : 'Electronic File Not Received';
            str.push(strremider);
        }

        if (this.TaskInfo.PaperFile != $('#chkPaper_files_received').prop('checked')) {
            var strremider = $('#chkPaper_files_received').prop('checked') ? 'Paper File Received' : 'Paper File Not Received';
            str.push(strremider);
        }

        var Year_End_Date = this.TaskInfo.YEDate;
        var Year_End_Date1 = new Date(parseInt(Year_End_Date.substr(6)));
        var Year_End_Date2 = new Date($('#Task_Year_End_Date').val());
        Year_End_Date2.setHours(0, 0, 0, 0);
        if (Year_End_Date1.getTime() !== Year_End_Date2.getTime()) {
            str.push('Year End Date change to "' + Year_End_Date2 + '"');

        }

        var DocRecdate = this.TaskInfo.DocRecdate;
        var DocRecdate1 = new Date(parseInt(DocRecdate.substr(6)));
        var DocRecdate2 = new Date($('#Task_Documents_received_date').val());
        DocRecdate2.setHours(0, 0, 0, 0);
        if (DocRecdate1.getTime() !== DocRecdate2.getTime()) {
            str.push(' Documents received Date change to "' + DocRecdate2 + '"');

        }

        var SubDeadline = this.TaskInfo.SubDeadline;
        var SubDeadline1 = new Date(parseInt(SubDeadline.substr(6)));
        var SubDeadline2 = new Date($('#Task_SubmissionDeadline').val());
        SubDeadline2.setHours(0, 0, 0, 0);
        if (SubDeadline1.getTime() !== SubDeadline2.getTime()) {
            str.push('Submission Deadline Date change to "' + SubDeadline2 + '"');

        }



        //   var Notes = new String(this.NotesNew);
        //   var NotesNew = new String(this.NotesOld);
        //   //var isEquelStr = JSON.stringify(Notes) !== JSON.stringify(NotesNew);
        //   var isEquellength = Notes.length !== NotesNew.length;
        ////   console.log(isEquelStr );
        //   if (isEquellength) {
        //       str.push(' Notes have been changed ');
        //   }
        this.ActivityMsg = '';
        this.ActivityMsg = str.length ? 'Task Updated :-' + str.join(' , ') : 'Task Updated with No change';
    }



}



// Timer Class For Timing App Class
var TimeInter;
class Timer {
    constructor() {
        this.Sec = 0;
        this.min = 0;
        this.TimeCounter = 0;
        this.IsStop = false;
        this.Time = {};
        this.formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        });
       // this.LoadReqiuedData()
        $('#RelinkTask').hide();
        $('#TimmingAlert').hide();
        this.FolderListData = [];
        this.ClientListData = [];
        this.SectionListData = [];

        $(document).on("click", "#TimmingAlertClose", function () {
            $('#TimmingAlert').hide();
        });

    }
    pad(val) { return val > 9 ? val : "0" + val; }

    OnLoad() { 
        $('#StartTaskTime_Text').text('00:00');
        $('#OnLoadStart').hide();
        $('#StartTaskTime').show();
        this.Sec = 0;
        this.min = 0;
        this.TimeCounter = 0;
        this.IsStop = true;
        this.Start();
       // CRMTimer.Start(); 
    }

    Start() {
        $('#TimmingAlert').show(); 
        TimeInter = setInterval(() => { 
            this.Sec = this.pad(++this.TimeCounter % 60);
            this.min = this.pad(parseInt(this.TimeCounter / 60, 10));
            var StrTime = this.min + ':' + this.Sec;
            console.log('StrTime', StrTime);
            document.title = StrTime;
            $('#StartTaskTime_Text').text(StrTime);
            $('#IconStart').removeClass('fa-play');
            $('#IconStart').removeClass('fa-clock-o');
            $('#IconStart').addClass('fa-pause-circle');
            
            this.setDuration();
        }, 1000);
    }

     
    setDuration() {
        let Duration = parseFloat(this.TimeCounter / (this.CustmizeTimeUnit * 60));
        Duration = this.formatter.format(Duration);  //Duration.toFixed(2);
        console.log('formatter',this.formatter.format(Duration));
        var OverwriteCharge = document.querySelector('#chkOverwriteCharge').checked;
        $('#Task_Unit').val(Duration);
        let TaskDuration = Duration / DiviedForDuration;
        $('#Task_Duration').val(this.formatter.format(TaskDuration));
        if (!OverwriteCharge) {
            this.setCharge(Duration);
        }
    }

    setUserRole(UserID) {
       var OverwriteCharge=  document.querySelector('#chkOverwriteCharge').checked;
        [this.UserRoleList] = this.UserListData.filter(o => o.UserId == UserID);
        !OverwriteCharge ? $('#Task_Unit').val() ? this.setCharge($('#Task_Unit').val()) : '' : this.setCharge();
    }

    setCharge(Duration=0) {

        this.Rate = this.UserRoleList ? this.UserRoleList.RoleRate : 0; 
        if (Duration !=0) { 
            let IntCharge = Duration * this.Rate/10;
            let Charge = Number(IntCharge) === IntCharge && IntCharge % 1 !== 0 ? parseFloat(IntCharge).toFixed(2) : IntCharge;
            console.log('Charge', Charge);
            //  Number(n) === n && n % 1 !== 0
            $('#Task_Charge').val(Charge);
        }
    }
    Stop() {
        console.log('this.TimeInter', TimeInter);
        console.log('this.<i class="fa-solid fa-circle-play"></i>', TimeInter);

        $('#IconStart').removeClass('fa-pause-circle');
        $('#IconStart').addClass('fa-play');
        this.IsStop = false;
        clearInterval(TimeInter);
    }

    END_Timer() {

        $('#TimmingAlert').hide();
        $('#OnLoadStart').show();
        $('#StartTaskTime').hide();
        $('#StartTaskTime_Text').text('00:00');
        console.log(this);
        var path = window.location.pathname;
        var page = path.split("/").pop();
        console.log(page);
        var MapCondition = new Map();
        MapCondition.set('newtask.html', 'CRM');
        MapCondition.set('WPSViewer.html', 'WPS');
        if (MapCondition.has(page)) {

            document.title = `Edit ${MapCondition.get(page)} Task | Docusoft`;
        }
        this.IsStop = false;
        clearInterval(TimeInter);
    }

    LoadReqiuedData() {
        TaskCommon.Json_GetOutlookTask( (Staus, Data) =>{
            if (Staus) {
                this.AllTaskList = Data["Table"];
            }
        });
        TaskCommon.Json_GetFolders( (Staus, Data1)=> { 
            this.FolderListData = Data1.Table ? Data1.Table :Data1.Table1;
        });

        TaskCommon.Json_GetHiddenUserWithRoleList((status, Data) => {
            if (status) {
                this.UserListData = Data.Table;
                var UserId = localStorage.getItem('intUserId');
                [this.UserRoleList] = this.UserListData.filter(o => o.UserId == UserId);
                console.log('this.UserRoleList', this.UserRoleList);

                for (let User of this.UserListData) {
                    $("#Task_Owner").append('<option   value="' + User.UserId + '">' + User.UserName + ' (' + User.RoleRate +') </option>');
                    
                }

                $("#Task_Owner").val(UserId);
            }
        });
        TaskCommon.Json_GetCustmizeTimeUnit((status, Data) => {
            if (status) {
                Data.Table.length ? $('#UnitInMin').text(Data.Table[0].TimeUnit) : $('#UnitInMin').text(10);
                this.CustmizeTimeUnit = Data.Table.length ? Data.Table[0].TimeUnit  : 10;
            }
        });
       
    }

    DeleteTimingRecords(TID) {
        TaskCommon.TID = TID;
        TaskCommon.Json_DeleteTimingRecords((status, Data) => {
            if (status) { 
                if (Data == "Success") {
                    Json_CRM_Timing_Record_List();
                }
            }
        });
    }

    Json_CRM_Timing_Record_List() {
        TaskCommon.Json_CRM_Timing_Record_List((status, Data) => {
            if (status) { 
                var TimeingRecord_List = Data.Table;
                var TimingRecord = TimeingRecord_List.filter(o => o.TaskID == TaskId);    
                console.log('TimeingRecord_List', TimeingRecord_List);
                console.log('TimingRecord', TimingRecord);
               // this.CreateTimingTable(TimingRecord);
                this.createTableBody(TimingRecord);
                //this.createTimingRecored();
            }
        });
    }
   

    createTableBody(GetData) {

        $("#TimingTable12").css("height", 300);
        console.log('testhp', GetData);
        var Datakey = GetData.length ? Object.keys(GetData[0]) : Object.keys('');

        var FilterDatecol = [];
        var ValiddateArray = [
            "CreationDate",
            "WorkDate",
            "CompletionDate",

        ];

        for (var key in Datakey) {
            var keyname = Datakey[key].toString();
            if (keyname.includes("Date") || ValiddateArray.includes(Datakey[key].toString())) {
                // console.log("myval", keyname);
                FilterDatecol.push(keyname);
            }
        }
        for (var k in GetData) {
            for (var dval in FilterDatecol) {
                var nkey = FilterDatecol[dval];
                if (GetData[k][nkey] != null && GetData[k][nkey] != "") {
                    var jsonDate = GetData[k][nkey];
                    var fullDate = TaskCommon.SETServerDateFormat1(jsonDate);
                    if (fullDate != '1900-01-01') {
                        GetData[k][nkey] = fullDate;
                    } else {
                        GetData[k][nkey] = '';
                    }

                }
            }
        }

        this.dataGrid = $("#TimingTable12").dxDataGrid({
            keyExpr: "TimingID",
            dataSource: GetData,

            export: {
                enabled: false,
                fileName: "file",
                allowExportSelectedData: false
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
                mode: "single"
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
            customizeColumns: function (columns) {

                for (var i = 0; i < columns.length; i++) {

                    if (columns[i].dataField.includes("Date") || ValiddateArray.includes(columns[i].dataField.toString())) {
                        columns[i].dataType = "date";
                        //columns[i].format = localStorage.getItem("dateformat");
                        columns[i].format = "dd/MM/yyyy";
                        console.log('columns[i]', columns[i]);
                    }
                }
            },
            onEditorPreparing: function (e) {
                console.log("Response", e);


            },

            columns: [
                
                {
                    dataField: "Comment",
                    caption: "Comment"

                },
                {
                    dataField: "UserName",
                    caption: "User Name"
                },  {
                    dataField: "WorkDate",
                    caption: "Work Date"
                }, {
                    dataField: "Units",
                    caption: "Duration"
                },,  {
                    dataField: "Charge",
                    caption: "Charge"
                },   

            ],

            summary: {
                totalItems: [{
                    column: "Units",
                    summaryType: "sum",
                    customizeText: function (data) {
                        return "Total Time :" + data.value;
                    }
                }, {
                        column: "Charge",
                        summaryType: "sum",
                        customizeText: function (data) {
                            return "Total :" + data.value;
                        }
                }]
            },
            onSelectionChanged: function (selectedItems) {

                MainContactDetail = [];
                for (var i = 0; i < selectedItems.selectedRowsData.length; i++) {
                    MainContactDetail.push(selectedItems.selectedRowsData[i]);

                }
            },


            onCellDblClick: function (e) {

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
                    console.log('e.data', e.data);
                    TaskCommon.TIMviwerLinkOpen(e.data);
                    component.clickCount = 0;
                    component.clickKey = 0;
                    component.clickDate = null;
                }

                if ((!component.clickCount) || (component.clickCount !== 1) || (component.clickKey !== e.key)) {
                    initialClick();

                }

                else if (component.clickKey == e.key) {
                    //if (((new Date()) - component.clickDate) <= 300)
                        //alert("hi");
                        doubleClick();
                   // else
                       // initialClick();
                }


            },



        }).dxDataGrid("instance");
        
    }

    Userlist() {
        TaskCommon.Json_GetHiddenUserWithRoleList((status, Data) => {
            if (status) {
                console.log('DaTa', Data.Table);
                var GetData = Data.Table;
                GetData = GetData.map(function (el) {
                    var o = {};
                    o.UserId = el.UserId;
                    o.UserName = el.UserName;
                    return o;
                });
                return GetData; 
            }
        });
    }
     
    UpdateDetail(ClientNo = "", FolderID = DProjectId, Source="TIM", Subject="", Notes="", SectionId="-1",ContactId='') { 
        TaskCommon.Json_GetFolders(function (Staus, Data1) {
            var myData = Data1.Table ? Data1.Table : Data1.Table1;
            Staus ? CreatFolderOption(myData, FolderID) : console.log('CreatFolderOption Fail');
        });
        TaskCommon.Json_GetClientsByFolder(FolderID, function (Staus, Data1) { Staus ? CreatReference(Data1.Table1, ClientNo) : console.log('CreatReference fail'); });
        TaskCommon.Json_GetSections(FolderID, function (Staus, Data1) { Staus ? Creatsection(Data1.Table, SectionId) : console.log('Creatsection fail'); });
        var Discreption = Source != 'TIM'? Source == 'CRM' ? Subject : Notes: "";
        Source != 'TIM' ? this.DisableDetail(true) : this.DisableDetail(false);

        $('#Task_Discription').val(Discreption);




        if (ClientNo != '') {
            $(".DurationDiv").removeClass('col-sm-6');
            $(".DurationDiv").addClass('col-sm-3');
            $("#contactDiv").show();
            TaskCommon.Json_GetAllContactsByClientID(FolderID, ClientNo, (status, Data) => {
                if (status) {
                    var ContactList = Data.Table;
                    var MainContactArray = ContactList;
                    this.CreatContact(MainContactArray, ContactId);



                }
            });
        } else {
            $(".DurationDiv").removeClass('col-sm-6');
            $(".DurationDiv").addClass('col-sm-3');
            $("#contactDiv").hide();
        }
        
       
    }

    DisableDetail(bool) {
        $('#Task_Folder').attr('disabled', bool);
        $('#Task_AssociateWithClient').attr('disabled', bool);
        $('#Task_Section').attr('disabled', bool);
        bool ? this.Time.TID == '0' ? $('#RelinkTask').show() : $('#RelinkTask').hide() : $('#RelinkTask').hide();

    }


    createTableBodyTaskTasble(GetData, type) {

        GetData = GetData.filter(o => o.Source == type);
        GetData = GetData.map(function (el) {
            var o = Object.assign({}, el);

            o.UID = el.ID + '_' + el.WorkID + '_' + Math.floor(Math.random() * 100000);

            return o;
        });
        console.log('testhp', GetData);
        var Datakey = GetData.length ? Object.keys(GetData[0]) : Object.keys('');

        var ColumbArray = [
            {
                dataField: "Folder",
                caption: "Folder",


            }, {
                dataField: "Client",
                caption: "Client Name",
                //  fixed: true,

            },
            {
                dataField: "Section",
                caption: "Section",
                //fixed: true,

            },


        ]


        type == 'WPS' ? ColumbArray.push({
            dataField: "Notes",
            caption: "Notes",
            width: 300,
        }) : '';

        type == 'CRM' ? ColumbArray.push({
            dataField: "Subject",
            caption: "Subject",
            width: 300,
        }) : '';



        var FilterDatecol = [];
        var ValiddateArray = [
            "CreationDate",
            "WorkDate",
            "CompletionDate",

        ];

        for (var key in Datakey) {
            var keyname = Datakey[key].toString();
            if (keyname.includes("Date") || ValiddateArray.includes(Datakey[key].toString())) {
                // console.log("myval", keyname);
                FilterDatecol.push(keyname);
            }
        }
        for (var k in GetData) {
            for (var dval in FilterDatecol) {
                var nkey = FilterDatecol[dval];
                if (GetData[k][nkey] != null && GetData[k][nkey] != "") {
                    var jsonDate = GetData[k][nkey];
                    var fullDate = TaskCommon.SETServerDateFormat1(jsonDate);
                    if (fullDate != '1900-01-01') {
                        GetData[k][nkey] = fullDate;
                    } else {
                        GetData[k][nkey] = '';
                    }

                }
            }
        }

        this.dataGrid = $("#TaskTable").dxDataGrid({
            keyExpr: "UID",
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
                mode: "single"
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
            customizeColumns: function (columns) {

                for (var i = 0; i < columns.length; i++) {

                    if (columns[i].dataField.includes("Date") || ValiddateArray.includes(columns[i].dataField.toString())) {
                        columns[i].dataType = "date";
                        //columns[i].format = localStorage.getItem("dateformat");
                        columns[i].format = "dd/MM/yyyy";
                        console.log('columns[i]', columns[i]);
                    }
                }
            },
            onEditorPreparing: function (e) {
                console.log("Response", e);


            },

            columns: ColumbArray,
            onSelectionChanged: function (selectedItems) {

                var MainContactDetail = [];
                for (var i = 0; i < selectedItems.selectedRowsData.length; i++) {
                    MainContactDetail.push(selectedItems.selectedRowsData[i]);

                }
            },


            onCellDblClick: function (e) {

            },
            onCellClick: function (e) {
                // console.log(e);

            },
            onRowClick: (e) => {
                var component = e.component;

                var initialClick = () => {

                    console.log('initial click for key ' + e.key);
                    console.log('initial click for key ', e.data);
                    var { ClientNo, FolderID, Source, Subject, Notes, SectionId, ID } = e.data;
                    this.UpdateDetail(ClientNo, FolderID, Source, Subject, Notes, SectionId)
                    TaskId = ID;
                    $('#TaskListModal').modal('hide');
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



        }).dxDataGrid("instance");

    }
 

    setTimingCRM_And_WPS(Type) {
        
       
        $('#TaskListModal').modal({
            backdrop: 'static',
            keyboard: false
        });
        setTimeout(() => {
            this.createTableBodyTaskTasble(this.AllTaskList, Type);
        },1000);
    }

    
    SaveTimingRecord(callback) {
        var obj = {};
        obj.Tid = this.Time.TID;
        obj.LUserId = this.Time.LUserId;
        obj.FolderID = this.Time.FolderID;
        obj.SectionId = this.Time.SectionId;
        obj.OriginatorNo = this.Time.OriginatorNo;
        obj.Description = this.Time.Description;
        obj.WorkDate = TaskCommon.SETDate(this.Time.WorkDate);
        obj.Duration = this.Time.Duration;
        obj.CreationDate = TaskCommon.SETDate(TaskCommon.cuureantDate());
        obj.Charge = this.Time.Charge;
        obj.Overwritten = this.Time.Overwritten;
        obj.SubSectionID = this.Time.SubSectionID;
        obj.Rate = this.Rate;
        obj.Comment = this.Time.Comment;
        obj.TaskType = this.Time.TaskType;
        obj.TaskID = TaskId;
        obj.ContactNo = this.Time.ContactNo;
        TaskCommon.Json_SaveTimingRecords(obj, (status) => {
            if (status) {
                return callback(status);
            } else { 
                return callback(status);
            }
        });
    }

    CreatContact(AllMainContact, value = '') {
        $("#Timing_Contact").empty();
        $("#Timing_Contact").append('<option   value="">------Select--------</option>');
        for (var i = 0; i < AllMainContact.length; i++) {
            var Name = AllMainContact[i]['First Name'] + ' ' + AllMainContact[i]['Last Name'];
            $("#Timing_Contact").append('<option   value="' + AllMainContact[i].ContactNo + '">' + Name + '</option>');
        }
        $("#Timing_Contact").val(value);
    }

    UpdateTimingRecord() {
        TaskCommon.Json_GetTimingRecordById(this.Time.TID, (status, Data) => {

            if (status) {
                console.log('Data', Data.Table);
                var { OriginatorNo: ClientNo, FolderID, TaskType: Source, Comment, Description, Duration, Overwritten,
                    UserID, SectionId, WorkDate, SubSectionID, TaskID: ID, ContactNo, Charge } = Data.Table[0];
                TaskCommon.Json_GetFolders(function (Staus, Data1) {
                    var myData = Data1.Table ? Data1.Table : Data1.Table1;
                    Staus ? CreatFolderOption(myData, FolderID) : console.log('CreatFolderOption Fail');
                });
                TaskCommon.Json_GetClientsByFolder(FolderID, function (Staus, Data1) { Staus ? CreatReference(Data1.Table1, ClientNo) : console.log('CreatReference fail'); });
                TaskCommon.Json_GetSections(FolderID, function (Staus, Data1) { Staus ? Creatsection(Data1.Table, SectionId) : console.log('Creatsection fail'); });
                Overwritten ? $('#chkOverwriteCharge').val(true).trigger('click') : '';
                TaskCommon.createSubsectionBySection(FolderID, SectionId, SubSectionID);
                $('#Task_Discription').val(Description);
                $('#Task_Comment').val(Comment);
                $('#Task_Charge').val(Charge);
                $('#Task_Unit').val(Duration);
                $('#Task_Duration').val(Duration / DiviedForDuration);
                $('#Task_Type').val(Source);
               // $('#Task_Type').trigger('change');

                $('#Task_Date').val(TaskCommon.MyDate(WorkDate));
                Overwritten ? $('#Task_Charge').attr('disabled', false) : $('#Task_Charge').attr('disabled', true);
                Source != 'TIM' ? this.DisableDetail(true) : this.DisableDetail(false);

                $('#Task_Type').attr('disabled', true);

                TaskCommon.Json_GetCategory(SectionId, (status, Data) => {
                    if (status) {
                        var Discription = Data.Table2;
                        console.log('Discription', Data);
                        CreatDiscription(Discription);


                        $('#Task_Owner').val(UserID);
                        $('#Task_Owner').trigger('change');


                        $("#DiscriptionDiv").removeClass('col-sm-12');
                        $("#DiscriptionDiv").addClass('col-sm-6');
                        $('#SDdiscriptionDiv').show();
                    }
                });


                if (ClientNo != '') {
                    $(".DurationDiv").removeClass('col-sm-6');
                    $(".DurationDiv").addClass('col-sm-3');
                    $("#contactDiv").show();
                    TaskCommon.Json_GetAllContactsByClientID(FolderID, ClientNo, (status, Data) => {
                        if (status) {
                            var ContactList = Data.Table;
                            var MainContactArray = ContactList;
                            this.CreatContact(MainContactArray, ContactNo);



                        }
                    });
                } else {
                    $(".DurationDiv").removeClass('col-sm-6');
                    $(".DurationDiv").addClass('col-sm-3');
                    $("#contactDiv").hide();
                }
               TaskId = ID;
            } 
        });
    }


    async AddBantchEntryTIM(RowObj,
        Count, LCount) {
        var { ClientId, SubSectionId, Description,
            ContactNo, Overwrite, Comment, 
            FolderID, SectionId, Charge,
            Duration, UserId, WorkDate } = RowObj;
        console.log('RowObj', RowObj);
        this.setCharge(UserId);
        var obj = {};
        obj.TID = 0;
        obj.LUserId = UserId;
        obj.FolderID = FolderID;
        obj.SectionId = SectionId;
        obj.SectionId = SectionId;
        obj.SubSectionID = SubSectionId ? SubSectionId:'-1';
        obj.OriginatorNo = ClientId;
        obj.Description = Description;
        obj.Duration = Duration;
        obj.Charge = Charge;
        obj.Overwritten = Overwrite;
        obj.Comment = Comment?Comment:'';
        obj.TaskType = 'TIM';
        obj.ContactNo = ContactNo ?ContactNo : 0;
        obj.WorkDate = TaskCommon.SETDate(WorkDate);
        this.Time = obj;
        await this.SaveTimingRecord((status) => {
            if (status && LCount == Count) { 
                $('.msgRename').html("Record Saved !").fadeIn('slow').css({ "padding": "5px", "color": "white", "background": "green" }); //also show a success message 
                $('.msgRename').delay(2800).fadeOut('slow'); 
                BatchEntry()
                Json_CRM_Timing_Record_List();
            }
        });

    }


}




class DateFilter {
    constructor(AllTaskList, FildName) {
        let datec = new Date();
        this._StartDate = datec;
        this._EndDate = datec;
        this.FildName = FildName;  
        this.AllTaskList = AllTaskList;
    }

    set StartDate(val) {
        this._StartDate = val;
    }
    set EndDate(val) {
        this._EndDate = val;
    }

	Json_GetUserTheme(callBack) {
        var obj = {};
        super.CreateNewServiceParamObject("Json_GetUserTheme", obj, true);

        super.CallNewService("Json_GetUserTheme", function (status, Data) {
            if (status) {
                callBack(true, Data);
            }
            else {
                callBack(false,[]);
            }
        })
    }
	
    getDateByType(Type, Count) {
        var date = new Date();
        if (Type == 'Day') {
            date.setDate(date.getDate() - Count);
        } else if (Type == 'Month') {
            date.setMonth(date.getMonth() - Count);
        } else if (Type == 'Years') {
            date.setMonth(date.getFullYear() - Count);
        }

        return date;


    }

    filterDateByDate() {
        let ed = new Date(this._EndDate).getTime();
        let sd = new Date(this._StartDate).getTime();
        var time;
        console.log('filterDateByDate', sd)
        console.log('filterDateByDate', ed)
        let result = this.AllTaskList.filter(Task => {
            let todate = Task[this.FildName] ? Task[this.FildName] :'-2208988800000';
            if (!todate.includes('-2208988800000')) {
                if (todate.includes('Date')) {
                    var parsedDate = new Date(parseInt(todate.substr(6)));
                    time = new Date(parsedDate).getTime();
                } else {
                    time = new Date(todate).getTime();
                }

            } else {
                return false;
            }

            return (sd <= time && time < ed);
        });
        console.log('Data1', this.AllTaskList);
        return result;

    }

      getFilterDatabyType(Type = '', Count = 0) {
        switch (Type) {
            case 'Day':
                this._StartDate = this.getDateByType(Type, Count);
                this._EndDate = new Date();
                return  this.filterDateByDate();
                break;
            case 'Month':
                this._StartDate = this.getDateByType(Type, Count);
                this._EndDate = new Date();
                return this.filterDateByDate()
                
                break;
            case 'Years':
                this._StartDate = this.getDateByType(Type, Count);
                this._EndDate = new Date();
                return this.filterDateByDate();
                break;
            case 'Today':
                var d = new Date();
                this._StartDate = d;
                this._EndDate = d.setHours(23, 59);
                return this.filterDateByDate();
                break;
            default:
                return  this.filterDateByDate();
                break;

        }
    }

}

Number.prototype.before = function () {
    var value = parseInt(this.toString().split(".")[0], 10);//before
    return value ? value : 0;
}

Number.prototype.after = function () {
    var value = parseInt(this.toString().split(".")[1], 10);//after
    return value ? value : 0;
}






