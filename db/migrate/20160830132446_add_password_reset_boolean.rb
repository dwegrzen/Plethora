class AddPasswordResetBoolean < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :password_reset_token, :string
    add_column :users, :password_reset_status, :boolean
  end
end
