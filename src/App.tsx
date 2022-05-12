import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import Header from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/Content/CardsList/CardsList';

const AppComponent = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </div>
  );
};

export const App = hot(AppComponent);