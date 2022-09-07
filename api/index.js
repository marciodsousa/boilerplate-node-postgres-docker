const { Client } = require("pg");

const client = new Client({
     user: process.env.POSTGRES_USER,
     host: process.env.POSTGRES_HOST,
     database: process.env.POSTGRES_DB,
     password: process.env.POSTGRES_PASSWORD,
     port: process.env.POSTGRES_PORT,
});

client.connect();

console.log(
     "hello world. changes here are automatically assumed by the container"
);

init();

async function init() {
     const query = "";

     try {
          const res = await client.query(query);
          console.log(res);
          console.log("Successfuly querying the DB");
     } catch (err) {
          console.log(err.stack);
     } finally {
          client.end();
     }
}
