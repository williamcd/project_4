class RemoveSpecFromItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :spec, :integer
  end
end
