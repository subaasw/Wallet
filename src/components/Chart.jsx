import { AreaChart, Area, ResponsiveContainer, Legend } from "recharts";

const chartsData = {
  Day: [
    {
      name: "Data 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Data 2",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Data 3",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Data 4",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Data 5",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],

  Week: [
    {
      name: "Data 1",
      uv: 5000,
      pv: 2800,
      amt: 2400,
    },
    {
      name: "Data 2",
      uv: 3780,
      pv: 3908,
      amt: 3000,
    },
    {
      name: "data 3",
      uv: 2790,
      pv: 4800,
      amt: 2191,
    },
    {
      name: "data 4",
      uv: 2890,
      pv: 3100,
      amt: 3000,
    },
    {
      name: "Data 5",
      uv: 3690,
      pv: 4900,
      amt: 2100,
    },
  ],

  Month: [
    {
      name: "Data 1",
      uv: 7000,
      pv: 2900,
      amt: 2400,
    },
    {
      name: "Data 2",
      uv: 2780,
      pv: 2908,
      amt: 2000,
    },
    {
      name: "Data 3",
      uv: 1890,
      pv: 5800,
      amt: 2181,
    },
    {
      name: "Data 4",
      uv: 2390,
      pv: 3800,
      amt: 2600,
    },
    {
      name: "data 5",
      uv: 3590,
      pv: 4300,
      amt: 2000,
    },
  ],

  Year: [
    {
      name: "Data 1",
      uv: 7000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Data 2",
      uv: 2980,
      pv: 3908,
      amt: 1000,
    },
    {
      name: "Data 3",
      uv: 1090,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Data 4",
      uv: 2190,
      pv: 3800,
      amt: 2300,
    },
    {
      name: "Data 5",
      uv: 9190,
      pv: 4800,
      amt: 8000,
    },
  ],
};

function CustomizedDot({ cx, cy, payload, KEY = "Day" }) {
  const data = chartsData[KEY];
  const lastIndex = data.length - 1;
  const lastPayload = data[lastIndex];
  const isLastPoint =
    payload.name === lastPayload.name && payload.uv === lastPayload.uv;

  if (isLastPoint) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        strokeWidth={8}
        stroke={"rgba(255, 164, 39, 0.26)"}
        fill="#FA9D21"
      />
    );
  }

  return null;
}

const RenderLegend = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        marginTop: "96px",
        marginLeft: "32px",
      }}
    >
      <span
        style={{
          display: "block",
          border: "4px solid rgba(255, 164, 39, 0.26)",
          height: "10px",
          width: "10px",
          borderRadius: "50%",
        }}
      >
        <span
          style={{
            display: "block",
            height: "10px",
            width: "10px",
            background: "#FA9D21",
            borderRadius: "50%",
          }}
        ></span>
      </span>
      1 BTC = $5.432
    </div>
  );
};

const LineChart = ({ time = "Day" }) => {
  return (
    <div style={{ width: "120%", margin: "0 -28px -28px" }}>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart
          width="100%"
          height={100}
          data={chartsData[time]}
          syncId={time}
          margin={{
            top: 12,
            right: 36,
            left: 0,
            bottom: 0,
          }}
        >
          <Legend content={RenderLegend} verticalAlign="middle" />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#FA9D21"
            fill="#fff7ee"
            strokeWidth={4}
            dot={(props) => <CustomizedDot KEY={time} {...props} />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
