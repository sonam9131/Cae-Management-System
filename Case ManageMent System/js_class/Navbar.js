class NavBar {
    constructor() {

        var UserName = localStorage.getItem("UserName");
        UserName ? $('.username').text(UserName) : '';
        this.MenuList = [
            {
                'Name': 'Dashboard',
                'URL': 'dashboard.html',
                'Icon': 'fa fa-tachometer' 
            },
            {
                'Name': 'Client',
                'URL': 'clients.html',
                'Icon':'fa fa-user'
            },{
                'Name': 'Task',
                'URL': 'TaskList.html',
                'Icon': 'fa fa-tasks'
            },
			{
                'Name': 'Timing Record',
                'URL': 'TimingRecord.html',
                'Icon': 'fa fa-clock-o'
            },
        ]

    }

    
    createNavBar() {
        $("#NavBarList").empty();
        var MenuList = this.MenuList;
        for (let Navobj of MenuList) {
            $("#NavBarList").append('<li class="nav-item"> <a class="nav-link" href="' + Navobj.URL + '" > <i class="' + Navobj.Icon +'"></i> ' + Navobj.Name +'</a > </li>');
        }
        this.CreateSetingNavDinamic();
    }
	  CreateSetingNavDinamic() {
        var strHtml = ` <li class="pull-right">
                                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span class="profileimg" style="padding: 12px 10px;"><i class="fa fa-user"></i></span>  <span class="username">${Email}</span>
                                      <span class=" fa fa-angle-down"></span>
                                  </a>
                                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                                      
                                      <li>
                                          <a href="settings.html" target="_blank">
                                              <!--<span class="badge bg-red pull-right">50%</span>-->
                                              <span>Settings</span>
                                          </a>
                                      </li>

                                      <li><a target="_blank" href="https://www.mydocusoft.com/UserGuide/Index.html">Help</a></li>
                                      <li class="logoutcss"><a href="https://docusoftpractice.com/"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                                  </ul>
                              </li>`;

        $('#NavBarList').append(strHtml)

    }
}