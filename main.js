$(document).ready(function(){
    var input = document.getElementById("inputID");
    var button = document.getElementById("buttonID");
    

    function createListItem() {
        var li = document.createElement("li");
        li.setAttribute("class","liclass");
        var span = document.createElement("span");
        span.setAttribute("class", "timesclass");
        span.onclick = function() {
            hideListitem(this);
        };
        span.innerHTML = "&times;";
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(span);
        document.getElementById("ulID").appendChild(li);
        document.getElementById("inputID").value = "";

    }

    function hideListitem(t) {
        t.parentElement.style.display='none';

    }
    button.addEventListener("click",function() {
        if (input.value.length > 0) {
           createListItem();
        }
    });
    
    input.addEventListener("keypress",function(event) {
        if (input.value.length > 0 && event.keyCode === 13) {
           createListItem();
        }
    });
});