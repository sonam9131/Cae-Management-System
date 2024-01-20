//var APIURL = "https://mydocusoft.com/DSDesktopWebService.asmx/";
var APIURL = "https://practicetest.docusoftweb.com/PracticeServices.asmx/";

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




var global_json;
var encodedData;
var data_formethos;
var Email;
var fectorvaryfy = false;


var paramss = new window.URLSearchParams(window.location.search);
 var redurl = paramss.get("redirecturl");


$(document).ready(function () {	
	var params = new window.URLSearchParams(window.location.search);   
    var chkval = params.get("check");
    var getEmail = params.get("Email");
    var getagrno = params.get("accid");
   // alert("chkval" + chkval + "getEmail" + getEmail);
    if (chkval != null && chkval != "" && getEmail != null && getEmail != "") {
        $('#txtpass1').val(window.atob(chkval));
        $('#txtEmail').val(getEmail);
        //alert("jk");
        // $('#btnLogin').click();
        // $('#btnLogin').focus().click();
        // document.getElementById("btnLogin").click();
        // $('#btnLogin').trigger('click');

        var upass = $('#txtpass1').val();

        if (upass != "") {
            encodedData = window.btoa(upass);

            Email = $("#txtEmail").val();

            localStorage.setItem("Email", Email);
            localStorage.setItem("pass", encodedData);

            data_formethos = "{'Email':'" + Email + "','password':'" + encodedData + "'}";

            genralAjax(data_formethos, 'Json_GetAgreementList', function (returnValue) {
                console.log("returnValue: ", returnValue);
                var str = JSON.parse(JSON.stringify(returnValue));
             //   alert(str.d);

                if (str.d != null) {

                    if (str.d != 'Invalid' && str.d != "") {
                        $('.ms-List  li').remove();
                        var js = JSON.parse(str.d);

                       var  data = js.Table;
                        var json = data;
                        global_json = json;
                        if (json.length === 1) {

                            varifyuser(json[0]);
                        }
                        else {

                            $("#ModalLogin").modal('show');

                            for (var i = 0; i < json.length; i++) {
                                // alert(json[i].intUserId);
                                CreateListAgre(json[i]);
                            }
                        }
                    }

                    else {
                        console.log('Please Fill Required Field');
                        $.alert({
                            title: 'Alert!',
                            content: 'Invalid Login Detail(s)'
                        });
                        // alert("Invalid credentials");
                    }
                }
                else {
                    $.alert({
                        title: 'Alert!',
                        content: 'Invalid Login Detail(s)'
                    });
                }

            });

        }
        else {
            console.log('Please Fill Required Field');
        }

    }
	else
	{
		localStorage.clear();
	}

	
	
    

    $("#emailhideshow").css("display", 'none');

    $('input').keypress(function (e) {
        if (e.which == 13) {
            jQuery('#btnLogin').focus().click();
        }
    });

    var docD = new Date();

    $("#DocDate").val(docD);

    $('#btnLogin').on('click', function () {
        // alert('login');
        var upass = $('#txtpass1').val();
      
        if (upass != "") {
            encodedData = window.btoa(upass);
          
            Email = $("#txtEmail").val();

            localStorage.setItem("Email", Email);
            localStorage.setItem("pass", encodedData);

            data_formethos = "{'Email':'" + Email + "','password':'" + encodedData + "'}";

            genralAjax(data_formethos, 'Json_GetAgreementList', function (returnValue) {
                console.log("returnValue: ", returnValue);
                var str = JSON.parse(JSON.stringify(returnValue));
                //alert(str.d);
               
                if (str.d != null) {
                   
                    if (str.d != 'Invalid' && str.d != "") {
                        $('.ms-List  li').remove();
                        var jss = JSON.parse(str.d);
                       var data = jss.Table;
                        var json = data;
                        global_json = json;
                        if (json.length === 1) {

                            varifyuser(json[0]);
                        }
                        else {

                            $("#ModalLogin").modal('show');

                            for (var i = 0; i < json.length; i++) {
                                // alert(json[i].intUserId);
                                CreateListAgre(json[i]);
                            }
                        }
                    }

                    else {
                        console.log('Please Fill Required Field');
                        $.alert({
                            title: 'Alert!',
                            content: 'Invalid Login Detail(s)'
                        });
                        // alert("Invalid credentials");
                    }
                }
                else {
                    $.alert({
                        title: 'Alert!',
                        content: 'Invalid Login Detail(s)'
                    });
                }

            });

        }
        else {
            console.log('Please Fill Required Field');
        }
    });
    $(document).on("click", '.ms-List li', function () {
        // alert('li');
        var i = "-1";
        localStorage.removeItem("agrno");
        localStorage.removeItem("intUserId");

        localStorage.removeItem("agrno");
        var agrs = $(this).attr("id");
        var strsplit = agrs.split(",");
        var agrno = strsplit[0];
        var intUserId = strsplit[1];

        if (global_json != null) {
            for (var j = 0; j < global_json.length; j++) {
                if (agrno == global_json[j].vAgreementNo) {
                    i = j;
                    break;
                }
            }
        }
        if (i != -1) {
            varifyuser(global_json[i]);
        }

    });

    BrowserDetection();
    function BrowserDetection() {
        if (navigator.userAgent.search("MSIE") >= 0) {
            //code goes here
            //alert("MSIE");
        }
        else if (navigator.userAgent.search("Chrome") >= 0) {
            //code goes here
            //  alert("Chrome");
        }
        else if (navigator.userAgent.search("Firefox") >= 0) {
            //code goes here
            // alert("Firefox");
        }
        else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            //code goes here
            // alert("Safari");
            safari();
        }
        else if (navigator.userAgent.search("Opera") >= 0) {
            //code goes here
            //alert("Opera");
        }
    }

    function safari() {
        //  alert("fsd");

        $('script[src="assets/js/rocket-loader.min.js"]').remove();
    }

    $('input').keypress(function (e) {
        if (e.which == 13) {
            jQuery('#btntwofactore').focus().click();
        }
    });

    $("#btntwofactore").click(function () {


        var PIN = $("#validatecode").val();
        var PrivateKey = localStorage.getItem("PrivateKey");
        var datag = "{'PIN':'" + PIN + "','PrivateKey':'" + PrivateKey + "'}";
        // alert(datag);
        genralAjax(datag, 'Json_VarifyTwoFactor', function (returnValue) {
            var str = JSON.parse(JSON.stringify(returnValue));
            //alert(str.d);
          
            if (str.d == 'Success') {
				
				if ($("#exampleCheck1").prop('checked')) {
                    var now = new Date();
                    now.setMonth(now.getMonth() + 1);
                    var emailidk = localStorage.getItem('Email');
                    document.cookie = emailidk + "=" + "";
                    document.cookie = "expires=" + now.toUTCString() + ";"
                }
				
                fectorvaryfy = true;
              
                //alert(data);
                getaccesstoken();
             
            }
            else {
                $("#showerror").text(str.d);
            }

        });


    });

});

