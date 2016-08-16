class CreateStackings < ActiveRecord::Migration[5.0]
  def change
    create_table :stackings do |t|
      t.references :user, foreign_key: true
      t.references :media, polymorphic: true
      t.boolean :finished
      t.integer :star_rating

      t.timestamps
    end
  end
end
