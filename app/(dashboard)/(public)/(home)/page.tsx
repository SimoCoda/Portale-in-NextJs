import Hero from "./_components/hero";
import Pricing from "./_components/pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-20 py-5 bg-gray-200">
      <Hero />
      <Pricing />
    </main>
  )
}
