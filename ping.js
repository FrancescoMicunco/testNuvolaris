import { createClient } from "redis";

const client = createClient({ host: "127.0.0.1:6379" });

async function main(args) {
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  return client.ping().then((e) => console.log("body", e));
}
