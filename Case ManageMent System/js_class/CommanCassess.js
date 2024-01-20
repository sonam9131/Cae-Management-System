
var agrno = localStorage.getItem("agrno");
var Email = localStorage.getItem("Email");
var password = localStorage.getItem("pass");
var GetProjectId = localStorage.getItem("ProjectId");
var APIURL = "DsPracticeService.asmx/";

const AllServices = new AllService(agrno, Email, password, APIURL);
var roleList,dataGridRole;

$(document).ready(function () {
    $('.etClientList').val("");
    $('#Onedrive_FolderPath').val("");
    $('#SharePoint_FolderPath').val("");
    $('#SharePointSite').val("");

    var onedrive = new OneDrive(agrno, Email, password, APIURL);
    //console.log();
    onedrive.ClientList(GetProjectId, function (status, Data) {
        if (Data != "") {
            console.log("Get Client List", Data);
            var strj = JSON.parse(Data);
            var dcodejson = strj.Table;
            onedrive.GetOneDrivePathForSearch(dcodejson[0]["OriginatorNo"]);
            onedrive.GetSharePointSettings(dcodejson[0]["OriginatorNo"]);
            for (var i = 0; i < dcodejson.length; i++) {
                $(".getClientListOne").append('<option value="' + dcodejson[i]["OriginatorNo"] + '">' + dcodejson[i]["Company Name"] + '</option>');
                $(".getClientListShare").append('<option value="' + dcodejson[i]["OriginatorNo"] + '">' + dcodejson[i]["Company Name"] + '</option>');
            }
        }
    })

    $(document).on('change', '.getClientListOne', function () {
        
        $('#Onedrive_FolderPath').val("");
       
        var gid = $(this).val();
        onedrive.GetOneDrivePathForSearch(gid);
        
    });
    $(document).on('change', '.getClientListShare', function () {
       
        $('#SharePoint_FolderPath').val("");
        $('#SharePointSite').val("");

        var gid = $(this).val();
        
        onedrive.GetSharePointSettings(gid);
    });

    $(document).on('click', '#OneDriveSubmit', function () {

        onedrive.SetOneDrivePathForSearch();
    });

    $(document).on('click', '#SharePointSubmit', function () {

        onedrive.SetSharePointSettings();
    });

    onedrive.Configurationbusiness(async function (status, Data) {
        if (status) {
            if (await Data != "") {
                var js = JSON.parse(Data);
                console.log("configration data", js);

            }
        }
    });

    getRoleData();
	$(document).on("click",".rolesetting",function(){
	getRoleData();
	})
	
	$(document).on("click","#addRole",function(){
	   dataGridRole.addRow();
        dataGridRole.deselectAll();
	})
	
	
    function getRoleData() {
        onedrive.GetRoleClass(async function (status, Data) {
            if (status) {
                if (await Data != "") {
                    var json = JSON.parse(Data);
                    var jst = json.Table;
                    roleList = jst.map(function (o) {
                        //var ov = Object.assign({}, el);
                        // console.log("Get Role", ov);
                        // return ov;
                        var obj = {};
                        obj.ID = o['RoleId'];
                        obj.Name = o['RoleName'];
                        return obj;
                    });

                    console.log("Get Role", roleList);
                    getRoleGrid(json.Table);
                    $('#totRole').text(json.Table.length);
                }
            }
        })
    }

    function getRoleGrid(jsonData) {
         dataGridRole = $('#gridRole').dxDataGrid({
            dataSource: jsonData,
            keyExpr: 'RoleId',
            showBorders: true,
            paging: {
                enabled: false,
            },
            editing: {
                mode: 'row',
                allowUpdating: true,
               // allowAdding: true,
                allowDeleting: false,
                // selectTextOnEditStart: true,
                //startEditAction: 'click',
            },
            columns: [
                {
                    dataField: 'RoleName',
                    caption: 'RoleName',
                    lookup: {
                        dataSource: roleList,
                        displayExpr: 'Name',
                        valueExpr: 'Name',
                    },

                },


                {
                    dataField: 'RoleRate',
                    dataType: 'Role Rate',
                },
            ],


            onSaved(e) {

                var gdata = e.changes;

                if (e.changes[0]['type'] == "update") {
                    //console.log("update", e.change);
                    onedrive.UpdateUserRoleClass(gdata[0].data['RoleId'], gdata[0].data['RoleName'], gdata[0].data['RoleRate'], function (status, Data) {
                        if (status) {
                            console.log("Update", Data);
                            getRoleData();
                        }
                    });
                }
                if (e.changes[0]['type'] == "insert") {
                    // console.log("insert", e.change);
                    onedrive.AddNewRole(gdata[0].data['RoleName'], gdata[0].data['RoleRate'], async function (status, Data) {
                        if (status) {
                            if (await Data != "") {
                                console.log("Add New Role", Data);
                                getRoleData();
                            }
                        }
                    });
                }

            },
        }).dxDataGrid('instance');

    }





})

class OneDrive extends AllService {

    constructor(agrno, Email, password, APIURL) {
        super(agrno, Email, password, APIURL);

    }

    ClientList(pid, callBack) {
        var obj = {};
        obj.ProjectId = pid;
        super.CreateNewServiceParamObject("Json_GetSupplierListByProject", obj, true);
        super.CallNewService("Json_GetSupplierListByProject", async function (status, Data) {
            if (status) {

                if (await Data != "") {
                    callBack(true, Data)
                }
                else {
                    callBack(false, []);
                }

            }
        })

    }

