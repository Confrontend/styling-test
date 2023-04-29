import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 100;
`;

export const ProgressBar = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${({ color }) => color};
  transition: width 0.25s ease-in-out;
`;
