
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
       Ir a <Link href="/about"> About </Link>
    </MainLayout>
  )
}
