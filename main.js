$(document).ready(function(){
    var input = document.getElementById("inputID");
    var button = document.getElementById("buttonID");
    
    function createCloseButton() {
        var span = document.createElement("span");
        span.setAttribute("class", "timesclass");
        span.onclick = function() {
            hideListitem(this);
        };
        span.innerHTML = "&times;";
        return span;
    }


    function createListItem() {
        var li = document.createElement("li");
        li.setAttribute("class","liclass");
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(createCloseButton());
        var temp = li.textContent;
        temp = temp.substr(0,temp.length - 1);
       
        document.getElementById("ulID").appendChild(li);
        document.getElementById("inputID").value = "";

    }

    function hideListitem(t) {
        t.parentElement.style.display='none';

    }
    button.addEventListener("click",function() {
        if (input.value.length > 0) {
           createListItem();
           WriteToFile(this);
        }
    });
    
    input.addEventListener("keypress",function(event) {
        if (input.value.length > 0 && event.keyCode === 13) {
           createListItem();
        }
    });

    function WriteToFile(passForm) {

        var fso= new ActiveXObject("Scripting.FileSystemObject");  
        var s = fso.CreateTextFile("d://test.txt", True);
        s.writeline("HI");
        s.writeline("Bye");
        s.writeline("-----------------------------");
        s.Close();
     }





});