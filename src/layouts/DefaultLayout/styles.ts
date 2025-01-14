import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 74rem;
  margin: 5rem auto;
  border-radius: 8px;
  flex-direction: column;
  padding: 2.5rem 2.5rem;
  height: calc(100vh - 10rem);
  background-color: ${({ theme }) => theme["gray-800"]};
`;
