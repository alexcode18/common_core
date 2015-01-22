class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :content
      t.string :title
      t.string :img_url
      t.references :author

      t.timestamps null: false
    end
  end
end