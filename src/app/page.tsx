import Image from "next/image";
import { logout } from "../frontend/sections/logout/actions"

export default function Home() {
  return (
    <main className="bg-green-400 lex min-h-screen flex-col items-center justify-between p-24">
      <div>Development in new repo initiated</div>
      <form action={logout}>
        <button type="submit">
        Logout
        </button>
      </form>
    </main>
  );
}
