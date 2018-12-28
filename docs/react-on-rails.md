# React on Rails
RailsにReactを載せる
## RailsにReactの環境を構築する
### 参考
[Railsチュートリアル幻の15章 React編](https://qiita.com/kouheiszk/items/c85e70e331ba75841818)
### 手順
- Gemfileに`gem 'webpacker', '~> 3.0'` を書く
- Terminalで`bundle install`
- Terminalで`rails webpacker:install`
  - `package.json`を見たら`@rails/webpacker`と`webpacker-dev-server`がインストールされてた 

- Javascriptをトランスパイルする
  - `bin/webpack`を使う
    - package.jsonにscriptsを追加した。
    - `app/javascript/packs/application.js`がpublicフォルダ配下にダイジェスト付きで生成された
    - トランスパイルできるとHTML(erb)から読み込めるように
      - `app/views/layouts/application.html.erb`に記載
        - `<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>`
  - `bin/webpack-deb-server`を使う
    - リアルタイムでトランスパイルしてくれる  

- Reactを導入
  - Terminalで`rails webpacker:install:react`
    - app/javascript/packsに`hello_world.jsx`が生成される
    - serverが`3000`から`3035`になってた
  - app/views/layout/application.html.erbにhello worldを追加
    - `<%= javascript_pack_tag 'hello_react', 'data-turbolinks-track': 'reload' %>`
  - `rails s`でサーバー起動
    - どこにHelloしたの...

- `rake webpacker:install:react`
- `rake -T | grep webpacker`

- 最初からやり直してみた
  - [Rails5.1から追加されると噂のWebpackerを使ってReact.jsを動かす。](https://qiita.com/yoshiokaCB/items/564ed0440f0428c0009a)
  - pageに表示された!