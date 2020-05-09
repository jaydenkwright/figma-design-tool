const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/callback', async (req, res) => {
    const { code, state } = req.query
    try{
        if (req.cookies.access_token) res.clearCookie('access_token')
        const response = await axios.post(
        `https://www.figma.com/api/oauth/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=${process.env.CALLBACK}&code=${code}&grant_type=authorization_code`)
        const { access_token, refresh_token, expires_in } = response.data
        console.log(response.data)
        res.cookie('access_token', access_token, {
            httpOnly: true
        })
        console.log(response.data.access_token)
        res.json(response.data)
    }catch(err){
        console.log(err)
    }
})


module.exports = router