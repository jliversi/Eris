class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render json: @user 
        else 
            render json: @user.errors.full_mesasges, status: 422
        end
    end
    
    private

    def user_params
        params.require(:user).permit(:email, :username, :password, :birthday)
    end

end