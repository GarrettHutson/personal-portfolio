import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* <Image
          src="/images/profile.jpg"
          alt="Picture of the author"
          width={144}
          height={144}
        /> */}
        <h1 className="text-6xl font-bold">Garrett Hutson</h1>
        <p className="mt-3 text-2xl">
          Software Engineer based in an Airstream.
        </p>
      </div>
    </main>
  );
}
