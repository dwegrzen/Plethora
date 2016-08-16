class CreateShows < ActiveRecord::Migration[5.0]
  def change
    create_table :shows do |t|
      t.string :title
      t.string :genre
      t.string :show_image
      t.string :synopses
      t.string :seasons
      t.date :date
      t.string :gn_id

      t.timestamps
    end
  end
end
