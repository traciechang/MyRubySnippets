class Snippet < ApplicationRecord
    validates :user_id, presence: true
    belongs_to :user

    # def execute(code)
    #     eval(code)
    # end

    def execute(code)

        def with_captured_stdout
            old_stdout = $stdout
            $stdout = StringIO.new
            yield
            $stdout.string
          ensure
            $stdout = old_stdout
        end

        with_captured_stdout { eval(code) }

    end
end


# def with_captured_stdout
#     old_stdout = $stdout
#     $stdout = StringIO.new
#     yield
#     $stdout.string
#   ensure
#     $stdout = old_stdout
#   end

#   str = with_captured_stdout { eval(code) }