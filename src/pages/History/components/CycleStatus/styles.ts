import styled from "styled-components";

const STATUS_COLORS = {
  red: "red-500",
  green: "green-500",
  yellow: "yellow-500",
} as const;

interface IStatusStyleProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<IStatusStyleProps>`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
  }
`;
