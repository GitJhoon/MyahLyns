function Home() {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
        }
        .foto-perfil {
          width: 40vw;
          max-width: 200px;
          height: 40vw;
          max-height: 200px;
          border-radius: 50%;
          object-fit: cover;
          background: #ccc;
          margin-bottom: 20px;
        }
        .sobre {
          width: 90vw;
          max-width: 600px;
          text-align: center;
          margin: 0 auto;
        }
        .links {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90vw;
          max-width: 600px;
          margin: 0 auto;
          gap: 8px;
        }
        a {
          color: inherit;
        }
        div {
          font-family: Arial, sans-serif;
          text-align: center;
          color: #f5e6d3;
          background-color: #6b2c39;
          min-height: 100vh;
        }
        section {
          margin-bottom: 40px;
        }
        .icon img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          margin: 10px;
        }
	.links-redes {
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  justify-content: center;
	  gap: 12px;
	  width: 90vw;
	  margin: 0 auto;
	}
      `}</style>
      <div>
        <img
          className="foto-perfil"
          src="/img/myah1.jpeg"
          alt="Foto de perfil"
        />
        <section className="sobre">
          <h2>Sobre mim: </h2>
          <p>
            Oii, eu sou a Myah, tenho 20 anos e entrei na plataforma pra
            conhecer pessoas e experimentar algo diferente, se precisa de uma
            companhia me chama pra conversar e vamos ver oque rola 🙈♥️
          </p>
        </section>
        <section>
          <h2>Manda um mimo ai ♥️</h2>
          <a className="icon" href="https://livepix.gg/ajmcabft" target="_blank">
            <img src="/img/livepix-icon.png" alt="Livepix" />
          </a>
	</section>
	<h2>Onde me encontrar: </h2>
	<section className="links-redes">
          <a className="icon" href="https://www.packzin.com.br/perfil/myahlyns" target="_blank">
            <img src="/img/packzin-icon.png" alt="packzin" />
          </a>
	  <a className="icon" href="https://cameraprive.com/br/myah-lyns" target="_blank">
	    <img src="/img/camprive-favicon.png" alt="Camera Prive"/>
	  </a>
          <a className="icon" href="http://t.me/myahlyns" target="_blank">
	    <img src="/img/telegram-favicon.png" alt="Telegram"/>
	  </a>
        </section>
      </div>
    </>
  );
}
export default Home;
