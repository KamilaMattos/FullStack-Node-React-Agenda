import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { UserContext } from "../../contexts/userContext"

import * as yup from "yup"
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"

interface IUserRegister {
  name: string
  email: string
  fone: string
}

export const ClientForm = () => {
  const { registerUser } = useContext(UserContext)

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    fone: yup.string().required("Campo Obrigatório"),
  })

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IUserRegister>({
    resolver: yupResolver(registerSchema),
  })

  const handleRegister = (data: IUserRegister) => {
    registerUser(data)
  }

  return (
    <Flex width='100%' justifyContent='center' alignItems='center'>
      <Box
        as='form'
        w='100%'
        onSubmit={handleSubmit(handleRegister)}
        maxWidth='700px'
        alignSelf={["flex-start", "center"]}
      >
        <Heading color='orange.800' textAlign='center'>
          Cadastrar
        </Heading>
        <VStack spacing='5' mt='5'>
          <Box width='80%'>
            <FormLabel color='orange.800'>Nome completo</FormLabel>
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
              <Text>seuemail@mail.com</Text>
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
