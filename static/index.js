$(document).ready(function () {
    $("#add").click(function () {
        console.log("add item");
        $("#items-container").append("<div class='input-group mb-2 task'><input type='text' class='form-control' placeholder='enter task' aria-label='item' aria-describedby='basic-addon2'><div class='input-group-append'><button type='button' class='btn btn-success remove'>Done</button><button type='button' class='btn btn-danger remove'>Delete</button></div></div>");
    });

});


$(document).click(function () {
    $(".remove").click(function () {
        console.log("remove");
        $(this).parent().parent().hide();
    });
    
});