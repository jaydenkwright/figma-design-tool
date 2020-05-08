const express = require('express')
const router = express.Router()
const axios = require('axios')
router.get('/callback', async (req, res) => {
    const { code, state } = req.query
    try{
        const response = await axios.post(
          `https://www.figma.com/api/oauth/token?client_id=XHqtRRkNPxiFkkosx4ZcOY&client_secret=hAOb2JxuDOKvkRZNL7CWyKK8lXsjRn&redirect_uri=http://localhost:5000/auth/callback&code=${code}&grant_type=authorization_code`)
          console.log(response.data)
          res.json(response.data)
      }catch(err){
        console.log(err)
      }
})

module.exports = router