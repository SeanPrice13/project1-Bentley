const colors = ['red', 'black', 'green', 'yellow', 'purple'];

const changeBgColor = () => {
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)]
};

document.querySelector('button').addEventListener('click', changeBgColor);