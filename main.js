(function($) {
  // we can now rely on $ within the safety of our "bodyguard" function
  $(document).ready( function() {
    $(function(){
      var includes = $('[data-include]');
      jQuery.each(includes, function(){
        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);
      });
    });
  } );
}) (jQuery);
