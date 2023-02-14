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
        {name: 'Chocolate Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img923/3610/iHGTWK.png', category: categories[0], price: 5.95},
        {name: 'Chocolate Cream Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img922/3418/fHEwyh.png', category: categories[0], price: 5.95},
        {name: 'Chocolate Layer Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img924/4435/sFcMoS.png', category: categories[0], price: 5.95},
        {name: 'Chocolate Mousse Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img922/5494/N1OXuV.png', category: categories[0], price: 5.95},
        {name: 'Espresso Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img923/3759/onkVBw.png', category: categories[0], price: 5.95},

        {name: 'Fresh Cream Fruit Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img924/9982/XvEipo.png', category: categories[0], price: 5.95},
        {name: 'Matcha Espresso Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img923/4378/CHugeO.png', category: categories[0], price: 5.95},
        {name: 'Matcha Layer Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img922/7720/Q1xp5E.png', category: categories[0], price: 5.95},
        {name: 'Matcha Mousse Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img924/4192/Xf1dLT.png', category: categories[0], price: 5.95},
        {name: 'Orange Citrus Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img923/5342/vCBb0A.png', category: categories[0], price: 5.95},
        
        {name: 'Peach Cream Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img923/212/4TJ34Q.png', category: categories[0], price: 5.95},
        {name: 'Raspberry Mousse Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img924/962/EwktvS.png', category: categories[0], price: 5.95},
        {name: 'Strawberry Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img922/6178/DM2kcK.png', category: categories[0], price: 5.95},
        {name: 'Strawberry Layer Mousse Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img924/2818/IR3Lmj.png', category: categories[0], price: 5.95},
        {name: 'Strawberry Mousse Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img923/2615/XY6Ee3.png', category: categories[0], price: 5.95},

        {name: 'Tiramisu', size: ['Slice', 'Whole'], availability: true, image:'https://imagizer.imageshack.com/img922/2985/33rnxf.png', category: categories[0], price: 5.95},
        {name: 'Vanilla Bean Cake', size: ['Slice', 'Whole'], availability: true, image:'https://imagizer.imageshack.com/img924/8545/c1WE8A.png', category: categories[0], price: 5.95},
        {name: 'Black Forest Cake', size: ['Slice', 'Whole'], availability: true, image: 'https://imagizer.imageshack.com/img924/9839/Zge7tF.png', category: categories[0], price: 5.95},

        //Cookies 
        {name: 'Paw Cookies', availability: true, image: 'https://imagizer.imageshack.com/img922/4793/iIcMPt.png', category: categories[1], price: 5.95},

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