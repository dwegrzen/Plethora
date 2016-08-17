# to use gracenote API
spec = {:clientID => ENV["Client_ID"], :clientTag => ENV["Client_Tag"]}
GNAPI = Gracenote.new(spec)
# GNAPI.registerUser

# to use the movie database
Tmdb::Api.key(ENV["tmdb"])
