$(document).ready(function() {
  $('#newproperty').dialog({
      autoOpen: false,
      // show: {
      //   effect: "blind",
      //   duration: 1000
      // },
      // hide: {
      //   effect: "explode",
      //   duration: 1000
      // }
    });

  $('#openlisting').on('click', function() {
    $('#newproperty').dialog('open');
  });
});
