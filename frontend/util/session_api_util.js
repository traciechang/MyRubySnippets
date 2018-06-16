export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/session"
    })
)