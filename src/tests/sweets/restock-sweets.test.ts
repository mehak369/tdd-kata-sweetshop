import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../app";

let mongoServer: MongoMemoryServer;
let token: string;
let sweetId: string;

jest.setTimeout(20000);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  // register
  await request(app).post("/api/auth/register").send({
    email: "restock@test.com",
    password: "password123"
  });

  // login
  const loginRes = await request(app).post("/api/auth/login").send({
    email: "restock@test.com",
    password: "password123"
  });

  token = loginRes.body.token;

  // add sweet
  const sweetRes = await request(app)
    .post("/api/sweets")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Ladoo",
      category: "Indian",
      price: 10,
      quantity: 5
    });

  sweetId = sweetRes.body.id;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/sweets/:id/restock", () => {
  it("should increase sweet quantity by given amount", async () => {
    const response = await request(app)
      .post(`/api/sweets/${sweetId}/restock`)
      .set("Authorization", `Bearer ${token}`)
      .send({ quantity: 10 });

    expect(response.status).toBe(200);
    expect(response.body.quantity).toBe(15);
  });
});
