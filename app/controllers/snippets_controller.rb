class SnippetsController < ApplicationController
    def show
        # dont need this? because u can just grab snippet when we fetch user
    end

    def update
    end

    private
    def snippet_params
        params.require(:snippet).permit(:user_id, :snippet)
    end
end
