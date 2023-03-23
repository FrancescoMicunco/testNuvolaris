async function main(args) {
  const client = require("redis").createClient({ url: args.redis });

  client.on("error", (err) => console.log("Redis Client Error", err));
 
   await client.connect();
  let key = "address:" + args.name;

  return client.del(key)
  .then((r) => ({ "del": r }))
  .catch((err) => ({ "error": err }));
}
