import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Observe from '../../effect/Effect';

function ConsultantComponents({ nom, poste, image }) {
  const ref = useRef(null);
  useEffect(() => {
    Observe(ref);
  });

  return (
    <Container ref={ref}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>{nom}</div>
      <div>{poste}</div>
      <div className="arrow">➔</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.5s;

  overflow: hidden;
  background: #fff;
  align-items: center;
  font-size: 16px;
  width: 100%;
  border-radius: 3px;
  padding: 30px;
  &:hover {
    box-shadow: 0 0 20px 0 #e1e1e1;
  }
  img {
    width: 10em;
  }
  div {
    text-align: center;
  }
  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    width: 2.5em;
    aspect-ratio: 1;
    border-radius: 100vh;
    border: black solid 2px;
    transform: translateY(300%);
    &:hover {
      background-color: #ff5d7b;
      color: white;
      border: none;
    }
  }
  &:hover {
    .arrow {
      transform: translateY(0);
      transition: 0.3s;
    }
  }

  @media (min-width: 1000px) {
    max-width: 300px;
  }
`;
ConsultantComponents.defaultProps = {
  image: 'https://saegus.com/wp-content/uploads/2017/11/aude.png',
};

export default ConsultantComponents;
