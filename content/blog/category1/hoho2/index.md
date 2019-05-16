---
title: "테스트 테스트 Vue로 만든 Todo페이지 gh-pages에 배포하기"
date: "2015-05-01T22:12:03.284Z"
categories: dev
---

### 테스트 합시다!

``` html
<!doctype html>
<html class="no-js" lang="en">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Demo</title>
      <meta name="description" content="Demo">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="apple-touch-icon" href="apple-touch-icon.png">
      <!-- Place favicon.ico in the root directory -->

      <link rel="stylesheet" href="/normalize.css">
      <link rel="stylesheet" href="/main.css">
  </head>
  <body>
    <h1 class="title">안녕?</h1>
  </body>
```

``` css
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  font-size: 80% !important;
}
```

``` scss
.visuallyhidden {
// Hide only visually, but have it available for screen readers:
// http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.inner-wrap {
  max-width: 50em;
  margin: 0 auto;
  padding-left: emCalc(24);
  padding-right: emCalc(24);
}

@media only screen and (min-width: 550px) {
  article {
    ul {
      list-style: circle;
    }
    ol {
      list-style: decimal;
    }
  }
  .inner-wrap {
    padding-left: emCalc(48);
    padding-right: emCalc(48);
  }
```


``` javascript
/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function( w ){
  var loadJS = function( src, cb ){
    "use strict";
    var ref = w.document.getElementsByTagName( "script" )[ 0 ];
    var script = w.document.createElement( "script" );
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore( script, ref );
    if (cb && typeof(cb) === "function") {
      script.onload = cb;
    }
    return script;
  };
  // commonjs
  if( typeof module !== "undefined" ){
    module.exports = loadJS;
  }
  else {
    w.loadJS = loadJS;
  }
}( typeof global !== "undefined" ? global : this )); }
```

``` javascript
function foo(bar) {
  var a = 42,
    b = 'Prism';
  return a + bar(b);
}

function foo(num) {
  var arr = [];
  for (var i=0; i<num; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

```

``` ruby
##
# Array ISO Test

assert('Array', '15.2.12') do
  assert_equal(Class, Array.class)
end

assert('Array inclueded modules', '15.2.12.3') do
  assert_true(Array.include?(Enumerable))
end

assert('Array.[]', '15.2.12.4.1') do
  assert_equal([1, 2, 3], Array.[](1,2,3))
end
```

``` python
class _BaseHTMLProcessor(sgmllib.SGMLParser):
    elements_no_end_tag = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr',
      'img', 'input', 'isindex', 'link', 'meta', 'param']

    _r_barebang = re.compile(r'<!((?!DOCTYPE|--|\[))', re.IGNORECASE)
    _r_bareamp = re.compile("&(?!#\d ;|#x[0-9a-fA-F] ;|\w ;)")
    _r_shorttag = re.compile(r'<([^<\s] ?)\s*/>')

    def __init__(self, encoding):
        self.encoding = encoding
        if _debug: sys.stderr.write('entering BaseHTMLProcessor, encoding=%s\n' % self.encoding)
        sgmllib.SGMLParser.__init__(self)
```

``` php
<?php namespace App\Services;

use App\User;
use Validator;
use Illuminate\Contracts\Auth\Registrar as RegistrarContract;

class Registrar implements RegistrarContract {

  /**
   * Get a validator for an incoming registration request.
   *
   * @param  array  $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
public function validator(array $data)
```







### npm run build

`npm run build`를 하면 `dist`폴더가 생깁니다. <br/>
`dist`폴더 하위에 js, css 그리고 index.html, favicon.ico 요롷게 생긴다.

### npm run build로 생성된 dist 폴더구조
``` shell
dist 
  └ css
    └ app.~~~.css
  └ js
    ├ app.~~~.js
    ├ app.~~~.js.map
    ├ chunk-vendors.~~~.js
    └ chunk-vendors.~~~.js.map
  ├ favicon.ico
  └ index.html
```


index.html 내부 `link`태그의 `href`속성과 `script`태그의 `src` 속성에 /js 또는 /css 로 시작하는 주소를 자신의 repository 이름으로 시작해야 합니다!

/v-todo/js... , /v-todo/css...

``` html 
<link href=/v-todo/css/app.dc9a26ca.css rel=preload as=style>
<link href=/v-todo/js/app.a331c5f4.js rel=preload as=script>
<link href=/v-todo/js/chunk-vendors.e622eab0.js rel=preload as=script>
<link href=/v-todo/css/app.dc9a26ca.css rel=stylesheet>
.
.
.
<script src=/v-todo/js/chunk-vendors.e622eab0.js> </script> <script src=/v-todo/js/app.a331c5f4.js> </script> </body> </html>
```

{% highlight html linenos %}
<link href=/v-todo/js/app.a331c5f4.js rel=preload as=script>
<link href=/v-todo/js/chunk-vendors.e622eab0.js rel=preload as=script>
<link href=/v-todo/css/app.dc9a26ca.css rel=stylesheet>
{% endhighlight %}

그리고 `"file":"` 로 전체 검색을 하면, `.js.map` 파일 내부에서 참조하는 파일 주소가 작성되어 있는데 그것 역시 자신의 레포 주소로 시작하면 됩니다!

<img src="/assets/img/vue02-search.png" alt="Search Example" title="Search Example" width="520">

``` javascript
js/~~ // 이렇게 되어있는 주소들을
v-todo/js // 이렇게 자신의 repository 이름으로 시작하게 합니다.
```

``` javascript
/js/~~ // 슬래시가 있던 친구들은 그대로 슬래시를 처음에 두세요!
/v-todo/js // 이렇게요!
```

### gh-pages 에 배포하기

``` shell
$ git add dist/
$ git commit -m'프로젝트 배포!'
$ git subtree push --prefix dist origin gh-pages
```

git subtree 라는 명령어가 지정한 dist 폴더 내부의 파일들을 gh-pages 브랜치에 올려주는 작업을 진행합니다.


---

### 참고자료



[Vue 가이드][vue] <br/>
[Vue 한국어 가이드][vue-kr]<br/>
[참고한 다른 웹][other-web] 


[vue]:    https://vuejs.org/v2/guide/
[vue-kr]: https://kr.vuejs.org/v2/guide/
[vue-lifecycle]:    https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram

[velopert]: https://velopert.com/category/dev-log/tech-log/vue-js

[other-web]: https://github.com/DivanteLtd/vue-storefront/tree/gh-pages