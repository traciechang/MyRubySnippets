class SharedSnippetsController < ApplicationController
    def create
        # user_id = User.find_by("username": shared_snippet_params[:username]).id
        user = User.find_by("username": shared_snippet_params[:username])
        
        if user
            user_id = user.id
        else
            user_id = nil
        end

        @shared_snippet = SharedSnippet.new("user_id": user_id, "snippet_id": shared_snippet_params[:snippet_id])

        if !@shared_snippet.save
            render json: @shared_snippet.errors.full_messages, status: 422
        end
    end

    private
    def shared_snippet_params
        params.require(:sharedSnippet).permit(:username, :snippet_id)
    end
end
