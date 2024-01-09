import { Modal } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { T_ReduxState } from "../../config/store.d";
import { setModalIsOpen } from "../../redux/ui/uiSlice";
import ModalRecruit from "./components/ModalRecruit/ModalRecruit";

const ModalContainer: React.FC = () => {
  const modal = useSelector((state: T_ReduxState) => state.ui.modal);
  const dispatch = useDispatch();

  return (
    <Modal
      open={modal.isOpen}
      onClose={() => {
        dispatch(setModalIsOpen(false));
      }}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalRecruit />
    </Modal>
  );
};

export default ModalContainer;
