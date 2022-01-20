import home from "../pages/home";
import menu from "../pages/menu";
import contact from "../pages/contact";

const header = function() {
    const links = ['home', 'menu', 'contact'];

    const render = () => {
        const headerDiv = document.querySelector('#header');
        headerDiv.innerHTML = '';

        headerDiv.textContent = 'HEADER';

        const navDiv = document.createElement('nav');
        navDiv.setAttribute('id', 'nav-div');
        
        const navLinksList = document.createElement('ol');
        navLinksList.setAttribute('id', 'nav-links');
        
        for (const page in links) {

            const link = document.createElement('li');
            link.id = links[page];
            link.textContent = links[page];
            navLinksList.appendChild(link);
        
            link.addEventListener('click', handleClick);
        }

        navDiv.appendChild(navLinksList);
        
        headerDiv.appendChild(navDiv);
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