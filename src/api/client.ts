import { createDirectus, rest } from '@directus/sdk';
import { env } from '@/env.mjs'

export const client = createDirectus('https://cms.palladians.xyz').with(rest())

export const assetUrl = (assetId: string) => `${env.NEXT_PUBLIC_CMS_URL}/assets/${assetId}`
