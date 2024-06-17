import "../../styles/globals.css"
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from "../components/ui/button"; 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Home() {
  return (
    <div className={cn(inter.variable, 'font-sans')}>
      <h2>Gift Me</h2>
      <div>
        <div>
        </div>
     <Button>Click me</Button>
      </div>
    </div>
 )
}
