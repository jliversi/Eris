class AddBirthdayToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birthday, :datetime, null: false
    remove_column :users, :discriminator
    add_column :users, :discriminator, :integer, null: false
  end
end
