import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  border: 0;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;

    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 15px;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
    gap: 8px;
  }
`