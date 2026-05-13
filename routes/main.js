const express = require('express');
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'ESDO Eco Tourism | Sustainable Community-Based Tourism in Bangladesh',
        page: 'home'
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About ESDO Eco Tourism',
        page: 'about'
    });
});

// Sustainability page
router.get('/sustainability', (req, res) => {
    res.render('pages/sustainability', {
        title: 'Our Sustainability Approach',
        page: 'sustainability'
    });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact ESDO Eco Tourism',
        page: 'contact',
        success: req.query.success === 'true' ? true : false
    });
});

// Contact form submission
router.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    // In production, send email or save to database
    console.log('Contact form submission:', { name, email, subject, message });
    res.redirect('/contact?success=true');
});

module.exports = router;
