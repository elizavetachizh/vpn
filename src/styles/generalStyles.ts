import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// Глобальные стили
export const GlobalStyles = createGlobalStyle`
  html, body {
      margin: 0;
      padding: 0;
    font-family: 'Poppins', sans-serif; // Установка глобального шрифта
  }
`;

export const StyleBlueText = styled.p`
  width: 100%;
  margin: 0 auto;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  color: #3177f2;
  text-align: center;
`;
export const StyleOrangeText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  text-transform: uppercase;
  color: #ff5d17;
  margin: 0.5rem auto;
`;

export const GeneralWrapper = styled.div<{ isModalWindow?: boolean }>`
  overflow: ${({ isModalWindow }) => (isModalWindow ? "hidden" : "visible")};
  width: 76%;
  margin: 2rem auto;
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 380px) {
    width: 96%;
  }
`;
