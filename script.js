const input = document.getElementById('new-task');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const counter = document.getElementById('task-counter');
const theList = Array.from(list.querySelectorAll('li'), (item) => item.textContent);
let completedTasks = 0;


counter.textContent = `${completedTasks} completed tasks`;

list.addEventListener('click', (event) => {
	const item = event.target.closest('li');

	if (!item) {
		return;
	}

	if (item.classList.toggle('completed')) {
		completedTasks ++;
	} else {
		completedTasks --;
	}

	counter.textContent = `${completedTasks} completed tasks`;
});

button.addEventListener('click', () => {
	const text = input.value.trim();

	if (text === '') {
		return;
	}

	const item = document.createElement('li');
	item.textContent = text;
	list.appendChild(item);
	theList.push(text);

	input.value = '';
});
