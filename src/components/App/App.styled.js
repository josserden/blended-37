import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (min-width: 1200px) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;

  color: #212121;

  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  text-align: center;
`;
