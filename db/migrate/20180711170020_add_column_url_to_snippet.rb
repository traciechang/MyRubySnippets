class AddColumnUrlToSnippet < ActiveRecord::Migration[5.1]
  def change
    add_column :snippets, :url, :string, null: false
    add_column :snippets, :name, :string, null: false
    add_index :snippets, :url, unique: true
  end
end
