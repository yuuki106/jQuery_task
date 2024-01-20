$(function () {
  // ---------------q1---------------

  // 読み込み後に1つ目のbtnの文字色を「#666」へ変更。
  $(".btn").eq(0).ready().css("color", "#666");

  // ---------------q2---------------

  // 2つ目のbtnをクリックした時、
  $(".btn").eq(1).on("click", function () {
    // 2つ目のbtnの背景色を「#dcdcdc」へ変更。
    $(".btn").eq(1).css("background", "#dcdcdc");
  });

  // ---------------q3---------------

  // 3つ目のbtnをクリックした時、
  $(".btn").eq(2).on("click", function () {
    // ３秒かけてq3をフェードアウト。
    $(".btn").eq(2).fadeOut(3000);
  });

  // ---------------q4---------------

  // 4つ目のbtnをクリックした時、
  $(".btn").eq(3).on("click", function () {
    // 4つ目のbtnにlargeクラスを付与
    $(".btn").eq(3).addClass("large");
  });
  // ---------------q5---------------

  // 5つ目のbtnをクリックした時、
  $(".btn").eq(4).on("click", function () {
    // 5つ目のbtnの外側の前後にそれぞれ以下の文を挿入。
    $(".btn").eq(4).before("DOMの前").after("DOMの後");
    // 5つ目のbtnの内側の前後にそれぞれ以下の文を挿入。
    $(".btn").eq(4).append("DOMの中の後").prepend("DOMの中の前");
  });

  // ---------------q6---------------

  // 6つ目のbtnをクリックした時、
  $(".btn").eq(5).on("click", function () {
    // 6つ目のbtnの上側と左側に2秒かけて、100pxの余白(margin)をつける。
    $(".btn").eq(5).animate({
      "margin": "100px 0 0 100px"
    },2000)
  });

  // ---------------q7---------------

  // 7つ目のbtnをクリックした時、
  $(".btn").eq(6).on("click", function () {
    // クリックしたもの(7つ目のbtn)をコンソールに表示。
    console.log(this);
  });

  // ---------------q8---------------

  // 8つ目のbtnにカーソルを乗せると、
  $(".btn").eq(7).hover(
    function () {
      // 8つ目のbtnに「large」クラスを付与
      $(".btn").eq(7).addClass("large");
    },
    function () {
      // マウスを外すと「large」クラスが取り除かれる為、元のサイズに戻る。
      $(".btn").eq(7).removeClass("large");
    }
  );
  // ---------------q9---------------

  // 1つ目のlistの子要素(li)をクリックした時、
  $(".list").eq(0).children().on("click", function () {
    // クリックしたliのindexを取得しalert()で表示。
    alert($(this).index());
  });

  // ---------------q10---------------
  // 2つ目のlistの子要素(li)をクリックした時
  $(".list").eq(1).children().on("click", function () {
    // クリックしたliのindexを取得し「clickedItem」代入。
    let clickedItem = $(this).index();
    // eqメソッドを使用し、「clickedItem」番目のq11のliに「large-text」クラスを付与
    $("#q11 li").eq(clickedItem).addClass("large-text");
  });

});