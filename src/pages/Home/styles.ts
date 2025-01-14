import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    gap: 3.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  align-items: center;
  font-size: 1.125rem;
  justify-content: center;
  color: ${({ theme }) => theme["gray-100"]};
`;

const BaseInput = styled.input`
  border: 0;
  height: 2.5rem;
  box-shadow: none;
  padding: 0 0.5rem;
  font-weight: bold;
  font-size: 1.125rem;
  background-color: transparent;
  color: ${({ theme }) => theme["gray-100"]};
  border-bottom: 2px solid ${({ theme }) => theme["gray-500"]};

  &:focus {
    outline: none;
    box-shadow: none;
    border-bottom-color: ${({ theme }) => theme["green-500"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountDownContainer = styled.div`
  gap: 1rem;
  display: flex;
  font-size: 10rem;
  line-height: 8rem;
  font-family: "Roboto Mono", monospace;
  color: ${({ theme }) => theme["gray-100"]};

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${({ theme }) => theme["gray-700"]};
  }
`;

export const Separator = styled.div`
  width: 4rem;
  display: flex;
  padding: 2rem 0;
  overflow: hidden;
  justify-content: center;
  color: ${({ theme }) => theme["green-500"]};
`;

export const StartCountDownButton = styled.button`
  width: 100%;
  gap: 0.5rem;
  border: none;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["gray-100"]};
  background: ${({ theme }) => theme["green-500"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;
