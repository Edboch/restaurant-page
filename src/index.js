import "./styles.css"
import {renderHome} from './pages/home.js';

const displayController = (()=>{
    const content = document.querySelector('#content');
    // const homeBtn = document.querySelector('.home-btn');

    renderHome(content);

    // homeBtn.addEventListener('click',()=> {
        
    // })
})();