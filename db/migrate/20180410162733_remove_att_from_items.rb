class RemoveAttFromItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :att, :integer
  end
end
