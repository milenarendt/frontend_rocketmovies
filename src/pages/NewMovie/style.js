import styled from "styled-components";

export const Container = styled.div`
  width: 100%;


  > main {
    max-width: 1140px;
    margin: 40px auto;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;

      color: ${({ theme }) => theme.COLORS.PINK_700};
    }
  }

`;

export const Form = styled.form`

  > h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .input {
    display: flex;
    gap: 40px;
    margin-bottom: 35px;
  }

  > section {
    margin: 40px auto;

    h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 20px;
      font-weight: 400;

      margin-bottom: 24px;
    }

    .notes {
      background: ${({ theme }) => theme.COLORS.BLACK};
      height: 90px;
      border-radius: 8px;

      display: flex;
      align-items: center;
      gap: 24px;

      padding: 16px;
    }
  }

  .btn {
    display: flex;
    gap: 40px;
    margin-bottom: 90px;
  }

  .btn-delete {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK_700};
  }
`;