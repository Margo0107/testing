import CastomButton from "../../ui/buttons/CastomButton";
import CastomInput from "../../ui/input/CastomInput";
const AddTasks = ({value, onChange, onAdd}) => {
  return (
    <>
      <CastomInput
        type="text"
        placeholder="new task"
        className="input-task"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <CastomButton className="btn-add-task" onClick={onAdd}>
        add
      </CastomButton>
    </>
  );
};
export default AddTasks;