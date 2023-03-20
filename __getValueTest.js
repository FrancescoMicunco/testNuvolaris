import { createClient } from "redis";

const client = createClient();

async function main(args) {
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    let key = "address:" + args.name;

    await client.get(key);

    await client.disconnect();
}

main(args);