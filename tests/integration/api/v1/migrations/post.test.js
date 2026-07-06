import database from "infra/database.js";

test("method POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);

  expect(responseBody.length).toBeGreaterThan(0);

  const respons_2 = await fetch("http:localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  const responseBody_2 = await response.json();

  expect(responseBody.length).toBe(0);
});
