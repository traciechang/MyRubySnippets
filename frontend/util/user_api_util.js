export const fetchCurrentUser = () => {
    console.log('fetching current user');
    return (
        $.ajax({
            method: "GET",
            url: "current_user"
        })
    )
}

export const fetchUser = () => {
    console.log("in ajax fetchUser")
    return (
        $.ajax({
            method: "GET",
            url: `users/1`
        })
    )
}

export const updateUser = (user) => (
    $.ajax({
        method: "PATCH",
        url: "users/1",
        data: {user}
    })
)