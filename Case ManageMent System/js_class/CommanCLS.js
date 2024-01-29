
class CommanCLS extends AllService {
    constructor(agrno, Email, password, APIUrl) {
        super(agrno, Email, password, APIUrl);
    }
//get all contact by folderid

  
getAllContactsForList(FolderId,callBack) {   
    var obj = {};
     obj.intFolderId = FolderId;
     super.CreateNewServiceParamObject('Json_GetContactListByFolder', obj, true);
     super.CallNewService('Json_GetContactListByFolder', async function (status, Data) {        
         if (status) {
             if (await Data != "") {
                 return callBack(true, Data);
             }
             else {
                 return callBack(false, []);
             }
         }
         else {
            return callBack(false, []);
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

    Json_GetClientsByFolder(obj,callBack) {
         
        super.CreateNewServiceParamObject('Json_GetClientsByFolder',obj,true);
        super.CallNewService('Json_GetClientsByFolder', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_GetClientsByFolder', JData);
				if(JData !=""){
				 return callBack(true, JData);
				}
               
            } else {
                return callBack(false, []);
            }
        });
    }
    

    Json_Get_CRM_UserByProjectId(obj,callBack) {
         
        super.CreateNewServiceParamObject('Json_Get_CRM_UserByProjectId',obj,true);
        super.CallNewService('Json_Get_CRM_UserByProjectId', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_Get_CRM_UserByProjectId', JData);
				if(JData !=""){
				 return callBack(true, JData);
				}
               
            } else {
                return callBack(false, []);
            }
        });
    }
    Json_GetSections(obj,callBack) {
         
        super.CreateNewServiceParamObject('Json_GetSections',obj,true);
        super.CallNewService('Json_GetSections', function (status, Data) {
            if (status) {
                var JData = JSON.parse(Data);
                console.log('Json_GetSections', JData);
				if(JData !=""){
				 return callBack(true, JData);
				}
               
            } else {
                return callBack(false, []);
            }
        });
    }
    

    Json_GetFolders(obj,callBack) { 
        
        super.CreateNewServiceParamObject('Json_GetFolders',obj,false);
        super.CallNewService('Json_GetFolders', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_GetFolders', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
    }
    Json_GetForwardUserList(obj,callBack) { 
        
        super.CreateNewServiceParamObject('Json_GetForwardUserList',obj,false);
        super.CallNewService('Json_GetForwardUserList', function (status, Data) {
        if (status) {
            var JData = JSON.parse(Data);
            console.log('Json_GetForwardUserList', JData);
            return callBack(true, JData);
        } else {
            return callBack(false, []);
        }
    });
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

}//End CommanCls


