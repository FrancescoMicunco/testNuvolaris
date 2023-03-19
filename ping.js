import { createClient } from "redis";

const client = createClient({ host: "127.0.0.1:6379" });

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

client.ping().then((e) => console.log("body", e));

// await client.disconnect();