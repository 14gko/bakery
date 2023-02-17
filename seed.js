require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function(){
    
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Cakes', sortOrder: 10},
        {name: 'Cupcakes', sortOrder: 20},
        {name: 'Cookies', sortOrder: 30},
        {name: 'Drinks', sortOrder: 40},
        {name: 'Miscellaneous', sortOrder: 50},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        //cakes 
        {name: 'Chocolate Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img924/9853/bTSP0i.jpg', category: categories[0], price: 5.95},
        {name: 'Chocolate Cream Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img923/9716/EMaYq3.png', category: categories[0], price: 5.95},
        {name: 'Espresso Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img924/7430/wEU1Kl.jpg', category: categories[0], price: 5.95},
        {name: 'Mango Mousse Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img922/901/JZ5eYA.png', category: categories[0], price: 5.95},

        {name: 'Fresh Cream Fruit Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img922/7184/ru6Wr4.jpg', category: categories[0], price: 5.95},
        {name: 'Green Tea Chiffon Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img923/8754/xtnm6N.jpg', category: categories[0], price: 5.95},
        {name: 'Green Tea Blueberry Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img924/8457/O2019Y.jpg', category: categories[0], price: 5.95},
        {name: 'Sweet Potato Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image: 'https://imagizer.imageshack.com/img922/7104/pNwjIU.jpg', category: categories[0], price: 5.95},
        
        {name: 'Tiramisu', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image:'https://imagizer.imageshack.com/img922/2347/PmMHmg.jpg', category: categories[0], price: 5.95},
        {name: 'Blueberry Yogurt Cake', size: [{value: 'slice', label: 'Slice'}, {value:'whole', label:'Whole'}], availability: true, image:'https://imagizer.imageshack.com/img922/9796/OfufTj.jpg', category: categories[0], price: 5.95},
        
        //Cupcakes
        {name: 'Mint Choco Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/2347/SiJtCG.jpg', category: categories[1], price: 5.95},
        {name: 'Nutella Raspberry Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/5461/QInbtx.jpg', category: categories[1], price: 5.95},
        {name: 'Cinderella Buttercream Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/4235/JvFzj7.jpg', category: categories[1], price: 5.95},
        {name: 'Fresh Fruit Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/3217/c0EgUG.jpg', category: categories[1], price: 5.95},
        {name: 'Butterscotch Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/4674/3XAi0a.jpg', category: categories[1], price: 5.95},
        {name: 'Chocolate Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img922/7186/sDkDVW.jpg', category: categories[1], price: 5.95},
        
        {name: 'Citrus Lemon Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/6779/JjRB0b.png', category: categories[1], price: 5.95},
        {name: 'Orange Citrus Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/124/Gt9Lhb.png', category: categories[1], price: 5.95},
        {name: 'Buttercream Pecan Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img923/7197/2uJPOS.png', category: categories[1], price: 5.95},
        
        {name: 'Strawberry ShortCake Cupcake', availability: true, image: 'https://imagizer.imageshack.com/img924/1157/6VJCUD.png', category: categories[1], price: 5.95},

        //Cookies 

        {name: 'Dog and Bone Sugar Cookies', availability: true, image: 'https://imagizer.imageshack.com/img924/6880/4fsD5U.png', category: categories[2], price: 5.95},
        {name: 'Fried Chicken Sugar Cookies', availability: true, image: 'https://imagizer.imageshack.com/img922/3183/QNT3eH.jpg', category: categories[2], price: 5.95},
        {name: 'Chick Lemon Cookies', availability: true, image: 'https://imagizer.imageshack.com/img922/3421/qS6cmH.png', category: categories[2], price: 5.95},
        {name: 'Frog Matcha Cookies', availability: true, image: 'https://imagizer.imageshack.com/img922/4606/1lojed.jpg', category: categories[2], price: 5.95},

        
        //Drinks
        {name: 'Hot Chocolate', availability: true, image: 'https://imagizer.imageshack.com/img924/8858/1NHo0I.png', category: categories[3], price: 5.95},
        {name: 'Black Coffee', availability: true, image: 'https://imagizer.imageshack.com/img923/7340/btkBDg.jpg', category: categories[3], price: 5.95},
        {name: 'Cafe Latte', availability: true, image: 'https://imagizer.imageshack.com/img923/9828/6VNKnO.jpg', category: categories[3], price: 5.95},
        {name: 'Cappuccino', availability: true, image: 'https://imagizer.imageshack.com/img923/7536/E0bu0Y.jpg', category: categories[3], price: 5.95},
        {name: 'Matcha Latte', availability: true, image: 'https://imagizer.imageshack.com/img924/2963/9VJ554.jpg', category: categories[3], price: 5.95},
        
        //misc
        {name: 'Mochi Donut', availability: true, image: 'https://imagizer.imageshack.com/img923/8262/yKxM6v.png', category: categories[4], price: 5.95},
        {name: 'Fruit Tart', availability: true, image: 'https://imagizer.imageshack.com/img924/8259/EzL6G4.jpg', category: categories[4], price: 5.95},
        {name: 'Bear Macarons', availability: true, image: 'https://imagizer.imageshack.com/img922/4595/xvvji8.png', category: categories[4], price: 5.95},
        {name: 'Frog Macarons', availability: true, image: 'https://imagizer.imageshack.com/img923/8923/fGrXq9.png', category: categories[4], price: 5.95},
        {name: 'Croffle', availability: true, image: 'https://imagizer.imageshack.com/img924/155/7RR9pb.png', category: categories[4], price: 5.95},
        {name: 'Chocolate Crossiant', availability: true, image: 'https://imagizer.imageshack.com/img924/9116/jzi52i.jpg', category: categories[4], price: 5.95},
        
    ])
    console.log(items)
    process.exit();
})();