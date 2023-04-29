export const generateData = (): number[] => {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
};

export const getRandomSize = () => Math.floor(Math.random() * 50) + 100;

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
