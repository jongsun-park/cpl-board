import styled from "styled-components";
import { Container } from "../ui/Container";

const Overview = () => {
  return (
    <OverviewContainer>
      <h2>Overview</h2>
      <h3>Steps</h3>
      <ol>
        <li>Provide Information of Current queueu</li>
        <li>Add agnents group is planned to work on the queue</li>
      </ol>
      <h3>Max Target for Each Market</h3>
      <ul>
        <li>TO/CSE: 25</li>
        <li>FR/DE: 27.5</li>
        <li>KR: 16</li>
        <li>SC: 20</li>
      </ul>
    </OverviewContainer>
  );
};

export default Overview;

const OverviewContainer = styled(Container)`
  background-color: #28a3db11;

  h2 {
    margin-top: 0;
    font-size: 24px;
    color: #183c6d;
  }

  h3 {
    font-weight: 400;
    font-size: 14;
  }

  ol,
  ul {
    padding-left: 0;
    list-style: inside decimal;
  }

  ul {
    list-style: inside;
  }

  li {
    font-size: 12px;
    margin-bottom: 4px;
  }
`;
