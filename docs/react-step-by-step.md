1. Hello World
- そのままだと動かなかった
  - add imports (ReactDOM React)
  - document.getElementById() -> document.body.appendChild(document.createElement("div"))
- 実際にアプリを作って進めるチュートリアルとコンセプトを理解するためのチュートリアルがあって良い
- Reactを使うにあたって必要な知識は[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - 30分から１時間かかるx
  - 3つの要点
    - o let const  x var
    - class
    - allow function x => x * 2

2. Introducing JSX
- jsxではstringでもHTMLでもないelementが使われる
- jsではロジックとレンダリング部分でソースファイルが異なるがこれはコンポーネントを表現するのに適していない
- jsxを使う必要はないが使いやすさと見やすさで広く使われてる
- セミコロンはつけようね
- compileしたらjsになるのでifとかforも使えるよ
- DOMがレンダリングする前にエスケープするのでXSSにつよい
- ES6とJSXコードの両方が適切に表示されるようにBabelの言語定義を使うのを勧める

3. Rendering Elements
- <div id="root"></div>がルート
  - 直接レンダリングできないぞ...?
