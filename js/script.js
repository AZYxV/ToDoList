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

        task.appendChild(p,task);
    }
}