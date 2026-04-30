import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function clear() {
  console.log('Clearing Sanity CMS data to fix duplications...')
  
  const types = ['experience', 'education', 'skill', 'publication', 'socialLink']
  
  for (const type of types) {
    const docs = await client.fetch(`*[_type == "${type}"]{_id}`)
    console.log(`Found ${docs.length} documents of type ${type} to delete.`)
    
    // We can delete them in a transaction for speed, or one by one
    if (docs.length > 0) {
      const transaction = client.transaction()
      for (const doc of docs) {
        transaction.delete(doc._id)
      }
      await transaction.commit()
      console.log(`Deleted ${docs.length} ${type} documents.`)
    }
  }

  console.log('Done clearing Sanity CMS data!')
}

clear().catch((err) => {
  console.error('Error clearing data:', err)
  process.exit(1)
})