function CreateListAgre(rowObject) {
 $('#Client .ms-List').append('<li id="' + rowObject.vAgreementNo + ',' + rowObject.intUserId + '"><i class="fa fa-building" aria-hidden="true"></i>  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">' + rowObject.vCustomerName + '</a> </li>');
    //$('.ms-List').append('<li id="' + rowObject.vAgreementNo + ',' + rowObject.intUserId + '"  class="ms-ListItem nav nav-pills nav-stacked nav-bracket">' + rowObject.vCustomerName + '</span></li>');

}


function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function varifyuser(rowObject) {
   
    localStorage.setItem("TwoFactorTrue", rowObject.TwoFactor);
    localStorage.setItem("strIsAdmin", rowObject.strIsAdmin);
    localStorage.setItem("agrno", rowObject.vAgreementNo);
    localStorage.setItem("intUserId", rowObject.intUserId);
    localStorage.setItem("companyName", rowObject.vCustomerName);
    
	var portal = rowObject.IsPortalOnlyUser;
   
    if (portal == true) {
        
        var lhost = location.host;
        var prt = location.protocol;
        var strurl = prt + "//" + lhost;
        // var encodedData = window.btoa(password);
        // console.log("encodedData: ", encodedData);

       //var stringURl = "https://www.sharedocuments.co.uk/portalmanager.aspx?accid=" + rowObject.vAgreementNo + "&email=" + localStorage.getItem("Email") + "&check=" + localStorage.getItem("pass") + "&host=" + strurl + "&practice=" + rowObject.vCustomerName;
        // console.log("Url sunil",stringURl);
      //  setTimeout(function () {
         //       getthemecolor();
                // loaderHideShow(false);
          //  }, 3000);
       //  var cssth = localStorage.getItem("cssTheme");
		//alert(localStorage.getItem("pass"));
		//		alert(localStorage.getItem("agrno"));
		//		alert(Email);
        localStorage.clear();
     //   localStorage.setItem("cssTheme", cssth);
        location.href = stringURl;

    }
	else{
    twofactor();
	
   
   var TwoFactor = rowObject.TwoFactor;
//alert(TwoFactor);
	
    if (TwoFactor == true ) {
		//alert("if part",TwoFactor);
        var emailg = readCookie(localStorage.getItem('Email'));
        // var argnog = readCookie(localStorage.getItem('argno'));
//alert("cookie",emailg);
        if (emailg != null) {
            fectorvaryfy = true;
            getaccesstoken();
            $("#twofactorepass").modal('hide');
        }
        else {
            fectorvaryfy = false;
            $("#twofactorepass").modal('show');
            
        }
        
    }
    else {
		//alert("else part",);
        fectorvaryfy = true;
        getaccesstoken();
    }

	}

}
function MailLogin(data) {
 
    genralAjax(data, 'Json_MailLogin', function (returnValue) {
       
        var str = JSON.parse(JSON.stringify(returnValue));
        if (str.d != "" && str.d != null && str.d != "undefined" && str.d != "{}") {
        var jsonObj = JSON.parse(str.d);
		var lhost = location.host;
        var prt = location.protocol;
        
        //alert(jsonObj.Status);
        if (jsonObj.Status === "Success") {
            localStorage.setItem("GUID", jsonObj.Message);

            } 
        }
		
		
		localStorage.setItem('IsReminderShow', true);
        if (redurl == "" || redurl == null || redurl == undefined) {
            var file = "task-summary.html";
            window.location.href = prt + "//" + lhost + "/" + file;
		 }
		else{
			window.location.href=redurl;
		}

       // window.location.href = prt + "//" + lhost + "/Landing.aspx?agrno=" + localStorage.getItem("agrno") + "&email=" + localStorage.getItem("Email") + "&check=" + localStorage.getItem("pass") + "&userid=" + localStorage.getItem("intUserId");
    });
}
function getaccesstoken() {
	Json_GetUserDetails();
    var data = "{'agrno':'" + localStorage.getItem('agrno') + "', 'Email':'" + Email + "','password':'" + encodedData + "'}";
    genralAjax(data, 'Json_GetAccessToken', function (returnValue) {
       // alert(returnValue);
        var str = JSON.parse(JSON.stringify(returnValue));
        var lhost = location.host;
        var prt = location.protocol;
        //alert(str.d);
        if (str.d != "" && str.d != "-1" && str.d !="0") {
              if (fectorvaryfy == true) {
                localStorage.setItem('DefaultFolderID', str.d);
                localStorage.setItem('ProjectId', str.d);
                  getViewerToken(data);
                  getthemecolor();
                MailLogin(data);
                
               
            }
            else {
                $("#twofactorepass").modal('hide');
            }
            }
        else {
            localStorage.removeItem("strIsAdmin");
            localStorage.removeItem("agrno");
            localStorage.removeItem("intUserId");
            localStorage.removeItem("companyName");
            //  alert("Invalid credentials");
            $.alert({

                title: 'Alert!',
                content: 'Invalid Login Detail(s)'
            });
        }
    });
}

