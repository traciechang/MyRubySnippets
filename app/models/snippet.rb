class Snippet < ApplicationRecord
    validates :user_id, :snippet, presence: true
    belongs_to :user
end