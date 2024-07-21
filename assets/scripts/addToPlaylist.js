var playlistButton = document.getElementById('addtoplaylist');

        playlistButton.innerHTML = `
        <form action="/movies/playlist" method="post">
            <input type="hidden" name="Name" value="${info.Title}">
            <input type="hidden name="image" value=${info.Poster}>
            <input type="submit" value="Add to Playlist" class="palylist-button">
        </form> 
        `;
