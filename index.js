const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});
app.set('view engine', 'njk');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', { site_title: 'EduClass - An Online Education Template.'} );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});
