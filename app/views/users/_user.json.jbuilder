json.extract! user, :id, :email, :first_name

json.total_snippets do
    json.array! user.snippets.order(:id) do |s|
        json.extract! s, :url, :name
    end
end