const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const graphqlHTTP = require('express-graphql')
const auth = require('./routes/auth')
const figma = require('./routes/figma')
const schema = require('./schema')
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use('/figma', figma)
app.use('/auth', auth)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on ${port}`));