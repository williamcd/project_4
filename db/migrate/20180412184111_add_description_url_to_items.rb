class AddDescriptionUrlToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :description_url, :string
  end
end
