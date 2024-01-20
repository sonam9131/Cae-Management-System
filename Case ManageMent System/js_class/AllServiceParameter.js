class AllServiceParamerter extends API {
    constructor(APIUrl, agrno, Email, password) {
        super(APIUrl);
        var Obj = {}
         Obj.agrno = agrno;
         Obj.Email = Email;
         Obj.password = password;
        this.MainObj = Obj; 
        this.SetTittel()
    }

    CreateNewServiceParamObject(name, value, mainBool) {
        var ParamName = "Param_" + name;
        var Obj = this.MainObj;
        if (mainBool) {
            this[ParamName] = { ...Obj, ...value };
        } else if (value) {
            this[ParamName] = value;
        } else {
            this[ParamName] = Obj;
        }
    }
	 
	 
    SetTittel() {
        this.pageTittelArray = [
            {
                'page': 'TaskList.html',
                'title': 'All Task'
            },{
                'page': 'newtask.html',
                'title': 'New CRM Task'
            },{
                'page': 'WPSViewer.html',
                'title': 'New WPS Task'
            },{
                'page': 'TimingRecord.html',
                'title': 'All Timing Record'
            },{
                'page': 'newtime.html',
                'title': 'New Timing Record'
            },{
                'page': 'dashboard.html',
                'title': 'Dashboard'
            },
			
			{
                'page': 'all_contacts.html',
                'title': 'All Contacts'
            },
			
			{
                'page': 'all_contacts.html',
                'title': 'All Contacts'
            },
			
			{
                'page': 'clients.html',
                'title': 'Clients'
            },
			{
                'page': 'team_task.html',
                'title': 'Clients'
            },
			{
                'page': 'add_client.html',
                'title': 'Add Client'
            },
			{
                'page': 'edit_client.html',
                'title': 'Edit Client'
            },
			{
                'page': 'add_contact.html',
                'title': 'Add Contact'
            },
			
			{
                'page': 'add_contact.html',
                'title': 'Edit Contact'
            },
			
			{
                'page': 'client-manager.html',
                'title': 'Client Manager'
            },
			
			
        ]

        this.CreateFabIcon();
        var CurrentPage = document.location.pathname.match(/[^\/]+$/)[0];
        var [currentPageObj] = this.pageTittelArray.filter(o => o.page == CurrentPage);
        document.title = currentPageObj ? currentPageObj.title + " | Docusoft":'Docusoft';
    }

    CreateFabIcon() {
       
        var link = '../Images/logo16x16.png';
        let $favicon = document.querySelector('link[rel="icon"]')
        // If a <link rel="icon"> element already exists,
        // change its href to the given link.
        if ($favicon !== null) {
            $favicon.href = link
            // Otherwise, create a new element and append it to <head>.
        } else {
            $favicon = document.createElement("link")
            $favicon.rel = "icon"
            $favicon.href = link
            document.head.appendChild($favicon)
        }
    }

}