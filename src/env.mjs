import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_CMS_URL: z.string().min(1),
    NEXT_PUBLIC_CMS_CLIENT_URL: z.string().min(1)
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
    NEXT_PUBLIC_CMS_CLIENT_URL: process.env.NEXT_PUBLIC_CMS_CLIENT_URL
  },
  skipValidation: process.env.NODE_ENV === 'test'
})
