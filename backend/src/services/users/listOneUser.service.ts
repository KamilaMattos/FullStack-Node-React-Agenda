import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const listOneUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      contacts: true,
    },
  })

  if (!user) {
    throw new AppError("User not found!", 404)
  }

  return user
}
