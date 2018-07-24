require_relative "../services/code_executor"

class OutputsController < ApplicationController
    def create
        @output = CodeExecutor.new(output_params[:snippet]).call
        render :json => {:output => @output}.to_json
    end

    private
    def output_params
        params.require(:snippet).permit(:id, :snippet)
    end
end