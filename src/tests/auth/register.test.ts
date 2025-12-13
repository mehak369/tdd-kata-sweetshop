import mongoose from "mongoose";
import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../app";

let mongoServer: MongoMemoryServer;

jest.setTimeout(20000);

describe("POST /api/auth/register", () => {
  it("should register a new user and return 201", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        email: "test@example.com",
        password: "password123"
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.email).toBe("test@example.com");
    expect(response.body).not.toHaveProperty("password");
  });
});
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
