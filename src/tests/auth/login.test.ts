import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../app";

let mongoServer: MongoMemoryServer;

jest.setTimeout(20000);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/auth/login", () => {
  it("should login an existing user and return a token", async () => {
    // register user first
    await request(app).post("/api/auth/register").send({
      email: "login@test.com",
      password: "password123"
    });

    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "login@test.com",
        password: "password123"
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});

