export const renderAbout = (content) => {
    const textContainer = document.createElement('div');
    const storySection = document.createElement('section');
    const chefSection = document.createElement('section');
    const valuesSection = document.createElement('section');
    const finalSection = document.createElement('section');

    const storyTitle = document.createElement('h1');
    const story = document.createElement('p');
    const chefTitle = document.createElement('h1');
    const chef = document.createElement('p');
    const valuesTitle = document.createElement('h1');
    const values = document.createElement('ul');
    const finalTitle = document.createElement('h1');
    const final = document.createElement('p');

    textContainer.setAttribute('class','text-container');
    storyTitle.setAttribute('class','title');
    chefTitle.setAttribute('class','title');
    valuesTitle.setAttribute('class','title');
    finalTitle.setAttribute('class','title');
    story.setAttribute('class','text');
    chef.setAttribute('class','text');
    values.setAttribute('class','text');
    final.setAttribute('class','text');

    storyTitle.textContent = 'Our Story:';
    chefTitle.textContent = 'Meet Our Chef:';
    valuesTitle.textContent = 'Our Values:';
    finalTitle.textContent = 'Visit Us Today:';
    story.textContent = 'Golden Wok Harmony opened its doors in 2005 with a' 
                        +'simple mission: to bring the heartwarming flavors of '
                        +'traditional Chinese cuisine to Blossom City. Inspired '
                        +'by family recipes handed down through generations, our '
                        +'restaurant blends authenticity with a touch of modern ' 
                        +'flair, creating dishes that are as beautiful as they '
                        +'are delicious. At the core of our philosophy is a '
                        +'commitment to harmony – in our flavors, our service, '
                        +'and our connection to the community. Every dish is '
                        +'crafted with care, combining fresh, locally-sourced '
                        +'ingredients with the bold, vibrant tastes of classic '
                        +'Chinese cooking.';
    chef.textContent = 'Chef Ming Zhao, a culinary artist with over 20 years of '
                        +'experience, leads the kitchen at Golden Wok Harmony. '
                        +'Trained in both traditional Cantonese and Sichuan styles, '
                        +'Chef Ming has a passion for creating dishes that '
                        +'surprise and delight the senses.';
    values.innerHTML = '<p><b>Freshness</b>: Only the best ingredients, hand-selected daily.</p>'
                        +'<p><b>Community</b>: Proudly supporting local farmers and suppliers.</p>'
                        +'<p><b>Sustainability</b>: Minimizing waste and choosing eco-friendly practices.</p>';
    final.textContent = 'Whether you’re celebrating a special occasion or simply'
                        +'craving great food, we’re here to make your experience unforgettable!';

    storySection.append(storyTitle,story);
    chefSection.append(chefTitle,chef);
    valuesSection.append(valuesTitle,values);
    finalSection.append(finalTitle,final);

    textContainer.append(storySection,chefSection,valuesSection,finalSection);
    content.append(textContainer);
};