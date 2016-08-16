# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160816155516) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "name"
    t.string   "artist"
    t.string   "tracks"
    t.date     "date"
    t.string   "album_art"
    t.string   "genre"
    t.string   "gn_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notes", force: :cascade do |t|
    t.text     "note"
    t.integer  "stacking_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["stacking_id"], name: "index_notes_on_stacking_id", using: :btree
  end

  create_table "shows", force: :cascade do |t|
    t.string   "title"
    t.string   "genre"
    t.string   "show_image"
    t.string   "synopsis"
    t.string   "seasons"
    t.date     "date"
    t.string   "gn_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stackings", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "media_type"
    t.integer  "media_id"
    t.boolean  "finished"
    t.integer  "star_rating"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["media_type", "media_id"], name: "index_stackings_on_media_type_and_media_id", using: :btree
    t.index ["user_id"], name: "index_stackings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "notes", "stackings"
  add_foreign_key "stackings", "users"
end
