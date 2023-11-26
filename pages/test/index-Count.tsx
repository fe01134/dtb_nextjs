import { useEffect, useState } from 'react'
import Count from '../../components/Count'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
    const router = useRouter()

  return(
    <Count  />
  ) 
}

