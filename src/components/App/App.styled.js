import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
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

export const Form = styled.form`
  width: 600px;
  background: #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  padding: 20px 30px;
  text-align: center;

  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #403866;
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;
  color: #5a5a5a;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 35px 0 35px;
  margin-right: 15px;
  background: #fff;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #8f8fa1;
  outline: none;
  color: #8f8fa1;
  line-height: 1.2;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0px 0px 1px 1px #8f8fa1;
  }
`;

export const Button = styled.button`
  padding: 10px 32px;

  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.06em;
  transition: background-color 0.3s ease, color 0.3s ease;

  color: #5a5a6e;

  &:hover {
    background-color: #188ce8;
    color: #ffffff;
  }
`;
