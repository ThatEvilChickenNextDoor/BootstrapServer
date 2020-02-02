$("#unregister").submit(function( event ) {
    event.preventDefault();
    var data =
        {
          deviceId: $("deviceId").val(),
          phone: $("phone").val()
        }
    $.post("/delreq", data)
    alert("Done!")
  });