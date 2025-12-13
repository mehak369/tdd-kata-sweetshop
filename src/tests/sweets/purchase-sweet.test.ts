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
    email: "purchase@test.com",
    password: "password123"
  });

  // login
  const loginRes = await request(app).post("/api/auth/login").send({
    email: "purchase@test.com",
    password: "password123"
  });

  token = loginRes.body.token;

  // add a sweet
  const sweetRes = await request(app)
    .post("/api/sweets")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Rasgulla",
      category: "Indian",
      price: 15,
      quantity: 5
    });

  sweetId = sweetRes.body.id;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/sweets/:id/purchase", () => {
  it("should decrease sweet quantity by 1", async () => {
    const response = await request(app)
      .post(`/api/sweets/${sweetId}/purchase`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.quantity).toBe(4);
  });
});
