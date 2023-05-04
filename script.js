const swiper = new Swiper('.swiper',{
  // オプション　最後までスライドしたら最初の画像に戻る
  loop:true,
  
  // ページネーション表示設定　ページネーションの要素
  pagination:{
    el:'.swiper-pagination',
  },
  
  // ナビゲーションボタン（矢印）表示の設定　次へ　前へ
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }
});