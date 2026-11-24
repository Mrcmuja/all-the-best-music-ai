

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const API_URL =
  "https://all-the-best-music-ai.gamersever2020.workers.dev";

function App() {
  const [songTitle, setSongTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [genre, setGenre] = useState("Pop");
  const [language, setLanguage] = useState("Bahasa Melayu");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function createLyrics() {
    if (!lyrics.trim()) {
      setError("Sila masukkan idea atau jalan cerita lagu dahulu.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: songTitle,
          genre: genre,
          language: language,
          idea: lyrics
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal menjana lirik.");
      }

      setLyrics(data.lyrics);
    } catch (err) {
      setError(
        err.message || "Tidak dapat menghubungi sistem AI. Cuba lagi."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>🎵 ALL THE BEST MUSIC AI</h1>
      <p>Cipta lagu anda dengan bantuan AI</p>

      <section className="card">
        <h2>Cipta Lagu Baharu</h2>

        <label>Tajuk lagu</label>
        <input
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
          placeholder="Masukkan tajuk lagu"
        />

        <label>Genre muzik</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option>Pop</option>
          <option>Rock</option>
          <option>Dangdut</option>
          <option>Reggae</option>
          <option>Balada</option>
          <option>Hip Hop</option>
          <option>Traditional</option>
        </select>

        <label>Bahasa lagu</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>Bahasa Melayu</option>
          <option>English</option>
          <option>Indonesia</option>
          <option>中文</option>
          <option>தமிழ்</option>
          <option>Arabic</option>
        </select>

        <label>Idea atau jalan cerita lagu</label>
        <textarea
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          placeholder="Contoh: Lagu tentang cinta, kerinduan dan kehidupan..."
          rows="7"
        />

        <button
          className="primary"
          onClick={createLyrics}
          disabled={loading}
        >
          {loading ? "⏳ Sedang mencipta lirik..." : "🎶 Cipta Lirik AI"}
        </button>

        {error && <p role="alert">{error}</p>}
      </section>

      <section className="card">
        <h2>Perpustakaan Muzik</h2>
        <p>
          Lirik yang dijana boleh disalin dan disimpan oleh pengguna.
        </p>
      </section>

      <p>© ALL THE BEST MUSIC AI</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
