import { createDirectus, rest } from '@directus/sdk';
import { env } from '@/env.mjs'

const CMS_URL = env.NEXT_PUBLIC_CMS_URL

export const client = createDirectus(CMS_URL).with(rest())

export const assetUrl = (assetId: string) => `${env.NEXT_PUBLIC_CMS_URL}/assets/${assetId}`
