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
} from "@chakra-ui/react"
import { useContext } from "react"
import { UserContext, IUsers } from "../../contexts/userContext"

export interface IModalProps {
  isOpen: boolean
  onClose: () => void
  user: IUsers
}

export const DeleteUserModal = ({ isOpen, onClose, user }: IModalProps) => {
  const { deleteUser } = useContext(UserContext)

  const handleDelete = (user_id: string) => {
    deleteUser(user_id)
    window.location.reload()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deletar Contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Tem certeza que deseja deletar o{" "}
          <Text fontWeight='bolder' color='red' as='span'>
            {user.name}
          </Text>{" "}
          ?
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => handleDelete(user.id as string)}
            colorScheme='red'
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
