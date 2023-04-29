import { useMemo } from "react";
import { styled } from "@linaria/react";
import PerformanceMetricsTable from "../performance-metrics/performance-metrics";
import { getRandomColor, getRandomSize } from "../../utils";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 20px;
`;

const Box = styled.div<{ color: string; size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${({ color }) => color};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ color }) => `darken(${color}, 20%)`};
  }
`;

interface IntensiveComponentProps {
  numBoxes?: number;
}


const LinariaComponentTest = ({ numBoxes = 100 }: IntensiveComponentProps) => {
  const boxes = useMemo(() => {
    // const a = refresh;
    const boxList = [];
    for (let i = 0; i < numBoxes; i++) {
      boxList.push(
        <Box key={i} color={getRandomColor()} size={getRandomSize()} />
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

export default LinariaComponentTest;
