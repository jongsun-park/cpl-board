import ReactEcharts from "echarts-for-react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import times from "../../utils/times";

const Chart = () => {
  const { qname, qstart, qend, qamount } = useSelector(
    (state) => state.updateQueue
  );

  const capacity = useSelector((state) => state.capacity);
  const [updatedTimes, setUpdateTimes] = useState(times);

  useEffect(() => {
    if (qend < qstart) {
      console.log("ERROR - Start time should be smaller then End time");
      return;
    }
    setUpdateTimes(() =>
      times.filter((t) => qstart <= t.value && t.value <= qend)
    );
  }, [qstart, qend]);

  const legends = capacity.map((capa) => capa.aname);

  const assignedCases = capacity.map((capa) => {
    // start: qstart
    // end: qend
    // ex. [0,0,10,10,10,10,10,10]
    const data = new Array(14).fill("").map((_, idx) => {
      if (idx + 7 < capa.astart) return 0;
      if (idx + 7 > capa.aend) return 0;
      return capa.ahtarget * capa.anum;
    });

    return {
      name: capa.aname,
      data: data.filter((d, idx) => qstart <= idx && idx < qend),
      type: "bar",
    };
  });

  let remained = qamount;
  const updatedQueueAmount = updatedTimes.map((_, idx) => {
    const flatten = assignedCases.map(({ data }) => data[idx]);
    const cleared = flatten.reduce((a, b) => a + b, 0);
    remained -= cleared;
    return remained < 0 ? 0 : remained;
  });

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Queue Volume", ...legends],
      bottom: 0,
    },
    xAxis: {
      type: "category",
      data: updatedTimes.map((t) => t.label),
    },
    yAxis: {
      type: "value",
    },
    series: [
      ...assignedCases,
      {
        name: "Queue Volume",
        data: updatedQueueAmount,
        type: "line",
      },
    ],
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          type: "svg",
          name: `${qname} Capacity Report ${new Date()}`,
        },
      },
    },
  };

  return (
    <>
      <ReactEcharts option={option} />
    </>
  );
};

export default Chart;
