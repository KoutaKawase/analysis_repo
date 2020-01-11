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
    self.findIndex(data2 => {
      return data1.language === data2.language;
    }) === index
  );
});
```

findIndex は true になった要素のインデックスを返す。これの findIndex 内は filter の現在の要素の最初に出てくる位置のインデックスを返す。その
インデックスと現在のインデックスが等しかったらそれは初めてきたということなんで true として配列に入れている。

これマジで理解できん　コピペで済ましたくないので理解したい

https://api.github.com/users/

ダークモード実装したい
https://www.youtube.com/watch?v=FjDo1mbkNtw
