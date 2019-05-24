---
title: "브라우저가 페이지를 렌더링하는 과정"
date: "2019-05-22"
categories: dev
tags: ['front-end', 'javascript', 'rendering', 'dom', 'cssom']
description: "브라우저가 페이지를 렌더링하는 과정입니다."
published: true
---

### index

1. [DOM (Document Object Model) 트리 생성](#DOM-(Document-Object-Model)-트리-생성)
2. [CSSOM 트리 생성](#CSSOM-트리-생성)
3. [렌더링 트리 생성](#렌더링-트리-생성)
4. [렌더 트리 레이아웃](#렌더-트리-레이아웃)
5. [렌더 트리 페인팅](#렌더-트리-페인팅)


- [참고](#참고)

### DOM (Document Object Model) 트리 생성

브라우저 엔진이 html을 파싱해서 DOM 트리를 생성한다.
트리구조의 상-하 관계는 부모-자식관계로 유지된다.

### CSSOM 트리 생성

DOM 트리를 구성하는 중에 `head`에서 css를 참조하는 link 태그를 만나면 읽어들인 css를 CSSOM 트리로 변환한다.
~~(`style`태그도 만나면 작성된 css를 CSSOM으로 변환하는가?)~~

CSSOM또한 트리구조로, 트리의 상-하 관계는 부모-자식관계로 유지된다.

### 렌더링 트리 생성

- 렌더링 트리 : 시각적 요소들이 화면에 표시되는 순서대로 구성된 트리

DOM 트리와 CSSOM 트리로부터 display:none; 처럼 그려지지 않아야할 DOM들을 제거한, 브라우저에 그려져야할 DOM과 그에 해당하는 CSS 정보를 담은 렌더링트리가 생성된다.

### 렌더 트리 레이아웃

초기에 생성된 랜더트리는 위치와 크기를 가지지 않는다. 이러한 값들을 계산하는 것을 레이아웃이라고 부른다. 랜더트리의 각 노드(트리의 요소 하나하나를 노드라고 합니다)에 화면에 표시되어야 하는 정확한 좌표를 전달한다.

### 렌더 트리 페인팅

레이아웃이 완료될 때 브라우저가 'Paint Setup' 및 'Paint' 이벤트를 발생시킵니다. 이러한 작업은 렌더링 트리를 화면의 픽셀로 변환합니다.

---

### 참고

- [Deploying a Next.js app into GitHub Pages][google-developers] <br>
- [How JavaScript works: the rendering engine and tips to optimize its performance 번역@codepink ][codepink-github] <br>
- [How JavaScript works: the rendering engine and tips to optimize its performance 원본][how-javascript-works] <br>

[google-developers]: https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=ko
[codepink-github]: https://github.com/codepink/codepink.github.com/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%98%EB%8A%94%EA%B0%80:-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%97%94%EC%A7%84%EA%B3%BC-%EC%84%B1%EB%8A%A5%EC%9D%84-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
[how-javascript-works]: https://blog.sessionstack.com/how-javascript-works-the-rendering-engine-and-tips-to-optimize-its-performance-7b95553baeda