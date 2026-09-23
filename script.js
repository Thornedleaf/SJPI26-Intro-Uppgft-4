const input = document.getElementById('new-task');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const counter = document.getElementById('task-counter');
const emptyMessage = document.getElementById('empty-message');
const theList = Array.from(list.querySelectorAll('li'), (item) => ({
	text: item.textContent.trim(),
	completed: item.classList.contains('completed')
}));
let completedTasks = 0;

const addRemoveButton = (item) => {
	const removeButton = document.createElement('button');
	removeButton.className = 'remove-item';
	removeButton.type = 'button';
	removeButton.setAttribute('aria-label', 'Remove item');
	removeButton.title = 'Remove item';
	removeButton.textContent = '\u{1F5D1}\uFE0F';
	item.appendChild(removeButton);
};

list.querySelectorAll('li').forEach(addRemoveButton);

counter.textContent = `${completedTasks} completed tasks`;

list.addEventListener('click', (event) => {
	const item = event.target.closest('li');

	if (!item) {
		return;
	}

	if (event.target.closest('.remove-item')) {
		if (item.classList.contains('completed')) {
			completedTasks --;
		}
		item.remove();
		counter.textContent = `${completedTasks} completed tasks`;
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
		emptyMessage.style.display = 'block';
		return;
	}

	emptyMessage.style.display = 'none';
	const item = document.createElement('li');
	item.textContent = text;
	addRemoveButton(item);
	list.appendChild(item);
	theList.push({
		text,
		completed: false
	});

	input.value = '';
});