function getthemecolor() {

    var data = "{'agrno':'" + localStorage.getItem('agrno') + "', 'Email':'" + Email + "','password':'" + localStorage.getItem('pass') + "'}";
    genralAjax(data, 'Json_GetUserTheme', function (returnValue) {
        // alert(returnValue);
        var str = JSON.parse(JSON.stringify(returnValue));
        // alert(str.d);
        if (str.d != "" && str.d != "{}") {
            localStorage.setItem("cssTheme", str.d);
        }
    });

}



function Json_GetUserDetails() {
    let obj = {
        agrno: localStorage.getItem('agrno'),
        Email: Email,
        password: localStorage.getItem('pass'),
        stremail: Email
    };
    console.log("get data", obj);
    let data = JSON.stringify(obj);
    genralAjax(data, "Json_GetUserDetails", function (returnValue) {
        var str = JSON.parse(JSON.stringify(returnValue));
        let tbl = JSON.parse(str.d);
        let json = tbl.Table;
        console.log("get data", json);
        if (json.length > 0) {
            localStorage.setItem("Extension", json[0]["Extension"]);
        }

    })
   

}

function twofactor() {
    var data = "{'agrno':'" + localStorage.getItem('agrno') + "', 'Email':'" + Email + "','password':'" + localStorage.getItem('pass')  + "'}";
        genralAjax(data, 'Json_GetFactorGuid', function (returnValue) {
            // alert(returnValue);
            var str = JSON.parse(JSON.stringify(returnValue));
            // alert(str.d);
            console.log("guid key", str.d);
            localStorage.setItem("PrivateKey", str.d);

        });
    }
 function getViewerToken(data) {
   // alert(data);

    genralAjax(data, 'Json_getViewerToken', function (returnValue) {

        var str = JSON.parse(JSON.stringify(returnValue));
        console.log("getViewerToken", str.d);
     
        localStorage.setItem("ViewerToken", str.d);
    

    });
} 