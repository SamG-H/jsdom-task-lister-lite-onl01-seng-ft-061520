document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.querySelector('input[type="submit"]').addEventListener("click", function(event){
	let taskDescription = document.querySelector('#new-task-description').value;
	let ul = document.querySelector('#tasks');
	let li = document.createElement('li');
	li.innerHTML = taskDescription;
	ul.appendChild(li);
	event.preventDefault();
    });
});
