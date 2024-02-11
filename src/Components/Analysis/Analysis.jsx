import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { TabPanel, TabView } from "primereact/tabview";
import React, { useEffect, useState } from "react";

const Analysis = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620, 750, 824, 235, 525],
          backgroundColor: [
            "rgba(255, 159, 64, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(64, 255, 239, 0.8)",
            "rgba(192, 75, 173, 0.8)",
            "rgba(235, 163, 54, 0.8)",
            "rgba(255, 102, 173, 0.8)",
          ],
          borderColor: [
            "rgba(255, 159, 64, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(64, 255, 239, 0.8)",
            "rgba(192, 75, 173, 0.8)",
            "rgba(235, 163, 54, 0.8)",
            "rgba(255, 102, 173, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  const [combochartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "#42A5F5",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: [50, 25, 12, 48, 56, 76, 42],
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#66BB6A",
        data: [21, 84, 24, 75, 37, 65, 34],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "#FFA726",
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  });

  const [lightOptions] = useState({
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  });

  const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First dataset',
            borderColor: documentStyle.getPropertyValue('--bluegray-400'),
            pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
            pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            borderColor: documentStyle.getPropertyValue('--pink-400'),
            pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
            pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

  return (
    <div className="flex mt-4 items-center gap-4 flex-wrap overflow-y-auto">
      <div className="basis-[48%] h-[500px]">
        <Card
          title="Sales"
          className="h-full rounded-2xl"
          pt={{
            header: "w-full rounded-tl-2xl rounded-tr-2xl",
            body: "h-full",
            content: "h-[90%]",
          }}
        >
          <Chart
            type="pie"
            data={chartData}
            options={chartOptions}
            className="h-full w-full"
          />
        </Card>
      </div>
      <div className="basis-[48%] h-[500px]">
        <Card className="h-full rounded-2xl" title="Orders">
          <Chart type="bar" data={combochartData} options={chartOptions} />
        </Card>
      </div>
      <div className="basis-[48%] h-[500px]">
        <Card
          title="Sales"
          className="h-full rounded-2xl"
          pt={{
            header: "w-full rounded-tl-2xl rounded-tr-2xl",
            body: "h-full",
            content: "h-[90%]",
          }}
        >
          <Chart
            type="line"
            data={chartData}
            options={chartOptions}
            className="h-full w-full"
          />
        </Card>
      </div>
      <div className="basis-[48%] h-[500px]">
        <Card className="h-full rounded-2xl" title="Orders">
          <Chart type="radar" data={radarData} options={chartOptions} />
        </Card>
      </div>
    </div>
  );
};

export default Analysis;
