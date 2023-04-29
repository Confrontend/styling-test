// PerformanceMetricsTable.tsx
import { useState, useEffect } from "react";
import { Metric } from "web-vitals";
import { onLCP, onFID, onCLS, onFCP } from "web-vitals";

const PerformanceMetricsTable = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    const report = (metric: Metric) => {
      console.log(metric);
      setMetrics((prevMetrics) => [...prevMetrics, metric]);
    };

    /**
     * First Input Delay (FID): Measures interactivity.
     * FID measures the time from when a user first interacts with your site (i.e. clicks a link, taps a button)
     * to the time when the browser is actually able to respond to that interaction.
     */
    onFID(report);
    /**
     * FCP (First Contentful Paint) measures the time it takes for a browser to render the first content (text, image, etc.) on a page.
     * It's a crucial metric for measuring page loading performance and user experience.
     */
    onFCP(report);
    /**
     * Largest Contentful Paint (LCP): Measures loading performance.
     * It specifically measures the time it takes for the largest content element (text, image, etc.) on a page to become visible.
     * An ideal LCP should occur within 2.5 seconds of when the page first starts loading.
     */
    onLCP(report);
    /**
     * Cumulative Layout Shift (CLS): Measures visual stability.
     * CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
     */
    onCLS(report);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #666",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Name
          </th>
          <th
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #666",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Value
          </th>
          <th
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #666",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Delta
          </th>
          <th
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #666",
              textAlign: "left",
              padding: "8px",
            }}
          >
            ID
          </th>
        </tr>
      </thead>
      <tbody>
        {metrics.map((metric, i) => (
          <tr key={metric.id + i}>
            <td
              style={{
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #666",
                textAlign: "left",
                padding: "8px",
              }}
            >
              {metric.name}
            </td>
            <td
              style={{
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #666",
                textAlign: "left",
                padding: "8px",
              }}
            >
              {parseFloat(metric.value.toFixed(2))}
            </td>
            <td
              style={{
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #666",
                textAlign: "left",
                padding: "8px",
              }}
            >
              {parseFloat(metric.delta.toFixed(2))}
            </td>
            <td
              style={{
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #666",
                textAlign: "left",
                padding: "8px",
              }}
            >
              {metric.id}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PerformanceMetricsTable;
