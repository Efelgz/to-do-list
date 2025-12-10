const addButton = document.querySelector(".Add-btn");
const todoList = document.getElementById("todo-list");
addButton.addEventListener("click", addTask);

function addTask(e) {
    e.preventDefault();
    const taskRow = document.createElement("div");
    taskRow.classList.add("task-row");
    const taskBox = document.createElement("div");
    taskBox.classList.add("task-box");

    const textArea = document.createElement("textarea");
    textArea.classList.add("task-input");
    textArea.placeholder = "Görev yaz...";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';

    deleteBtn.addEventListener("click", function() {
        taskRow.remove();
    });

    taskRow.appendChild(taskBox);
    taskRow.appendChild(textArea);
    taskRow.appendChild(deleteBtn);

    todoList.appendChild(taskRow);
}

const existingDeleteBtns = document.querySelectorAll(".delete-btn");
existingDeleteBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.target.closest(".task-row").remove();
    });
});


document.addEventListener("click", function(e) {
    
      
     if (e.target.classList.contains("task-box")) {
         e.target.classList.toggle("checked");
     }

     if (e.target.classList.contains("delete-btn") || e.target.parentElement?.classList.contains("delete-btn")) {
         const row = e.target.closest(".task-row");
         if (row) row.remove();
     }

 });

 function addNewRow(){
     const container = document.getElementById("task-container");
     const newRow = document.createElement("div");
     row.classList.add("task-row");
      row.innerHTML = `
         <div class="task-box"></div>
         <textarea class="task-input"></textarea>
         <button class="delete-btn"><i class="fa fa-trash"></i></button>
     `;

         container.insertBefore(row, container.querySelector(".add-btn"));

 }
