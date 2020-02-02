$("#register").submit(function (event) {
    event.preventDefault();
    var data =
    {
        deviceId: $("#deviceId").val(),
        phone: $("#phone").val()
    }
    $.post("/addreq", data)
    alert("Done!")
});