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

export const RegisterUserForm = () => {
  const { registerUser } = useContext(UserContext)

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!"),
    fone: yup.string().required("Campo obrigatório!"),
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
        <Heading color='#ff577f' textAlign='center'>
          Cadastre-se
        </Heading>
        <VStack spacing='5' mt='5'>
          <Box width='80%'>
            <FormLabel color='#ff577f'>Nome:</FormLabel>
            <Input
              width='100%'
              placeholder='Nome completo'
              variant='filled'
              {...register("name")}
            />
            {errors && <Text color='red'>{errors.name?.message}</Text>}
          </Box>
          <Box width='80%'>
            <FormLabel color='#ff577f'>Email:</FormLabel>
            <Input
              type='email'
              width='100%'
              placeholder='Ex: seuemail@mail.com'
              variant='filled'
              {...register("email")}
            />
            {errors.email && <Text color='red'>{errors.email?.message}</Text>}
          </Box>
          <Box width='80%'>
            <FormLabel color='#ff577f'>Telefone</FormLabel>
            <Input
              width='100%'
              placeholder='Ex: (11) 999992458'
              variant='filled'
              {...register("fone")}
            />
            {errors && <Text color='red'>{errors.fone?.message}</Text>}
          </Box>
        </VStack>
        <Flex alignItems='center' justifyContent='center'>
          <Button
            type='submit'
            width='50%'
            mt={10}
            backgroundColor='#ff577f'
            color='white'
            _hover={{ background: "#fd377e" }}
          >
            CADASTRAR
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
