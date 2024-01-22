$(function () {
  //select-boxのvalueが変わった時、
  $(".select-box").on("change", function () {
    const selected = $(".select-box").val();//select-boxのvalueをselectedに代入
    //food-listのliを繰り返し処理。

    if(selected === "all"){//もしselectedの値がallだったら、
      $(".food-list > li").show();//food-listのli全てを表示。

    }

    $(".food-list > li").each(function(){
      //現在処理を行っているfood-listのliのdataを取得。
      const foodData = $(this).data("category-type");
      if(selected === foodData){//foodDataとselectedの値が等しければ、
        $(this).show();//現在処理を行っているfood-listを表示。
      }else{//foodDataとselectedの値が誤っていたら、
        $(this).hide();//現在処理を行っているfood-listを非表示。
      }
    })
  })















})