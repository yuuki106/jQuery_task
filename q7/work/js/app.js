$(function () {
  $(".btn__submit").on("click", function () {
    console.log($("#family__name").val());//コンソールに名字を表示
    console.log($("#given__name").val());//コンソールに名前を表示
    console.log(`${$("[name=year]").val()}年${$("[name=month]").val()}月${$("[name=day]").val()}日`);//コンソールに年月日を連結し表示
    console.log($('input:radio[name="gender"]:checked').val());//コンソールに性別を表示
    console.log($("[name=work]").val());//コンソールに職業を表示
    console.log($("#account__name").val());//コンソールにアカウント名を表示
    console.log($("#email").val());//コンソールにメールアドレスを表示
    console.log($("#password").val());//コンソールにパスワードを表示
    console.log($("#duplication__password").val());//コンソールに確認用パスワードを表示
    console.log($("#address").val());//コンソールに住所を表示
    console.log($("#tel").val());//コンソールに電話番号を表示
    console.log($(':checkbox[value="email-magazine"]:checked').val());//メールマガジンにチェックが入っている場合、コンソールにvalueを表示
    console.log($(':checkbox[value="coupon"]:checked').val());//クーポンにチェックが入っている場合、コンソールにvalueを表示
  })

})