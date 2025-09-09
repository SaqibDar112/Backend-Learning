const express = require('express')
require('dotenv').config()

const app = express()

const apiGithub={
  "login": "SaqibDar112",
  "id": 115392179,
  "node_id": "U_kgDOBuC-sw",
  "avatar_url": "https://avatars.githubusercontent.com/u/115392179?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SaqibDar112",
  "html_url": "https://github.com/SaqibDar112",
  "followers_url": "https://api.github.com/users/SaqibDar112/followers",
  "following_url": "https://api.github.com/users/SaqibDar112/following{/other_user}",
  "gists_url": "https://api.github.com/users/SaqibDar112/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SaqibDar112/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SaqibDar112/subscriptions",
  "organizations_url": "https://api.github.com/users/SaqibDar112/orgs",
  "repos_url": "https://api.github.com/users/SaqibDar112/repos",
  "events_url": "https://api.github.com/users/SaqibDar112/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SaqibDar112/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Saqib Dar ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 44,
  "public_gists": 0,
  "followers": 3,
  "following": 9,
  "created_at": "2022-10-09T07:01:34Z",
  "updated_at": "2025-09-03T09:27:29Z"
}

app.get('/', (req, res) => {
  res.send('Hello World! from express')
})

app.get('/twitter',(req,res)=>{
    res.send("saqibdar@twitter");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login here at backend</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send(`<a href="www.youtube.com">Youtube</a>`)
})

app.get('test',(req,res)=>{
  app.send("Checking git");
})

app.get("/github",(req,res)=>{
    res.json(apiGithub);
})

app.get('/final',(req,res)=>{
  res.send("This is final send for here ");
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
