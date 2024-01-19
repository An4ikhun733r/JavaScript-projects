const container = document.querySelector("#container")
const cont = document.querySelector("#cont")

const content = document.createElement('p')
content.classList.add('text')
content.style.color = 'red'
content.textContent = "Hey, I'm red"


const content2 = document.createElement('h3')
content2.style.color = 'blue'
content2.textContent = "I'm a blue h3!"

container.appendChild(content)
container.appendChild(content2)
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});