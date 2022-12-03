import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"

export const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact)

  const contactToDelete = await contactRepository.findOne({
    where: {
      id: id,
    },
  })

  if (!contactToDelete) {
    throw new AppError("Contact not found.", 404)
  }

  contactToDelete.isActive = false

  await contactRepository.save(contactToDelete)

  return "Contact desactivated!"
}
