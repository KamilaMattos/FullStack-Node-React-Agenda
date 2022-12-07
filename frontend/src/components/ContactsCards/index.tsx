import { Button, Td, Tr, useDisclosure } from "@chakra-ui/react"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { IContact } from "../../contexts/userContext"
import { EditContactModal } from "../EditContactModal"
import { DeleteContactModal } from "../DeleteContactModal"

interface IContactCard {
  contact: IContact
}

export const ContactCard = ({ contact }: IContactCard) => {
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editOnClose,
  } = useDisclosure()
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure()

  return (
    <>
      <Tr key={contact.id}>
        <Td textAlign='center'>{contact.name}</Td>
        <Td textAlign='center'>{contact.email}</Td>
        <Td textAlign='center'>{contact.fone}</Td>
        <Td
          textAlign='center'
          display='flex'
          flexDir={["column", "row"]}
          align='center'
          justifyContent='center'
        >
          <Button onClick={editOnOpen}>
            <AiFillEdit size='25px' />
          </Button>
          <Button onClick={deleteOnOpen}>
            <AiFillDelete size='25px' />
          </Button>
        </Td>
      </Tr>
      <EditContactModal
        isOpen={editIsOpen}
        onClose={editOnClose}
        contact={contact}
      />
      <DeleteContactModal
        isOpen={deleteIsOpen}
        onClose={deleteOnClose}
        contact={contact}
      />
    </>
  )
}
