const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'my first post hello',
            description: 'hello how are you?'
        }
    });
});

// exports
module.exports = router;