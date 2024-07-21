'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    color: ${theme.color.text};
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media ${theme.media.sm} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `}
`;

export const Hero = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    h1 {
      font-size: ${theme.fontSize.xl};
    }

    @media ${theme.media.sm} {
      h1 {
        font-size: ${theme.fontSize['2xl']};
      }
    }

    @media ${theme.media.md} {
      h1 {
        font-size: ${theme.fontSize['4xl']};
      }
    }
  `}
`;

export const Content = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
      list-style: none;
    }

    li {
      max-width: 50rem;
      width: 100%;
      margin-bottom: 1rem;
    }

    span {
      color: ${theme.color.primary};
      font-weight: 700;
    }

    @media ${theme.media.md} {
      font-size: ${theme.fontSize.xs};
    }
  `}
`;
