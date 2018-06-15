export const fetchUser = () => (
    $.ajax({
        method: "GET",
        url: `users/1`
    })
)