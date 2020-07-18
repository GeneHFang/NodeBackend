const express = require('express');

const router = express.Router();

router.get('/', (req, resp) => {
    resp.send("This will be ships");
});


module.exports = router;