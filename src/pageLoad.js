// Load the header, homepage content and footer
import header from "./components/header";
import home from "./pages/home";
import footer from "./components/footer";

const pageLoad = function() {
    const body = document.querySelector('body');

    const app = document.createElement('div');
    app.setAttribute('id', 'app');
    body.appendChild(app);

    const headerElement = document.createElement('div');
    const contentElement = document.createElement('div');
    const footerElement = document.createElement('div');

    headerElement.setAttribute('id', 'header');
    contentElement.setAttribute('id', 'content');
    footerElement.setAttribute('id', 'footer');

    app.appendChild(headerElement);
    app.appendChild(contentElement);
    app.appendChild(footerElement);

    header().render();
    home().render();
    header().update();
    footer().render();
}

export default pageLoad;