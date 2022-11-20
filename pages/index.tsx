import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8">
      <Head>
        <title>Fullstack template</title>
        <meta
          name="description"
          content="Dockerized template for fullstack applications"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 flex flex-1 flex-col justify-center items-center space-y-4">
        <nav className="flex sm:justify-center space-x-4">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url]) => (
            <a key={`${title}-0`}
              href={url}
              className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </nav>
        <h1 className="m-0 text-3xl">
          Welcome to{" "}
          <a className="text-violet-600 font-bold" href="https://nextjs.org">
            Plum
          </a>
        </h1>
      </main>

      <footer className="flex flex-1 py-8 border-t border-[#eaeaea] dark:border-[#222] justify-center items-center">
        <a
          className="flex justify-center items-center flex-grow"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              className="dark:invert"
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
