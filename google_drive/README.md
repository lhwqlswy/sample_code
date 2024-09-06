# 実行手順

## service account作成
- gcp service accountを作成する
- service accountのkey(json)を作成する

## 環境変数準備
- 環境変数ファイルをコピー `cp .env.sample .env`
- service account keyの中身を使って`GOOGLE_DRIVE_CLIENT_EMAIL`と`GOOGLE_DRIVE_PRIVATE_KEY`を差し替えます
- google folder idも差し替えます。

## 実行
```
yarn
yarn go
```
