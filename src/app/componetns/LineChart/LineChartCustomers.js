import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SmoothLineChartCustomers = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [carouselIndex, setCarouselIndex] = useState(0); // To track the carousel position

  // Data for each year (All 12 months)
  const data2023 = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Customers",
        data: [65, 59, 80, 81, 56, 55, 60, 72, 80, 91, 100, 110],
        fill: false,
        borderColor: "#34A853",
        backgroundColor: "#34A853",
        tension: 0.4, // Smooth line
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const data2024 = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Customers",
        data: [55, 62, 77, 90, 64, 60, 70, 80, 88, 92, 100, 110],
        fill: false,
        borderColor: "#34A853",
        backgroundColor: "#34A853",
        tension: 0.4, // Smooth line
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  // Handle year selection
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Handle carousel navigation (left or right)
  const handleCarouselChange = (direction) => {
    setCarouselIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex > 0 ? prevIndex - 1 : 6; // Loop back to the last set of 6 months
      } else {
        return prevIndex < 6 ? prevIndex + 1 : 0; // Loop to the first set of 6 months
      }
    });
  };

  // Select data based on year
  const data = selectedYear === "2023" ? data2023 : data2024;

  // Adjust the labels and data to show only 6 months based on the carousel position
  const visibleMonths = data.labels.slice(carouselIndex, carouselIndex + 6);
  const visibleData = data.datasets.map((dataset) => ({
    ...dataset,
    data: dataset.data.slice(carouselIndex, carouselIndex + 6),
  }));

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure full use of the available space
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#253858",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        titleFont: {
          family: "Poppins",
        },
        bodyFont: {
          family: "Poppins",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#253858",
          font: {
            family: "Poppins",
          },
        },
        border: {
          display: false, // Remove bottom border line
        },
      },
      y: {
        grid: {
          display: false, // Hide horizontal grid lines
        },
        ticks: {
          display: false, // Hide Y-axis numbers
        },
        border: {
          display: false, // Remove left border line
        },
      },
    },
  };

  return (
    <div>
      <div className="select_years">
        <select id="year-select" value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>


      <div className="graph_wrap" style={{ width: "100%", height: "220px" }}>        
            <button className="left-arrow" onClick={() => handleCarouselChange("left")}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="22" width="22" height="22" rx="2" transform="rotate(90 22 0)" fill="#EAF2FF"/>
                    <path d="M12.8333 6.41675L8.24998 11.0001L12.8333 15.5834" stroke="#96A0AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <Line data={{ labels: visibleMonths, datasets: visibleData }} options={options} />
            <button className="right-arrow" onClick={() => handleCarouselChange("right")}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="22" width="22" height="22" rx="2" transform="rotate(-90 0 22)" fill="#EAF2FF"/>
                    <path d="M9.16666 15.5833L13.75 10.9999L9.16666 6.41659" stroke="#96A0AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
    </div>

    </div>


  );
};

export default SmoothLineChartCustomers;
