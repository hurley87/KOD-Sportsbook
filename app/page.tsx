import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between text-white">
      <nav className="max-w-screen-xl mx-auto w-full flex justify-between">
        <Image alt="KOD logo" width={124} height={32} src="/logo.svg" />
        <ConnectButton />
      </nav>
      <p>Hello world</p>
    </main>
  );
}
