class SharedSnippetsController < ApplicationController
    def create
        user_id = User.find_by("username": shared_snippet_params[:username])
        @shared_snippet = SharedSnippet.new("user_id": user_id, "snippet_id": shared_snippet_params[:snippet_id])

        if !@shared_snippet.save
            render json: @shared_snippet, status: :unprocessable_entity
        end
    end

    private
    def shared_snippet_params
        params.require(:shared_snippet).permit(:username, :snippet_id)
    end
end
