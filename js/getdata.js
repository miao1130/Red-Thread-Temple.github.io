var userlist=[];
	  var namelist=[];
	  var piclist=[];
      var contentlist=[];
      var loverlist=[];
      var futurelist=[];
      var pastlist=[];
      var querystring;
      function getusers(){
        jQuery.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1YfzmNIedxcZi6Bh5C7gh1SDX7dl7vQcz15jRcW6l5Kc/values/Sheet1/?key=AIzaSyDmVUZvfygBY5MsTHtlrwcEUL85Qcwyj1E", function (data) {
            
        var sheetData = data.values;
            for (i = 1; i < sheetData.length; i++) {
                namelist[i-1]=sheetData[i][0]; 		
                piclist[i-1]=sheetData[i][1]; 
                contentlist[i-1]=sheetData[i][2];
                loverlist[i-1]=sheetData[i][3];
                futurelist[i-1]=sheetData[i][4];
                pastlist[i-1]=sheetData[i][5];
            }
            
            whenloaded();
        });
        //
    }
$( document ).ready(function() {
    getusers();
    querystring=decodeURIComponent(window.location.search);
    querystring = querystring.substring(1);
    console.log(querystring);
    });
function whenloaded(){
    var index=namelist.findIndex(checkName);
    if(index!=-1){
        document.getElementById("resultname").innerHTML+=(namelist[index])+"的正緣桃花";
        document.getElementById("picture").innerHTML+="<img src="+(piclist[index])+" width="+""+"80%"+""+">";
        document.getElementById("lover").innerHTML+=(loverlist[index]);
        document.getElementById("content").innerHTML+=(contentlist[index]);
        document.getElementById("future").innerHTML+=(futurelist[index]);
        document.getElementById("past").innerHTML+=(pastlist[index]);
        console.log(contentlist[index]);
    }
    else{
        console.log("name does not exist");
    }
}

function checkName(name) {
    return name==querystring;
  }