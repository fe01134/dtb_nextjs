import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Learn about and plan your visit to Algarve Portugal.
        </h1>
        <br className="hidden sm:inline" />
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This site is optimized for Carvoeiro Algarve.  Let us know what other locations you would like to see!
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.facebook}
          className={buttonVariants({ variant: "outline" })}
        >
          Facebook
        </Link>
      </div>
    </section>
  )
}
