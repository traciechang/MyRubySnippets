class SharedSnippet < ApplicationRecord
    validates :snippet_id, :user_id, presence: true

    belongs_to :user
    belongs_to :snippet
end