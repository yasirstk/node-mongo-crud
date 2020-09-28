const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const password = "t3ugylFbZjsBTHuP";

const uri =
  "mongodb+srv://programminghero:t3ugylFbZjsBTHuP@cluster0.l5iht.mongodb.net/programmingdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

client.connect((err) => {
  const productCollection = client.db("programmingdb").collection("products");
  
  app.get('/products', (req, res) => {
    productCollection.find({})
    .toArray(err, documents => {
      res.send(documents);
    })
  })

  app.post("/addProduct", (req, res) => {
    const product = req.body;
    console.log(product);
  })
  
});

app.listen(3000);
