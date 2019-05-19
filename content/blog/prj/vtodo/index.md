---
title: "todo with vue"
prjname: "v-todo"
excerpt: "Vue를 사용하여 작성한 todo 페이지입니다."
date: 2018-10-12
golink: "https://boramyy.github.io/v-todo/"
img: "./vtodo_thumb.jpg"
categories: prj
group: ['pc web']
tags: ['vue']
published: true
---

<style>
  .content-box-1 {
    position:relative;width:70%;min-height:515px;margin-right:-100px;padding:150px 8% 120px;background:rgba(79, 192, 141, 0.9);
  }
  .content-box-1 .text-box-1 {width:35%;}
  .content-box-1 .text-box-1 .title {color:#fff;}
  .content-box-1 .text-box-1 .text {color:#fff;}
  .content-box-1 .gatsby-resp-image-wrapper {display:inline!important;margin-right:0!important;margin-left:0!important;}
  .content-box-1 .gatsby-resp-image-link {position:absolute;top:-120px;left:52%;display:block;width:900px;-webkit-box-shadow:-18px 20px 30px rgba(0,0,0,0.1);box-shadow:-18px 20px 30px rgba(0,0,0,0.1);}
  
  .content-box-2 {
    position:relative;display:flex;align-items:center;justify-content:center;margin:0 auto;padding:200px 0 150px;
  }
  .content-box-2 .screenshot {float:left;width:40%;max-width:550px;margin:0 5%;-webkit-box-shadow:-16px 25px 35px rgba(0,0,0,0.1);box-shadow:-16px 25px 35px rgba(0,0,0,0.1);}


@media (max-width: 414px) {
  .content-box-1 {width:100%;padding:300px 8% 50px;}
  .content-box-1 .text-box-1 {width:auto;}
  .content-box-1 .gatsby-resp-image-link {top:30px;left:8%;width:100%;margin-right:-100px;}
  
  .content-box-2 {display:block;padding:50px 0;}
  .content-box-2 .screenshot {float:none;width:100%;margin:10px auto;-webkit-box-shadow:0 20px 35px rgba(0,0,0,0.2);box-shadow:0 20px 35px rgba(0,0,0,0.2)}
}
</style>
<div class="prj-data prj02 vtodo">

  <div class="content-box content-box-1">
    <div class="text-box text-box-1">
      <h3 class="title">todo list</h3>
      <p class="text">
        vue.js로 todo list 웹앱을 작성하였습니다.
        내용을 추가, 수정, 삭제 할 수 있으며 끝난 일정과 아직 진행중인 일정을 나누어서 확인할 수 있습니다.
      </p>
    </div>
    <img class="main-img" src="./vtodo_full.jpg">
  </div>

  <div class="content-box content-box-2 clear">
    <video class="screenshot screenshot-1" autoplay muted loop>
      <source src="./vtodo_video1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video class="screenshot screenshot-2" autoplay muted loop>
      <source src="./vtodo_video2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

</div>