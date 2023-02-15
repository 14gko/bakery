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
        {name: 'Chocolate Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img924/9853/bTSP0i.jpg', category: categories[0], price: 5.95},
        {name: 'Chocolate Cream Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img923/9716/EMaYq3.png', category: categories[0], price: 5.95},
        {name: 'Espresso Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img924/7430/wEU1Kl.jpg', category: categories[0], price: 5.95},

        {name: 'Fresh Cream Fruit Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img922/8030/BtPoeE.jpg', category: categories[0], price: 5.95},
        {name: 'Green Tea Chiffon Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img924/7955/bOmSs9.jpg', category: categories[0], price: 5.95},
        
        {name: 'Tiramisu', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image:'https://imagizer.imageshack.com/img922/2347/PmMHmg.jpg', category: categories[0], price: 5.95},
        {name: 'Blueberry Yogurt Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image:'https://imagizer.imageshack.com/img924/6587/oie1wS.jpg', category: categories[0], price: 5.95},

        //Cookies 
        {name: 'Paw Cookies', availability: false, image: 'https://imagizer.imageshack.com/img922/4793/iIcMPt.png', category: categories[1], price: 5.95},

        //Cupcakes
        {name: 'Buttercream Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/2011/kvO5f2.png', category: categories[2], price: 5.95},
        {name: 'Birthday Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/2008/Pgfhov.png', category: categories[2], price: 5.95},
        {name: 'Carrot Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/2924/Y7fJ3y.png', category: categories[2], price: 5.95},
        {name: 'Lemon Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img922/390/2BS3td.png', category: categories[2], price: 5.95},
        {name: 'Matcha Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/9803/aZYRWs.png', category: categories[2], price: 5.95},
        
        {name: 'Mint Choco Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/4168/kRh0mC.png', category: categories[2], price: 5.95},
        {name: 'Nutella Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/4466/etue3c.png', category: categories[2], price: 5.95},
        {name: 'Peppermint Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img922/1219/BFJ1ll.png', category: categories[2], price: 5.95},
        {name: 'Red Velvet Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/9438/CNWdmd.png', category: categories[2], price: 5.95},
        {name: 'Strawberry ShortCake Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img922/5660/1OleEh.png', category: categories[2], price: 5.95},

        //Drinks
        {name: 'Coffee Bubble Tea', availability: true, image: 'https://imagizer.imageshack.com/img923/7199/p02tF7.png', category: categories[3], price: 5.95},
        {name: 'Matcha Bubble Milk Tea', availability: true, image: 'https://imagizer.imageshack.com/img922/2325/9yUL2b.png', category: categories[3], price: 5.95},
        {name: 'Black Bubble Milk Tea', availability: true, image: 'https://imagizer.imageshack.com/img924/4181/dofXRs.png', category: categories[3], price: 5.95},
        {name: 'Strawberry Bubble Milk Tea', availability: true, image: 'https://imagizer.imageshack.com/img923/7281/G2tkur.png', category: categories[3], price: 5.95},
        {name: 'Taro Bubble Milk Tea', availability: true, image: 'https://imagizer.imageshack.com/img922/5057/ZxZzmp.png', category: categories[3], price: 5.95},

        //misc
        {name: 'Coconut Paradise Parfait', availability: true, image: 'https://imagizer.imageshack.com/img924/7714/rQhh0E.png', category: categories[4], price: 5.95},
        {name: 'Honeydew Cantaloupe Parfait', availability: true, image: 'https://imagizer.imageshack.com/img923/4505/9xXDVQ.png', category: categories[4], price: 5.95},
        {name: 'Birthday Cake Parfait', availability: true, image: 'https://imagizer.imageshack.com/img922/3769/swqE73.png', category: categories[4], price: 5.95},

    ])
    console.log(items)
    process.exit();
})();