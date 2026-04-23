import { type SchemaTypeDefinition } from 'sanity'
import { publication } from './publication'
import { experience } from './experience'
import { education } from './education'
import { skill } from './skill'
import { socialLink } from './socialLink'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [publication, experience, education, skill, socialLink],
}
