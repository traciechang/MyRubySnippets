class SnippetsController < ApplicationController
    def update
        @snippet = Snippet.find(params[:id])

        if @snippet.update(snippet_params)
            render :show
        end
    end

    private
    def snippet_params
        params.require(:snippet).permit(:snippet)
    end
end
