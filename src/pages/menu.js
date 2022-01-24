import data from '../menu.json';

const menu = function() {
    const menuData = data;

    const render = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';

        const menuDiv =  document.createElement('div');
        menuDiv.setAttribute('id', 'menu');
        menuDiv.classList.add('content-section');
        
        const menuTitle = document.createElement('h1');
        menuTitle.setAttribute('id', 'menu-title');
        menuTitle.classList.add('title');   
        menuTitle.textContent = 'Menu';
        menuDiv.appendChild(menuTitle);

        const menuItems = document.createElement('div');
        menuItems.setAttribute('id', 'menu-items');

        for (const category in menuData) {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('menu-category');
            categoryDiv.setAttribute('id', category)
            const categoryTitle= document.createElement('h3');
            categoryTitle.innerHTML = category;
            
            categoryDiv.appendChild(categoryTitle);

            for (const item in menuData[category]) {
                const itemDiv = document.createElement('div');
                const itemTitle = document.createElement('h4');
                itemTitle.innerHTML = menuData[category][item].name;
                itemDiv.appendChild(itemTitle);

                const itemDescription = document.createElement('p');
                itemDescription.innerHTML = `${menuData[category][item].description}..........£${menuData[category][item].price}`;
                itemDiv.appendChild(itemDescription);
                
                categoryDiv.appendChild(itemDiv);
            }

            menuItems.appendChild(categoryDiv);
        }
        
        menuDiv.appendChild(menuItems);

        contentDiv.appendChild(menuDiv);
    }
    
    return {
        render,
    };
};

export default menu;