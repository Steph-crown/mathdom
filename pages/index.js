import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";


export default function Home() {
    return (
    <div>
        <Head>
            <title>Mathdom | Home</title>
        </Head>
        <Header curr="Home" />
        <Banner />
    </div>
    );
}
