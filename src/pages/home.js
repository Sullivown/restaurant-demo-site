import details from "../components/details";

const home = function() {
    const render = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';

        const homeDiv =  document.createElement('div');
        homeDiv.setAttribute('id', 'home');
        homeDiv.classList.add('page-content');

        contentDiv.appendChild(homeDiv);

        const homeContentDiv = document.createElement('div');

        const title = document.createElement('div');
        title.classList.add('content-section', 'title');
        const h1 = document.createElement('h1');
        h1.textContent = `The best burgers in town!`;
        title.appendChild(h1);

        homeContentDiv.appendChild(title);

        const openingTimes = details().generateOpeningTimes();
        homeContentDiv.appendChild(openingTimes);

        const location = document.createElement('div');
        location.textContent = '123 Yummyroad, Flavourtown, Delicioushire, N0M N0M';
        homeContentDiv.appendChild(location);

        homeDiv.appendChild(homeContentDiv);
        
    }
    
    return {
        render,
    };
};

export default home;