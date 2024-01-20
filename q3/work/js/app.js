$(function () {
  // drawer_buttonをクリックした時、
  $(".drawer_button").on("click", function () {
    // .drawer_nav_wrapperに「open」クラスが有効の場合は無効に、無効の場合は有効に切り替え画面内での表示・非表示を切り替える
    $(".drawer_nav_wrapper").toggleClass("open");
    // 「this」に「active」クラスが有効の場合は無効に、無効の場合は有効に切り替えメニューボタンの表示形式(MENUかCLOSEか)を切り替える。
    $(this).toggleClass("active");
    // 「.drawer_bg」背景色の表示・非表示を切り替える。
    $(".drawer_bg").fadeToggle();
  });
  // .drawer_bg（背景色）をクリックした時、
  $(".drawer_bg").on("click", function(){
    // .drawer_nav_wrapperから「open」クラスを取り除き、画面内非表示に切り替える
    $(".drawer_nav_wrapper").removeClass("open");
    // .drawer_buttonから「active」クラスを取り除きメニューボタンの表示を「MENU」へ切り替える
    $(".drawer_button").removeClass("active");
    // 「.drawer_bg」背景色を非表示へ切り替える。
    $(this).fadeOut();
  })
});