import { lazy } from 'react'

export const TestPageAsync = lazy(async () => await import('.'))
