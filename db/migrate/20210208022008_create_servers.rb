class CreateServers < ActiveRecord::Migration[6.1]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.string :invite_code, null: false

      t.timestamps
    end

    create_table :server_memberships do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
    end
  end
end
