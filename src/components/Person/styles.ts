import styled from 'styled-components';

export const Container = styled.div<{ dark: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme, dark }) => (dark ? theme.text : theme.white)};
  cursor: pointer;
`;

export const Name = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Email = styled.div`
  font-size: 1.2rem;
  opacity: 0.7;
`;
