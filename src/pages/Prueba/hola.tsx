import Head from 'next/head'
import { Inter, Poller_One } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { isJSDocPropertyLikeTag } from 'typescript'
import PageLayout from '../../../components/PageLayout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
let canti: number = 10;

export default function hola({ pokemons }) {
  return (
    <>
      <PageLayout title='Pruebita'>
        <Head>
          <title>Prueba</title>
          <meta name="description" content="Prueba" />
        </Head>
        <main >
          <h1 className={styles.title}>
            Prueba
          </h1>
          <div>
            {
              pokemons.results.map((pokemo, index) => {
                return (
                  <div key={index}>
                    <li><Link href={`/Prueba/${index}`}>{pokemo.name + " " + index}</Link></li>
                  </div>
                )
              })
            }
          </div>
        </main >
      </PageLayout>
      <style jsx>{`
      h2{
        color: #333;
      }
    `}
      </style>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
  const pokemons = await res.json()
  return {
    props: {
      pokemons
    }
  }
}

/*export async function getServerSideProps(context) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0", {
      method: 'GET',
      headers: {}
    });

    if (response.ok) {
      const pokemons = await response.json()
      return {
        props: {
          pokemons
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
  const pokemons = await res.json()
  return {
    props: {
      pokemons
    }
  }
}*/
