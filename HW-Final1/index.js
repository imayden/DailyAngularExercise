// Ayden Deng

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        // Render Top 10 tasks
        todos.slice(0, 10).forEach((todo, index) => renderList(todo, index === 0));
      });
  });
  
  // Render Todo List
  function renderList(todo, isExpanded = false) {
    var ul = document.getElementById("myUL");
    var li = document.createElement("li");
    li.classList.toggle('expanded', isExpanded);
  
    var titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.textContent = todo.title;
  
    var icon = document.createElement("span");
    icon.className = isExpanded ? "collapse" : "expand";
    icon.textContent = isExpanded ? " " : " ";
    titleDiv.appendChild(icon);
  
    var descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
    descriptionDiv.textContent = todo.description ? `Description: ${todo.description}` : `Description: ${todo.title}`;
  
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.textContent = "\u00D7";
    closeBtn.onclick = function () {
      li.style.display = "none";
    };
  
    li.appendChild(titleDiv);
    li.appendChild(descriptionDiv);
    li.appendChild(closeBtn);
    ul.appendChild(li);
  
    titleDiv.addEventListener('click', function() {
      toggleExpand(li);
    });
  
    closeBtn.addEventListener('click', function() {
      ul.removeChild(li);
    });
  }
  
  // Expand or Collapse
  function toggleExpand(selectedLi) {
    var multiple = document.getElementById("multiple").checked;
    var lis = document.getElementsByTagName("li");
  
    for (let li of lis) {
      if (!multiple && li !== selectedLi) {
        li.classList.remove("expanded");
        li.querySelector(".title span").textContent = "";
      }
    }
  
    selectedLi.classList.toggle("expanded");
    var icon = selectedLi.querySelector(".title span");
    icon.textContent = selectedLi.classList.contains("expanded") ? " " : " ";
  }
  
  // Add New Task
  function newElement() {
    var title = document.getElementById("myInput").value;
    var description = document.getElementById("myDescription").value;
  
    if (title === '') {
      alert("Write Something First！");
      return;
    }
  
    var todo = {
      title: title,
      description: description,
      completed: false
    };
  
    renderList(todo, true);
  
    document.getElementById("myInput").value = "";
    document.getElementById("myDescription").value = "";
  }
  