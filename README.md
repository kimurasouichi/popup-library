# popup-library

# my-popup-lib

`my-popup-lib` は、簡単にカスタマイズ可能なポップアップウィンドウをウェブサイトに追加するための軽量で使いやすいJavaScriptライブラリです。

## 特徴

- 軽量で迅速な設定
- 複数のポップアップを管理
- カスタマイズ可能なアニメーションとスタイリング
- モダンなブラウザとの互換性

## インストール方法

npmを使用して `my-popup-lib` をプロジェクトに追加するには、以下のコマンドを実行してください。

npm install my-popup-lib

```bash
// 使い方
// bodyタグ内に以下を配置
<div class="popup-background"></div>
<div class="popup-background__img">
    // 必要に応じて増やす
    <img class="popup-image-container-1" src="">
    <img class="popup-image-container-2" src="">
    <img class="popup-icon circle-x" src="/circle-x.png" alt="">
</div>

// ポップアップさせるimgタグにpopup-triggerクラスを設定
<img class="popup-trigger-1" src="https://picsum.photos/500/300?random=3" alt="">
<img class="popup-trigger-1" src="https://picsum.photos/500/300?random=4" alt="">
<img class="popup-trigger-1" src="https://picsum.photos/500/300?random=5" alt="">
<img class="popup-trigger-1" src="https://picsum.photos/500/300?random=6" alt="">

<img class="popup-trigger-2" src="https://picsum.photos/500/300?random=7" alt="">
<img class="popup-trigger-2" src="https://picsum.photos/500/300?random=8" alt="">
<img class="popup-trigger-2" src="https://picsum.photos/500/300?random=9" alt="">
<img class="popup-trigger-2" src="https://picsum.photos/500/300?random=10" alt="">
```

サポート
このライブラリに関する質問やサポートが必要な場合は、GitHub Issuesを使用してください。

