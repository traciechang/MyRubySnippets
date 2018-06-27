export const fetchUser = () => {
    console.log("in ajax fetchUser")
    return (
    $.ajax({
        method: "GET",
        url: `users/1`
    })
)}

export const updateUser = (user) => (
    $.ajax({
        method: "PATCH",
        url: "users/1",
        data: {user}
    })
)