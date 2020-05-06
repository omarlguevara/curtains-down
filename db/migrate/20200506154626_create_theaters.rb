class CreateTheaters < ActiveRecord::Migration[5.2]
    def change
     create_table :theaters do |t|
       t.string :title, null: false
       t.string :image
       t.string :description

       t.timestamps null: false
     end
   end
end 
