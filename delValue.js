import { createClient } from "redis";

const client = createClient({ host: "127.0.0.1:6379" });

async function main(args) {
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
  let key = "address:" + args.name;

  const delKey = await client.del(key);
  return delKey.then((r) => ({ del: r })).catch((err) => ({ error: err }));
}
