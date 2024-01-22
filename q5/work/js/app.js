$(function () {
  // dropdwnの子要素のliにhoverを設定。
  $(".dropdwn > li").hover(
    // dropdwnの子要素のliにカーソルを乗せると、
    function () {
      const dropdwnIndex = $(this).index();// 現在カーソルが乗っているdropdwnのindex番号をdropdwnIndexに代入。
      $(".dropdwn_menu").eq(dropdwnIndex).stop().slideDown();//dropdwnIndex番目のdropdwn_menuにslideDownメソッドを適用させ表示させる。※stopメソッドの効果によりカーソルが外れた際に動きを途中で止める。
    },
    // dropdwnの子要素のliからカーソルを外すと、
    function () {
      const dropdwnIndex = $(this).index();//現在カーソルが乗っているdropdwnのindex番号をdropdwnIndexに代入。※スコープの関係で再度dropdwnIndexに代入。
      $(".dropdwn_menu").eq(dropdwnIndex).stop().slideUp();//dropdwnIndex番目のdropdwn_menuにslideUpメソッドを適用させ非表示にする。※stopメソッドの効果によりカーソルが外れた際に動きを途中で止める。
    }
  );
});