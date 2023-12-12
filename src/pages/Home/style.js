import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;


  > .header {
    width: 1130px;
    margin: 50px auto;

    display: flex;
    justify-content: space-between;

    .add {
      width: 208px;
      height: 48px;
      font-weight: 500;
      background-color: ${({ theme }) => theme.COLORS.PINK_700};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      border-radius: 8px;
      border: none;


      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .add svg {
      font-size: 20px;
    }
  }


`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 1130px;
  margin: 0 auto;

 
`;
