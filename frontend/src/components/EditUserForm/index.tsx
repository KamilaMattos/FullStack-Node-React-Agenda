import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext } from "react"
import { UserContext, IUsers } from "../../contexts/userContext"

export interface IUserEdit {
  name?: string
  email?: string
  fone?: string
  userId?: string
}

interface IUserEditForm {
  user: IUsers
  onClose: () => void
}

export const UserEditForm = ({ user, onClose }: IUserEditForm) => {
  const { editUser } = useContext(UserContext)

  const registerSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    fone: yup.string(),
  })

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IUserEdit>({
    resolver: yupResolver(registerSchema),
  })

  const handleEdit = (data: IUserEdit) => {
    if (user.id) {
      editUser(data, user.id)
      onClose()
    }
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
              defaultValue={user.name}
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
              defaultValue={user.email}
              {...register("email")}
            />
            {errors.email ? (
              <Text color='red'>{errors.email?.message}</Text>
            ) : (
              <Text>fulano@mail.com</Text>
            )}
          </Box>
          <Box width='80%'>
            <FormLabel color='orange.800'>Telefone</FormLabel>
            <Input
              width='100%'
              placeholder='(34)12345678910'
              variant='filled'
              defaultValue={user.fone}
              {...register("fone")}
            />
            {errors && <Text color='red'>{errors.fone?.message}</Text>}
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
