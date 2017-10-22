# require 'rails_helper'
#
# feature 'Manage songs', js: true do
#   scenario 'add a new song' do
#     # Point your browser towards the todo path
#     visit artist_path(34)
#     # Enter description in the text field
#     fill_in 'new-song', with: 'Bonobo'
#
#     # Press enter (to submit the form)
#     page.execute_script("$('form').submit()")
#
#     # Expect the new task to be displayed in the list of tasks
#     expect(page).to have_content('Bonobo')
#   end
# end
# RSpec.describe "artist/show.html.erb", type: :view do
#   it "displays the song title" do
#     assign :song, Song.new(title: "Bonobo")
#
#     render
#
#     expect(rendered).to have_css("new-song", text: "Bonobo")
#   end
# end
