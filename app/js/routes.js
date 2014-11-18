page('/article/:id', function (ctx) {
  $('.all').attr('class', 'all on-content');
  $(".content-area").show();

  // update content
  var title = $("#link-"+ctx.params.id).text();
  $("h1[data-bind='article-title']").html(title);

  $(".comment-item").hide();
  NProgress.start();

  setTimeout(function () {
    NProgress.done();
    $(".comment-item").show();
  }, 500);
});

page('/', function (ctx) {
  $('.all').attr('class', 'all on-news');
  $(".content-area").hide();
});

page({ hashbang: true });
