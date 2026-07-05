import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
async function migrations(request, response) {
  if (request.method == "POST") {
    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: false,
      dir: join("infra", "migrations"),
      migrationsTable: "pgmigrations",
      direction: "up",
      verbose: true,
    });

    return response.status(200).json(migrations);
  }
  if (request.method == "GET") {
    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dir: join("infra", "migrations"),
      dryRun: true,
      migrationsTable: "pgmigrations",
      direction: "up",
      verbose: true,
    });

    return response.status(200).json(migrations);
  }

  return response.status(405).end();
}

export default migrations;
