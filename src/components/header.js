import contact from "../pages/contact";
import home from "../pages/homepage";
import menu from "../pages/menu";

const header = function() {
    const links = ['home', 'menu', 'contact'];

    const render = () => {
        const headerElement = document.querySelector('#header');

        headerElement.textContent = 'HEADER';
        
        for (const page in links) {

            const button = document.createElement('button');
            button.id = links[page];
            button.textContent = links[page];
            headerElement.appendChild(button);
        
            button.addEventListener('click', handleClick);

        }

        headerElement.appendChild(headerElement);
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