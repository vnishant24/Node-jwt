const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())

const posts = [
    {
        username: 'Nishant',
        title: 'Post one'
    },
    {
        username: 'Jie'
        title: 'Post two'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts);
})
app.post('/login', (req, res) => {
    const user = req.body.username;
    const user = { name: username };

    jwt.sign(user, ACCESS_TOKEN_SECRET)

})
app.listen(4000)