import "./styles.css"
import {renderHome} from './pages/home.js';
import {renderMenu} from './pages/menu.js';
import {renderAbout} from './pages/about.js'

const clearContent = (content) => {
    content.innerHTML = '';
}

const displayController = (()=>{
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.home-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const aboutBtn = document.querySelector('.about-btn');
    let selectedBtn = homeBtn;

    renderHome(content);

    homeBtn.addEventListener('click',()=> {
        selectedBtn.classList.remove('selected');
        homeBtn.classList.add('selected');
        selectedBtn = homeBtn;
        clearContent(content);
        renderHome(content);
    })

    menuBtn.addEventListener('click',()=>{
        selectedBtn.classList.remove('selected');
        menuBtn.classList.add('selected');
        selectedBtn = menuBtn;
        clearContent(content);
        renderMenu(content);
    })

    aboutBtn.addEventListener('click',()=> {
        selectedBtn.classList.remove('selected');
        aboutBtn.classList.add('selected');
        selectedBtn = aboutBtn;
        clearContent(content);
        renderAbout(content);
    })
})();