export default function Home() {
  return <h1>Benvenuto nel sito ufficiale di Gerico</h1>;
  export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Gerico Official</h1>
      <h2>🎵 Tutte le mie canzoni</h2>

      <h3>YouTube</h3>
      <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed?list=UUiYftcP_h9URHvbZf" 
        title="YouTube channel" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>

      <h3>Spotify</h3>
      <iframe 
        src="https://open.spotify.com/embed/artist/58GReT1cvVXdIBal8l8zVw?utm_source=generator" 
        width="100%" 
        height="380" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    </div>
  );
}

}
