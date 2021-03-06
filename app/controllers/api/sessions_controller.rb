class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )
        if @user
            login(@user)
            render 'api/users/show'
        else 
            render json: ['- Login or password is invalid.'], status: 401
        end
    end

    def check_email
        @user = User.find_by_email(params[:email])
        if @user
            render json: {}
        else
            render json: {}, status: 404
        end
    end
 
    def destroy
        if current_user
            logout
            render json: {}
        else 
            render json: ['No current user'], status: 404
        end
    end
end