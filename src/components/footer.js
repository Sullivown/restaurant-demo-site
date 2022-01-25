import details from "./details";

const footer = function() {

    const render = () => {
        const footerElement = document.querySelector('#footer');
        const leftDiv = details().generateContact();
        leftDiv.classList.add('footer-section');
        footerElement.appendChild(leftDiv);

        const rightDiv = document.createElement('div');
        const openingTimesDiv = details().generateOpeningTimes();
        rightDiv.classList.add('footer-section');
        rightDiv.appendChild(openingTimesDiv);

        footerElement.appendChild(rightDiv);
    }
    
    return {
        render,
    };
};

export default footer;