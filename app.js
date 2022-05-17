const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

const dbURI = "mongodb+srv://dero:niggaholli@cluster0.x8ijl.mongodb.net/node-tutorial?retryWrites=true&w=majority"
mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>app.listen(3000))
    .catch((err)=> console.log("error", err))

//register view engine
app.set('view engine', 'ejs')

//middleware, static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
 
//routes
app.get('/',  (req, res) => {
    res.redirect('/blogs')
})

//blog routes
app.use('/blogs', blogRoutes)

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });



  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });

