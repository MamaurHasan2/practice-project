import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Recharts = () => {
  const PageSetUP = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 1780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 5390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 6490,
      pv: 4300,
    },
  ];
  return (
    <BarChart width={600} height={500} data={PageSetUP}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={"name"}></XAxis>
      <Bar fill="blue" dataKey={"uv"}></Bar>
      <Bar fill="green" dataKey={"pv"}></Bar>
      <YAxis></YAxis>
      <Legend></Legend>
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default Recharts;
