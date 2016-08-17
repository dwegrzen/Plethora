class Series
   attr_accessor :title, :synopsis, :gn_id, :image, :date, :genre, :seasons, :type, :actors

   def initialize(series)
     self.title = series['TITLE']
     self.synopsis = series['SYNOPSIS']
     self.image = series['URL']
     self.gn_id = series['GN_ID']
     self.date = series['DATE']
     self.genre = series['GENRE']
     self.seasons = series['SEASON']
     self.type = series['PRODUCTION_TYPE']
     self.actors = series['CONTRIBUTOR']
   end

end
