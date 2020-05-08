const express = require('express')
const router = express.Router()

router.get('/callback', (req, res) => {
    console.log(req.query)
    res.json({ 'code': req.query.code, 'state': req.query.state })
})

https://www.figma.com/oauth?client_id=XHqtRRkNPxiFkkosx4ZcOY&redirect_uri=http://localhost:5000/auth/callback&scope=file_read&state=fuck&response_type=code

module.exports = router