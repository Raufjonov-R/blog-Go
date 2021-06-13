$("#login_mod").click(function () {
    $("#exampleModal").appendTo("body").modal("show");
});

// Script for href login

const disableInputs = function () {
    sessionStorage.disableInputs = "true";
    document.getElementById("Secret_code").disabled = true;
};
if (sessionStorage.disableInputs === "true") disableInputs();
//document.getElementById('btn_submit').onclick = disableInputs;

//document.getElementById('btn_submit').onload = disableInputs;

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
}),
    $("#btn_submit").click(function (e) {
        e.preventDefault();

        var login_in = $("input[name=login_in]").val();
        var password = $("input[name=pass]").val();
        var secret = $("input[name=secret]").val();

        $.ajax({
            url: "/postinsert",
            method: "POST",
            data: {
                login: login_in,
                password: password,
                secret: secret,
            },
            success: function (response) {
                if (response.success) {
                    alert(response.message); //Message come from controller
                    $("#exampleModal").appendTo("body").modal("hide");
                    $("#ajax_form")[0].reset();
                    $("#Secret_code").prop("disabled", true);
                } else {
                    alert("Error");
                }
            },
            error: function (error) {
                console.log(error);
            },
        });
        disableInputs();
    });
