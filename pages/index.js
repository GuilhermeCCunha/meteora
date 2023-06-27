import Head from "next/head";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: #A5AAFF;
  text-align: left;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Meteora</title>
      </Head>
      <Title>My page</Title>
    </>
  )
}