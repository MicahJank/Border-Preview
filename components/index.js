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


// create main element function
const createMainDiv = () => {
    const mainDiv = document.createElement('div');

    return mainDiv

};

// create the slidersDiv
const createSliders = () => {
    const slidersDiv = document.createElement('div');

    const borderRadius = document.createElement('input');
    borderRadius.type = 'range';
    borderRadius.min = 0;
    borderRadius.max = 100;
    borderRadius.value = 0;

    slidersDiv.appendChild(borderRadius);

    return slidersDiv;
};


// add main element and slidersDiv to the DOM and then attach them to the main section
const mainSection = document.querySelector('.main');
const mainDiv = createMainDiv();
const slidersDiv = createSliders();
mainSection.appendChild(mainDiv);
mainSection.appendChild(slidersDiv);


// create the copy to clipboard part
const createCodePreview = () => {
    const codeInput = document.createElement('input');
    codeInput.type = 'text';
    codeInput.readOnly = true;

    return codeInput;
};

const createCopyClipboard = () => {
    const copyClipboard = document.createElement('button');
    copyClipboard.textContent = 'Copy Code';

    return copyClipboard;
};


// add the code preview and copy clipboard to the DOM
const codeSection = document.querySelector('.code');
const codePreview = createCodePreview();
const copyClipboard = createCopyClipboard();

codeSection.appendChild(codePreview);
codeSection.appendChild(copyClipboard);