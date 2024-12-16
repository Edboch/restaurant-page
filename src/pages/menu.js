const menu = [
    {
      section: "Appetizers",
      items: [
        { name: "Crispy Spring Rolls (3 pcs)", price: "$6.99", description: "Golden-fried rolls filled with shredded vegetables and glass noodles." },
        { name: "Steamed Dumplings (6 pcs)", price: "$8.99", description: "Handmade dumplings with your choice of pork, chicken, or vegetable filling." },
        { name: "Szechuan Spicy Wontons (8 pcs)", price: "$9.99", description: "Tender wontons in a tangy and spicy chili oil sauce." },
        { name: "Honey Glazed BBQ Pork (Char Siu)", price: "$12.99", description: "Succulent slices of Cantonese-style barbecue pork." },
        { name: "Scallion Pancakes", price: "$7.99", description: "Crispy, flaky pancakes infused with fresh green onions." },
      ],
    },
    {
      section: "Soups",
      items: [
        { name: "Hot & Sour Soup", price: "$5.99", description: "A bold mix of tofu, bamboo shoots, and mushrooms in a spicy, tangy broth." },
        { name: "Wonton Soup", price: "$6.99", description: "Classic soup with handmade wontons, bok choy, and a savory chicken broth." },
        { name: "Egg Drop Soup", price: "$4.99", description: "Silky, flavorful broth swirled with egg ribbons." },
      ],
    },
    {
      section: "Chef’s Specials",
      items: [
        { name: "Peking Duck", price: "Half: $28.99 | Full: $48.99", description: "Crispy roasted duck served with steamed pancakes, scallions, and hoisin sauce." },
        { name: "General Tso’s Chicken", price: "$16.99", description: "Crispy chicken tossed in a tangy, sweet, and spicy sauce." },
        { name: "Kung Pao Shrimp", price: "$18.99", description: "Juicy shrimp stir-fried with peanuts, bell peppers, and a spicy Szechuan sauce." },
        { name: "Mongolian Beef", price: "$17.99", description: "Tender beef slices stir-fried with scallions and onions in a savory soy sauce." },
        { name: "Mapo Tofu (Vegan Option Available)", price: "$14.99", description: "Silky tofu in a spicy and aromatic chili-bean sauce, served with steamed rice." },
      ],
    },
    {
      section: "Classic Favorites",
      items: [
        { name: "Sweet & Sour Pork", price: "$15.99", description: "Crispy pork bites coated in a tangy sweet-and-sour sauce." },
        { name: "Chicken Chow Mein", price: "$14.99", description: "Stir-fried noodles with chicken, vegetables, and a savory sauce." },
        { name: "Beef and Broccoli", price: "$16.99", description: "Classic stir-fry of tender beef, fresh broccoli, and garlic soy sauce." },
        { name: "Shrimp Fried Rice", price: "$13.99", description: "Wok-tossed rice with juicy shrimp, eggs, and scallions." },
        { name: "Vegetable Lo Mein", price: "$12.99", description: "Soft noodles stir-fried with a medley of fresh vegetables." },
      ],
    },
    {
      section: "Vegan Delights",
      items: [
        { name: "Vegan Buddha Bowl", price: "$15.99", description: "A vibrant mix of jasmine rice, tofu, pickled vegetables, and a sesame-ginger dressing." },
        { name: "Szechuan Eggplant", price: "$14.99", description: "Tender eggplant stir-fried with garlic, ginger, and a spicy soy glaze." },
        { name: "Vegan Dumplings (6 pcs)", price: "$8.99", description: "Handcrafted dumplings filled with seasoned vegetables." },
      ],
    },
    {
      section: "Sides",
      items: [
        { name: "Steamed Jasmine Rice", price: "$2.99", description: "" },
        { name: "Garlic Stir-Fried Green Beans", price: "$7.99", description: "" },
        { name: "Egg Fried Rice", price: "$5.99", description: "" },
        { name: "Chinese Pickled Vegetables", price: "$4.99", description: "" },
      ],
    },
    {
      section: "Desserts",
      items: [
        { name: "Mango Sticky Rice", price: "$6.99", description: "Sweet and creamy mango served with glutinous rice and coconut milk." },
        { name: "Sesame Balls (4 pcs)", price: "$5.99", description: "Deep-fried glutinous rice balls filled with sweet red bean paste." },
        { name: "Fortune Cookies (4 pcs)", price: "Complimentary", description: "" },
      ],
    },
    {
      section: "Beverages",
      items: [
        { name: "Jasmine Tea (Hot or Iced)", price: "$3.99", description: "" },
        { name: "Bubble Milk Tea (Classic or Matcha)", price: "$5.99", description: "" },
        { name: "Lychee Lemonade", price: "$4.99", description: "" },
        { name: "Plum Wine", price: "$7.99/glass", description: "" },
        { name: "Tsingtao Beer", price: "$6.99", description: "" },
      ],
    },
  ];

export const renderMenu = (content) => {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    menu.forEach((category) => {
        const section = document.createElement('section');
        section.className = 'menu-section';
        const sectionTitle = document.createElement('h1');
        sectionTitle.className = 'title';
        sectionTitle.textContent = category['section'];
        section.append(sectionTitle);

        category['items'].forEach((item)=> {
            const foodName = document.createElement('h3');
            const price = document.createElement('p');
            const description = document.createElement('p');
            foodName.className = 'food-name';
            price.className = 'price';
            description.className = 'desc';
            
            foodName.textContent = item['name'];
            price.textContent = item['price'];
            description.textContent = item['description'];

            section.append(foodName,price,description);
        });
        menuContainer.append(section);
    });
    content.append(menuContainer)
}