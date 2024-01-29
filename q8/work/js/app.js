
$(function () {

  function ajaxFail(data) {//「ajaxFail」という関数を作り、通信失敗時の処理を書いていく。
    if (data.status === 0) {//もしdata.statusが0だった場合、
      //通信失敗時に表示させたいアナウンスを変数「errorText」に代入。なお表示させたいアナウンスには「message」クラスをつける。
      console.log
      const errorText = `
        <div class="message">
          <p>正常に通信できませんでした。<br>
          インターネットの接続の確認をしてください。</p>
        </div>
      `;
      $(".lists").empty().append(errorText);//メッセージの重複表示を防ぐ為、「empty()」で削除してからerrorTextを追加

    }
  };

  function ajaxDone(data) {//「ajaxDone」という関数を作り、通信成功時の処理を書いていく。
    if ($.isEmptyObject(data["@graph"][0].items)) {//もし受け取ったdataが空だった場合、
      //書籍が見つからない場合のアナウンスを「notFoundText」に代入。
      const notFoundText = `
          <div class="message">
            <p>検索結果が見つかりませんでした。<br>
            別のキーワードで検索して下さい。</p>
          </div>
        `;
      $(".lists").empty().append(notFoundText);////メッセージの重複表示を防ぐ為、「empty()」で削除してからnotFoundTextを追加
    } else {

      //ajax通信で受け取った「data」をeachで繰り返し処理。
      $.each(data["@graph"][0].items, function (i) {
        const bookCreator = data["@graph"][0].items[i]["dc:creator"] === undefined ? "作者不明" : data["@graph"][0].items[i]["dc:creator"];//data["@graph"][0].items[i]["dc:creator"]がundefinedの場合は「作者不明」を代入。そうでない場合はdata["@graph"][0].items[i]["dc:creator"]を代入
        const bookPublisher = data["@graph"][0].items[i]["dc:publisher"] === undefined ? "出版社" : data["@graph"][0].items[i]["dc:publisher"];//data["@graph"][0].items[i]["dc:publisher"]がundefinedの場合は「出版社不明」を代入。そうでない場合はdata["@graph"][0].items[i]["dc:publisher"]を代入
        const bookTitle = data["@graph"][0].items[i].title === undefined ? "タイトル不明" : data["@graph"][0].items[i].title//data["@graph"][0].items[i].titleがundefinedの場合は「タイトル不明」を代入。そうでない場合はdata["@graph"][0].items[i].titleを代入

        //受け取ったdata（本のタイトル、作者、出版社、リンク）をそれぞれ表示したい為、「html」に代入。lists-itemの中にlist-innerを作成。そのさらに中には本のタイトル、作者、出版社、リンク表示用の各要素を作成。
        const html = `
          <li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${bookTitle}</p>
              <p>作者：${bookCreator}</p>
              <p>出版社：${bookPublisher}</p>
              <a href="${data["@graph"][0].items[i].link["@id"]}" target="_blank">書籍情報</a>
            </div>
          </li>
        `;
        $(".lists").prepend(html);//listsに「html」を追加。
      })
    }
    //pageCountを1増やす。
    pageCount++;
  };

  //リセットボタンを押したら、
  $(".reset-btn").on("click", function () {
    $(".lists").empty();//listsの検索結果一覧を消す。
    $("#search-input").val("");//入力された検索ワードを消す。
    pageCount = 1;//pageCountを初期値にする
  })

  let pageCount = 1;//pageCountを１と定義。
  let searchWord = "";//searchWordを空の状態で定義。

  //search-btnをクリックしたら、
  $(".search-btn").on("click", function () {
    //既にsearchWordに入力されている検索ワードと現在の検索ワードが異なる場合、
    if (searchWord !== $("#search-input").val()) {
      $(".lists").empty();//listsの検索結果一覧を消す。
      searchWord = $("#search-input").val();//検索ワードをsearchWordに代入。
      pageCount = 1;//pageCountを初期値にする
    }

    //ajax通信の準備を行う。
    $.ajax({
      type: "GET",//データを「受け取る」に設定。
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&p=${pageCount}&format=json&count=20`,//通信先のURLを設定。
    }).done(function (data) {//通信成功時、
      ajaxDone(data)//ajaxDone関数を呼び出す

    }).fail(function (date) {//通信失敗時。
      ajaxFail(date);//ajaxFail関数を呼び出す
    })
  });
})