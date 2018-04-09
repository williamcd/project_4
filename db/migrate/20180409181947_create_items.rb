class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :att
      t.integer :spec
      t.integer :def
      t.integer :cost
      t.references :shop, foreign_key: true

      t.timestamps
    end
  end
end
