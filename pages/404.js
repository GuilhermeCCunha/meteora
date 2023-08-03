import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404: This page could not be found</title>
      </Head>
      <div className="default-container">
        <h1>404 - Page Not Found</h1>
        <p>clique em <strong>Home</strong> na barra de navegação para voltar!</p>
      </div>
    </>
  )
}