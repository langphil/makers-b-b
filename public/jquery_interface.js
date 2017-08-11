$(document).ready(function() {
  $('#newproperty').dialog({
      autoOpen: false
    });

  $('#reservation').dialog({
    autoOpen: false
  });

  $('#openlisting').on('click', function() {
    $('#newproperty').dialog('open');
  });

  $('#listing-reserve').on('click', function() {
    $('#reservation').dialog('open');
  });
});
