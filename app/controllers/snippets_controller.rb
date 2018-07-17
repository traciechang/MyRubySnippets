class SnippetsController < ApplicationController
    def create
        @snippet = Snippet.new(snippet_params)

        if @snippet.save
            render :show
        else
            render json: @snippet.errors.full_messages, status: 422
        end
    end

    def show
        @snippet = Snippet.find_by(url: params[:snippetURL])
    end
    
    def update
        @snippet = Snippet.find(params[:id])

        if @snippet.update(updated_snippet_params)
            render :show
        end
    end

    private
    def snippet_params
        params.require(:snippet).permit(:user_id, :snippet, :url, :name)
    end

    def updated_snippet_params
        params.require(:snippet).permit(:snippet)
    end
end
