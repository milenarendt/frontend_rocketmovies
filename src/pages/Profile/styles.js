import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    display: flex;
    align-items: center;
    padding: 0 124px;


    a {
      color: ${({ theme }) => theme.COLORS.PINK_700};
      font-size: 18px;

      display: flex;
      align-items: center;
      gap: 7px;
  
    }

    a svg {
      font-size: 18px;
    }

  }


`;

export const Avatar = styled.div`
  position: relative;
  margin: -100px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.COLORS.PINK_700};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

  }
`;

export const Form  = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(3) {
    margin-top: 24px;
  }
`;