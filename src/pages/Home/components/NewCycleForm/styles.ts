import styled from "styled-components";

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
