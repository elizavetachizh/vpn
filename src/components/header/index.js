"use client";
import styled from "styled-components";
import Image from "next/image";

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  position: fixed;
  width: 100%;
  left: 0;
  height: 44px;
  margin: 0 auto;
  top: 0;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);
  z-index: 100;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 26px;
  margin-right: 16px;
  width: fit-content;
  background: #3177f2;
  border: 1px solid #3177f2;
  color: #fff;
  border-radius: 24px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2b2b2b;
`;

const Union = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-left: 16px;
`;

export default function HeaderComponent() {
  const handleScrollToSection = () => {
    const section = document.getElementById("target-section"); // Найти элемент с нужным id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Прокрутка к элементу
    }
  };
  const handleScrollUp = () => {
    const section = document.getElementById("access-section"); // Найти элемент с нужным id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Прокрутка к элементу
    }
  };
  return (
    <HeaderStyle>
      <Union>
        <Image
          onClick={handleScrollUp}
          src={require("../../assets/logo.svg")}
          alt="logo"
        />
        <Title>VPN</Title>
      </Union>
      <Button onClick={handleScrollToSection}>Get VPN</Button>
    </HeaderStyle>
  );
}
