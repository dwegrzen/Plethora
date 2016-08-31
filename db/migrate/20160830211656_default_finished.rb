class DefaultFinished < ActiveRecord::Migration[5.0]
  def change
    change_column :stackings, :finished, :boolean, default: false
  end
end
