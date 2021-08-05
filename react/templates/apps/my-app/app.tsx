import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeShoes } from '@learn-bit-react/shoe-store.ui.pages.home-shoes';
import { AboutShoes } from '@learn-bit-react/shoe-store.ui.pages.about-shoes';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
import { Footer } from '@learn-bit-react/ecommerce.ui.footer';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import { Theme } from '@teambit/react.templates.themes.theme';

export function MyApp() {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Header
            logoText="Bit Shoe Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo"
          >
            <Link href="/mens">Mens</Link>
            <Link href="/womens">Womens</Link>
            <Link href="/specials">Children</Link>
          </Header>

          <Switch>
            <Route path="/about" exact>
              <AboutShoes />
            </Route>
            <Route path="/">
              <HomeShoes />
            </Route>
          </Switch>
          <Footer
            logoText="Bit Shoe Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo"
          >
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </Footer>
        </Layout>
      </Theme>
    </BrowserRouter>
  );
}
