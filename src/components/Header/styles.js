import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  > h1 {
    font-size: 24px;
    font-weight: bold;

    color: ${({ theme }) => theme.COLORS.PINK_700};

    margin-left: 124px;
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-right: 124px;


  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    width: 125px;
    text-align: end;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`;