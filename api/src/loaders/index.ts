import app from "./server";
import mongoDB from "./db";
import http from "http";

export default () => {
  const server = http.createServer(app);

  const port = (process.env.PORT as unknown as number) || 4000;
  server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  const db = mongoDB();

  process.on("SIGINT", () => {
    server.close();
    db.close();
  });
};
