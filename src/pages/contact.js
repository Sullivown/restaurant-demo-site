const contact = function() {

    const render = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';

        const contactElement =  document.createElement('div');
        contactElement.setAttribute('id', 'contact');
        contactElement.textContent = 'THIS IS THE CONTACT PAGE!';

        contentDiv.appendChild(contactElement);
    }
    
    return {
        render,
    };
};

export default contact;