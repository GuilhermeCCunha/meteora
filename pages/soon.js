import Head from "next/head";

export default function Soon() {
  return (
    <>
      <Head>
        <title>Em breve | Meteora</title>
      </Head>
      <div className="default-container">
        <h1>Em breve...</h1>
        <p>clique em <strong>Home</strong> na barra de navegação para voltar!</p>
      </div>
    </>
  )
}