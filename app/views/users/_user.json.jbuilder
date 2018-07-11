json.extract! user, :id, :email, :first_name
# json.partial! "snippets/snippets", snippet: user.snippet

json.total_snippets do
    json.array! user.snippets do |s|
        json.extract! s, :url, :name
    end
end

# json.shared_snippets do
#     json.array! user.shared_snippets do |shared_snip|
#         json.username shared_snip.snippet.user.username
#     end
# end