// Create title function
const createTitle = () => {
    const title = document.createElement('h1');
    title.textContent = 'Border Radius Preview';
    title.classList.add('main-title');

    return title;
};

// add the title to the DOM
const mainTitle = createTitle();
const titleSection = document.querySelector('.title');
titleSection.appendChild(mainTitle);