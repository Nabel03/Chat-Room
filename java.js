//Load the file containing the chat log
function loadLog() {
    var oldscrollHeight = $("#inner").attr("scrollHeight") - 20;
    $.ajax({
        url: "log.html",
        cache: false,
        success: function(html) {
            $("#inner").html(html); //Insert chat log into the #chatbox div             
            var newscrollHeight = $("#inner").attr("scrollHeight") - 20;
            if (newscrollHeight > oldscrollHeight) {
                $("#inner").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
            }
        },
    });
}
setInterval(loadLog, 2500); //Reload file every 2.5 seconds