import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  focus: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  focus,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />

      <nav>
        <Link to="/" className={focus === 'list' ? 'selected' : ''}>
          Listagem
        </Link>

        <Link to="/import" className={focus === 'import' ? 'selected' : ''}>
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
