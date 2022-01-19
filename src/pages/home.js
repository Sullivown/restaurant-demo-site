const home = function() {

    const render = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';

        const homeElement =  document.createElement('div');
        homeElement.setAttribute('id', 'home');
        homeElement.textContent = 'THIS IS THE HOME PAGE!';

        contentDiv.appendChild(homeElement);
    }
    
    return {
        render,
    };
};

export default home;