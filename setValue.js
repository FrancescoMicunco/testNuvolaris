async function main(args) {

  
 const client = require("redis").createClient({ url: args.redis });

 client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  // verifica che non ci siano errori sul client

  client.on("error", (err) => console.log("Redis Client Error", err));

  // assegna un valore alla key da settare
  let key = "address:" + args.name;

  // riceve i dati dalla props
  let value = JSON.stringify({
    name: args.name || "",
    company: args.company || "",
    phone: args.phone || "",
  });

  return client.set(key, value)
  .then((r) => ({ "set": r }))
  .catch((err) => ({ "error": err }));
}
