import { lazy } from 'react'

export const ModulePageAsync = lazy(async () => await import('.'))
