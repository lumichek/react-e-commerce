import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #008080;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;

export default function Announcement() {
  return (
    <Container>
      Super Deal! Free shipping on Orders Over $150
    </Container>
  );
}
