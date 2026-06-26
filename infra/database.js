import { Client } from "pg";

async function query(query) {
  try {
    const client = new Client({
      host: process.env.POSTGRES_HOST,
      port: process.env.POSGRES_PORT,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
    });

    await client.connect();

    const result = await client.query(query);
    await client.end();

    return result;
  } catch (error) {
    console.error(error.mensage);
  }
}

export default {
  query: query,
};
