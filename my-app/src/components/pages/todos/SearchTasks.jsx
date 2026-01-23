import CastomInput from "../../ui/input/CastomInput";
import { IoIosSearch } from "react-icons/io";
const SearchTasks = ({ value, onChange }) => {
  return (
    <>
      <CastomInput
        className="input-task-serc"
        type="search"
        placeholder="serch task"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <IoIosSearch className="search-icon" size={23} />
    </>
  );
};
export default SearchTasks;
