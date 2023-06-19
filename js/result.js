var userlist=[];
	  var passlist=[];
	  var userIDlist=[];
      var messageCount=[];
      function getusers(){
        jQuery.getJSON("https://script.google.com/macros/s/AKfycbxX7lEFlps7ZVYlxgX9jn7Qm1VtNpGcb0izPJaH9HNicpmtUE6h-15XW-n1t1GQdGNaNA/exec", function (data) {
            var sheetData = data.values;
            for (i = 1; i < sheetData.length; i++) {
            userlist[i-1]=sheetData[i][0]; 		
            passlist[i-1]=sheetData[i][1]; 
            userIDlist[i-1]=sheetData[i][2]; 
            messageCount[i-1]=sheetData[i][4];
            console.log(userIDlist[i-1]);
            }
            
            whenusersloaded();
        });
        //
    }
$( document ).ready(function() {
    getusers();
    //wait until 
    
    });
function whenusersloaded(){
    console.log(userIDlist[0]);
    if(Cookies.get("signedin")!=undefined){
        var index=userIDlist.findIndex(checkID);
        document.getElementById("loginform").style.display = 'none';
        document.getElementById("um").style.display = 'block';
        document.getElementById("username").innerHTML=userlist[index];
        
    }
    else{
        document.getElementById("loginform").style.display = 'block';
        document.getElementById("um").style.display = 'none';
    }
}
function logout(){
	Cookies.remove('signedin');
    window.location.href="forum.html";

}
function login(){
    
}
function checkID(id) {
    return id==Cookies.get("signedin");
  }