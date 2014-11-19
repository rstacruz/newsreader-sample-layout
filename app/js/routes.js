// visionmedia/page.js

page('/article/:id', function (ctx) {
  // switch panes
  $('.all').attr('class', 'all on-content');
  $(".content-area").show();

  // update content
  var $link = $("#link-"+ctx.params.id);
  var title = $link.text();
  $("h1[data-bind='article-title']").html(title);

  // highlight
  $("a.selected").removeClass('selected');
  $link.addClass('selected');

  // pretend to load comments
  $(".comment-item").hide();
  NProgress.start();

  setTimeout(function () {
    NProgress.done();
    $(".comment-item").show();
  }, 500);
});

page('/', function (ctx) {
  // switch panes
  $('.all').attr('class', 'all on-news');
  $(".content-area").hide();

  // unhighlight
  $("a.selected").removeClass('selected');
});

page({ hashbang: true });