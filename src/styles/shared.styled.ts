import styled from 'styled-components';

type TFlexContainer = {
  width: string;
  maxWidth?: string;
  flexDirection?: string;
  justifyContent: string;
  alignItems: string;
  flexWrap?: boolean;
  padding?: string;
  margin?: string;
  cursor?: string;
  flexGrow?: boolean;
};

export const FlexContainer = styled.div<TFlexContainer>`
  display: flex;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? 'wrap' : 'nowrap')};
  flex-grow: ${({ flexGrow }) => (flexGrow ? 1 : 'initial')};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;
