json.extract! user, :email, :first_name
json.extract! snippet, :snippet
json.set! :snippet_id, snippet.id
