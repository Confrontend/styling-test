export const generateData = (total: number): number[] => {
  const data: any = [];
  for (let i = 0; i < total; i++) {
    data.push(i + 10);
  }
  return data;
};

export const getRandomColor = (index: number) => {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black", "white", "cyan", "magenta", "teal", "olive", "navy", "maroon", "lime", "silver", "gold"];
  return colors[index % colors.length];
};
