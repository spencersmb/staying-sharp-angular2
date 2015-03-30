angular.module('NoteWrangler.models.notes', [

])
  .service('NotesModel', function ($http, $q) {
    var model = this,
      URLS = {
        FETCH: 'app/data/notes.json'
      },
      notes,
      currentNote;

    //before we send data to ctrl - we extract it here
    function extract(result) {
      return result.data
    }

    function cacheNotes(result) {
      notes = extract(result);
      return notes;
    }

    model.getNotes = function(){
      return (notes) ? $q.when(notes) : $http.get(URLS.FETCH).then(cacheNotes);
    };

    //2nd function that takes in the current ID from URL and runs the fetch to get the note from the json file that matches the ID in the url
    model.setCurrentId = function(noteId){
      //console.log(noteId);
      //passing noteID success
      return model.getNoteById(noteId).then(function (note) {
        currentNote = note;
      })
    };

    model.getCurrentNoteTitle = function () {
      return currentNote ? currentNote.title : ''
    };

    //3rd run the promise
    model.getNoteById = function (noteId) {
      //create a deferred object
      var deferred = $q.defer();

      function findId() {
        //finds a match if one exists when we call getCategoryByName
        return _.find(notes, function (c) {
          //console.log(c.id == noteId); - true
          return c.id == noteId;
        })
      }


      //if it exists just loop over it and resolve the promise with that value
      if(notes){

        deferred.resolve(findId());
      } else {
        //console.log('else');
        //if it doesnt make a call to the server then loop over it and return the promise
        model.getNotes().then(function (result) {
          deferred.resolve(findId());
        })
      }

      //then return that with a promise
      //console.log(deferred.promise);
      return deferred.promise;
    }

});