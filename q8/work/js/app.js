// API
// const settings = {
// "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });
$(function () {

  function ajaxFail() {//「ajaxFail」という関数を作り、通信失敗時の処理を書いていく。

    //通信失敗時に表示させたいアナウンスを変数「errortText」に代入。なお表示させたいアナウンスには「message」クラスをつける。
    let errortText = `
        <div class="message">
          <p>正常に通信できませんでした。<br>
          インターネットの接続の確認をしてください。</p>
        </div>
      `;
    $(".inner").children().empty()//「inner」の子要素を消す
    $(".inner").prepend(errortText);//「errortText」を「inner」へ追加。
  };

  function ajaxDone(data) {//「ajaxDone」という関数を作り、通信失敗時の処理を書いていく。

    //ajax通信で受け取った「data」をeachで繰り返し処理。
    $.each(data["@graph"][0].items, function (i) {

      //作者が不明（undefined）な場合は、「作者不明」と、作者がわかる場合は作者名を表示するようcreatorsに代入。
      var creators = (`${data["@graph"][0].items[i]["dc:creator"]}` === "undefined") ? "作者不明" : `${data["@graph"][0].items[i]["dc:creator"]}`;

      //受け取ったdata（本のタイトル、作者、出版社、リンク）をそれぞれ表示したい為、「html」に代入。lists-itemの中にlist-innerを作成。そのさらに中には本のタイトル、作者、出版社、リンク表示用の各要素を作成。
      let html = `
        <li class="lists-item">
          <div class="list-inner">
            <p>タイトル：${data["@graph"][0].items[i].title}</p>
            <p>作者：${creators}</p>
            <p>出版社：${data["@graph"][0].items[i]["dc:publisher"]}</p>
            <a href="${data["@graph"][0].items[i].link["@id"]}" target="_blank">書籍情報</a>
          </div>
        </li>
      `;
      $(".lists").prepend(html);//listsに「html」を追加。
    })

    //もし受け取ったdataが空だった場合、（該当する書籍が無い場合）は以下処理を実施。
    if ($.isEmptyObject(data["@graph"][0].items)) {
      //書籍が見つからない場合のアナウンスを「notFoundtext」に代入。
      let notFoundtext = `
          <div class="message">
            <p>検索結果が見つかりませんでした。<br>
            別のキーワードで検索して下さい。</p>
          </div>
        `;
      $(".inner").prepend(notFoundtext);//innerにnotFoundtextを追加
    }

    //pageCountを1増やす。
    pageCount++;
  };

  //リセットボタンを押したら、
  $(".reset-btn").on("click", function () {
    $(".inner").children().empty();//「inner」の子要素を消す
    $("#search-input").val("");//入力された検索ワードを消す。
    pageCount = 1;//pageCountを初期値にする
  })

  var pageCount = 1;//pageCountを１と定義。
  var searchWord;//searchWordを空の状態で定義。

  //search-btnをクリックしたら、
  $(".search-btn").on("click", function () {

    //既にsearchWordに入力されている検索ワードと現在の検索ワードが異なる場合、
    if(searchWord!==$("#search-input").val()){

      $(".inner").children().empty();//「inner」の子要素を消す
      pageCount = 1;//pageCountを初期値にする
    }
    
    //検索ワードをsearchWordに代入。
    searchWord = $("#search-input").val();

    //ajax通信の準備を行う。
    $.ajax({
      type: "GET",//データを「受け取る」に設定。
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&p=${pageCount}&format=json&count=20`,//通信先のURLを設定。
    }).done(function (data) {//通信成功時、
      ajaxDone(data)//ajaxDone関数を呼び出す

    }).fail(function () {//通信失敗時。
      ajaxFail();//ajaxFail関数を呼び出す
    })

  });




})