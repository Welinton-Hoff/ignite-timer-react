import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  padding: 3.5rem;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th {
      padding: 1rem;
      text-align: left;
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${({ theme }) => theme["gray-100"]};
      background-color: ${({ theme }) => theme["gray-600"]};

      &:first-child {
        padding-left: 1.5rem;
        border-top-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;
        border-top-right-radius: 8px;
      }
    }

    td {
      padding: 1rem;
      line-height: 1.6;
      font-size: 0.875rem;
      background-color: ${({ theme }) => theme["gray-700"]};
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
    }
  }
`;
