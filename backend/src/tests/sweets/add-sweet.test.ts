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

  await request(app).post("/api/auth/register").send({
    email: "addsweet@test.com",
    password: "password123"
  });

  const loginRes = await request(app).post("/api/auth/login").send({
    email: "addsweet@test.com",
    password: "password123"
  });

  token = loginRes.body.token;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/sweets", () => {
  it("should add a new sweet and return 201", async () => {
    const response = await request(app)
      .post("/api/sweets")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Gulab Jamun",
        category: "Indian",
        price: 20,
        quantity: 50
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Gulab Jamun");
  });
});
