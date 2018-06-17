class SessionsController < ApplicationController
    def create
        @user = User.find_or_create_from_auth_hash(request.env["omniauth.auth"])
        login(@user)
        redirect_to "/"
    end

    def destroy
        @user = current_user
        if @user
            logout
            render json: {}, status: :ok
        else
            render json: ["Please sign in."], status: 404
        end
    end
end