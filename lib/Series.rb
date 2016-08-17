class Series
   attr_accessor :title, :synopsis, :gn_id, :image

   def initialize(series)
     self.title = series['TITLE']
     self.synopsis = series['SYNOPSIS']
     self.image = series['URL']
     self.gn_id = series["GN_ID"]
   end

end
