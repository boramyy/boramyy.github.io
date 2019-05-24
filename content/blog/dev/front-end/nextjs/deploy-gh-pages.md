---
title: "nextjs gh-pages로 배포하기"
date: "2019-05-19"
categories: dev
tags: ['front-end', 'nextjs', 'react', 'github', 'gh-pages']
description: "nextjs로 만든 모바일 웹을 gh-pages로 배포해보자"
published: true
---


### index

- [배포할 nextjs 사이트](#배포할-nextjs-사이트)
- [prefix 설정하기](#prefix-설정하기)
- [next export](#next-export)
- [.nojekyll](#nojekyll)
- [블로그 배포하기](#블로그-배포하기)
- [참고](#참고)


### 배포할 nextjs 사이트

먼저 배포할 nextjs 사이트를 준비합니다. 저는 만들었던 청첩장 사이트를 gh-pages를 통해 배포하려합니다.


### prefix 설정하기

#### 코드에 prefix 사용하기

최상단 컴포넌트의 render(){} 부분에 prefix를 정의하고, 자식 컴포넌트에 prefix라는 이름의 props로 넘겨주었습니다.

``` javascript
import Intro from "../components/Intro";
import ImageSlider from "../components/ImageSlider";
import Location from "../components/Location";
import Share from "../components/Share";

class Index extends React.Component {
  render() {
    const prefix = process.env.NODE_ENV === 'production' ? 'https://boramyy.github.io/invitation' : '';
    
    return (
      <div>
        <h1 className="hide">준호와 한나 결혼합니다.</h1>
        <Intro prefix={prefix} />
        <ImageSlider prefix={prefix} />
        <Location prefix={prefix} />
        <Share prefix={prefix} />
      </div>
    );
  }
}

export default Index;
```

그리고 필요한 부분(/static 으로 시작하는 부분)에 props에서 받아온 prefix값을 추가해 줍니다.

``` javascript
class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    <article>
      ...
      <img src={`${this.props.prefix}/static/images/intro.jpg`} />
      ...
    </article>
  }
}
export default Intro;
```

#### config 파일에 prefix 설정하기

prefix를 필요한 코드에 추가한 후 `next.config.js` 파일에 `assetPrefix`의 설정을 추가해주었습니다.
저는 withCSS 모듈을 사용해서 그 안에 추가했지만 다른 모듈을 사용하지 않는다면 설정값만 추가하면 됩니다.

``` javascript
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://boramyy.github.io/invitation' : ''
});

or

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://boramyy.github.io/invitation' : ''
}
```

### next export

next export 명령은 nextjs 로 작성한 사이트를 static html앱으로 컴파일한 out/ 폴더를 생성해 줍니다.

package.json 의 scripts 에 next build와 next export를 실행하는 명령를 추가해주고 실행합니다.

``` json
{
  ...,
  "scripts": {
    ...,
    "build": "next build",
    "export": "next export",
  },
  ...
}
```

``` shell
$ npm run build
$ npm run export
```

### .nojekyll

``` shell
$ touch out/.nojekyll
```

next는 밑줄로 시작하는 파일이나 디렉토리(_next)를 사용하기 때문에 out 폴더 하위에 .nojekyll 파일을 생성해 주어야 합니다.
.nojekyll 파일을 추가해줌으로써 GitHub 페이지에서의 jekyll 처리과정(jekyll은 이러한 파일을 특수 리소스로 간주하고 최종 사이트에 복사하지 않는 것)을 피할 수 있습니다.

> #### [Bypassing Jekyll on GitHub Pages][github-blog-says]
> It is now possible to completely bypass Jekyll processing on GitHub Pages by creating a file named .nojekyll in the root of your pages repo and pushing it to GitHub. This should only be necessary if your site uses files or directories that start with underscores since Jekyll considers these to be special resources and does not copy them to the final site.


### 블로그 배포하기

``` shell
$ git add out/
$ git commit -m "deploy to gh-pages"
$ git subtree push --prefix out origin gh-pages
```

이 명령어를 실행하면 랜더링된 코드가 `gh-pages` 브랜치에 업로드되고 내용이 {username}.github.io/{reponame} 에 출력됩니다.

#### 명령어 한줄로 끝내기

이 과정을 명령어 하나로 끝내고싶다! 하시면 scripts에 묶어서 작성해줍니다.

``` json
{
  ...,
  "scripts": {
    ...,
    "deploy": "next build && next export && touch out/.nojekyll && git add out/ && git commit -m 'deploy to gh-pages' && git subtree push --prefix out origin gh-pages",
  },
  ...
}
```

``` shell
$ npm run deploy
```

---

### 참고

- [Deploying a Next.js app into GitHub Pages][next-gh-pages] <br>
- [Bypassing Jekyll on GitHub Pages][github-blog-says] <br>

[next-gh-pages]: https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages
[github-blog-says]: https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/