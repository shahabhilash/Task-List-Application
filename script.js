const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('You must write something!')
    } else {
        let li = document.createElement('li')

        let taskText = document.createElement('span')
        taskText.textContent = inputBox.value
        taskText.className = 'task-text'
        li.appendChild(taskText)

        let doneBtn = document.createElement('button')
        doneBtn.textContent = 'Done'
        doneBtn.className = 'done-btn'
        li.appendChild(doneBtn)

        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.className = 'edit-btn'
        li.appendChild(editBtn)

        let delBtn = document.createElement('button')
        delBtn.textContent = 'Delete'
        delBtn.className = 'delete-btn'
        li.appendChild(delBtn)

        listContainer.appendChild(li)
    }
    inputBox.value = ''
}
listContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('done-btn')) {
        e.target.parentElement.classList.toggle('done')
    }
    else if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove()
    }
    else if (e.target.classList.contains('edit-btn')) {
        let currentText = e.target.parentElement.querySelector('.task-text').textContent
        let newText = prompt('Edit your task:', currentText)
        if (newText !== null && newText.trim() !== '') {
            e.target.parentElement.querySelector('.task-text').textContent = newText
        }
    }
})
