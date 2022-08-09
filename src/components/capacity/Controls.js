import { useSelector, useDispatch } from "react-redux";
import { update } from "../../redux/slices/updateQueueSlice";
import {
  addCapacity,
  removeCapacity,
  updateCapacity,
} from "../../redux/slices/capacitySlice";
import { StyledInput, TimeSelect } from "../ui/Input";
import { Container, InnerContainer } from "../ui/Container";
import { Button } from "../ui/Button";
import styled, { keyframes } from "styled-components";

const QueueControl = () => {
  // const initialState = { qname: "", qstart: "", qend: "", qamount: 0 };
  const { qname, qamount } = useSelector((state) => state.updateQueue);
  const dispatch = useDispatch();

  const updateQueue = (e) =>
    dispatch(update({ [e.target.name]: e.target.value }));

  return (
    <Container>
      <StyledInput
        label="Queue Name"
        name="qname"
        value={qname}
        onChange={updateQueue}
      />

      <StyledInput
        label="Current Queue Amount"
        name="qamount"
        value={qamount}
        onChange={updateQueue}
        type="number"
      />
    </Container>
  );
};

const AgentsControl = () => {
  const capacity = useSelector((state) => state.capacity);
  const dispatch = useDispatch();

  const addAgents = () => {
    dispatch(addCapacity());
  };
  const removeAgents = (id) => {
    dispatch(removeCapacity(id));
  };

  const changeAgents = (id, e) => {
    dispatch(
      updateCapacity({ id, name: e.target.name, value: e.target.value })
    );
  };

  return (
    <Container>
      {capacity.length === 0 ? (
        <p className="msg">No agents are selected to work on the queue.</p>
      ) : (
        capacity.map(({ id, aname, astart, aend, anum, ahtarget }) => (
          <AgentsInnerContainer key={id}>
            <StyledInput
              label="Group Name"
              name="aname"
              value={aname}
              onChange={changeAgents.bind(this, id)}
              tooltipText="TO/CSE, FR/DE, KR, SC"
            />
            <StyledInput
              label="Number of Agents"
              name="anum"
              value={anum}
              onChange={changeAgents.bind(this, id)}
              type="number"
            />
            <StyledInput
              label="Hourly Target"
              name="ahtarget"
              value={ahtarget}
              onChange={changeAgents.bind(this, id)}
              type="number"
              max="30"
              tooltipText="TO/CSE:25, FR/DE:27.5, KR:16, SC:20"
            />
            <TimeSelect
              label="Start Shift"
              name="astart"
              value={astart}
              onChange={changeAgents.bind(this, id)}
            />
            <TimeSelect
              label="End Shift"
              name="aend"
              value={aend}
              onChange={changeAgents.bind(this, id)}
            />

            <Button
              onClick={removeAgents.bind(this, id)}
              styles={{ marginBottom: "3em" }}
              outline
            >
              Remove
            </Button>
          </AgentsInnerContainer>
        ))
      )}
      <Button onClick={addAgents} primary>
        Add agents
      </Button>
    </Container>
  );
};

const Controls = () => {
  return (
    <div>
      <QueueControl />
      <AgentsControl />
    </div>
  );
};

export default Controls;

const appearContainer = keyframes`
0% {
  opacity: 0;
  transform: translateY(10px);
}
100% {
  opacity: 1;
  transform: translateY(0px);
}
`;
const AgentsInnerContainer = styled(InnerContainer)`
  animation: ${appearContainer} 200ms ease-in forwards;
  .hidden: {
    display: none;
  }
`;
