import { Search } from '@mui/icons-material';
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
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div``;
const Right = styled.div``;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid #d3d3d3;
`;

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Search />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
