$(function () {
  $(document).onScroll(function () {
    var $nav = $(".header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
