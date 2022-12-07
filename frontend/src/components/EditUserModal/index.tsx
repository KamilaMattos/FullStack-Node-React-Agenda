import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { IUsers } from "../../contexts/userContext"
import { UserEditForm } from "../EditUserForm"

export interface IModalProps {
  isOpen: boolean
  onClose: () => void
  user: IUsers
}

export const EditUserModal = ({ isOpen, onClose, user }: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Usuário</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UserEditForm user={user} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
