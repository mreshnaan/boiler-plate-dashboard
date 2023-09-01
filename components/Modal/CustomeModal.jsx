import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function CustomeModal({ isOpen, onClose, title, children }) {
  const OverlayOne = () => (
    <ModalOverlay bg="white.300" backdropFilter="blur(10px)" />
  );

  return (
    <>
      <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
        <OverlayOne />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomeModal;
