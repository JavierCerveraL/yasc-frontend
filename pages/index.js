import Feed from '@/components/Feed';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div className=" bg-stone-200 ">
      <Head>
        <title>Yasc Portal</title>
      </Head>
      <Navbar className="shadow-md" />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
