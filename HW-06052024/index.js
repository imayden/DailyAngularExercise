
// Ayden Deng

// Create a "close" button
function addCloseButton(li) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Render the to-do list
function renderList(todos) {
    var ul = document.getElementById("myUL");
    todos.forEach(todo => {
        var li = document.createElement("li");
        li.textContent = todo.title;
        if (todo.completed) {
            li.classList.add('checked');
        }
        addCloseButton(li);
        ul.appendChild(li);
    });
}

// Fetch the to-do list
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => renderList(todos));

// Add a "checked" symbol 
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    addCloseButton(li);
}
