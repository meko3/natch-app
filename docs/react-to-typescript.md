# React javascript to typescript
Rails上でReactをtypescriptで書くための環境構築
## Reference
- [Webpacker で React + TypeScript](https://qiita.com/kjugk/items/d9d39508f1899e6d147c)
- [yarnコマンド](https://yarnpkg.com/lang/en/docs/cli/add/)
- [RailsのFront EndでTypeScriptを動かすまで](https://qiita.com/fezrestia/items/a4b005e0a48268d9d458)
- [Rails + Webpacker + React + TypeScriptの開発環境構築](https://tisnote.com/rails-webpacker-react-typescript/#st-toc-h-17)
- [RAILS5.2+WEBPACKER4+REACT+TYPESCRIPT](https://namaikinamaiki.wordpress.com/2018/06/02/rails5-2webpacker4reacttypescript/)
- [npmのモジュールバージョン指定におけるチルダ(~)とキャレット(^)の違いについての直感的な理解](https://qiita.com/uehaj/items/443580da712d2ccee159)
- [Webpack4アップデートエラー](https://koukitips.net/post1967/)
## Procedure
- Gemfileにwebpackerを入れてなければインストール
  - `gem 'webpacker', '~> 3.0'`
  - `bundle isntall`
  - `bundle exec rails webpacker:install`
  - `bundle exec rails webpacker:install:react`
- Typescript関連のパッケージをインストール
  - `yarn add ts-loader typescript @types/react @types/react-dom -D`
- typesctiptの設定ファイルを書く
- webpakcerで.tsxを読み込む
  - `config/webpacker`のextensionsに`.tsx`を追加
  - `app/javascript/packs/hello_world.jsx`を`.tsx`に変更
- typescriptを書くためにtslintを入れる
  - `yarn add tslint -D`
  - `tslint --init`
  - `hello_react.tsx`にエラーが出るので修正
- compileできないのでloaderを変更
  - `yarn remove ts-loader`
  - `yarn add awesome-typescript-loader -D`
  - ```
      environment.loaders.set('typescript', {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      })
    ```
- compileできない...
  - gem でtypescriptインストールしてみる
  - yarn add tslint-loader -D
  - environmentにtslint-loaderを加え、webpack/loadersにtslint.jsを加える
  - `yarn add -D tslint-config-airbnb`:airbnbの設定を借りてきた
  - ```
    install
    "tslint-config-airbnb",
    "tslint-react",
    "tslint-config-prettier"
    "tslint-plugin-prettier"
    ```
  - `yarn add -D ts-loader@^4.0.0`
  - `yarn add -D webpack-dev-server@^3.0.0`
  - `yarn add -D webpack@^4.0.0`

  - `yarn add -D extract-text-webpack-plugin@next`

- 一旦戻す yarn remove
  - babel-preset-react
  - prop-types
  - mini-css-extract-plugin
  - pnp-webpack-plugin
  - prettier
  - tslint-config-airbnb
  - tslint-config-prettier
  - tslint-loader
  - tslint-plugin-prettier
  - tslint-react
  - ts-loader

- [Webpacker で React + TypeScript](https://qiita.com/kjugk/items/d9d39508f1899e6d147c)
- `Error: Cannot find module 'webpack/bin/config-yargs'`これがwebpack-cli移動したみたい
  - `webpack-dev-server`の方は3.1.2にアップデートしたら行けた
- [railsでwebpackerを使用する際、Error: Chunk.entrypointsが出てハマった](https://qiita.com/daikichi412/items/409fafe943e79718b765)
  - pluginを@nextでインストールするか、webpackerを4以上にすると良いらしい
- `Error: Cannot find module 'babel-plugin-syntax-dynamic-import'`
  - babelの問題みたい
  - ないって言われたからdevにインストしてみた
- `Cannot find module 'babel-plugin-transform-object-rest-spread'`
  - 同じくインストール
- `Cannot find module 'babel-plugin-transform-class-properties'`
  - `yarn add -D babel-plugin-transform-class-properties`
- `Cannot find module 'babel-preset-env'`
- `yarn add babel-preset-react@next`
- できた！！！！！！！！！！！！！！！！！！！！！