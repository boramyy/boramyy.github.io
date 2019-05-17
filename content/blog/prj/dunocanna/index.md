---
title: "dunocanna"
excerpt: "모바일 청첩장"
date: 2019-02-08
golink: "https://boramyy.github.io/dunocanna/"
img: "./dunocanna_thumb.jpg"
categories: prj
group: ['mobile web']
tags: ['react']
published: true
---

<style>
.content-box-1 {
  margin-right:-100px;padding:200px 8% 120px;background:url('/dunocanna_back.png') -150px -200px repeat, url('/dunocanna_back.png') 0 0 repeat;
}

.content-box-1 .text-box-1 {width:40%;}
.content-box-1 .text-box-1 .title {color:#000;}
.content-box-1 .text-box-1 .text {color:#000;}

.content-box-1 .mockup-box-1 {margin-top:-620px;margin-left:62%;}

.content-box-2 {
  position:relative;display:flex;align-items:center;justify-content:center;margin:0 auto;padding:150px 0;
}
.content-box-2 .screenshot,
.content-box-2 .gatsby-resp-image-background-image {
  float:left;width:320px;margin:0 3%;-webkit-box-shadow:-16px 25px 35px rgba(0,0,0,0.2);box-shadow:-16px 25px 35px rgba(0,0,0,0.2);
}
.content-box-2 .gatsby-resp-image-background-image {
  margin-right:0;margin-left:0;
}
</style>

<div class="prj-data prj01 dunocanna">

  <div class="content-box content-box-1">
    <div class="text-box text-box-1">
      <h3 class="title">모바일 청첩장</h3>
      <p class="text">
        '김준호, 김한나' 님의 모바일 청첩장을 개발하였습니다.
        Amazon ec2를 이용해 서비스를 배포했습니다. react의 스태틱웹 프레임워크인 next를 사용하여 사이트를 작성하였습니다.
        단일 페이지이며 스크롤만으로 모든 내용을 확인할 수 있습니다.
      </p>
    </div>
    <div class="mockup-box-1">
      <div class="mockup-iphonexs">
        <div class="mockup-screen">
          <img class="screenshot" src="./dunocaana_pull.png">
        </div>
        <div class="mockup-body"></div>
      </div>
    </div>
  </div>

  <div class="content-box content-box-2">
    <video class="screenshot screenshot-1" autoplay muted loop>
      <source src="./dunocanna_slider.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <img class="screenshot screenshot-2" src="./dunocanna_kakao.jpg">
    <video class="screenshot screenshot-1" autoplay muted loop>
      <source src="./dunocanna_map.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

</div>