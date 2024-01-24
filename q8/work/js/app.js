
$(function () {

  function ajaxFail() {//「ajaxFail」という関数を作り、通信失敗時の処理を書いていく。

    //通信失敗時に表示させたいアナウンスを変数「errorText」に代入。なお表示させたいアナウンスには「message」クラスをつける。
    const errorText = `
        <div class="message">
          <p>正常に通信できませんでした。<br>
          インターネットの接続の確認をしてください。</p>
        </div>
      `;
    $(".inner").prepend(errorText);//「errorText」を「inner」へ追加。
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
        $(".inner").children(".message").remove();//notFoundTextの重複表示を防ぐ為、一旦削除。
        $(".inner").prepend(notFoundText);//innerにnotFoundTextを追加
    } else {
      //ajax通信で受け取った「data」をeachで繰り返し処理。
      $.each(data["@graph"][0].items, function (i) {

        //作者が不明（undefined）な場合は、「作者不明」と、作者がわかる場合は作者名を表示するようcreatorsに代入。
        const creatorsFunc = `${data["@graph"][0].items[i]["dc:creator"]}`;
        const creators = (creatorsFunc === "undefined") ? "作者不明" : creatorsFunc;

        //受け取ったdata（本のタイトル、作者、出版社、リンク）をそれぞれ表示したい為、「html」に代入。lists-itemの中にlist-innerを作成。そのさらに中には本のタイトル、作者、出版社、リンク表示用の各要素を作成。
        const html = `
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

  let pageCount = 1;//pageCountを１と定義。
  let searchWord = " ";//searchWordを空の状態で定義。

  //search-btnをクリックしたら、
  $(".search-btn").on("click", function () {

    //既にsearchWordに入力されている検索ワードと現在の検索ワードが異なる場合、
    if (searchWord !== $("#search-input").val()) {

      $(".inner").children().empty();//「inner」の子要素を消す
      searchWord = $("#search-input").val();//検索ワードをsearchWordに代入。
      pageCount = 1;//pageCountを初期値にする
    }

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