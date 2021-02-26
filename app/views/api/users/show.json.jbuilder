json.key_format! camelize: :lower

json.user do
    json.partial! 'api/users/user', user: @user
end

json.server_memberships do 
    @user.server_memberships.each do |sm|
        json.set! sm.id do 
            json.extract! sm, :user_id, :server_id
        end
    end
end