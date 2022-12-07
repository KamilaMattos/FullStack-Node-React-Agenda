import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/userContext"
import { ContactContext } from "../../contexts/contactsContext"

interface IUserRegister {
  name: string
  email: string
  fone: string
  userId: string
}

export const RegisterContactForm = () => {
  const { usersList } = useContext(UserContext)
  const { registerContact } = useContext(ContactContext)

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    fone: yup.string().required("Campo Obrigatório"),
    userId: yup.string().required("Campo Obrigatório"),
  })

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IUserRegister>({
    resolver: yupResolver(registerSchema),
  })

  useEffect(() => {})

  const handleRegister = (data: IUserRegister) => {
    registerContact(data)
  }

  return (
    <Flex width='100%' justifyContent='center' alignItems={"center"}>
      <Box
        as='form'
        w='100%'
        onSubmit={handleSubmit(handleRegister)}
        maxWidth='700px'
        alignSelf={["flex-start", "center"]}
      >
        <Heading color='orange.800' textAlign='center'>
          Cadastrar Contato
        </Heading>
        <VStack spacing='5' mt='5'>
          <Box width='80%'>
            <FormLabel color='orange.800'>Nome Completo</FormLabel>
            <Input
              width='100%'
              placeholder='Nome completo'
              variant='filled'
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
              placeholder='(11)998745632'
              variant='filled'
              {...register("fone")}
            />
            {errors && <Text color='red'>{errors.fone?.message}</Text>}
          </Box>
          <Box width='80%'>
            <FormLabel color='orange.800'>Cliente</FormLabel>
            <Select width='100%' variant='filled' {...register("userId")}>
              <>
                <option value=''>Selecione um Cliente</option>
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
            Cadastrar
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
