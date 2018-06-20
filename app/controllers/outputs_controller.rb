class OutputsController < ApplicationController
    def show
        code = Snippet.find(params[:id])
        @output = code.execute(code.snippet)
        render :json => {:output => @output}.to_json
    end
end
