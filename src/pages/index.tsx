import Head from 'next/head';
import React from 'react';

import rocketseatlogo from '../assets/logo-rocketseat.png';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Document</title>
      </Head>

      <main>
        <img src={rocketseatlogo} alt="Rocketseat" />
        <h1>ReactJS Structure</h1>
        <p>
          A ReactJS + NextJs structure made by rocketseat adapted by
          fernandortec!
        </p>
      </main>
    </Container>
  );
};

export default Home;
