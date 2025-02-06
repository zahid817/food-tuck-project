import { type SchemaTypeDefinition } from 'sanity'
import food from './foods'
import chef from './chef'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, order],
}
