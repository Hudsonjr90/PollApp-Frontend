import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import type { Poll } from "../types";

export function PollChart({ poll }: { poll: Poll }) {
  const data = poll.options.map((opt) => ({
    name: opt.text,
    votos: opt.votes,
  }));

  const COLORS = ["#1976d2", "#26a69a", "#ffa726", "#d32f2f", "#7e57c2", "#388e3c", "#fbc02d"];

  return (
  <ResponsiveContainer width="100%" height={600}>
      <PieChart>
        <Pie
          data={data}
          dataKey="votos"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={300}
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
