class RemoveDefFromItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :def, :integer
  end
end
