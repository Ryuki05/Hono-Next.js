'use client';
import React from 'react'
import Link from 'next/link';
import FormCatch from './components/FormCatch';

export default function Home() {
  const id = 1;

  return (
    <div>
      <Link className='border border-black hover:bg-slate-300' href={`/Form/${id}`}>フォーム送信ページ</Link>
      <FormCatch />
    </div>
  );
}
