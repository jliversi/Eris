class CreateChannels < ActiveRecord::Migration[6.1]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description
      
      t.integer :server_id, null: false
      t.boolean :is_private, null: false

      t.timestamps
    end
    create_table :private_channel_memberships do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end

    create_table :friendships do |t|
      t.integer :inviter_id, null: false
      t.integer :invitee_id, null: false
      t.boolean :accepted, default: false
      t.timestamps
    end

    create_table :direct_message_channels do |t|
      t.integer :friendship_id, null: false
      
      t.timestamps
    end
  end
end
