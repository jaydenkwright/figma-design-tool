const express = require('express')
const router = express.Router()
const axios = require('axios')



router.get('/document/', async (req, res) => {
  try{
    token = req.headers.authorization || req.cookies.access_token
    const response = await axios.get('https://api.figma.com/v1/files/8uwcYHQmbaHGFgZ59KkOYU', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    console.log(response.data.document)
    res.json(response.data.document)
  }catch(err){
    //console.log(err)
  }
})

router.get('/images/:key/:ids', async(req, res) => {
  try{
    token = req.headers.authorization || req.cookies.access_token
    const response = await axios.get(`https://api.figma.com/v1/images/${req.params.key}?ids=${req.params.ids}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    res.json(response.data)
  }catch(err){
    res.json(err)
  }
})
module.exports = router