class SnippetsController < ApplicationController
    def show
        # dont need this? because u can just grab snippet when we fetch user
    end

    def update
    end

    def execute
        @snippet = Snippet.find(params[:id])

        eval(@snippet.snippet)
    end

    private
    def snippet_params
        params.require(:snippet).permit(:user_id, :snippet)
    end
end
