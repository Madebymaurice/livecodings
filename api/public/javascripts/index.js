$(document).ready(function() {
  const $form = $('.form-student');

  $('.new', $form).on("click", function() {
    $form.submit();
  });

  $('.edit', $form).on("click", function() {
    $form.attr("action", "/users?_method=PUT");
    $form.submit();
  });

  $('.delete', $form).on("click", function() {
    $form.attr("action", "/users?_method=DELETE");
    $form.submit();
  });
});
