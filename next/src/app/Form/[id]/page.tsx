'use client';
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // ローディング状態

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // ローディング開始

    const response = await fetch('http://localhost:8787/api/submit', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    // レスポンスをJSONとして取得
    const data = await response.json();
    console.log(data);

    setName(''); // 入力フィールドをリセット
    setMessage(''); // 入力フィールドをリセット
    setLoading(false); // ローディング終了

    window.location.href = '/';
  };

  return (
    <div>
      <h1>フォーム送信</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input 
              className='border border-black' 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder="名前"
            />
          </label>
        </div>
        <div>
          <label className='flex flex-col'>
            メッセージ
            <textarea
              className='border border-black w-44'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="メッセージを入力"
            />
          </label>
        </div>
        <button className='border border-black hover:bg-sky-200' type='submit' disabled={loading}>
          {loading ? '送信中...' : '送信'}
        </button>
      </form>
    </div>
  );
};

export default Form;
