class UsersController < ApplicationController
    def show
        @user = current_user
    end

    def update
        @user = current_user

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username)
    end
end
