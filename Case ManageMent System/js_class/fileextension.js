function getfileextension(filetype) {
    var vimg;
 
    var typechk = filetype.toLowerCase();

    if (typechk === "pdf") {
        
        vimg = "fa fa-file-pdf-o";
      
    }
    else if (typechk === "rtf") {
        vimg = "fas fa-file-alt";
       
    }
    else if (typechk === "png") {
        vimg = "fas fa-file-image"; 
       
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