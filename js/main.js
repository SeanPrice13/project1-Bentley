const colors = ['red', 'black', 'green', 'yellow', 'purple'];
document.querySelector('button').addEventListener('click', () => document.body.style.background = colors[Math.floor(Math.random() * colors.length)]);