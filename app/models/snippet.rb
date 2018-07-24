require 'open3'

class Snippet < ApplicationRecord
    validates :user_id, :url, :name, presence: true
    validates :url, uniqueness: true
    belongs_to :user

    # def execute(code)
    #     stdout, stderr, status = Open3.capture3('ruby', stdin_data: code)
    #     status.success? ? stdout : stderr
    # end
end