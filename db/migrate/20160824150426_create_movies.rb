class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :tmdb_id
      t.date :date
      t.text :summary
      t.string :movie_art
      t.string :genre
      t.string :runtime

      t.timestamps
    end
  end
end
