import styles from "./index.module.css";
import Head from "next/head";

const arrow = (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#BFA5A5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

function Icon({ children }) {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const links = [
  {
    nome: "Packzin",
    descricao: "Packs exclusivos",
    href: "https://www.packzin.com.br/perfil/myahlyns",
    icone: (
      <Icon>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </Icon>
    ),
  },
  {
    nome: "Cam Privé",
    descricao: "Me assiste ao vivo",
    href: "https://cameraprive.com/br/myah-lyns",
    icone: (
      <Icon>
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m16 10 6-4v12l-6-4" />
      </Icon>
    ),
  },
  {
    nome: "Telegram",
    descricao: "@MyahRedesBot",
    href: "https://t.me/MyahRedesBot",
    icone: (
      <Icon>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7z" />
      </Icon>
    ),
  },
  {
    nome: "Instagram",
    descricao: "@myahlyns",
    href: "https://www.instagram.com/myahlyns/",
    icone: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </Icon>
    ),
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>Myah Lyns</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Myah Lyns, 20 anos. Uma ótima companhia pra quem sabe como me conquistar."
        />
        <meta property="og:title" content="Myah Lyns" />
        <meta
          property="og:description"
          content="Uma ótima companhia pra quem sabe como me conquistar."
        />
        <meta
          property="og:image"
          content="https://myahlyns.com.br/img/avatar.jpg"
        />
        <meta property="og:url" content="https://myahlyns.com.br/" />
      </Head>

      <div className={styles.pagina}>
        <div className={styles.wrap}>
          <header className={styles.marca}>
            <img src="/img/avatar.jpg" alt="" width="32" height="32" />
            <span>
              myah<b>.</b>lyns
            </span>
          </header>

          <main className={styles.layout}>
            <div className={styles.esquerda}>
              <section className={styles.perfil}>
                <div className={styles.topo}>
                  <div className={styles.avatar}>
                    <img
                      src="/img/avatar.jpg"
                      alt="Foto da Myah"
                      width="120"
                      height="120"
                    />
                  </div>
                  <div>
                    <h1 className={styles.nome}>Myah Lyns</h1>
                    <p className={styles.sub}>
                      20 anos · Modelo Packzin desde julho de 2025
                    </p>
                  </div>
                </div>

                <div className={styles.sobre}>
                  <h2 className={styles.rotulo}>Sobre mim</h2>
                  <p>
                    Oii, eu sou a Myah. Uma ótima companhia pra quem sabe como
                    me conquistar. Entrei nessa pra conhecer gente nova e viver
                    algo diferente, e adoro criar experiências do jeitinho que
                    você imagina.
                  </p>
                </div>

                <div className={styles.aviso}>
                  <span aria-hidden="true">✦</span>
                  <p>
                    <strong>Promoções e conteúdos exclusivos</strong> você só
                    encontra comigo no chat.
                  </p>
                </div>
              </section>

              <a
                className={styles.mimo}
                href="https://livepix.gg/ajmcabft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.mimoEsq}>
                  <svg
                    aria-hidden="true"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="8" width="18" height="4" rx="1" />
                    <path d="M12 8v13" />
                    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
                  </svg>
                  Manda um mimo
                </span>
                <span className={styles.mimoDir}>via Livepix</span>
              </a>
            </div>

            <section className={styles.links}>
              <h2 className={`${styles.rotulo} ${styles.rotuloSuave}`}>
                Onde me encontrar
              </h2>
              <div className={styles.grade}>
                {links.map((link) => (
                  <a
                    key={link.nome}
                    className={styles.cartao}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.cartaoTopo}>
                      <span className={styles.icone}>{link.icone}</span>
                      {arrow}
                    </span>
                    <span className={styles.cartaoTexto}>
                      <span className={styles.cartaoNome}>{link.nome}</span>
                      <span className={styles.cartaoDesc}>
                        {link.descricao}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
