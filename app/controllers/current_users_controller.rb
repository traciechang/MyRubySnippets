class CurrentUsersController < ApplicationController
    def show
        @user = current_user
        if current_user
            @user = current_user
        else
            render json: nil
        end
    end
end