"use client";
import styled from "styled-components";
import Image from "next/image";
import { ButtonGetVpn } from "@/src/components/chooseName";
import { GeneralWrapper } from "@/src/styles/generalStyles";

export const StyledText = styled.p`
  line-height: 1.4;
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  .highlight-blue {
    color: #007bff; /* Цвет голубой */
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center; /* Вертикальное центрирование элементов */
  justify-content: space-evenly; /* Центрирование элементов по горизонтали */
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 2px 11px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5rem 0;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  margin: 0 10px; /* Расстояние между текстом и черточкой */
  p {
    margin: 0 auto;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #2b2b2b;
  }
  p.grey {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #646464;
  }
  img {
    margin: 0 5px;
  }
`;

const Divider = styled.div`
  width: 1px; /* Ширина черточки */
  height: 30px; /* Высота черточки */
  background-color: #646464; /* Цвет черточки */
`;

const Wrapper = styled.div`
  margin: 8rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  /* Адаптация под мобильные устройства */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ImageStyle = styled(Image)`
  max-width: 100%;
  height: auto;
`;

export default function AccessComponent() {
  const handleScrollToSection = () => {
    const section = document.getElementById("target-section"); // Найти элемент с нужным id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Прокрутка к элементу
    }
  };
  return (
    <GeneralWrapper id={"access-section"}>
      <Wrapper>
        <StyledText>
          Access <span className="highlight-blue">everything</span>
          <br />
          <span className="highlight-blue">securely</span> with
          <br />
          VPN
        </StyledText>
        <ImageStyle
          src={require("../../assets/man.png")}
          alt="Первое изображение"
        />
        <ButtonGetVpn
          style={{ width: "396px" }}
          onClick={handleScrollToSection}
        >
          Get VPN
        </ButtonGetVpn>
        <ImageStyle
          style={{ margin: "1rem auto" }}
          src={require("../../assets/trusted.png")}
          alt="Второе изображение"
        />
        <Container>
          <Text>
            <Image src={require("../../assets/Vector.png")} alt={"vector"} />
            <div>
              <p>50+</p> <p className={"grey"}>Locations</p>
            </div>
          </Text>
          <Divider />
          <Text>
            <Image src={require("../../assets/servers.png")} alt={"servers"} />
            <div>
              <p>1000+</p> <p className={"grey"}>Servers</p>
            </div>
          </Text>
        </Container>
        <p>
          VPN-your ultimate solution for a private and secure online experience!
        </p>
      </Wrapper>
    </GeneralWrapper>
  );
}
