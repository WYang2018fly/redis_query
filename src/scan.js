const redis = require('redis');
const redisScan = require('node-redis-scan');
 
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
  db: 1
});
const scanner = new redisScan(client);

//查询所有的keys
scanner.scan('*', (err, matchingKeys) => {
  if (err) throw(err);
  console.log(matchingKeys);
});


//关键字查询keys
scanner.scan('redisKey 1*', (err, matchingKeys) => {
  if (err) throw(err);
  console.log(matchingKeys);
});