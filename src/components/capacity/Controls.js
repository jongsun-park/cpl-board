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
          <InnerContainer key={id}>
            <StyledInput
              label="Gorup name"
              name="aname"
              value={aname}
              onChange={changeAgents.bind(this, id)}
            />
            <StyledInput
              label="How many agents?"
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

            <Button onClick={removeAgents.bind(this, id)} outline>
              Remove
            </Button>
          </InnerContainer>
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
