import { Inter } from 'next/font/google'
import Navbar from "@/Components/common/navbar";
import Hero from '@/Components/common/hero';
import Footer from '@/Components/common/footer';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Footer></Footer>
    </>
    
  )
}

