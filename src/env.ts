import { z } from 'zod'

const envSchema = z.object({
  APP_NAME: z.string(),
  NEXT_URL: z.string().url(),
  MODE: z.enum(['development', 'production', 'test']).default('production'),
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string(),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string(),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string(),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string(),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string(),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string(),
})

export const env = envSchema.parse(process.env)
