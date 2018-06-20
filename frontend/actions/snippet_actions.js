import * as SnippetAPIUtil from "../util/snippet_api_util";

export const RECEIVE_OUTPUT = "RECEIVE_OUTPUT";

export const receiveOutput = (output) => ({
    type: "RECEIVE_OUTPUT",
    output
});

export const executeSnippet = snippet => dispatch => (
    SnippetAPIUtil.executeSnippet(snippet).then(response => {
        console.log("in snippet action, executeSnippet")
        console.log(response)
        
        return (
        dispatch(receiveOutput(response))
    )})
);