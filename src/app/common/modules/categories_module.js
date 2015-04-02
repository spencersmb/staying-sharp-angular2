angular.module('NoteWrangler.models.categories', [

])
  .service('CategoriesModel', function ($http, $q) {
    var model = this,
      URLS = {
        FETCH: 'app/data/categories.json'
      },
      categories,
      currentCategory;

    //before we send data to ctrl - we extract it here
    function extract(result) {
      return result.data
    }

    function cacheCategories(result) {
      categories = extract(result);
      //console.log(result);
      return categories;
    }

    model.getCategories = function(){
      return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    };

      //model.getSingleNote = function(){
      //  return currentNote ? currentNote :
      //};

    //2nd function that takes in the current ID from URL and runs the fetch to get the note from the json file that matches the ID in the url
    model.setCurrentCategory = function(noteCatId){
      //console.log(noteId);
      //passing noteID success
      return model.getCategoryByNoteId(noteCatId).then(function (category) {
        //console.log(noteCatId);
        currentCategory = category;
        //console.log(currentCategory);
      })
    };

    //pause
    model.getCurrentCat = function (noteCatId) {

        return _.find(categories, function(c){
          //console.log(c.id);
          //console.log(c.id == noteCatId);

          return c.id = noteCatId;
        });

      //return currentCategory ? currentCategory.name : ''
    };


    //3rd run the promise
    model.getCategoryByNoteId = function (noteCatId) {
      //create a deferred object
      var deferred = $q.defer();

      function findId() {
        //finds a match if one exists when we call getCategoryByName
        return _.find(categories, function (c) {
          //console.log(c.id == noteCatId);
          return c.id == noteCatId;
        })
      }


      //if it exists just loop over it and resolve the promise with that value
      if(categories){

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
    }

});