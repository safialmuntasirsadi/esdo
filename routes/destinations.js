const express = require('express');
const router = express.Router();

// Destinations listing
router.get('/', (req, res) => {
    res.render('pages/destinations', {
        title: 'Explore Eco Tourism Destinations',
        page: 'destinations'
    });
});

// Single destination page
router.get('/:slug', (req, res) => {
    const { destinations } = res.app.locals;
    const dest = destinations.find(d => d.slug === req.params.slug);

    if (!dest) {
        return res.status(404).render('pages/404', {
            title: 'Destination Not Found',
            site: res.app.locals.site
        });
    }

    // Find next destination for navigation
    let nextDest = null;
    if (dest.nextDestination) {
        nextDest = destinations.find(d => d.slug === dest.nextDestination);
    }

    res.render('pages/destination-detail', {
        title: `${dest.name} — Eco Tourism Destination`,
        page: 'destinations',
        dest,
        nextDest
    });
});

module.exports = router;
