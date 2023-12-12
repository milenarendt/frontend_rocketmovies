import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: ${({ isBigSize }) => (isBigSize ? '10px' : '6px')};

  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? '25px' : '15px')};
    color: ${({ theme }) => theme.COLORS.PINK_700};
  }
`