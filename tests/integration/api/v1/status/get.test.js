test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(new Date(responseBody.update_at).toISOString()).toEqual(
    responseBody.update_at,
  );

  expect(responseBody.dependencies.database.version).toEqual("16.14 (7f2ba1b)");

  expect(responseBody.dependencies.database.max_connections).toEqual("901");

  expect(
    responseBody.dependencies.database.opened_connections,
  ).toBeGreaterThanOrEqual(1);
});
