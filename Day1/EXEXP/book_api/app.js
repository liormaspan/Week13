import express from "express";

const app=express()
app.use(express.json())

const books=[{id:1,title:"Harry Potter",author:"J.K.Rowling",year:1997},
             {id:2,title:"Arsène Lupin",author:"Maurice Leblanc",year:1905},
             {id:3,title:"The Secret",author:"Rhonda Byrne",year:2006}  
]

app.listen(5000,()=>{
    console.log("THE SERVER ON 5000 PORT");

})

app.get('/books',(req,res)=>{
    res.send(books)
})

app.get('/books/:bookId',(req,res)=>{
    const bookId = parseInt(req.params.bookId);
  const book = books.find((item) => item.id === bookId);
  if (book) {
    res.send(book).status(200);
  } else {
    res.status(404).send("Book Not Found");
  }
});

app.post('/books', (req, res) => {
    const { title, author, year } = req.body;
  
    const newBook = {
      id: books.length + 1,
      title,
      author,
      year,
    };
    books.push(newBook);
    res.status(201).send(newBook);
  });
  
