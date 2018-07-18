export const fetchCurrentUser = () => (
    $.ajax({
        method: "GET",
        url: "current_user"
    })
)

export const fetchUser = () => (
    $.ajax({
        method: "GET",
        url: `users/1`
    })
)


export const updateUser = (user) => (
    $.ajax({
        method: "PATCH",
        url: "users/1",
        data: {user}
    })
)