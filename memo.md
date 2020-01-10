環境構築参照: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

学ぶ必要がありそうな事
GitHub Flow に必要な基本的な Git の使い方
React における TypeScript と API リクエスト
CSS

要件
・ユーザー名を input に入力してボタンを押すと、そのユーザーのリポジトリの言語割合を見られる
・割合はグラフで見られる
・ユーザーのアイコンと名前が表示される

ぐらいかな　とりあえず最低限を実装

https://api.github.com/users/KoutaKawase/repos

```tsx
const uniqueUseRate: UseRate[] = useRate.filter((data1, index, self) => {
  console.log(`data1: ${data1.language}`);
  return (
    self.findIndex(data2 => {
      console.log(`data2: ${data2.language}`);
      return data1.language === data2.language;
    }) === index
  );
});
```

これマジで理解できん　コピペで済ましたくないので理解したい

https://api.github.com/users/
