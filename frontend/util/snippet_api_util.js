export const executeSnippet = snippet => {
    console.log("in snippet api util")
    console.log(snippet)
    return $.ajax({
        method: "GET",
        url: `/outputs/${snippet.id}`,
        data: {snippet}
    })
}