$(function () {
  // OPENボタン(modal_open_button)を押すと、
  $(".modal_open_button").on("click", function () {
    // モーダルがフェードイン(ゆっくり表示)される。
    $(".modal_win").fadeIn();
  });
  // CLOSE(modal_close_button)を押すと、
  $(".modal_close_button").on("click", function () {
    // モーダルがフェードアウト(ゆっくり非表示)される。
    $(".modal_win").fadeOut();
  });
});