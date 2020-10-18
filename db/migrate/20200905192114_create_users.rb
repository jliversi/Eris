class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, index: {unique: true}, null: false
      t.string :username, index: true, null: false
      t.string :discriminator, null: false
      t.string :password_digest, null: false
      t.string :session_token, index: {unique: true}, null: false
    end
    add_index :users, [:username, :discriminator], unique: true
  end
end
