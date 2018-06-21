import * as SnippetAPIUtil from "../util/snippet_api_util";

export const RECEIVE_OUTPUT = "RECEIVE_OUTPUT";
export const RECEIVE_SNIPPET = "RECEIVE_SNIPPET";

export const receiveOutput = (output) => ({
    type: "RECEIVE_OUTPUT",
    output
});

export const receiveSnippet = (snippet) => ({
    type: "RECEIVE_SNIPPET",
    snippet
})

export const executeSnippet = snippet => dispatch => (
    SnippetAPIUtil.executeSnippet(snippet).then(response => {
        console.log("in snippet action, executeSnippet")
        console.log(response)
        
        return (
        dispatch(receiveOutput(response))
    )})
);

export const updateSnippet = snippet => dispatch => {
    console.log("in snippet actions, updateSnippet")
    console.log(snippet)
    return (
    SnippetAPIUtil.updateSnippet(snippet).then(response => (
        dispatch(receiveSnippet(response))
    ))
)};