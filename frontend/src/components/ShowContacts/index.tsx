import {
  Button,
  Divider,
  Flex,
  Heading,
  Select,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react"

import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/userContext"
import { DeleteUserModal } from "../DeleteUserModal"
import { EditUserModal } from "../EditUserModal"
import { ContactCard } from "../ContactsCards"

export const ShowContacts = () => {
  const { userDetail, user } = useContext(UserContext)

  const { usersList } = useContext(UserContext)
  const [userId, setUserId] = useState("")

  const handleDisplay = (userId: string) => {
    userDetail(userId)
  }

  useEffect(() => {
    if (usersList.length !== 0) {
      handleDisplay(userId)
    }
  }, [user])

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
    <Flex flexDir='column' gap='5' alignItems='center' justifyContent='center'>
      <Heading>Mostrar Contatos</Heading>
      <Select w='100%' maxW='400px' onChange={(e) => setUserId(e.target.value)}>
        <option value=''>Selecione o cliente</option>
        {usersList?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </Select>
      <Button onClick={() => handleDisplay(userId)} colorScheme='orange'>
        Mostrar
      </Button>
      <Divider />
      {user.name && (
        <Flex flexDir='column' align='center' gap={4}>
          <Flex flexDir='column'>
            <Heading as='h2' size='lg' textAlign='center'>
              {user.name}
            </Heading>
            <Flex justifyContent='center' gap='8' mt='4'>
              <Button size='sm' onClick={editOnOpen}>
                Editar Cliente
              </Button>
              <Button size='sm' colorScheme='red' onClick={deleteOnOpen}>
                Deletar Cliente
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDir={["column", "row"]}
            mt='5'
            gap={["2", "10"]}
            justifyContent='center'
            alignItems={["center"]}
            width='100%'
          >
            <Text>
              <strong>email:</strong> {user.email}
            </Text>

            <Text>
              <strong>Telefone:</strong> {user.fone}
            </Text>

            <Text>
              <strong>Desde:</strong> {user.createdAt?.split("T")[0]}
            </Text>
          </Flex>
          <Divider />
          <Heading as='h3' size='md'>
            Contatos
          </Heading>
          <TableContainer w={["100vw"]} maxW='1200px'>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th textAlign='center'>Nome</Th>
                  <Th textAlign='center'>Email</Th>
                  <Th textAlign='center'>Telefone</Th>
                  <Th textAlign='center'>Funções</Th>
                </Tr>
              </Thead>
              <Tbody>
                {user.contact.map((contact) => (
                  <ContactCard key={contact.id} contact={contact} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      )}
      <EditUserModal isOpen={editIsOpen} onClose={editOnClose} user={user} />
      <DeleteUserModal
        isOpen={deleteIsOpen}
        onClose={deleteOnClose}
        user={user}
      />
    </Flex>
  )
}
