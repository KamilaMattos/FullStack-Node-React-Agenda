import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserRequest } from "../../interfaces/users"

export const createUserService = async ({
  name,
  email,
  fone,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User)

  const userAlreadyExists = await userRepository.findOne({
    where: {
      email: email,
    },
  })

  if (userAlreadyExists) {
    throw new AppError("User already exists!", 400)
  }

  const date = new Date()

  const dateToStr = new Date(date.toString())

  const user = userRepository.create({
    name,
    email,
    fone,
    isActive: true,
    createdAt: dateToStr.toLocaleDateString(),
  })

  await userRepository.save(user)

  return user
}
