import Head from 'next/head'
import { Router } from 'next/router'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PageLayout from '../../../components/PageLayout'

export default function Page({ pokemon }) {

  const router = useRouter()
  const { id } = router.query
  return (
    <PageLayout>
      <div>
        <h1>post</h1>
        <section>
        </section>
        <h2>{id}</h2>
      </div>
    </PageLayout>
  )
}
