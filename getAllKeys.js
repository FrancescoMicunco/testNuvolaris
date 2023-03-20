import { createClient } from "redis";

const client = createClient({ host: "127.0.0.1:6379" });

async function main(args) {
  await client.connect();

  client.on("error", (err) => console.log("Redis Client Error", err));

  let keys = await client.keys("address:*");

  return keys.length == 0
    ? { data: [] }
    : client
        .mGet(keys)
        .then((r) => ({ data: r.map(JSON.parse) }))
        .catch((err) => ({ error: err }));
}
