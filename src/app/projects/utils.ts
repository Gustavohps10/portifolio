import { database } from '@/services/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { cache } from 'react'

export interface ProjectProps {
  id: string
  name: string
  logo?: string
  image: string
  github: string
  website?: string
  description: string
  longDescription: string
  shields: {
    light: Array<string>
    dark: Array<string>
  }
}

export const getProjects = cache(async () => {
  const projectsCollection = collection(database, 'projects')
  const getProjectsQuery = query(projectsCollection, orderBy('id'))
  const data = await getDocs(getProjectsQuery)
  const projects = data.docs.map((doc) => ({
    ...(doc.data() as ProjectProps),
    id: doc.id,
  }))
  return projects
})
