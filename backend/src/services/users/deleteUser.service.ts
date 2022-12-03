import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User)
  const userToDelete = await userRepository.findOne({
    where: {
      id: id,
    },
  })

  if (!userToDelete) {
    throw new AppError("User not found.", 404)
  }

  userToDelete.isActive = false

  await userRepository.save(userToDelete)

  return "User deactiveted!"
}
