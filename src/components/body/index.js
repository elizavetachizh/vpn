import styled from "styled-components";

export const BodyStyle = styled.div`
  /* Content */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 72px;
  width: 80%;
  margin: 0 auto;
  left: calc(50% - 892px / 2);
  top: 151px;
`;
export default function Body({ children }) {
  return <BodyStyle>{children}</BodyStyle>;
}
