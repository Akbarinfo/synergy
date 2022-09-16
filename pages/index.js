import Head from "next/head";
import Header from "../components/Header";
import TopHeader from "../components/Header/TopHeader";
import Hero from "../components/Hero";
import About from "../components/Main/About/About";
import Admission from "../components/Main/Admission/Admission";
import Catalog from "../components/Main/Catalog/Catalog";
import Faculties from "../components/Main/Faculties/Faculties";
import Forms from "../components/Main/Forms/Forms";
import OpenDay from "../components/Main/Openday/Openday";
import MainVideo from "../components/Main/Video/Video";


export default function Home() {
  return (
    <>
      <Head>
        <title>
          Synergy
        </title>  
      </Head>
      <TopHeader />
      <Header />
      <Hero />
      <Faculties />
      <OpenDay />
      <Catalog />
      <Forms />
      <Admission />
      <MainVideo />
      <About />
    </>
  )
}
