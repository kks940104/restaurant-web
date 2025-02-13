'use client'
import useSWR from 'swr'
import { fetcher } from '../libs/utils'

// Stale While Revalidator
export default function useRequest(url) {
  return useSWR(url, fetcher)
}
