
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "ALL THE BEST MUSIC AI",
    mode: "demo"
  });
});

app.post("/api/generate", async (req, res) => {
  const { prompt, lyrics, genre, language, voice } = req.body || {};

  if (!prompt && !lyrics) {
    return res.status(400).json({
      error: "Sila masukkan idea lagu atau lirik."
    });
  }

  res.json({
    success: true,
    mode: "demo",
    message: "Permintaan diterima. API muzik AI belum disambungkan.",
    song: {
      title: prompt || "Lagu Baharu",
      genre: genre || "Pop",
      language: language || "Malay",
      voice: voice || "Female",
      lyrics: lyrics || ""
    }
  });
});

app.get("/", (req, res) => {
  res.send("ALL THE BEST MUSIC AI Server is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
