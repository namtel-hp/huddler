import React from "react";
import { connect } from "react-redux";
import MapModal from "./MapModal";

const modalLookup = {
  MapModal,
};

const mapStateToProps = (state) => ({
  currentModal: state.modals,
});

const ModalManager = ({ currentModal, children }) => {
  let renderModal = children;
  if (currentModal?.modalType) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderModal}</span>;
};

export default connect(mapStateToProps)(ModalManager);
