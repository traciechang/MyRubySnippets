class AddColumnUsernameToUser < ActiveRecord::Migration[5.1]
  def change
    create_table :shared_snippets do |t|
      t.integer :snippet_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_column :users, :username, :string
    add_index :users, :username, unique: true
  end
end