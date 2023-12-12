import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.PINK_700};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: 0;
  padding: 0 16px;

  margin-top: 24px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;