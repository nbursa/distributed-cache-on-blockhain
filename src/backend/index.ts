import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import web3 from "./web3Config";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get("/block-number", async (_req, res) => {
  console.log("Inside block-number route");
  const blockNumber = await web3.eth.getBlockNumber();
  console.log(`Current block number is ${blockNumber}`)
  res.send(`Current block number is ${blockNumber}`);
});

const PORT: number = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
