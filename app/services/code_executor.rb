require 'open3'

class CodeExecutor
    def initialize(code)
        @code = code
    end

    attr_reader :code

    def call
        stdout, stderr, status = Open3.capture3('ruby', stdin_data: code)
        status.success? ? stdout : stderr
    end
end