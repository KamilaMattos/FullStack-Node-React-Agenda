import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"

export const listOneContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact)

  const contact = await contactRepository.findOne({
    where: {
      id: id,
    },
  })

  if (!contact) {
    throw new AppError("Contact not found!", 404)
  }

  return contact
}
