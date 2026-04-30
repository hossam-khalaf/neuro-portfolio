import { getCliClient } from 'sanity/cli'
import fs from 'fs'
import path from 'path'

const client = getCliClient()

async function seed() {
  console.log('Reading cv-data.json...')
  const dataPath = path.resolve(process.cwd(), 'cv-data.json')
  const fileContent = fs.readFileSync(dataPath, 'utf-8')
  const cvData = JSON.parse(fileContent)

  console.log('Seeding Sanity CMS...')

  // Insert experiences
  if (cvData.experiences) {
    for (const exp of cvData.experiences) {
      await client.create({
        _type: 'experience',
        role: exp.role,
        institution: exp.institution,
        startDate: exp.startDate,
        endDate: exp.endDate,
        description: exp.description,
      })
      console.log(`Created experience: ${exp.role}`)
    }
  }

  // Insert educations
  if (cvData.educations) {
    for (const edu of cvData.educations) {
      await client.create({
        _type: 'education',
        degree: edu.degree,
        institution: edu.institution,
        startYear: edu.startYear,
        endYear: edu.endYear,
      })
      console.log(`Created education: ${edu.degree}`)
    }
  }

  // Insert skills
  if (cvData.skills) {
    for (const skill of cvData.skills) {
      await client.create({
        _type: 'skill',
        name: skill.name,
        category: skill.category,
      })
      console.log(`Created skill: ${skill.name}`)
    }
  }

  // Insert socialLinks
  if (cvData.socialLinks) {
    for (const link of cvData.socialLinks) {
      await client.create({
        _type: 'socialLink',
        platformName: link.platformName,
        url: link.url,
      })
      console.log(`Created social link: ${link.platformName}`)
    }
  }

  // Insert publications
  if (cvData.publications) {
    for (const pub of cvData.publications) {
      await client.create({
        _type: 'publication',
        title: pub.title,
        publicationDate: `${pub.publicationYear}-01-01`,
        journal: pub.journalName,
        abstract: `Authors: ${pub.authors}\nCitations: ${pub.citations}`,
        paperUrl: pub.url,
      })
      console.log(`Created publication: ${pub.title}`)
    }
  }

  console.log('Done seeding Sanity CMS!')
}

seed().catch((err) => {
  console.error('Error seeding data:', err)
  process.exit(1)
})
