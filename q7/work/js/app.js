$(function () {
  $(".btn").click(function () {//btnをクリックすると、
    //subscription__unitを除く、label__sectionを繰り返し処理。
    $(".label__section").not(".subscription__unit").each(function () {
      //現在処理を行なっているlabel__sectionの子要素であるlabel__textを複製。
      var forConsoleText = $(this).children(".label__text").clone();
      //複製したlabel__textから「※」を取り除く。
      forConsoleText.children("span").remove();
      // 「※」を取り除いたlabel__textから改行を取り除き、コンソールに現在処理を行なっているlabel__sectionの項目を表示。
      console.log(forConsoleText.text().trim());

      //もし現在処理を行なっているlabel__sectionのinput__areaのvalueがundefinedになる場合、
      if ($(this).children(".input__area").val() === undefined) {
        // もし現在処理を行なっているlabel__sectionの下階層にあるselect__areaにis__flexというクラスがあった場合　※生年月日の項目の場合、
        if ($(this).find(".select__area").hasClass("is__flex")) {
          //選択された生年月日のvalueを取得してテンプレートリテラルで「◯◯◯◯年◯◯月◯◯日」とコンソールに表示。
          console.log(`${$("[name=year]").val()}年${$("[name=month]").val()}月${$("[name=day]").val()}日`);

          // もし現在処理を行なっているlabel__sectionの下階層にあるinputにgender__contentというクラスがあった場合　※性別の項目の場合、
        } else if ($(this).find("input").hasClass("gender__content")) {
          //選択された性別のvalueを取得しコンソールに表示。
          console.log($('input:radio[name="gender"]:checked').val());

          // もし現在処理を行なっているlabel__sectionの下階層にあるselectにoccupationというクラスがあった場合　※職業の項目の場合、
        } else if ($(this).find("select").hasClass("occupation")) {
          //選択された職業のvalueを取得しコンソールに表示。
          console.log($("[name=work]").val());
        }
      //もし現在処理を行なっているlabel__sectionのinput__areaのvalueがundefinedにならない場合、
      } else {
        //現在処理を行なっているlabel__sectionのinput__areaに入力された文字をコンソールに表示。
        console.log($(this).children(".input__area").val());
      }
    })

    //コンソールに「購読情報」を表示。
    console.log($(".subscription__content").children("h3").text());


    //nameがsubscriptionでcheckboxにチェックが入っている項目にeachを行う
    $(':checkbox[name="subscription"]:checked').each(function(){
      // 現在処理を行なっている要素のvalをコンソールに表示。
      console.log($(this).val());
    })

  })
})