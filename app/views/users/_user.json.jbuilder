json.extract! user, :id, :email, :first_name
json.partial! "snippets/snippets", snippet: user.snippet

# no
# json.extract! snippet, :snippet
# json.set! :snippet_id, snippet.id