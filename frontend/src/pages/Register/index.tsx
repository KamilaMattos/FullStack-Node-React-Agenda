import { Button, Flex } from "@chakra-ui/react"
import { useState } from "react"

import { RegisterUserForm } from "../../components/RegisterUserForm"
import { RegisterContactForm } from "../../components/RegisterContactForm"
import { ShowContacts } from "../../components/ShowContacts"

export const Home = () => {
  const [toggle, setToggle] = useState(false)
  const [showContact, setShowContact] = useState(false)
  console.log(showContact)
  return (
    <>
      {showContact ? (
        <ShowContacts />
      ) : (
        <Flex flexDir='column' gap={4}>
          {/* <Heading textAlign='center'>Clique para cadastrar</Heading> */}
          <Flex align='center' justifyContent='center' gap={5}>
            <Button onClick={() => setToggle(true)}>Novo contato</Button>
            <Button onClick={() => setToggle(false)}>Novo usuário</Button>
          </Flex>
          <Flex align='center' justifyContent='center'>
            {!showContact && (
              <Button
                backgroundColor='#ff577f'
                color='white'
                _hover={{ background: "#fd377e" }}
                onClick={() => setShowContact(true)}
              >
                Mostrar Contatos
              </Button>
            )}
          </Flex>

          <Flex width='100%' h='600px'>
            {toggle ? (
              <>
                <RegisterContactForm />
              </>
            ) : (
              <>
                <RegisterUserForm />
              </>
            )}
          </Flex>
        </Flex>
      )}
      <Flex align='center' justifyContent='center' mt='3'>
        {showContact && (
          <Button colorScheme='orange' onClick={() => setShowContact(false)}>
            Voltar
          </Button>
        )}
      </Flex>
    </>
  )
}
