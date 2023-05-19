import React, { useState } from "react"
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"

export default function Middle() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div className={styles.signedInStatus}>
    {session?.user && (
     <>
       <Link href="/twinfo">
         <p>Step 1: Twitter Data  Fetch &rarr;</p>
       </Link>

       <Link href="https://cpone-starmint.vercel.app">
         <p>Step 2: Zero Knowledge Proof &rarr;</p>
       </Link>

       <Link href="https://cpone-starmint.vercel.app">
         <p>Step 3: NFT Minting with Endorsement &rarr;</p>
       </Link>
     </>
     )}
    </div>
  )
}