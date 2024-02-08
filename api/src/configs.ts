import { config } from "dotenv";
config({ path: ".env" })
console.log("process env", process.env.DATABASE);

export default {
    env: <string>process.env.NODE_ENV,
    db: <string>process.env.DATABASE
}