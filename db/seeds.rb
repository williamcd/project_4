# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ww = Shop.create(name: 'Whatsit whoositas', photo_url: 'http://samlib.ru/img/k/kosuhina_n_w/nashlidrugdruga/7.6.jpg', description: 'Things that do stuff... yeah')
mmm = Shop.create(name: 'Magicians Mugs', photo_url: 'http://samlib.ru/img/k/kosuhina_n_w/nashlidrugdruga/7.6.jpg', description: 'Buy something already, will ya?')
# create_table "items", force: :cascade do |t|
#     t.string "name"
#     t.string "description"
#     t.integer "att"
#     t.integer "spec"
#     t.integer "def"
#     t.integer "cost"
#     t.bigint "shop_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["shop_id"], name: "index_items_on_shop_id"
#   end