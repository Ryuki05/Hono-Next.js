import React, { useEffect, useState } from 'react';

const FormCatch = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8787/api/submit') // GETリクエスト
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // デバッグ用: レスポンスデータをログに表示
        setName(data.name); // nameに受信した名前を設定
        setMessage(data.message); // messageに受信したメッセージを設定
      })
      .catch((error) => {
        console.error('Fetch error:', error); // エラーハンドリング
      });
  }, []);

  return (
    <div className='border border-black w-32'>
      <h1>フォーム受信</h1>
      <p>名前: {name}</p>
      <p>メッセージ: {message}</p>
    </div>
  );
};

export default FormCatch;
