class CreateSnippets < ActiveRecord::Migration[5.1]
  def change
    create_table :snippets do |t|
      t.text :snippet, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :snippets, :user_id
  end
end
