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

It seems that first we must register our application. I'm exactly sure what i'm going to call it yet so let's just go with "Design Tool".