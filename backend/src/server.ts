import app from "./app";
import { connectDB } from "./config/db";

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