    GetOneDrivePathForSearch(ClientId) {
        var OBJ = {};
        OBJ.ClientId = ClientId;
        super.CreateNewServiceParamObject("Json_GetOneDrivePathForSearch", OBJ, true);
        super.CallNewService("Json_GetOneDrivePathForSearch", async function (status, Data) {
            if (status) {
                console.log("Onedrive_FolderPath", Data);
                if (await Data != "") {
                    var json = JSON.parse(Data);
                    if (json.Status == 'Success') {

                        $('#Onedrive_FolderPath').val(json.Message);
                    }
                    // $('#Onedrive_FolderPath').val(Data.Message);
                }
                else {
                    console.log("GetOneDrivePathForSearch No Return Value");
                }
            }
        })
    }

    SetOneDrivePathForSearch() {
        var OBJ = {};
        OBJ.ClientId = $('.getClientListOne').val();
        OBJ.Path = $('#Onedrive_FolderPath').val();
        super.CreateNewServiceParamObject("Json_SetOneDrivePathForSearch", OBJ, true);
        super.CallNewService("Json_SetOneDrivePathForSearch", async function (status, Data) {
            try {
                if (status) {
                    console.log(Data);
                    if (Data == "Success") {
                        $('.OnedriveMsg').html("Path Saved").fadeIn('slow').css({ "padding": "5px", "color": "#fff", "background": "green" }); //also show a success message 
                        $('.OnedriveMsg').delay(2500).fadeOut('slow');
                        setTimeout(function () { $("#OneDrive_Modal").modal('hide'); }, 3000);
                    }
                }
            }
            catch (err) {
                console.log(err.message);
            }
        })

    }

    SetSharePointSettings() {
        var OBJ = {};
        OBJ.ClientId = $('.getClientListShare').val();
        OBJ.SharePointFolder = $('#SharePoint_FolderPath').val();
        OBJ.SharePointSite = $('#SharePointSite').val();
        super.CreateNewServiceParamObject("Json_SetSharePointSettings", OBJ, true);
        super.CallNewService("Json_SetSharePointSettings", async function (status, Data) {
            try {
                if (status) {
                    console.log("SetSharePointSettings", Data);
                    var json = JSON.parse(Data);
                    if (json.Status == "Success") {
                        $('.OnedriveMsg').html("Path Saved").fadeIn('slow').css({ "padding": "5px", "color": "#fff", "background": "green" }); //also show a success message 
                        $('.OnedriveMsg').delay(2500).fadeOut('slow');
                        setTimeout(function () { $("OneDrive_Modal").modal('hide'); }, 3000);

                    }
                }
            }
            catch (err) {
                console.log(err.message);
            }
        })

    }


    GetSharePointSettings(ClientId) {
        var OBJ = {};
        OBJ.ClientId = ClientId;
        super.CreateNewServiceParamObject("Json_GetSharePointSettings", OBJ, true);
        super.CallNewService("Json_GetSharePointSettings", async function (status, Data) {
            if (status) {
                console.log("GetSharePointSettings", Data);
                if (await Data != "") {
                    var json = JSON.parse(Data);
                    console.log("json pars", json);
                    if (json.Status == 'Success') {

                        $('#SharePoint_FolderPath').val(json.Message.FolderPath);
                        $('#SharePointSite').val(json.Message.SharePointSite);
                    }
                    // $('#Onedrive_FolderPath').val(Data.Message);
                }
                else {
                    console.log("GetSharePointSettings No Return Value");
                }
            }
        })
    }


    GetRoleClass(callBack) {
        var OBJ = {};
        super.CreateNewServiceParamObject("Json_Get_UserRole", OBJ, true);
        super.CallNewService("Json_Get_UserRole", async function (status, Data) {
            try {
                if (status) {

                    if (await Data != "") {
                        return callBack(true, Data);
                    }
                    else {
                        return callBack(false, []);
                    }
                }
            }
            catch (err) {
                console.log(err.message);
            }
        })

    }

    Configurationbusiness(callBack) {
        var obj = {};
        super.CreateNewServiceParamObject('Json_GetConfiguration', obj, true);
        super.CallNewService('Json_GetConfiguration', async function (status, Data) {
            if (status) {
                try {
                    if (await Data != "") {
                        return callBack(true, Data);
                    }
                    else {
                        callBack(false, []);
                    }
                }
                catch (err) {
                    console.log("get configration api", err.message);
                }

            }
        });
    }

    AddNewRole(Role, RoleRate, callBack) {
        var obj = {};
        obj.Role = Role;
        obj.RoleRate = RoleRate;
        console.log("Parse Role data", obj);
        super.CreateNewServiceParamObject('Json_Add_UserRole', obj, true);
        super.CallNewService('Json_Add_UserRole', async function (status, Data) {
            if (status) {
                try {
                    if (await Data != "") {
                        return callBack(true, Data);
                    }
                    else {
                        callBack(false, []);
                    }
                }
                catch (err) {
                    console.log("Add New Role api", arr.message);
                }

            }
        });
    }
    UpdateUserRoleClass(RoleID, Role, RoleRate, callBack) {
        var obj = {};
        obj.RoleID = RoleID;
        obj.Role = Role;
        obj.RoleRate = RoleRate;
        super.CreateNewServiceParamObject("Json_Update_UserRole", obj, true);
        super.CallNewService("Json_Update_UserRole", async function (status, Data) {
            if (status) {
                if (await Data != "") {
                    console.log("Update Role", Data);
                    return callBack(true, Data)
                }
                else {
                    return callBack(false, "It's Not Set UserRole");
                }
            }
        });
    }
    //end brecket of class 
}