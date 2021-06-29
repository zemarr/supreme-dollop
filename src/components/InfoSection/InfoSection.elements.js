import styled from "styled-components";

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 1rem 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  min-height: 350px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#000113" : "#a9b3c1")};
  font-size: 28px;
  line-height: 1rem;
  letter-spacing: 1.4px;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: ${({midi}) => (midi ? "40px" : "55px")};
  line-height: 1.1;
  color: ${({ lightBg }) => (lightBg ? "#000113" : "#f7f8fa")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 30px;
  color: ${({ lightBg }) => (lightBg ? "#000113" : "#a9b3c1")};
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled("img")`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
