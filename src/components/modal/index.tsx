"use client";

import { ButtonGetVpn, StyleBlackText } from "@/src/components/chooseName";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { GeneralWrapper } from "@/src/styles/generalStyles";

// Типизация пропсов для ChildComponent
interface ChildComponentProps {
  userName: string; // Пропс text должен быть строкой
  setIsModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

// Стили для заднего фона (оверлея) модального окна
const Overlay = styled.div`
  position: fixed;
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
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #838283;
`;

const InputStyle = styled.input`
  box-sizing: border-box;
  background: #f8f8f8;
  border: 1px solid #646464;
  border-radius: 16px;
  padding: 1rem 0;
  width: 100%;
  margin: 0 auto;
`;

const SecurityTextStyle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #646464;
  opacity: 0.5;
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
        <CloseButton onClick={() => setIsModalWindow(false)}>×</CloseButton>
        <StyleBlackText>your name</StyleBlackText>
        <p>{userName}</p>
        <div style={{ marginBottom: "2rem" }}>
          <InputStyle
            value={email}
            onChange={handleInputChange}
            type={"email"}
            placeholder={"Enter your email"}
          />
          <SecurityTextStyle>
            Your information is 100% secure. We don’t share your personal
            information.
          </SecurityTextStyle>
          {/* Отображение сообщения об ошибке, если оно есть */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <ButtonGetVpn onClick={() => setIsModalWindow(false)}>
          Continue
        </ButtonGetVpn>
      </GeneralWrapper>
    </Overlay>
  );
};

export default Modal;
