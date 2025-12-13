import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../app";

let mongoServer: MongoMemoryServer;
let token: string;

jest.setTimeout(20000);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  // register
  await request(app).post("/api/auth/register").send({
    email: "sweet@test.com",
    password: "password123"
  });

  // login
  const loginRes = await request(app).post("/api/auth/login").send({
    email: "sweet@test.com",
    password: "password123"
  });

  token = loginRes.body.token;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("GET /api/sweets", () => {
  it("should return 200 and an empty array when no sweets exist", async () => {
    const response = await request(app)
      .get("/api/sweets")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0);
  });
});
