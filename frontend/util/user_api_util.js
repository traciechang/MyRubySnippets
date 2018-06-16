export const fetchUser = () => {
    console.log("in ajax fetchUser")
    return (
    $.ajax({
        method: "GET",
        url: `users/1`
    })
)}