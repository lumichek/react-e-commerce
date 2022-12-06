import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Img1 from '../images/slider/image_1.avif';
import Img2 from '../images/slider/image_2.avif';
import Img3 from '../images/slider/image_3.avif';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

type TArrowProps = {
  direction: 'left' | 'right' | 'up' | 'down';
};

const Arrow = styled.div<TArrowProps>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: TArrowProps) => props.direction === 'left' && '10px'};
  right: ${(props: TArrowProps) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: .5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Img = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 70px;

`;
const Description = styled.p`
  text-transform: uppercase;
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <SlideContainer>
          <ImgContainer>
            <Img src={Img1} />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
              {
                'Don\'t compromise on style!\
                Get flat 30% off for new arrival'
              }
            </Description>
            <Button>Show now</Button>
          </InfoContainer>
        </SlideContainer>
        <SlideContainer>
          <ImgContainer>
            <Img src={Img2} />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
              {
                'Don\'t compromise on style!\
                Get flat 30% off for new arrival'
              }
            </Description>
            <Button>Show now</Button>
          </InfoContainer>
        </SlideContainer>
        <SlideContainer>
          <ImgContainer>
            <Img src={Img3} />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
              {
                'Don\'t compromise on style!\
                Get flat 30% off for new arrival'
              }
            </Description>
            <Button>Show now</Button>
          </InfoContainer>
        </SlideContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
