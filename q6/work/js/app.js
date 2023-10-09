$(function () {

  //select-boxのvalueが変わった時、
  $(".select-box").on("change", function () {
    var selected = $(".select-box").val();//select-boxのvalueをselectedに代入
    $(".food-list > li").hide();//food-listのliを一旦、全部非表示にする。
    
    //food-listのliを繰り返し処理。
    $(".food-list > li").each(function(){
      //現在処理を行っているfood-listのliのdataを取得。
      var foodData = $(this).data("category-type");

      //foodDataとselectedの値が等しければ、
      if(selected === foodData){
        $(this).show();//現在処理を行っているfood-listを表示。

      //selectedの値がallの場合、
      }else if(selected === "all"){
        $(".food-list > li").show();//food-listのli全てを表示。
      }
      
    })


  })















})