import styles from "./index.module.css";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
	  <title>Myah Lyns</title>
      </Head>
      <div className={styles.principal}>
        <div className={styles.faixa}></div>
        <img
          className={styles.foto_perfil}
          src="/img/myah1.jpeg"
          alt="Foto de perfil"
        />
        <section className={styles.sobre}>
          <h2>Sobre mim: </h2>
          <p>
            Oii, eu sou a Myah, tenho 20 anos e entrei na plataforma pra
            conhecer pessoas e experimentar algo diferente, se precisa de uma
            companhia me chama pra conversar e vamos ver oque rola 🙈♥️
          </p>
        </section>
        <section className={styles.sessao}>
          <h2>Manda um mimo ai ♥️</h2>
          <a
            className={styles.icon}
            href="https://livepix.gg/ajmcabft"
            target="_blank"
          >
            <img src="/img/livepix-icon.png" alt="Livepix" />
          </a>
        </section>
        <h2>Onde me encontrar: </h2>
        <section className={`${styles.links_redes} ${styles.sessao}`}>
          <a
            className={styles.icon}
            href="https://www.packzin.com.br/perfil/myahlyns"
            target="_blank"
          >
            <img src="/img/packzin-icon.png" alt="packzin" />
          </a>
	  <a
	    className={styles.icon}
	    href="https://www.instagram.com/myahlyns/"
	    target="_blank"
	  >
	    <img src="/img/instagram-icon.png" alt="instagram" />
	  </a>
          <a
            className={styles.icon}
            href="https://cameraprive.com/br/myah-lyns"
            target="_blank"
          >
            <img src="/img/camprive-favicon.png" alt="Camera Prive" />
          </a>
          <a className={styles.icon} href="http://t.me/myahlyns" target="_blank">
            <img src="/img/telegram-favicon.png" alt="Telegram" />
          </a>
        </section>
      </div>
    </>
  );
}
export default Home;
