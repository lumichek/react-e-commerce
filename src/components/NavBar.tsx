import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* background-color: #000000; */
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  text-align: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: .5px solid #d3d3d3;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input />
            <Search style={{ color: '#808080', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Logo>LAMA.</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
