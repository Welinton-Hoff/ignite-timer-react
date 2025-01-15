import styled from "styled-components";

export const BaseButton = styled.button`
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountDownButton = styled(BaseButton)`
  background: ${({ theme }) => theme["green-500"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;

export const StopCountDownButton = styled(BaseButton)`
  background: ${({ theme }) => theme["red-500"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["red-700"]};
  }
`;
