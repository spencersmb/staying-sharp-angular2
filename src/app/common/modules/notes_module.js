angular.module('NoteWrangler.models.notes', [

])
  .service('NotesModel', function ($http, $q) {
    var model = this,
      URL_Notes = {
        FETCH: 'app/data/notes.json'
      },
      URL_Cat = {
        FETCH: 'app/data/categories.json'
      },
      notes,
      currentNote,

      noteCategories,
      currentCategory;


    //before we send data to ctrl - we extract it here
    function extract(result) {
      return result.data
    }

    function cacheNotes(result) {
      notes = extract(result);
      return notes;
    }

    function cacheCategories(result) {
      noteCategories = extract(result);
      //console.log(result);
      return noteCategories;
    }

    model.getNotes = function(){
      return (notes) ? $q.when(notes) : $http.get(URL_Notes.FETCH).then(cacheNotes);
    };

    model.getCategories = function(){
      return (noteCategories) ? $q.when(noteCategories) : $http.get(URL_Cat.FETCH).then(cacheCategories);
    };


    //2nd function that takes in the current ID from URL and runs the fetch to get the note from the json file that matches the ID in the url
    model.setCurrentNote = function(noteId){
      //console.log(noteId);
      //passing noteID success
      return model.getNoteById(noteId).then(function (note) {
        //console.log(note);
        currentNote = note;
        //model.getNote = currentNote;
      })
    };

    model.setCurrentCategory = function(noteCatId){

      //passing noteID success
      return model.getCatByNoteCategoryId(noteCatId).then(function (category) {

        //console.log(category);
        currentCategory = category;
      })
    };

    model.getCurrentNoteTitle = function () {
      return currentNote ? currentNote.title : ''
    };

    model.getCategory = function () {
      return currentCategory ? currentCategory.name : ''

    };

      //3rd run the promise for cats
      model.getCatByNoteCategoryId = function (noteCatId) {
        //create a deferred object
        var deferred = $q.defer();

        function findId() {
          //finds a match if one exists when we call getCategoryByName
          return _.find(noteCategories, function (c) {
            //console.log(c.id == noteCatId);
            return c.id == noteCatId;
          })
        }


        //if it exists just loop over it and resolve the promise with that value
        if(noteCategories){

          deferred.resolve(findId());
        } else {
          //console.log('else');
          //if it doesnt make a call to the server then loop over it and return the promise
          model.getCategories().then(function (result) {
            deferred.resolve(findId());
          })
        }

        //then return that with a promise
        //console.log('promise' + deferred.promise);
        return deferred.promise;
      };

    //3rd run the promise for notes
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
      //console.log('promise' + deferred.promise);
      return deferred.promise;
    }

});