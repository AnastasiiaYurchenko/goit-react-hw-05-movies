import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import { Loader } from './Loader';

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
