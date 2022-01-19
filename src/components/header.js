import home from "../pages/home";
import menu from "../pages/menu";
import contact from "../pages/contact";

const header = function() {
    const links = ['home', 'menu', 'contact'];

    const render = () => {
        const headerDiv = document.querySelector('#header');
        headerDiv.innerHTML = '';

        headerDiv.textContent = 'HEADER';
        
        for (const page in links) {

            const button = document.createElement('button');
            button.id = links[page];
            button.textContent = links[page];
            headerDiv.appendChild(button);
        
            button.addEventListener('click', handleClick);
        }
    }

    const handleClick = (e) => {
        const target = e.target.textContent;
        if (target === 'home') {
            home().render();
        } else if (target === 'menu') {
            menu().render();
        } else {
            contact().render();
        }
    }
    
    return {
        render,
    };
};

export default header;