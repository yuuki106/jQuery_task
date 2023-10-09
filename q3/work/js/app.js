$(function () {

  // drawer_buttonをクリックした時、
  $(".drawer_button").on("click", function () {

    // drawer_buttonにopenedクラスが付いていたら以下の処理を行う。
    if ($(".drawer_button").hasClass("opened")) {

      $(".drawer_bg").fadeOut();//背景を無効にする。
      $(".drawer_nav_wrapper").css("transform", "");//メニューの一覧をCSSで設定したように右側に隠す。
      $(".drawer_menu_text").show();//「MENU」の文字を表示する。
      $(".drawer_close").hide();//「CLOSE」の文字を隠す。
      $(".drawer_button").removeClass("active");//drawer_buttonからactiveを外し、元の３本線に戻す
      $(".drawer_button").removeClass("opened");//drawer_button から openedを外す。

      // drawer_buttonにopenedクラスが付いていなかったら以下の処理を行う。
    } else {

      $(".drawer_bg").fadeIn();//背景を有効にする
      $(".drawer_nav_wrapper").css("transform", "none");//右に隠れたメニューの一覧を元の位置に戻す。
      $(".drawer_menu_text").hide();//「MENU」の文字を隠す。
      $(".drawer_close").show();//「CLOSE」の文字を表示する。
      $(".drawer_button").addClass("active");//drawer_buttonにactiveを付与させ、MENU３本線を✖️にする。
      $(".drawer_button").addClass("opened");//drawer_button に openedを付与。
    };

  });

  



});