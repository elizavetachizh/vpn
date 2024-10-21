"use client";

import { ButtonGetVpn, StyleBlackText } from "@/src/components/chooseName";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// Типизация пропсов для ChildComponent
interface ChildComponentProps {
  userName: string; // Пропс text должен быть строкой
  setIsModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GeneralWrapper = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 380px) {
    width: 96%;
  }
`;

// Стили для заднего фона (оверлея) модального окна
const Overlay = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white; // Полупрозрачный черный фон
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99; // Высокий z-index для перекрытия заднего фона
`;

// Стили для кнопки закрытия
const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const InputStyle = styled.input`
  box-sizing: border-box;
  background: #f8f8f8;
  border: 1px solid #646464;
  border-radius: 16px;
  padding: 1rem 10px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 1rem auto;
  color: #b5b5b5;
`;

const SecurityTextStyle = styled.span`
  font-style: normal;
  font-weight: 500;
  //font-size: 13px;
  line-height: 18px;
  color: #646464;
  opacity: 0.5;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #f8f8f8;
`;

const Modal: React.FC<ChildComponentProps> = ({
  userName,
  setIsModalWindow,
}) => {
  // Состояния для хранения введенного email и ошибок валидации
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Функция для валидации email с использованием регулярного выражения
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Простое регулярное выражение для email
    return emailRegex.test(email);
  };

  // Функция для обработки изменений в input
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);

      // Если email не проходит валидацию, устанавливаем ошибку
      if (!validateEmail(value)) {
        setError("Please enter a valid email address");
      } else {
        setError(""); // Убираем ошибку, если email корректный
        console.log(value);
      }
    },
    [],
  );
  return (
    <Overlay>
      <GeneralWrapper>
        <CloseButton onClick={() => setIsModalWindow(false)}>
          <Image src={require("../../assets/close.svg")} alt={"close"} />
        </CloseButton>
        <div style={{ width: "100%" }}>
          <StyleBlackText>your name</StyleBlackText>
          <Line />
          <p>{userName}</p>
          <Line />
          <div style={{ marginBottom: "2rem" }}>
            <InputStyle
              value={email}
              onChange={handleInputChange}
              type={"email"}
              placeholder={"Enter your email"}
            />
            <SecurityTextStyle>
              <Image src={require("../../assets/lock.svg")} alt={"lock"} />
              Your information is 100% secure. We don’t share your personal
              information.
            </SecurityTextStyle>
            {/* Отображение сообщения об ошибке, если оно есть */}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <ButtonGetVpn
            disabled={!email}
            onClick={() => setIsModalWindow(false)}
          >
            Continue
          </ButtonGetVpn>
        </div>
      </GeneralWrapper>
    </Overlay>
  );
};

export default Modal;
