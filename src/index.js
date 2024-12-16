import "./styles.css"

const renderHome = (content) => {
    const textBox = document.createElement('div');
    const title = document.createElement('h1');
    const slogan = document.createElement('h3');
    const text = document.createElement('p');
    const photoCredit = document.createElement('div');

    textBox.className = 'textbox';
    title.className = 'title';
    title.textContent = 'Golden Wok Harmony';
    slogan.className = 'slogan';
    slogan.textContent = '"Experience Tradition, Savor Freshness!"';
    text.className = 'text';
    text.textContent = 'We take pride in serving the finest Chinese cuisine,'
                    +'crafted from fresh, locally sourced ingredients.'
                    +'From classic dim sum to flavorful stir-fried dishes,'
                    +'our warm and inviting atmosphere provides the perfect'
                    +'backdrop for your dining experience. Come and taste the'
                    +'tradition to see why we are the talk of the town!';
    photoCredit.className = 'photo-credit';
    photoCredit.textContent = 'Photo by Hanxiao Xu on Unsplash';

    textBox.append(title,slogan,text);
    content.append(textBox,photoCredit);
};

const displayController = (()=>{
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.home-btn');

    renderHome(content);

    homeBtn.addEventListener('click',()=> {
        
    })
})();