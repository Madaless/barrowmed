import Articles from "@/components/Articles"
import { Bestsellers } from "@/components/Bestsellers"
import Hero from "@/components/Hero"


export default function Home() {
  return (
    <>

      <main className="min-h-screen">
        <Hero />
        <Articles />
        <Bestsellers />
      </main>

    </>
  )
}
