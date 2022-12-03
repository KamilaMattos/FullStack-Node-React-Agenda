import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"

export const listContatctsService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact)

  const contacts = await contactRepository.find()

  return contacts
}
