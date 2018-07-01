class OutputsController < ApplicationController
    def show
        code = Snippet.find(params[:id])
        @output = code.execute(output_params[:snippet])
        render :json => {:output => @output}.to_json
    end

    private
    def output_params
        params.require(:snippet).permit(:id, :snippet)
    end
end
