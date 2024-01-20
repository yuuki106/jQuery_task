$(function(){
  // navのliをクリックすると、
  $("nav li").on("click",function(){
    $(".description li").addClass("is-hidden");//description liの全てを非表示にする。
    let liIndex = $(this).index();//クリックしたnavのliのindex番号をliIndexに代入。
    $(".description li").eq(liIndex).removeClass("is-hidden");//liIndex番目のdescription liからis-hidden（非表示）を取り除く。
  });
});