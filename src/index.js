import "./styles.css"
import {renderHome} from './pages/home.js';
import {renderAbout} from './pages/about.js'

const clearContent = (content) => {
    content.innerHTML = '';
}

const displayController = (()=>{
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.home-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const aboutBtn = document.querySelector('.about-btn');

    renderHome(content);

    homeBtn.addEventListener('click',()=> {
        clearContent(content);
        renderHome(content);
    })

    aboutBtn.addEventListener('click',()=> {
        clearContent(content);
        renderAbout(content);
    })
})();