const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Load data
const siteConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'site.json')));
const destinations = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'destinations.json')));
const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'posts.json')));
const sustainability = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'sustainability.json')));

// Make data available to all views
app.locals.site = siteConfig.site;
app.locals.destinations = destinations;
app.locals.posts = posts;
app.locals.sustainability = sustainability;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('dev'));

// Routes
const mainRoutes = require('./routes/main');
const destinationRoutes = require('./routes/destinations');
const blogRoutes = require('./routes/blog');

app.use('/', mainRoutes);
app.use('/destinations', destinationRoutes);
app.use('/blog', blogRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).render('pages/404', {
        title: 'Page Not Found',
        site: siteConfig.site
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/error', {
        title: 'Something Went Wrong',
        site: siteConfig.site,
        message: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred.' : err.message
    });
});

app.listen(PORT, () => {
    console.log(`\n  ESDO Eco Tourism Server running`);
    console.log(`  Local:  http://localhost:${PORT}\n`);
});
