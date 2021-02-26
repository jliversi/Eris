class Api::ServersController < ApplicationController
  before_action :ensure_logged_in

  def index
    @servers = current_user.joined_servers
    render :index
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    @server.owner = current_user
    if @server.save
      render :show
    else 
      render json: @server.errors.full_messages
    end
  end

  def join
    @membership = ServerMembership.create(server_id: params[:server_id], user_id: params[:user_id])
    render json: {id: @membership.id, userId: @membership.user_id, serverId: @membership.server_id}
  end

  def leave
    @membership = ServerMembership.where(server_id: params[:server_id], user_id: params[:user_id]).first
    @membership.destroy
    render json: { membershipId: @membership.id }
  end

  private 

  def server_params
    params.require(:server).permit(:name, :image)
  end

end