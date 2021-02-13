class Api::ServersController < ApplicationController
  before_action :ensure_logged_in

  def index
    @servers = current_user.joined_servers
    render :index
  end
  def create
    @server = Server.new(server_params)
    @server.owner = current_user
    if @server.save
      @server.members << current_user
      render :show
    else 
      render json: @server.errors.full_messages
    end
  end

  def join
  end

  def leave
  end

  private 

  def server_params
    params.require(:server).permit(:name)
  end

end