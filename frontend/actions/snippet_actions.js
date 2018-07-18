import * as SnippetAPIUtil from "../util/snippet_api_util";

export const RECEIVE_OUTPUT = "RECEIVE_OUTPUT";
export const RECEIVE_SNIPPET = "RECEIVE_SNIPPET";
export const RECEIVE_SNIPPET_ERRORS = "RECEIVE_SNIPPET_ERRORS";
export const RECEIVE_UPDATED_SNIPPET = "RECEIVE_UPDATED_SNIPPET";

export const receiveOutput = (output) => ({
    type: "RECEIVE_OUTPUT",
    output
});

export const receiveSnippet = (snippet) => ({
    type: "RECEIVE_SNIPPET",
    snippet
})

export const receiveSnippetErrors = errors => ({
    type: "RECEIVE_SNIPPET_ERRORS",
    errors
})

export const receiveUpdatedSnippet = snippet => ({
    type: "RECEIVE_UPDATED_SNIPPET",
    snippet
})

export const createSnippet = snippet => dispatch => (
    SnippetAPIUtil.createSnippet(snippet).then(response => (
        dispatch(receiveSnippet(response))
    ), responseError => (
        dispatch(receiveSnippetErrors(responseError.responseJSON))
    ))
)

export const executeSnippet = snippet => dispatch => (
    SnippetAPIUtil.executeSnippet(snippet).then(response => (
        dispatch(receiveOutput(response))
    ))
);

export const fetchSnippet = snippetURL => dispatch => (
    SnippetAPIUtil.fetchSnippet(snippetURL).then(response => (
        dispatch(receiveSnippet(response))
    ))
)

export const updateSnippet = snippet => dispatch => (
    SnippetAPIUtil.updateSnippet(snippet).then(response => (
        dispatch(receiveUpdatedSnippet(response))
    ))
);