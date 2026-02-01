import "./modal.css";
import CastomButton from "../../ui/buttons/CastomButton";
import ModalBody from "./ModalBody";
import { useContext, useState } from "react";
import { ThemeContext } from "../../theme/themeContext";

const Modal = () => {
  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="wrapper-modal">
      <div className="offer-open-row">
        <span style={{ color: theme.title }} className="title-open-modal">
          open modal
        </span>

        <CastomButton onClick={openModal}>open</CastomButton>
      </div>
      {/* modal */}
      {isOpen ? <ModalBody isClose={closeModal} /> : null}
    </div>
  );
};
export default Modal;
