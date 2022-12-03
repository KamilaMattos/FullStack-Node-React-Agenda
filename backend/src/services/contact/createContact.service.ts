import AppDataSource from "../../data-source"
import { IContactRequest } from "../../interfaces/contact"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const createContactService = async (data: IContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact)

  const contactAlreadyExists = await contactRepository.findOne({
    where: {
      email: data.email,
    },
  })

  const userRepository = AppDataSource.getRepository(User)

  const userAlreadyExists = await userRepository.findOne({
    where: {
      id: data.client_id,
    },
  })

  if (contactAlreadyExists) {
    throw new AppError("Contact already exists.")
  }

  if (!userAlreadyExists) {
    throw new AppError("User not found.", 404)
  }

  const contact = contactRepository.create({
    ...data,
    user: userAlreadyExists,
  })

  await contactRepository.save(contact)

  return contact
}
