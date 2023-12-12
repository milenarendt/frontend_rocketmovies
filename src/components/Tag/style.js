import styled from "styled-components";

export const Container = styled.div`
  font-size: 12px;
  padding: 5px 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

`;