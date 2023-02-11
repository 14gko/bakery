require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function(){
    
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Cakes', sortOrder: 10},
        {name: 'Cookies', sortOrder: 20},
        {name: 'Cupcakes', sortOrder: 40},
        {name: 'Drinks', sortOrder: 30},
        {name: 'Miscellaneous', sortOrder: 50},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        //cakes 
        {name: 'Chocolate Cake', category: categories[0], price: 5.95},
        {name: 'Chocolate Cream Cake', category: categories[0], price: 5.95},
        {name: 'Chocolate Layer Cake', category: categories[0], price: 5.95},
        {name: 'Chocolate Mousse Cake', category: categories[0], price: 5.95},
        {name: 'Espresso Cake', category: categories[0], price: 5.95},

        {name: 'Fresh Cream Fruit Cake', category: categories[0], price: 5.95},
        {name: 'Matcha Espresso Cake', category: categories[0], price: 5.95},
        {name: 'Matcha Layer Cake', category: categories[0], price: 5.95},
        {name: 'Matcha Mousse Cake', category: categories[0], price: 5.95},
        {name: 'Orange Citrus Cake', category: categories[0], price: 5.95},
        
        {name: 'Peach Cream Cake', category: categories[0], price: 5.95},
        {name: 'Raspberry Mousse Cake', category: categories[0], price: 5.95},
        {name: 'Strawberry Cake', category: categories[0], price: 5.95},
        {name: 'Strawberry Layer Mousse Cake', category: categories[0], price: 5.95},
        {name: 'Strawberry Mousse Cake', category: categories[0], price: 5.95},

        {name: 'Tiramisu', category: categories[0], price: 5.95},
        {name: 'Vanilla Bean Cake', category: categories[0], price: 5.95},
        {name: 'Black Forest Cake', category: categories[0], price: 5.95},

        //Cookies 
        {name: 'Paw Cookies', category: categories[1], price: 5.95},

        //Cupcakes
        {name: 'Buttercream Cupcake', category: categories[2], price: 5.95},
        {name: 'Birthday Cupcake', category: categories[2], price: 5.95},
        {name: 'Carrot Cupcake', category: categories[2], price: 5.95},
        {name: 'Lemon Cupcake', category: categories[2], price: 5.95},
        {name: 'Matcha Cupcake', category: categories[2], price: 5.95},
        
        {name: 'Mint Choco Cupcake', category: categories[2], price: 5.95},
        {name: 'Nutella Cupcake', category: categories[2], price: 5.95},
        {name: 'Peppermint Cupcake', category: categories[2], price: 5.95},
        {name: 'Red Velvet Cupcake', category: categories[2], price: 5.95},
        {name: 'Strawberry Cupcake', category: categories[2], price: 5.95},

        //Drinks
        {name: 'Coffee Bubble Tea', category: categories[3], price: 5.95},
        {name: 'Matcha Bubble Milk Tea', category: categories[3], price: 5.95},
        {name: 'Black Bubble Milk Tea', category: categories[3], price: 5.95},
        {name: 'Strawberry Bubble Milk Tea', category: categories[3], price: 5.95},
        {name: 'Taro Bubble Milk Tea', category: categories[3], price: 5.95},

        //misc
        {name: 'Coconut Paradise Parfait', category: categories[4], price: 5.95},
        {name: 'Honeydew Cantaloupe Parfait', category: categories[4], price: 5.95},
        {name: 'Birthday Cake Parfait', category: categories[4], price: 5.95},

    ])
    console.log(items)
    process.exit();
})