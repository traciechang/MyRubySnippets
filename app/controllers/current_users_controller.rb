class CurrentUsersController < ApplicationController
    def show
        # _user.json.jbuilder
        render json: current_user
    end
end