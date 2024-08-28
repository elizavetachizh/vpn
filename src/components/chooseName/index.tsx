"use client";

import styled from "styled-components";

export const ButtonGetVpn = styled.button`
  width: 100%;
  cursor: pointer;
  background: #ff5d17;
  border: 1px solid #ff5d17;
  border-radius: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin: 0.5rem auto;
  padding: 1rem 0;
`;

export const StyleBlackText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  color: #2b2b2b;
`;

// / Контейнер для чекбокса
const CheckboxContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  box-shadow: 0 2px 11px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: inline-block;
  vertical-align: middle;
  background: #ffffff;
  padding: 2rem 0;
  gap: 10px;
  align-self: stretch;
`;

// Скрытый реальный чекбокс
const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

// Стилизованный контейнер для чекбокса
const StyledCheckboxLabel = styled.label<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  padding: 0 1rem;
  color: ${({ isChecked }) => (isChecked ? "#007BFF" : "#333")};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ isChecked }) => (isChecked ? "#0056b3" : "#555")};
  }
`;

// Кастомный чекбокс
const CustomCheckbox = styled.div<{ isChecked: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${({ isChecked }) => (isChecked ? "#ff5d17" : "#fff")};
  border: 2px solid ${({ isChecked }) => (isChecked ? "#ff5d17" : "#646464")};
  border-radius: 10px;
  margin-right: 8px;
  transition: background-color 0.3s ease;

  // Добавление стилизованного символа "галочка" при checked
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: ${({ isChecked }) => (isChecked ? '"✓"' : '""')};
    color: #fff;
    font-size: 12px;
  }
`;

// Типизация для структуры данных пользователя
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { GeneralWrapper, StyleBlueText } from "@/src/styles/generalStyles";
import Modal from "@/src/components/modal";
import { StyledText } from "@/src/components/access";
import Link from "next/link";

type User = {
  name: {
    title: string;
    first: string;
    last: string;
  };
};

const ChooseNameComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [isModalWindow, setIsModalWindow] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10",
        );
        setUsers(response.data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setIsModalWindow(true);
  }, []);

  return (
    <GeneralWrapper>
      <Link href={"/modal"}>to modal</Link>
      <div id="target-section">
        <StyleBlueText style={{ margin: "4rem auto" }}>
          Millions of people trust us!
        </StyleBlueText>
        <StyledText style={{ textAlign: "left" }}>
          CHOOSE &nbsp;
          <span className="highlight-blue">YOUR NAME</span>
        </StyledText>

        {users.map((user, index) => (
          <CheckboxContainer key={index}>
            <HiddenCheckbox
              type="checkbox"
              checked={userName === user.name.first}
              onChange={handleChange}
              id={`user-${index}`}
              value={user.name.first}
            />
            <StyledCheckboxLabel
              htmlFor={`user-${index}`}
              isChecked={userName === user.name.first}
            >
              <CustomCheckbox isChecked={userName === user.name.first} />
              {user.name.first} {user.name.last}
            </StyledCheckboxLabel>
          </CheckboxContainer>
        ))}

        <ButtonGetVpn onClick={handleClick}>Get VPN</ButtonGetVpn>

        {isModalWindow && (
          <Modal userName={userName} setIsModalWindow={setIsModalWindow} />
        )}
      </div>
    </GeneralWrapper>
  );
};

export default ChooseNameComponent;
