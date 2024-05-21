import Image from "next/image";
import { logout } from "../frontend/sections/logout/actions"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-green-400 lex min-h-screen flex-col items-center justify-between p-24">
      <div>Development in new repo initiated</div>
      <div>
        <Link href="/"></Link>
      </div>
      <form action={logout}>
        <button type="submit">
        Logout
        </button>
      </form>
    </main>
  );
}
