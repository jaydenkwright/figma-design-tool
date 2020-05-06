const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on ${port}`));