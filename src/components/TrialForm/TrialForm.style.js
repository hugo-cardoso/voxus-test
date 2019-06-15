import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  position: relative;
`;

const Message = styled.div`
  width: calc(100% + 20px);
  height: 36px;
  background-color: #F5F7FA;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #2D3A40;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% + 20px);
  left: -10px;
  border-radius: 4px;
  letter-spacing: 0.0125em;
  animation: fadeIn .35s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export {
  Form,
  Message
};