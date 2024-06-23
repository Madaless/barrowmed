import Articles from "@/components/Articles"
import { Bestsellers } from "@/components/Bestsellers"
import Hero from "@/components/Hero"
import NewProducts from "@/components/NewProducts"


export default function Home() {
  return (
    <>

      <main className="min-h-screen">
        <Hero />
        <NewProducts />
        <Bestsellers />
        <Articles />

      </main>

    </>
  )
}
