import { createClient } from "redis";

const client = createClient();

let args = { name: "third_test", company: "NuvolarisIV", phone: "000000" };

async function main(args) {
    await client.connect();

    client.on("error", (err) => console.log("Redis Client Error", err));

    let key = "address:" + args.name;
    let value = JSON.stringify({
        name: args.name || "",
        company: args.company || "",
        phone: args.phone || "",
    });

    await client.set(key, value);

    // await client.get(key);

    await client.disconnect();
}

main(args);