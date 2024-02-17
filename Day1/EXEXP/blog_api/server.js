const express=require("express")
const app= express()

const data=[{id:1,title:"Rap",content:"Music"},
{id:2,title:"American Gangster",content:"Movis"},
{id:3,title:"Football",content:"Sport"},
]


app.listen(3000,()=>{
    console.log("the server is on 3000 port");
})

//8
app.get('/post',(req,res)=>{
    res.json(data)
})

//9
app.get('/post/:id',(req,res)=>{
    const postId = parseInt(req.params.id);
  const post = data.find((post) => post.id === postId);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send("post not found");
  }
})

//10
app.post('/post',(req,res)=>{
    const{title,content}=req.body
    const newPost={
        id:data.length+1,
        title,
        content,
    }
    data.push(newPost)
    res.status(201).send("POST CREATED")
})

//11
app.put("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = data.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      data[postIndex].title = title;
      data[postIndex].content = content;
      res.send("Blog post updated successfully");
    } else {
      res.status(404).send("Post not found");
    }
  });

  //12
  app.delete("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = data.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      data.splice(postIndex, 1);
      res.send("Blog post deleted successfully");
    } else {
      res.status(404).send("Post not found");
    }
  });