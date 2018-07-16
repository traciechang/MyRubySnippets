class CurrentUsersController < ApplicationController
    def show
        # _user.json.jbuilder
        @user = current_user
        if current_user
            @user = current_user
        else
            render json: nil
        end
        
        # render json: current_user
    end
end