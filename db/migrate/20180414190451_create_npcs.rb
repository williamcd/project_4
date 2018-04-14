class CreateNpcs < ActiveRecord::Migration[5.1]
  def change
    create_table :npcs do |t|
      t.string :name
      t.string :race
      t.string :dialogue

      t.timestamps
    end
  end
end
