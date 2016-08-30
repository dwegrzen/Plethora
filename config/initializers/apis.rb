# to use the movie database
Tmdb::Api.key(ENV["tmdb"])

# Discogs wrapper config:
DISCOGS = Discogs::Wrapper.new("Plethora", user_token: ENV["User"])
