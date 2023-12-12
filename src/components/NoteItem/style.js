import styled from "styled-components";

export const Container = styled.div`
  max-height: 56px;
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  border-radius: 10px;
  max-width: 200px;

  .button-add, .button-delete {
    padding: 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK_700};
  }

  > button {
    border: none;
    background: none;

    display: flex;
    
  }

  > input {
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`;