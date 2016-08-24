
class Albumtemp
  include ActionView::Helpers

   attr_accessor :name, :gn_id, :artist, :album_art, :date, :genre, :tracks, :trackname

   def initialize(album)
     self.name = album['TITLE']
     self.artist = album['ARTIST']
     self.album_art = album['URL']
     self.gn_id = album['GN_ID']
     self.date = album['DATE']
     self.genre = [album['GENRE']]
     self.tracks = album['TRACK_COUNT']
     self.trackname = album['TRACK']
     genreparse
     trackparse
     assignimage
     datefix

   end

   def assignimage
     if GNAPI.fetchOETData(gn_id)["RESPONSES"]["RESPONSE"]["ALBUM"]["URL"]
       self.album_art = GNAPI.fetchOETData(gn_id)["RESPONSES"]["RESPONSE"]["ALBUM"]["URL"]
     else
       self.album_art = "/images/searchImageTV.jpg"
     end
   end

   def datefix
     if (self.date && self.date.length > 4)
       self.date = DateTime.parse(self.date).strftime("%B %e, %Y")
     end
   end

   def genreparse
     if self.genre
       self.genre = self.genre.join(", ")
     end
   end

   def trackparse
     if (self.trackname && self.trackname.class == Hash)
       self.trackname = "#{trackname["TRACK_NUM"]} -   #{trackname["TITLE"]}"
     elsif (self.trackname && self.trackname.class == Array)
       self.trackname = trackname.map{|x| "#{x["TRACK_NUM"]} -  #{x["TITLE"]}"}
     end
   end


end
