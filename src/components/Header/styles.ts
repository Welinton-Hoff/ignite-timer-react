import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    gap: 0.5rem;
    display: flex;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      line-height: 0;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      color: ${({ theme }) => theme["gray-100"]};

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme["green-500"]};
      }

      &.active {
        color: ${({ theme }) => theme["green-500"]};
      }
    }
  }
`;
