import express from "express";
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.API_PORT;
const app = express();
const router = express.Router();

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: "http://127.0.0.1:8081"
  };

// wtf?
app.use(cors(corsOptions));


app.use("/", router);

router.post("/register", (req, res) => {
    console.log(req.body);
    res.send();
});

router.get("/", (req, res) => {
    res.send("test");
});

app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
});

