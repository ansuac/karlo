const mapUrl = "https://maps.app.goo.gl/vAsMFW3HURaZeJAp8";
const confirmUrl =
  "https://wa.me/5214731448429?text=" +
  encodeURIComponent("Confirmo mi asistencia al cumpleaños número 34 ⚽🍻🏆");

export default function Home() {
  return (
    <main className="invite-shell">
      <article className="player-card" aria-label="Invitación de cumpleaños 34 con temática de fútbol">
        <div className="top-stripe" />

        <header className="hero">
          <section className="hero-copy">
            <h1>¡Atención,<br /><em>afición!</em></h1>
            <p>Se ha abierto el mercado de fichajes y estás convocado para el partido más importante de la temporada: <strong>¡mi cumpleaños número 34! ⚽🔥</strong></p>
            <p>Prepárate para saltar a la cancha en un evento donde celebraremos la trayectoria, el buen fútbol y, sobre todo, las ganas de pasarla espectacular.</p>
            <div className="hero-actions">
              <a className="button primary" href={confirmUrl} target="_blank" rel="noreferrer">Confirmar asistencia</a>
              <a className="button secondary" href={mapUrl} target="_blank" rel="noreferrer">Ver ubicación</a>
            </div>
          </section>
          <div className="number-block" aria-label="Cumpleaños número 34">
            <div className="cr7-badge" aria-hidden="true"><span>CR</span><b>7</b></div>
            <b className="age">34</b>
          </div>
        </header>

        <div className="content-grid">
          <section aria-labelledby="convocatoria">
            <div className="section-heading"><span>🗓️</span><h2 id="convocatoria">LA CONVOCATORIA (Detalles del Partido)</h2></div>
            <div className="stats-grid">
              <div className="stat red"><small>Fecha:</small><strong>Sábado<br />25 de julio</strong></div>
              <div className="stat green"><small>Hora de inicio:</small><strong>A partir de las<br />5:00 p.m.</strong><p>(Se ruega puntualidad para el calentamiento).</p></div>
              <div className="stat"><small>Motivo:</small><strong>Celebrar mis 34 años como se debe.</strong></div>
              <a className="stat venue" href={mapUrl} target="_blank" rel="noreferrer">
                <span><small>Lugar:</small><strong>Callejon del rosarito #2 zona centro</strong><p>https://maps.app.goo.gl/vAsMFW3HURaZeJAp8</p></span><b>↗</b>
              </a>
            </div>

            <div className="section-heading compact"><span>👕</span><h2>CÓDIGO DE VESTIMENTA (Dress Code)</h2></div>
            <div className="text-card">
              <p>Para jugar este partido hay que vestir los colores. El código de vestimenta es ir con playera de fútbol de tu equipo favorito o cualquier prenda relacionada con el balompié.</p>
              <p>La temática de la fiesta rinde homenaje a grandes de la historia, así que si tienes algo de estos equipos, ¡es tu momento de lucirte!:</p>
              <ul>
                <li>🇵🇹 Selección de Portugal / Sporting de Lisboa</li>
                <li>🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United</li>
                <li>🇪🇸 Real Madrid</li>
                <li>🇮🇹 Juventus</li>
                <li>🇸🇦 Al Nassr</li>
                <li>🇲🇽 Selección de México / Cruz Azul 🚂</li>
              </ul>
              <p>(O cualquier otra playera de fútbol que tengas en tu armario).</p>
            </div>
          </section>

          <aside className="game-plan">
            <div className="section-heading"><span>⚠️</span><h2>REGLAS DEL JUEGO (Muy Importantes)</h2></div>
            <div className="rule"><b>🎟️</b><div><strong>Pase de Entrada:</strong><p>El boleto de acceso a la cancha es traer tu propio alcohol/bebida. Aquí no se escatima en hidratación, así que asegura tu dotación.</p></div></div>
            <div className="rule"><b>💪</b><div><strong>Perfil del Jugador:</strong><p>Solo se acepta gente altamente motivada y con actitud de campeones para pasarla bien.</p></div></div>

            <div className="section-heading compact"><span>🎯</span><h2>LA EXPECTATIVA DE LA JORNADA</h2></div>
            <div className="ronaldo-callout">
              <p>El objetivo táctico de este encuentro es simple y directo: pasar un rato increíble, reírnos y ponernos ebrios todos sin piedad. ¡Aquí venimos a dar el 110% en el tercer tiempo!</p>
            </div>
          </aside>
        </div>

        <footer className="contract">
          <p>¿Contamos con tu firma para este contratazo? Confirmar asistencia antes de que se cierre el mercado de pases el miércoles 22 de julio. ¡Te espero! 🍻⚽🏆</p>
          <a className="button light" href={confirmUrl} target="_blank" rel="noreferrer">Confirmar asistencia</a>
          <div className="stamp" aria-hidden="true">CR7<br />34<br />🇵🇹</div>
        </footer>
      </article>
    </main>
  );
}
