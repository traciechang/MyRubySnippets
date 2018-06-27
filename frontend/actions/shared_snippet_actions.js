import * as SharedSnippetAPIUtil from "../util/shared_snippet_api_util";

export const RECEIVE_SHARED_SNIPPET = "RECEIVE_SHARED_SNIPPET";
export const RECEIVE_SHARED_SNIPPET_ERRORS = "RECEIVE_SHARED_SNIPPET_ERRORS";

export const receiveSharedSnippet = (sharedSnippet) => ({
    type: "RECEIVE_SHARED_SNIPPET",
    sharedSnippet
})

export const receiveSharedSnippetErrors = (errors) => ({
    type: "RECEIVE_SHARED_SNIPPET_ERRORS",
    errors
})

export const createSharedSnippet = sharedSnippet => dispatch => (
    SharedSnippetAPIUtil.createSharedSnippet(sharedSnippet).then((response) => (dispatch(receiveSharedSnippet(response))), responseError => (
        dispatch(receiveSharedSnippetErrors(responseError.responseJSON))
    ))
);