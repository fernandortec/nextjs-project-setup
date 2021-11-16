import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { ButtonComponent } from '../view/components/global/button/button';
import {
  HomeCard,
  HomeCardContainer,
  HomeContainer
} from '../view/styles/pages/Home';

import templateUrl from '../public/wearytraveller.jpeg';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Frame homework</title>
      </Head>

      <HomeContainer>
        <HomeCardContainer>
          <HomeCard>
            <h1>Saúde</h1>
            <p>Veja aqui sobre saúde</p>
            <div>
              <Image src={templateUrl} alt="Template" width={56} height={56} />
            </div>
            <ButtonComponent text="Acessar" color="#6633cc" textColor="#FFF" />
          </HomeCard>
        </HomeCardContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
