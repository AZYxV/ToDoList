var input = document.getElementById('input');
var ul = document.querySelector("ul");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("send").click();
    }
  });



function add(){
    var i = 1;
    if (input.value == 'undefined' || input.value == ''){
        alert('Please write something');
    }
    else
    {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
	    input.value = "";

        function toggledone(){
            li.classList.toggle("done");
        }
        
        li.addEventListener("click",toggledone);

        var dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode('X'));
        li.appendChild(dBtn);
        dBtn.addEventListener("click", deleteListItem);

        function deleteListItem(){
            li.classList.add("delete")
        }

    }
}
