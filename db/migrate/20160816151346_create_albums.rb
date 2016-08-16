class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :artist
      t.string :tracks
      t.date :date
      t.string :album_art
      t.string :genre
      t.string :gn_id

      t.timestamps
    end
  end
end
