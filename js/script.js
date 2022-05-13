input = document.getElementById('input');

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("send").click();
    }
  });

function add(){
    var element = document.getElementById('input').value;
    var i = 1;
    if (element == 'undefined' || element== ''){
        alert('Please write something');
    }
    else
    {
        var p = document.createElement('p');
        p.textContent = element;
        document.getElementById('input').value = "";

        task.appendChild(p,task);
    }
}