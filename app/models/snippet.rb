require 'open3'

class Snippet < ApplicationRecord
    validates :user_id, :url, :name, presence: true
    validates :url, uniqueness: true
    belongs_to :user

    def execute(code)
        # def with_captured_stdout
        #     old_stdout = $stdout
        #     $stdout = StringIO.new
        #     yield
        #     $stdout.string
        #   ensure
        #     $stdout = old_stdout
        # end

        # with_captured_stdout { eval(code) }

        stdout, stderr, status = Open3.capture3('ruby', stdin_data: code)

        status.success? ? stdout : stderr
    end

    # private
    # def generate_random_url
    #     SecureRandom.urlsafe_base64
    # end
end