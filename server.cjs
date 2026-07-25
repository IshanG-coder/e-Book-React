const jsonServer = require("json-server");
const auth = require("json-server-auth"); // hashing 

const app = jsonServer.create(); //create the server
const router = jsonServer.router("data/db.json");

app.db = router.db;

app.use(jsonServer.defaults()); //This adds default middleware. (Something that runs before the request reaches your API.)
app.use(auth);
app.use(router);

app.listen(8000, () => {
  console.log("JSON Server is running on port 8000");
});