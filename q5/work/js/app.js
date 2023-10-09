$(function () {
  // dropdwnの子要素のliにhoverを設定。
  $(".dropdwn > li").hover(
    // dropdwnの子要素のliにカーソルを乗せると、
    function () {
      var dropdwnIndex = $(this).index();// 現在カーソルが乗っているdropdwnのindex番号をdropdwnIndexに代入。
      $(".dropdwn_menu").eq(dropdwnIndex).slideDown();//dropdwnIndex番目のdropdwn_menuにslideDownメソッドを適用させ表示させる。

    },
    // dropdwnの子要素のliからカーソルを外すと、
    function () {
      var dropdwnIndex = $(this).index();//現在カーソルが乗っているdropdwnのindex番号をdropdwnIndexに代入。※スコープの関係で再度dropdwnIndexに代入。
      $(".dropdwn_menu").eq(dropdwnIndex).slideUp();//dropdwnIndex番目のdropdwn_menuにslideUpメソッドを適用させ非表示にする。

    }
  );



});