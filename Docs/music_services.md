# Music services

Music services are plugins that enhance VOlumio with support for new music systems or streaming.

## Interface

The following methods have to be implemented in a music service plugin. 

### explodeUri

This method is invoke by volumio when a uri needs to be added to the queue. The purpose of this method is to examine the uri
and explode it to an array of uri if needed. As an example a folder uri will be exploded in an array of uris, each of them
representing the media file contianed inside the folder.

The method gets a variable  as input, of type string. Such variable is the uri to be exammine.

The method returns a promise that shall be resolved with an array of uris. Each array item is of the following format:

        {
            uri: "/a/b/c.mp3",
            service: 'mpd',
            name: "Song name",
            artist: "Artist",
            album: "Album",
            type: 'track',
            tracknumber: 1,
            albumart: '/albumart'
        }


