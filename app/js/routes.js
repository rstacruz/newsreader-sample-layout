// visionmedia/page.js

// article
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

// home
page('/', function (ctx) {
  // switch panes
  $('.all').attr('class', 'all on-news');
  $(".content-area").hide();

  // unhighlight
  $("a.selected").removeClass('selected');
});

// reset
page('*', function (ctx) {
  setTimeout(function () {
    page.replace('/');
  });
});

// page.base(location.pathname.replace(/\/$/, ''));
page({ hashbang: true });
