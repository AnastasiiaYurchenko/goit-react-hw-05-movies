import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
