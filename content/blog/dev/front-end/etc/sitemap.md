---
title: "블로그에 SEO 작업하기"
date: "2019-06-06"
categories: dev
tags: ['front-end', 'sitemap', 'search', 'seo']
description: "내 블로그를 검색에 노출시키는 방법"
published: true
---

야심차게 블로그를 개설하고 몇개의 글을 올렸다. 구글에 어떻게 나오나 검색해봐야지~ ^0^ <br/>
...
<br/>
안타깝게도 사이트는 검색되지 않았다. 글 뿐만 아니라 블로그 주소를 그대로 쳐도 검색결과에는 내 사이트가 존재하지 않았다..!
<br/>
그래서 어렴풋하게만 알고있던 SEO를 직접 사이트에 실천하기로 했다.

### index

- [기본](#기본)
- [참고](#참고)


### 검색엔진최적화 SEO(Search Engine Optimization)

구글이나 다음, 네이버 등 검색 사이트의 검색엔진이 내 사이트를 잘 이해할 수 있도록 사이트 내부를 손보는 작업입니다.
우리나라의 대표 검색 사이트인 구글, 다음, 네이버를 기준으로 어떻게 도울 수 있는지 알아보았습니다.



### sitemap.xml 작성하기

``` xml
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

   <url>
      <loc>https://boramyy.github.io/</loc>
      <lastmod>2019-05-02</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
   
</urlset> 
```

#### 꼭 있어야하는 필수태그
- urlset - 파일을 캡슐화하고 현재 프로토콜 표준을 참조
- url - 각 URL 항목의 상위 태그. 나머지 태그는 이 태그의 하위 태그
- loc - 페이지의 URL. http 같은 프로토콜로 시작해야 하며 웹서버에 따라 슬래시로 끝나야 함

#### 있어도 되고 없어도 되는 옵션태그
- lastmod - W3C Datetime 형식의 파일을 마지막으로 수정한 날짜
- changefreq - 페이지가 변경되는 빈도. 검색엔진이 참고하지 않을 수도 있음
- priority - 해당 사이트의 0.0 - 1.0 사이의 상대적 우선순위. 크롤러에 가장 중요하다고 생각하는 페이지를 검색 엔진에 알리기만 하고 페이지를 비교하는 방식에 아무런 영향을 주지 않음



### 검색엔진에 사이트 등록하기

sitemap.xml을 작성하고 서버에 업로드 했습니다. 
각 검색 사이트에 site:https://boramyy.github.io 를 검색해보니 여전히 검색되지 않네요.
이제 검색엔진이 참고할 수 있도록 이 파일을 존재를 알려줘야합니다!

알려주는 방법은 세가지가 있습니다.
- robots.txt
- 검색사이트를 이용해 등록하기
- ping을 보내 sitemap 크롤링 요청

#### robots.txt 작성하기

루트폴더(프로젝트 최상단)에 `robots.txt`파일을 생성합니다.
- User-agent - 검색엔진 로봇의 종류를 지정. 특별히 지정하지 않으면 *
- Disallow - 접근을 금지할 경로 지정. 특별히 지정하지 않으면 없음
- Allow - 접근을 허용할 경로 지정. 특별히 지정하지 않으면 /
- Site - sitemap.xml의 위치를 명시합니다

``` txt
User-agent: *
Allow: /
Disallow: /private/*
Site: https://boramyy.github.io/sitemap.xml
```

저는 개인정보와 같은 검색되어서는 안될 페이지가 없기 때문에 Disallow는 지정해주지 않았습니다.
``` txt
User-agent: *
Allow: /
Site: https://boramyy.github.io/sitemap.xml
```




#### 검색사이트를 이용해 등록하기



- 구글 site:https://boramyy.github.io
- 네이버 https://webmastertool.naver.com/
- 다음 site:https://boramyy.github.io


#### ping을 보내 sitemap.xml 크롤링 요청
``` shell
http://www.google.com/ping?sitemap=https://example.com/sitemap.xml
```



### 참고

- [The Web Robots Pages][robotstxt] <br/>
- [Sitemap XML kr][sitemaps] <br/>
- [robots.txt 파일 만들기][google-robots] <br/>
- [사이트맵을 만들고 제출하기][google-sitemap] <br/>

[robotstxt]: http://www.robotstxt.org/
[sitemaps]: https://www.sitemaps.org/ko/protocol.html
[naver-seo]: https://webmastertool.naver.com/guide/basic_optimize.naver#chapter1.1
[google-seo]: https://support.google.com/webmasters/answer/7451184?hl=ko
[google-robots]: https://support.google.com/webmasters/answer/6062596?hl=ko
[google-sitemap]: https://support.google.com/webmasters/answer/183668