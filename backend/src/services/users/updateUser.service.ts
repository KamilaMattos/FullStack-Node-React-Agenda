import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserUpdate } from "../../interfaces/users"

export const updateUserService = async (id: string, data: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User)

  const userToUpdate = await userRepository.findOne({
    where: {
      id: id,
    },
  })

  if (userToUpdate === null) {
    throw new AppError("User not found.", 404)
  }

  const updatedClient = {
    ...userToUpdate,
    ...data,
  }

  await userRepository.save(updatedClient)

  return updatedClient
}
