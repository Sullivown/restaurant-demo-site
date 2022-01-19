const footer = function() {

    const render = () => {
        const footerElement = document.querySelector('#footer');

        footerElement.textContent = 'footer';
    }
    
    return {
        render,
    };
};

export default footer;