const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');
 
listItem.appendChild(listText);
listText.textContent = "gerson";
list.appendChild(listItem)

// const body = document.body;
// const ppp = document.createElement("p");
// body.append(ppp);
// ppp.innerText = "teste teste";

// const div = document.querySelector("div");
// console.log(div.textContent);
// console.log(div.innerHTML);




