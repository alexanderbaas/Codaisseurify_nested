require 'rails_helper'

RSpec.describe SongsController, type: :controller do
  describe 'Song #create' do
      context 'with valid song params' do
        it 'redirects to show page'
      end

      context 'with invalid song params' do
        it 're-renders #new form'
    end
  end
end
