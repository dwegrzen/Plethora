document.getElementById('searchBarAndButton').addEventListener('submit', function(){
  document.getElementById('searchBtn').disabled=true
})

function modifySearch() {
  var tvSearch = document.getElementById('tvSearch')
  var musicSearch = document.getElementById('musicSearch')
  var movieSearch = document.getElementById('movieSearch')
  var hiddenField = document.getElementById('hiddenField')

  tvSearch.addEventListener('click', function() {
    hiddenField.innerHTML("tv")
  })

  musicSearch.addEventListener('click', function() {
    hiddenField.innerHTML("music")
  })

  movieSearch.addEventListener('click', function() {
    hiddenField.innerHTML("movie")
  })

}

modifySearch()
