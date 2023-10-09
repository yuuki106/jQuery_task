$(function () {
  // ---------------q1---------------

  // 読み込み後にq1の文字色を「#666」へ変更。
  $("#q1").css("color", "#666");
  

  // ---------------q2---------------

// q2をクリックした時、
  $("#q2").on("click", function () {
    // q2の背景色を「#dcdcdc」へ変更。
    $("#q2").css("background", "#dcdcdc");
  });

  // ---------------q3---------------

  // q3をクリックした時、
  $("#q3").on("click", function () {
    // ３秒かけてq3をフェードアウト。
    $("#q3").fadeOut(3000);
  });


  // ---------------q4---------------

  // q4をクリックした時、
  $("#q4").on("click", function () {
    // q4のwidthを300pxへ、上下のpaddingを56px、左右のpaddingを0、font-zizeを20pxへ変更。
    $("#q4").css({ "width": "300px", "padding": "50px 0","font-size":"20px" });
  });
  // ---------------q5---------------

  // q5をクリックした時、
  $("#q5").on("click", function () {

    // q5の外側の前後にそれぞれ以下の文を挿入。
    $("#q5").before("DOMの前").after("DOMの後");

    // q5の内側の前後にそれぞれ以下の文を挿入。
    $("#q5").append("DOMの中の後").prepend("DOMの中の前");
  });

  // ---------------q6---------------

  // q6をクリックした時、
  $("#q6").on("click", function () {
    // q6の上側と左側に2秒かけて、100pxの余白(margin)をつける。
    // なお、q6の移動時の現加速を「ease-in-out"」で調整、スタート時・ゴール時に減速。
    $("#q6").css({"margin":"100px 0 0 100px", "transition":"2s ease-in-out"})
  });

  // ---------------q7---------------

  // q7をクリックした時、
  $("#q7").on("click", function () {
    // q7のノードをget()で取得し、コンソールに表示。
    console.log($("#q7").get(0));
  });

  // ---------------q8---------------

  // q8にカーソルを乗せると、
  $("#q8").hover(
    function () {
      // q8のwidthが300px、paddingが56pxに変化。
      $("#q8").css({ "width": "300px", "padding": "56px","font-size":"20px" });
    },
    function () {
      // マウスを外すとCSSで指定した元のサイズに戻る。
      $("#q8").css({ "width": "", "padding": "" ,"font-size": ""});
    }
  );
  // ---------------q9---------------

  // q9のliをクリックした時、
  $("#q9 li").on("click", function(){
    // クリックしたliのindexを取得しalert()で表示。
    alert($(this).index());
  });


  // ---------------q10---------------
  // q10のliをクリックした時、
  $("#q10 li").on("click", function(){
    // クリックしたliのindexを取得し「clickedItem」代入。
    var clickedItem = $(this).index();
    // eqメソッドを使用し、「clickedItem」番目のq11のliのfont-sizeを30pxへ変更。
    $("#q11 li").eq(clickedItem).css("font-size","30px");
  });




});