import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Panel } from "primereact/panel";
import { TabPanel, TabView } from "primereact/tabview";
import React, { useEffect, useState } from "react";
import MapChart from "../MapChart/MapChart";

const Dashboard = () => {
  const cardData = [
    {
      label: "Orders",
      icon: "pi pi-chart-line",
      value: "10.8K",
      classNames: "bg-[--indigo-500]",
    },
    {
      label: "Revenue",
      icon: "pi pi-money-bill",
      value: "$3.2M",
      classNames: "bg-[--teal-500]",
    },
    {
      label: "Visitors",
      icon: "pi pi-users",
      value: "20.6K",
      classNames: "bg-[--purple-500] text-[--text-color]",
    },
    {
      label: "Sales",
      icon: "pi pi-shopping-cart",
      value: "$8.9M",
      classNames: "bg-[--primary-800] text-[--text-color]",
    },
  ];

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

  const randomRecentOrders = [
    {
      product: "Nintendo Switch",
      amount: "$100",
      time: "45m ago",
      badge: "x10",
    },
    {
      product: "Dyson Airwrap",
      amount: "$180",
      time: "2h ago",
      badge: "x20",
    },
    {
      product: "Bose QuietComfort 45",
      amount: "$250",
      time: "4h ago",
      badge: "x22",
    },
    {
      product: "iPhone 13",
      amount: "$150",
      time: "2h ago",
      badge: "x15",
    },
    {
      product: "Samsung Galaxy S21",
      amount: "$300",
      time: "5h ago",
      badge: "x25",
    },
    {
      product: "PlayStation 5",
      amount: "$75",
      time: "1h ago",
      badge: "x8",
    },
    {
      product: "MacBook Pro",
      amount: "$220",
      time: "3h ago",
      badge: "x18",
    },
    {
      product: "Canon EOS R5",
      amount: "$400",
      time: "6h ago",
      badge: "x30",
    },

    {
      product: "Fitbit Charge 5",
      amount: "$50",
      time: "30m ago",
      badge: "x5",
    },
    {
      product: "LG OLED C1",
      amount: "$350",
      time: "3h ago",
      badge: "x28",
    },
  ];
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

  return (
    <div className="w-full p-5 overflow-y-auto h-full ">
      <Card className="rounded-2xl rounded-">
        👋 Hello! Welcome to Data Warehouse!
      </Card>

      <div className="flex justify-between w-full gap-8 mt-4">
        {cardData.map((card) => (
          <Card
            key={card.label}
            className={`flex flex-1 w-full rounded-2xl font-semibold ${card.classNames}`}
            pt={{
              body: "w-full",
            }}
          >
            <div className="flex justify-between items-center  flex-1 text-(--primary-50)">
              <div className="flex flex-col ">
                <div className="text-lg">{card.label}</div>
                <div className="text-3xl">{card.value}</div>
              </div>
              <div className="">
                <i className={`${card.icon} text-3xl`}></i>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex gap-8 flex-1 h-full mt-4 ">
        <Card
          title="Sales by State"
          className="h-full rounded-2xl"
          pt={{
            header: "w-full rounded-tl-2xl rounded-tr-2xl",
            body: "h-full overflow-hidden",
            content: "h-full",
          }}
        >
          <div className="h-full ">
            <MapChart />
          </div>
        </Card>

        <Card
          title="Top Orders"
          className="rounded-2xl flex-[3]"
          pt={{
            header: "w-full rounded-tl-2xl rounded-tr-2xl",
            body: "h-full overflow-hidden",
            content: "h-full",
          }}
        >
          <div className="h-full overflow-auto">
            {randomRecentOrders.map((order) => (
              <Panel
                header={order.product}
                key={order.product}
                className="rounded-2xl my-2"
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    {order.amount} <Badge value={order.badge} severity="info" />
                  </div>
                  <div className="text-sm">{order.time}</div>
                </div>
                <div>Order description goes here if any.</div>
              </Panel>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex gap-8 mt-4 h-[500px] ">
        <div className="flex-1 h-full">
          <Card
            title="Sales"
            className="h-full rounded-2xl"
            pt={{
              header: "w-full rounded-tl-2xl rounded-tr-2xl",
              body: "h-full",
              content: "h-[90%]",
            }}
          >
            <TabView
              className="h-[90%]"
              pt={{
                panelContainer: "h-full",
              }}
            >
              <TabPanel
                pt={{
                  content: "h-full",
                }}
                header="Orders"
              >
                <Chart
                  type="pie"
                  data={chartData}
                  options={chartOptions}
                  className="h-full w-full"
                />
              </TabPanel>
              <TabPanel
                header="Sales"
                pt={{
                  content: "h-full",
                }}
              >
                <Chart
                  type="bar"
                  data={chartData}
                  options={chartOptions}
                  className="h-full w-full"
                />
              </TabPanel>
              <TabPanel
                pt={{
                  content: "h-full",
                }}
                header="Returns"
              >
                <Chart
                  type="line"
                  data={chartData}
                  options={chartOptions}
                  className="h-full w-full"
                />
              </TabPanel>
            </TabView>
          </Card>
        </div>
        <div className="flex-1 h-full">
          <Card className="h-full rounded-2xl" title="Orders">
            <Chart type="bar" data={combochartData} options={chartOptions} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
