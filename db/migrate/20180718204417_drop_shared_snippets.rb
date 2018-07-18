class DropSharedSnippets < ActiveRecord::Migration[5.1]
  def change
    drop_table :shared_snippets
  end
end
