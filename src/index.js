require("dotenv").config();

const app = require("./app");
require("./database");

//const PORT = process.env.PORT || 3001;

async function main() {
  /*app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
  );*/
  await app.listen(app.get("port"));
  console.log(`🌎  ==> API Server now listening on ${app.get("port")}!`);
}

main();
