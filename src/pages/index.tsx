import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Nimm die Kontrolle über deine Finanzen selbst in die Hand | Vault
          Budget
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="px-14 py-4 bg-slate-800 text-white flex justify-end drop-shadow-2xl">
        <a
          href="https://app.vaultbudget.com/signup"
          className="p-2 border-white border-2 rounded "
        >
          Login
        </a>
        <a
          href="https://app.vaultbudget.com/signup"
          className="p-2 border-white border-2 rounded ml-2"
        >
          Registrierung
        </a>
      </div>
      <header
        className="flex flex-col relative justify-center bg-cover"
        style={{
          height: "60vh",
          backgroundImage: "url(/images/jason-pofahl-unsplash-banner.jpg)",
        }}
      >
        <h1 className="text-white z-10 mx-2 md:mx-10 px-4 text-5xl md:text-6xl w-3/4 leading-normal md:leading-relaxed text-shadow-lg bg-gradient-to-r from-slate-900">
          Nimm die Kontrolle über deine Finanzen selbst in die Hand
        </h1>
      </header>
      <main className="">
        <div className="bg-slate-100 py-28 px-10">
          <h2 className="text-4xl mb-2">Lorem Ipsum</h2>
          <p className="text-xl">Lorem Ipsum</p>
        </div>
        <div className="bg-slate-400  text-slate-900 py-28 px-10 text-center">
          <h2 className="text-4xl mb-2 w-1/2 leading-normal mx-auto mb-8">
            Erfahre als erster wenn Vault Budget verfügbar ist
          </h2>
          {/* <p className="text-xl">Lorem Ipsum</p> */}
          <input type="email" className="h-10 text-xl px-2 w-96" />
        </div>
      </main>
      <footer className="px-14 py-4 bg-slate-800 text-white">
        <div>© Vault Budget, 2023</div>
      </footer>
    </>
  );
}
