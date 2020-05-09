# Working with the Figma API

If you have been doing any kind of front-end web development or design, then chances are that you have probably heard of the cloud-based design and prototyping tool for digital UI/UX designs, ```Figma```. And if you are anything like me and aren't the best at design, then you've probably found yourself really confused with how to create good design with it. Unfourtanately, I still have yet to figure that out but I figured that it might be cool to try to build something pretty cool with the Figma API.

# Figma API Overview

### What can we do with the Figma API?

According to the Figma API docs, the API allows developers access to read and interact with files. We can **NOT** edit files. Almost all of the API endpoints are for ```GET``` requests. Figma claims that 

> Future versions of the API will unlock even greater functionality around Files

### How does the Figma API work?

The API is REST based. Requests are made through HTTP endpoints that allow you to request images, files, comments, etc. After requests are made, JSON responses are sent back to the developer which can be used to analyze.

# What to build?

The Figma developer blog has a post titled ["Want Figma API inspiration? Here's 8 community powered projects"](https://www.figma.com/blog/want-figma-api-inspiration-heres-8-community-powered-projects/) that I figured would be a good place to start in terms of ideas for what exactly to build with this API. One project that looks really interesting to me and something that I could build from is a ["Style guide generator called FigStyle"](https://figstyle.freighter.studio) by [Liam Martens](https://github.com/LiamMartens), Founder of Freighter design studio. Maybe I could try to expand on this idea and build some kind of tool to help front end developers bring Figma designs into production. Regardless of what I build, I think this will be a good excercise for me in terms of learning through documentation as there aren't many tutorials or videos using the Figma API.

# Tech Choices

* Node.js / Express backend

* Postgres(if needed)

* GraphQL

* React frontend 

# Getting started

## Authentication

Ok so let's start with getting users authenticated first. The Figma API allows for developers to authentication through OAuth 2.

> OAuth 2 is a web security protocol that allows 3rd party applications to establish a link between a user’s account and their access to a given API, on behalf of that user.

The first step seems to be to send users to the following URl

```
GET https://www.figma.com/oauth?
  client_id=:client_id&
  redirect_uri=:callback&
  scope=file_read&
  state=:state&
  response_type=code
```

To do this we need the Client ID from the app that we just registered, the callback URL and a state(randomly generated value to that needs to be stored). After the user vists the URL they will be asked to log in to figma and allow access to our application. If the user allows us access then it will redirect to our callback URL with a ```code``` and ```state``` as the query parameters. The ```state``` is the same randomly generated value from before while the ```code``` is a value sent to us from the Figma API that can be exchanged for an access token.

After we have our code, we can pass it back to the Figma API in the form of a ```POST``` request.

``` 
POST https://www.figma.com/api/oauth/token?
  client_id=:client_id&
  client_secret=:client_secret&
  redirect_uri=:callback&
  code=:code&
  grant_type=authorization_code
```

Once again we need the Client ID and callback URL, but this time we also need the Client secret and the code. This will send back JSON will the following values

``` json
{
  "access_token": <TOKEN>,
  "expires_in": <EXPIRATION (in seconds)>,
  "refresh_token": <REFRESH TOKEN>
}
```

The ```access_token``` will be used for making ```GET``` requests for files and images. The ```expires_in``` value tells the number of seconds before the token expires and ```refresh_token``` can used to refresh the access token after it expires.

I was able to implement this with the following Node.JS code

``` javascript
router.get('/callback', async (req, res) => {
    const { code } = req.query
    try{
        const response = await axios.post(
        `https://www.figma.com/api/oauth/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=${process.env.CALLBACK}&code=${code}&grant_type=authorization_code`)
        const { access_token, refresh_token, expires_in } = response.data
        res.cookie('access_token', access_token, {
            httpOnly: true
        })
        res.json(response.data)
    }catch(err){
        res.json({ error: err })
    }
})
```

How it works is that the user vists the given URL, they allow access our application access to their account and then are redirected to /callback?code=:code&state=:state. The code is then sent back to the API with a ```POST``` request using ```axios```. In return, we get the ```access_token``` and are saving it as a cookie so that the user does not have to login every single time they visit our application.

## Files

When we use the access token that we received back from the API to make a request for a file, we get something back in the following format

``` json
{
  "components": {},
  "document": {
    "children": [
      {
        "backgroundColor": {
          "a": 1,
          "b": 0.8980392156862745,
          "g": 0.8980392156862745,
          "r": 0.8980392156862745
        },
        "children": [],
        "exportSettings": [],
        "id": "0:1",
        "name": "Page 1",
        "type": "CANVAS",
        "visible": true
      }
    ],
    "id": "0:0",
    "name": "Document",
    "type": "DOCUMENT",
    "visible": true
  },
  "schemaVersion": 0
}
```

