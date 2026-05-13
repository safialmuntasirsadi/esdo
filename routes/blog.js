const express = require('express');
const router = express.Router();

// Blog listing with optional category filter
router.get('/', (req, res) => {
    const { posts } = res.app.locals;
    const category = req.query.category;
    const search = req.query.search;

    let filtered = [...posts];

    if (category) {
        filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.tags.some(t => t.toLowerCase().includes(q))
        );
    }

    const categories = [...new Set(posts.map(p => p.category))];

    res.render('pages/blog', {
        title: 'Eco Tourism Blog & Stories',
        page: 'blog',
        posts: filtered,
        categories,
        currentCategory: category || null,
        searchQuery: search || ''
    });
});

// Single blog post
router.get('/:slug', (req, res) => {
    const { posts, destinations } = res.app.locals;
    const post = posts.find(p => p.slug === req.params.slug);

    if (!post) {
        return res.status(404).render('pages/404', {
            title: 'Article Not Found',
            site: res.app.locals.site
        });
    }

    // Find related posts (same category or tags)
    const related = posts
        .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
        .slice(0, 3);

    res.render('pages/post-detail', {
        title: post.title,
        page: 'blog',
        post,
        related
    });
});

module.exports = router;
