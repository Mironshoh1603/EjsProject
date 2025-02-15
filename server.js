const env = require("dotenv").config();
const app = require("./middlewares/app");

app.listen(4000, () => {
  console.log("Server is running on ", 4000);
});
