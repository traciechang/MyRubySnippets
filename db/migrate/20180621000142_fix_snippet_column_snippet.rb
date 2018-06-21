class FixSnippetColumnSnippet < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:snippets, :snippet, true)
  end
end
