  $(document).on('click.tab.data-api', 'data-toggle="pill"', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);