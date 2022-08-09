import Controls from "../components/capacity/Controls";
import Chart from "../components/capacity/Chart";
import Overview from "../components/capacity/Overview";
import { GradientHeading1 } from "../components/ui/GradientHeading";

const CapacityPage = () => {
  return (
    <>
      <GradientHeading1 center>Capacity Tracker</GradientHeading1>
      <Chart />
      <Controls />
      <Overview />
    </>
  );
};

export default CapacityPage;
