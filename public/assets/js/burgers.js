$(function() {
    // eat burger (update database)
$(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");

    var burgerObj = {
        devoured: true
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerObj
    }).then(function() {

        console.log("Burger with id of " + id + " has been eaten!");
        location.reload();
    });
});

    // adding burger (insert into database)
    $(".create-burger").on("submit", function(event) {

        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {

            console.log("Added burger " + newBurger.name);
            location.reload();
        });
    });
});