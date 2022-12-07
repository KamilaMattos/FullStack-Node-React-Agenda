import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { IContact } from "../../contexts/userContext"
import { EditContactForm } from "../EditContactForm"

export interface IModalProps {
  isOpen: boolean
  onClose: () => void
  contact: IContact
}

export const EditContactModal = ({ isOpen, onClose, contact }: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditContactForm contact={contact} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
