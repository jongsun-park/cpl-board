import Controls from "../components/capacity/Controls";
import Chart from "../components/capacity/Chart";
import Overview from "../components/capacity/Overview";
import styled from "styled-components";

const CapacityPage = () => {
  return (
    <>
      <Heading>Capacity Tracker</Heading>
      <Chart />
      <Controls />
      <Overview />
    </>
  );
};

export default CapacityPage;

const Heading = styled.h1`
  text-align: center;
`;
