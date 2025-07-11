const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', { site_title: 'EduClass - An Online Education Template.'} );
});
app.get('/online-class', function(req, res) {
    res.render('index-2', { site_title: 'EduClass - An Online Education Template.'} );
});
app.get('/course-tab-open-filter', function(req, res) {
    res.render('course-tab-open-filter', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-tab-with-sort', function(req, res) {
    res.render('course-tab-with-sort', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-tab-with-collapsed-filter', function(req, res) {
    res.render('course-tab-with-collapsed-filter', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-left-sidebar', function(req, res) {
    res.render('course-left-sidebar', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-right-sidebar', function(req, res) {
    res.render('course-right-sidebar', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-left-collapsed-sidebar', function(req, res) {
    res.render('course-left-collapsed-sidebar', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-left-offcanvas-sidebar', function(req, res) {
    res.render('course-left-offcanvas-sidebar', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-right-offcanvas-sidebar', function(req, res) {
    res.render('course-right-offcanvas-sidebar', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-right-collapsed-sidebar', function(req, res) {
    res.render('course-right-collapsed-sidebar', { site_title: 'Course - An Online Education Template.'} );
});
app.get('/course-details', function(req, res) {
    res.render('course-details', { site_title: 'Course Details - An Online Education Template.'} );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});
