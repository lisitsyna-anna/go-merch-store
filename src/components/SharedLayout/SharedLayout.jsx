import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  LogoLink,
  Logo,
  NavLinkStyled,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LogoLink to="/">
          <Logo>
            <span role="img" aria-label="computer icon">
              💻
            </span>{' '}
            GoMerch Store
          </Logo>
        </LogoLink>
        <nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/about">About</NavLinkStyled>
          <NavLinkStyled to="/products">Products</NavLinkStyled>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
