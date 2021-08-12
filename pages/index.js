import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import { ReviewSection } from "../components/reviews/reviews";
import Script from 'next/script'
import { WhatGoesOn } from "../components/whatgoeson/whatgoeson";



export default function Home() {
    return (
    <div>
        <Head>
            <title>Mathdom | Home</title>
        </Head>
        <Script
            src="https://kit.fontawesome.com/8ddeed34df.js" 
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
        <Header curr="Home" />
        <Banner />
        <ReviewSection />
        <WhatGoesOn />
    </div>
    );
}
