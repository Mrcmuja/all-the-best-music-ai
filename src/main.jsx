
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const [songTitle, setSongTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [genre, setGenre] = useState("Pop");
  const [language, setLanguage] = useState("Bahasa Melayu");

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
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Pop</option>
          <option>Rock</option>
          <option>Dangdut</option>
          <option>Reggae</option>
          <option>Balada</option>
          <option>Hip Hop</option>
          <option>Traditional</option>
        </select>

        <label>Bahasa lagu</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>Bahasa Melayu</option>
          <option>English</option>
          <option>Indonesia</option>
          <option>中文</option>
          <option>தமிழ்</option>
          <option>Arabic</option>
        </select>

        <label>Lirik lagu</label>
        <textarea
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          placeholder="Tulis lirik lagu anda di sini..."
          rows="7"
        />

        <button
          className="primary"
          onClick={() =>
            alert("Demo sahaja. Penjanaan muzik AI sebenar belum disambungkan.")
          }
        >
          🎶 Cipta Lagu AI
        </button>
      </section>

      <section className="card">
        <h2>Perpustakaan Muzik</h2>
        <p>Lagu yang anda cipta akan dipaparkan di sini apabila sistem muzik sebenar disambungkan.</p>
      </section>

      <p>© ALL THE BEST MUSIC AI</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
