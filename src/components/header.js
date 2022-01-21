import home from "../pages/home";
import menu from "../pages/menu";
import contact from "../pages/contact";
import smallLogo from "../images/logo-small.png"

const header = function() {
    const links = ['home', 'menu', 'contact'];

    const render = () => {
        const headerDiv = document.querySelector('#header');
        headerDiv.innerHTML = '';

        const logo = new Image();
        logo.src = smallLogo;
        logo.setAttribute('id', 'logo');
        logo.addEventListener('click', handleClick);

        headerDiv.appendChild(logo);

        const navDiv = document.createElement('nav');
        navDiv.setAttribute('id', 'nav-div');
        
        const navLinksList = document.createElement('ol');
        navLinksList.setAttribute('id', 'nav-links');
        
        for (const page in links) {

            const link = document.createElement('li');
            const a = document.createElement('a');
            a.id = `${links[page]}-link`;
            a.textContent = links[page];
            link.appendChild(a);
            navLinksList.appendChild(link);
        
            link.addEventListener('click', handleClick);
        }

        navDiv.appendChild(navLinksList);
        
        headerDiv.appendChild(navDiv);
    }

    const handleClick = (e) => {
        const target = e.target.id;
        if (target === 'home-link' || target === 'logo') {
            home().render();
            update();
        } else if (target === 'menu-link') {
            menu().render();
            update();
        } else {
            contact().render();
            update();
        }
    }

    const update = () => {
        const activeLink = document.querySelector('.current-page');
        if (activeLink) {
            activeLink.classList.remove('current-page');
        }
        const currentPage = document.getElementById('content').firstChild.id;
        const currentLink = document.getElementById(`${currentPage}-link`);
        currentLink.classList.add('current-page');
    }
    
    return {
        render,
        update
    };
};

export default header;