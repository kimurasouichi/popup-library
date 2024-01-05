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

```bash
npm install my-popup-lib
使い方
以下のコードスニペットを使用して my-popup-lib をあなたのプロジェクトに組み込むことができます。

javascript
Copy code
import { PopupManager } from 'my-popup-lib';

// ポップアップマネージャーの初期化
const popupManager = new PopupManager(5); // 5はポップアップの数を表します

// 必要なスタイルとアニメーションの設定を行ってください
APIリファレンス
PopupManager
PopupManager クラスは、ポップアップの作成と管理を行います。

コンストラクタ
javascript
Copy code
new PopupManager(numberOfPopups)
numberOfPopups: 表示するポップアップの数
メソッド
setupPopups(): ポップアップの初期設定を行います。
setupPopup(triggerClass, imageContainerSelector): 個別のポップアップの設定を行います。
setupBackgroundClick(): バックグラウンドをクリックした時のイベントを設定します。
カスタマイズ
ポップアップのスタイルや動作はカスタマイズ可能です。CSSを編集することで、ポップアップの見た目を変更することができます。

サポート
このライブラリに関する質問やサポートが必要な場合は、GitHub Issuesを使用してください。
