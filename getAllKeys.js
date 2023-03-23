async function main(args) {
  const client = require("redis").createClient({ url: args.redis });

  client.on("error", (err) => console.log("Redis Client Error", err));
 
   await client.connect();

  let keys = await client.keys("address:*");

  return keys.length == 0
    ? { "data": [] }
    : client
        .mGet(keys)
        .then(r => ({ "data": r.map(JSON.parse) }))
        .catch((err) => ({ "error": err }));
}
