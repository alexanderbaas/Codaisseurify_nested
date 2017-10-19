class SongsController < ApplicationController
before_action :find_artist, only: [:create]

  def new
     @song = Song.new
   end

  def create
      @song = @artist.songs.new(song_params)

    if @song.save
        redirect_to @artist
      else
        render :new
      end
    end

   def destroy
    @artist = Artist.find(params[:artist_id])
    @song = @artist.songs.find(params[:id])
    @song.destroy
      redirect_to artists_path(@artist)
    end

  private

  def find_artist
     @artist = Artist.find(params[:artist_id])
   end

  def song_params
     song_params = params.require(:song).permit(:title, :artist_id)
   end

end
