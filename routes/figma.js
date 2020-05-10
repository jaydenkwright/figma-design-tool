const express = require('express')
const router = express.Router()
const axios = require('axios')



router.get('/document', async (req, res) => {
  try{
    token = 'Z0lgipgstKyOeIGWG9_A3ylQlPEirPpQrW4h8II2'
    const response = await axios.get('https://api.figma.com/v1/files/L473FwdLL2rMjFUa2w5NmO', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    console.log(response.data.document)
    res.json(response.data.document)
  }catch(err){
    console.log(err)
  }
})

router.get('/images/:key/:ids', async(req, res) => {
  try{
    token = 'Z0lgipgstKyOeIGWG9_A3ylQlPEirPpQrW4h8II2'
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