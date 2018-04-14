class AddImageUrlToNpc < ActiveRecord::Migration[5.1]
  def change
    add_column :npcs, :image_url, :string
  end
end
