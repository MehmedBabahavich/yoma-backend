import express from "express";
import dotenv from "dotenv"
import { router } from "./routes/user.router.js";

dotenv.config();

const PORT = process.env.API_PORT;
const app = express();


app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
});
