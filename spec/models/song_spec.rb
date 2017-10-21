require 'rails_helper'

RSpec.describe Song, type: :model do
  describe "association song with artist" do
    let(:artist) { create :artist}

    it "song belongs to an artist" do
      song = artist.songs.build(title: "Bonobo")

      expect(song.artist).to eq(artist)

    end
  end
end

RSpec.describe Song, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_length_of(:title).is_at_most(20) }
  end

  describe "association with artist" do

    it { is_expected.to belong_to :artist}
  end
end
