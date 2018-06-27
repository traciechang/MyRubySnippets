export const createSharedSnippet = sharedSnippet => (
    $.ajax({
        method: "POST",
        url: "/shared_snippets",
        data: {sharedSnippet}
    })
);