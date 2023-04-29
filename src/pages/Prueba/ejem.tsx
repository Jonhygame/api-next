import Head from 'next/head'
import { Router } from 'next/router'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Page({ posts }) {

  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <h1>post</h1>
      <section>
        {
          posts.articles.map((post, index) => {
            return (
              <div key={index}>
                <li><Link href={`/Prueba/${index}`}>{post.title + " " + index}</Link></li>
                <img src={post.urlToImage} alt="" />
                <Image src={post.urlToImage} width={600} height={200}></Image>
              </div>
            )
          })
        }
      </section>
      <h2>{id}</h2>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e2d0f69941df442c8309830143187c03');
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
}

/*
images:{
    domains: ['techcrunch.com'],
  }
*/ 