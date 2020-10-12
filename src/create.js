const Redis = require('ioredis');
const redis = new Redis('redis://localhost:6379/1',{ lazyConnect: true });;
const _ = require('lodash');

const create = async (index) => {
  let key = `redisKey ${index}`,
    value = index;

  let exists = await redis.exists(key);
  if (!exists) await redis.set(key, value, 'EX', 3600);
};

const start = async () => {
  for (let i = 0; i <= 20; i++) {
    await create(i);
  }
}

start();