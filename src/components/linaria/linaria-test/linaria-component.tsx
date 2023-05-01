import { useMemo } from "react";
import { styled } from "@linaria/react";
import PerformanceMetricsTable from "../../performance-metrics/performance-metrics";
import { getRandomColor } from "../../../utils";
import React from "react";
import { useTheme } from "../theme/theme-provider-linaria";
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

const LinariaBoxes = ({ numBoxes = 100 }: IntensiveComponentProps) => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const boxes = useMemo(() => {
    const boxList: any = [];
    for (let i = 0; i < numBoxes; i++) {
      boxList.push(
        <Box
          key={i}
          color={getRandomColor(i)}
          size={100}
          themeBackground={theme.palette.background ?? 'red' }
        >
          Box {i}
        </Box>
      );
    }
    return boxList;
  }, [numBoxes]);

  return (
    <>
      <div>LinariaComponentTest</div>
      <PerformanceMetricsTable />
      <Grid>{boxes}</Grid>
    </>
  );
};

export default LinariaBoxes;
