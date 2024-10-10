import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('*', cors());

let submittedData = {}; // データを保存するための変数

app.post('/api/submit', async (c) => {
  const body = await c.req.json();
  console.log(body);
  submittedData = { name: body.name, message: body.message }; // データを保存
  return c.json({ message: 'データが受信されました', data: submittedData });
});

// 送信されたデータを取得するためのエンドポイント
app.get('/api/submit', async (c) => {
  return c.json(submittedData); // 保存されたデータを返す
});

export default app;
