
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




}//End CommanCls


