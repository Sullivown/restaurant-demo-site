import details from "../components/details";

const contact = function() {

    const render = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';

        const contactDiv =  document.createElement('div');
        contactDiv.setAttribute('id', 'contact');
        
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('contact-section');

        const title = document.createElement('h1');
        title.textContent = `Jimmy's Burgers`;
        leftDiv.appendChild(title);

        const address = details().generateContact();
        leftDiv.appendChild(address);

        const openingTimes = details().generateOpeningTimes();
        leftDiv.appendChild(openingTimes);

        contactDiv.appendChild(leftDiv);

        const rightDiv = document.createElement('div');
        rightDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56815.40786432674!2d-109.37383409640495!3d-27.12597560716327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9947f017a8d4ae2b%3A0xbbe5b3edc02a2db6!2sEaster%20Island!5e0!3m2!1sen!2suk!4v1643111251068!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
        
        contactDiv.appendChild(rightDiv);
        
        contentDiv.appendChild(contactDiv);
    }
    
    return {
        render,
    };
};

export default contact;