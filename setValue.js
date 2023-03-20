import { createClient } from "redis";

const client = createClient({ host: "127.0.0.1:6379" });

async function main(args) {
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

  const setValue = await client.set(key, value);

  return setValue.then((r) => ({ set: r })).catch((err) => ({ error: err }));
}
