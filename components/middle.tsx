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
       <h1>LIst of Actions</h1><br/><br/>
       <Link href="/twinfo">
         <p>Step 1: Twitter Data  Fetch &rarr;</p>
       </Link>

       <Link href="https://cpone-starmint.vercel.app">
         <p>Step 2: Zero Knowledge Proof &rarr;</p>
       </Link>

       <Link href="https://cpone-starmint.vercel.app">
         <p>Step 3: NFT Minting with ZKP &rarr;</p>
       </Link>
     </>
     )}
    </div>
  )
}