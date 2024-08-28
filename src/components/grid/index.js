"use client";
import styled from "styled-components";
import { GeneralWrapper, StyleBlueText, StyleOrangeText } from "../../styles/generalStyles";
import Image from "next/image";

const GridContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: 40px; /* Расстояние между блоками, можно настроить по желанию */
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Две колонки на экранах шире 768px */
    div.DividerVertical {
      display: none;
    }
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 200px; /* Минимальная высота блоков */
  box-sizing: border-box; /* Учитывает отступы и границы в размере блока */
  div.not-show {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const DividerVertical = styled.div`
  width: 100%; /* Толщина вертикальной линии-разделителя */
  height: 1px;
  background: black;
  margin: 0.7rem 0;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #646464;
  padding: 0 0.5rem;
`;

export default function GridComponent() {
  return (
    <GeneralWrapper>
      <GridContainer>
        <DividerVertical /> <DividerVertical className={"DividerVertical"} />
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Image
            src={require("../../assets/unlimited.png")}
            alt={"Unlimited"}
          />
          <StyleOrangeText>Unlimited</StyleOrangeText>
          <StyleBlueText>access to content</StyleBlueText>
          <Text>
            Enjoy unlimited bandwidth to stay connected to the world's best
            shows, apps, and games!
          </Text>
          <DividerVertical className={"not-show"} />
        </GridItem>
        <GridItem>
          <Image src={require("../../assets/flashing.png")} alt={"Flashing"} />
          <StyleOrangeText>Flashing</StyleOrangeText>
          <StyleBlueText>connecting speed</StyleBlueText>
          <Text>
            VPN Lumos offers unlimited bandwidth for faster loading and no
            buffering!
          </Text>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <DividerVertical /> <DividerVertical className={"DividerVertical"} />
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Image src={require("../../assets/hide.png")} alt={"Hide"} />
          <StyleOrangeText>Hide</StyleOrangeText>
          <StyleBlueText>your location</StyleBlueText>
          <Text>
            Get your own unique IP for added security and access to restricted
            sites, apps, and services!
          </Text>
          <DividerVertical className={"not-show"} />
        </GridItem>
        <GridItem>
          <Image src={require("../../assets/bypass.png")} alt={"Bypass"} />
          <StyleOrangeText>Bypass</StyleOrangeText>
          <StyleBlueText>blocked sites</StyleBlueText>
          <Text>Access any website safely and anonymously!</Text>
        </GridItem>
      </GridContainer>
      <GridContainer>
        {" "}
        <DividerVertical /> <DividerVertical className={"DividerVertical"} />
      </GridContainer>
    </GeneralWrapper>
  );
}
