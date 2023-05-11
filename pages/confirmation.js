import Confirmation from '@/components/landing/Book/Confirmation'
import React from 'react'
import { Raleway } from "next/font/google";
import Head from 'next/head';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const raleway = Raleway({ subsets: ["latin"] });

const ConfirmationPage = () => {
  return (
    <>
      <style jsx global>
        {`
      :root {
        --raleway-font: ${raleway.style.fontFamily};
      }
    `}
      </style>
      <Head>
        <title>Sprints | Booking Confirmed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Confirmation />
    </>
  )
}

export default ConfirmationPage