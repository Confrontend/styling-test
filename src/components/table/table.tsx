import { useState, useEffect } from "react";

const Table = () => {
  const [rows, setRows] = useState<Array<{ name: string; value: number }>>([]);

  useEffect(() => {
    const generateData = (): Array<{ name: string; value: number }> => {
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          name: `Item ${i + 1}`,
          value: Math.floor(Math.random() * 100),
        });
      }
      return data;
    };

    setRows(generateData());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
