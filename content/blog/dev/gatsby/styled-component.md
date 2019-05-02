---
title: "gatsby에서 styled-component 사용하기"
date: "2019-05-02"
categories: development
tags: ['gatsby', 'react', 'styled-component']
published: false
---

### index

- [프로젝트에 styled-component 설치](#프로젝트에-styled-component-설치)
- [gatsby-config.js에 설정 추가](#gatsby-configjs에-설정-추가)
- [참고](#참고)


### 프로젝트에 styled-component 설치

``` shell
$ npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```
 
 이 명령을 실행하면 `package.json`의 `dependencies`에 다음 내용이 추가됩니다.
``` shell
  "babel-plugin-styled-components": "^1.10.0",
  "gatsby-plugin-styled-components": "^3.0.7",
  "styled-components": "^4.2.0",
```

### gatsby-config.js에 설정 추가
`gatsby-config.js` 파일의 plugins 배열에 `gatsby-plugin-styled-components`를 추가해줍니다.

```
module.exports = {
  plugins: [
    ...,
    ...,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    ...,
  ],
}
```

---

### 참고

[Gatsby styled-component][gatsby-starter]


[gatsby-plugin-styled-components]: https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/?=styled
