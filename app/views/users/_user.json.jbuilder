json.extract! user, :id, :email, :first_name, :username
json.partial! "snippets/snippets", snippet: user.snippet

json.shared_snippets do
    json.array! user.shared_snippets do |shared_snip|
        json.username shared_snip.snippet.user.username
    end
end