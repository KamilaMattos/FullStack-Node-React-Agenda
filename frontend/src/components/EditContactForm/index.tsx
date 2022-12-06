import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { UserContext, IContact } from "../../contexts/userContext"
import { ContactContext } from "../../contexts/contactsContext"

import * as yup from "yup"
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react"

export interface IEditContact {
  name?: string
  email?: string
  fone?: string
  userId?: string
}

interface IContactEditForm {
  contact: IContact
  onClose: () => void
}

export const EditContactForm = ({ contact, onClose }: IContactEditForm) => {
  const { usersList, userDetail } = useContext(UserContext)
  const { editContact } = useContext(ContactContext)

  const registerSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    fone: yup.string(),
    userId: yup.string(),
  })

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IEditContact>({
    resolver: yupResolver(registerSchema),
  })

  const handleEdit = (data: IEditContact) => {
    editContact(data, contact.id)
    userDetail(contact.userId)
    onClose()
  }

  return (
    <Flex width='100%' justifyContent='center' alignItems='center'>
      <Box
        as='form'
        w='100%'
        onSubmit={handleSubmit(handleEdit)}
        maxWidth='700px'
      >
        <VStack spacing='5' mt='5'>
          <Box width='80%'>
            <FormLabel color='orange.800'>Nome Completo</FormLabel>
            <Input
              width='100%'
              placeholder='Nome completo'
              variant='filled'
              defaultValue={contact.name}
              {...register("name")}
            />
            {errors && <Text color='red'>{errors.name?.message}</Text>}
          </Box>
          <Box width='80%'>
            <FormLabel color='orange.800'>Email</FormLabel>
            <Input
              type='email'
              width='100%'
              placeholder='Email'
              variant='filled'
              defaultValue={contact.email}
              {...register("email")}
            />
            {errors.email ? (
              <Text color='red'>{errors.email?.message}</Text>
            ) : (
              <Text>seuemail@mail.com</Text>
            )}
          </Box>
          <Box width='80%'>
            <FormLabel color='orange.800'>Telefone</FormLabel>
            <Input
              width='100%'
              placeholder='11111111111'
              variant='filled'
              defaultValue={contact.fone}
              {...register("fone")}
            />
            {errors && <Text color='red'>{errors.fone?.message}</Text>}
          </Box>
          <Box width='80%'>
            <FormLabel color='orange.800'>Usuário</FormLabel>
            <Select
              defaultValue={contact.userId}
              width='100%'
              variant='filled'
              {...register("userId")}
            >
              <>
                <option value=''>Selecione um usuário</option>
                {usersList?.map((user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  )
                })}
              </>
            </Select>
            {errors && <Text color='red'>{errors.userId?.message}</Text>}
          </Box>
        </VStack>
        <Flex alignItems='center' justifyContent='center'>
          <Button type='submit' mt={6} colorScheme='orange'>
            Editar
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
