const Redis = require("ioredis");
const client = new Redis({ host: "localhost", port: 6379 });

// Example: Set a key-value pair in Redis
client.set("my_key", "Hello World");

// Example: Get a value from Redis
client.get("my_key").then((reply) => {
  console.log(reply);
});

// Example: Multiple values write & read
client
  .hmset("my_data", {
    header: 0,
    left: 0,
    article: 0,
    right: 0,
    footer: 0,
  })
  .then((reply) => {
    console.log(reply);
  });

client.hgetall("my_data").then((value) => {
  console.log("Values in my_data:", value);
});

// Close the Redis client when you're done
client.quit();
