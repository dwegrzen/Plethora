class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :shows, :synopses, :synopsis
  end
end
