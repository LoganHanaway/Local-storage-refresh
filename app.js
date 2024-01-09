const form = document.querySelector('#addTodo');
const input = document.querySelector('#newTodo');
const todoList = document.querySelector('#todoList')


todoList.addEventListener('click', function(e){
    if (e.target.id === 'remove'){
        e.target.parentElement.remove();
    } else if (e.target.id === 'complete'){
        e.target.parentElement.classList.toggle('completed');
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    const completeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    completeBtn.innerText = "Complete";
    newTodo.innerText = input.value + " ";
    removeBtn.setAttribute("id", "remove")
    completeBtn.setAttribute("id", "complete")
    newTodo.appendChild(completeBtn);
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
});

