import 'app/globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Playgrounds',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <header className="flex flex-row justify-between mt-[51px] ml-[42px] mr-[54px] h-[59px] text-cb-value">
            <div className="flex items-start gap-[21px]">
              <div className='w-[42px] h-[42px]'>
                <Image
                  src="/Logo Solo.svg"
                  alt=''
                  width={42}
                  height={42}
                />
              </div>
              <div className="text-[24px] leading-[29px] mt-[18px]">
                Cybros Playground
              </div>
            </div>
            <div className='flex justify-between gap-9 ml-[72px] mr-auto mt-6 leading-[21px] text-[18px]'>
              <Link href='/aigc'> NFT Renderer Demo</Link>
              <Link href='/broadcast'>Broadcast Demo</Link>
              <Link href='/faucet'>Faucet</Link>
              <Link href='https://github.com'>Github</Link>
              <Link href='/'>Polkadot.js</Link>
            </div>

          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
