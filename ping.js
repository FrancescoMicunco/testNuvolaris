



async function main(args) {
const client = require("redis").createClient({ url: args.redis });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  return client.ping().then((e) => console.log("body", e));
}
