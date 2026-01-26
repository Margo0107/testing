import { IoIosClose } from "react-icons/io";
import CastomButton from "../../ui/buttons/CastomButton";
import "./modal.css";
const ModalBody = ({ isClose }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>Modal</h2>
            {/* icon close */}
            <IoIosClose
              size={30}
              className="icon-close-modal"
              onClick={isClose}
            />
          </div>
          <div className="modal-body">
            <p>the modal window was opened successfully :D</p>
          </div>
          <div className="modal-footer">
            <CastomButton onClick={isClose}>Nice!</CastomButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalBody;
