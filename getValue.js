

async function main(args) {

  const client = require("redis").createClient({ url: args.redis });

  client.on("error", (err) => console.log("Redis Client Error", err));
 
   await client.connect();

  let key = "address:" + args.name;

  return client.get(key)
  .then((v) => JSON.parse(v))
  .catch((err) => ({ error: err }));}

