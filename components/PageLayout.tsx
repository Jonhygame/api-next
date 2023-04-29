import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function PageLayout({ children, title }: any) {
  return <>
    <Head>
      <title>Titulo</title>
      <meta name="description" content="Prueba" />
    </Head>
    <header>
      <Link href="/Prueba/ejem">News</Link>
      <h1>{title}</h1>
      <Link href="/Prueba/hola" className="Link">Home</Link>
    </header>
    <main >
      {children}
    </main>
    <footer>
      <h1>Footer</h1>
      <div>PRUEBA DE DIV</div>
    </footer>
    <style jsx>{`
    h1{
      padding: 0em 2em 0 2em; 
    }
    footer{
      background-color: #333;
      display:flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      padding: 1rem;
    }
    header {
      background-color: #333;
      display:flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      padding: 1rem;
    }
    p{
      aling: center;
    }
    div{
      display: inline;
    }
    `}
    </style>
  </>
}