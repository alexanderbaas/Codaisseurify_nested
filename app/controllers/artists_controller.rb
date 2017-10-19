class ArtistsController < ApplicationController
before_action :find_artist, only: [:show, :destroy]

    def index
     @artists = Artist.all
    end

    def show
    end

    def destroy
          @artist = Artist.find(params[:id])
          @artist.destroy
          redirect_to artists_path
    end

    private

    def find_artist
    @artist = Artist.find(params[:id])
    end

end
