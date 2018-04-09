# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ww = Shop.create(name: 'Whatsit whoositas', photo_url: 'http://samlib.ru/img/k/kosuhina_n_w/nashlidrugdruga/7.6.jpg', description: 'Whats that do, you ask? Well I surely dont know')
mmm = Shop.create(name: 'Magical Magicians Mugs', photo_url: 'http://samlib.ru/img/k/kosuhina_n_w/nashlidrugdruga/7.6.jpg', description: 'Buy something already, will ya?')
items = Item.create([{name: 'Pointy Stabby', description: 'Watch the pointy end!', att: 5, spec: 12, def: 0, cost: 40, shop_id: mmm.id}, {name: 'Pokey Throwey', description: 'IT FLIES', att: 10, spec: 2, def: 0, cost: 60, shop_id: ww.id}])
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