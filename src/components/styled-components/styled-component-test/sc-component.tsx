import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import PerformanceMetricsTable from "../../performance-metrics/performance-metrics";
import React from "react";
import { getRandomColor } from "../../../utils";
import { useScTheme } from "../theme/theme-provider-sc";
import { darkTheme, lightTheme } from "../theme/theme";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 20px;
`;

const Box = styled.div<{
  color: string;
  size: number;
  themeBackground: string;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${({ color }) => color};

  &:hover {
    background-color: ${({ themeBackground }) => themeBackground};
  }
`;

interface IntensiveComponentProps {
  numBoxes?: number;
}

const StyledComponentTest = ({ numBoxes = 100 }: IntensiveComponentProps) => {
  const { isDarkTheme } = useScTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;
  console.log(theme.palette.background);

  const boxes = useMemo(() => {
    // const a = refresh;
    const boxList: any = [];
    for (let i = 0; i < numBoxes; i++) {
      boxList.push(
        <Box
          key={i}
          color={getRandomColor(i)}
          size={100}
          themeBackground={theme.palette.background ?? "red"}
        >
          Box {i}
        </Box>
      );
    }
    return boxList;
  }, [numBoxes, theme]);

  return (
    <>
      <div>StyledComponentTest</div>
      <PerformanceMetricsTable />
      <Grid>{boxes}</Grid>
    </>
  );
};

export default StyledComponentTest;
