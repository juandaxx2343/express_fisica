const express = require ('express')
const hbs = require('hbs')
const app = express()
const port = 1200

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.render('home',{
        nombre: 'Home'
    })
});

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
hbs.registerPartials(__dirname + '/views/dashboard/partialsDash', function (err) {});
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.get('/contacto', (req,res) =>{
    
    res.render('contact' ,{
        nombre:'Contacto'
    })
})

app.get('/login', (req,res) =>{
    
    res.render('login' ,{
        nombre:'Login'
    })
})
app.get('/registro', (req,res) =>{
    
    res.render('registro' ,{
        nombre:'Registrarse'
    })
})

app.get('/about', (req,res) =>{
    
    res.render('about' ,{
        nombre:'About'
    })
})
app.get('/head', (req,res) =>{
    
    res.render('head' ,{
        nombre:'Head'
    })
})
app.get('/cart', (req,res) =>{
    
    res.render('cart' ,{
        nombre:'Cart'
    })
})
app.get('/checkout', (req,res) =>{
    
    res.render('checkout' ,{
        nombre:'Checkout'
    })
})
app.get('/shop', (req,res) =>{
    
    res.render('shop' ,{
        nombre:'Shop'
    })
})
app.get('/shop-single', (req,res) =>{
    
    res.render('shop-single' ,{
        nombre:'detalleProducto'
    })
})
app.get('/contact', (req,res) =>{
    
    res.render('contact' ,{
        nombre:'Contacto'
    })
})
app.get('/thankyou', (req,res) =>{
    
    res.render('thankyou' ,{
        nombre:'Chek'
    })
})

app.get('/inicio',(req,res) =>{
    res.render('dashboard/inicio' ,{
        nombre:'Dashboard'
    })
})

app.get('/pedidos',(req,res) =>{
    res.render('dashboard/pedidos' ,{
        nombre:'Dashboard'
    })
})

app.get('/productos',(req,res) =>{
    res.render('dashboard/productos' ,{
        nombre:'Pedidos'
    })
})

app.get('/usuarios',(req,res) =>{
    res.render('dashboard/usuarios' ,{
        nombre:'usuarios'
    })
})

app.get('/fisica',(req,res) =>{
    res.render('dashboard/fisica' ,{
        nombre:'fiscia'
    })
})



app.get('*',(req,res) =>{

    res.render('404' ,{
        nombre:'pagina no encontrada'
    })
})



app.listen(port,() =>{
    console.log(`escuchando por el puerto http://localhost:${port}`)
})

