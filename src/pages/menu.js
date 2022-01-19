const menu = function() {

    const render = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';

        const menuElement =  document.createElement('div');
        menuElement.setAttribute('id', 'menu');
        menuElement.textContent = 'THIS IS THE MENU PAGE!';

        contentDiv.appendChild(menuElement);
    }
    
    return {
        render,
    };
};

export default menu;