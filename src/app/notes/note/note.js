//angular.module('note',[
//
//])
//  .config(function ($stateProvider) {
//    $stateProvider
//      //.state('notewrangler.notes.note',{
//      //  url:'note/:noteId',
//      //  templateUrl:'app/notes/note/note.tmpl.html',
//      //  controller:'NoteListCtrl as noteListCtrl'
//      //});
//      //.state('notewrangler.notes.note',{
//      //  url:'notes/:noteId',
//      //  views:{
//      //    'note@':{
//      //      controller: 'NoteListCtrl as noteListCtrl',
//      //      templateUrl:'app/notes/note/note.tmpl.html'
//      //    }
//      //  }
//      //})
//  })
//  .controller('NoteListCtrl', function NotesListCtrl() {
//    var noteListCtrl = this;
//
//  })
//;

'use strict';

angular.module('NoteWrangler')
  .controller('NotesCtrl', function (NotesModel, UsersModel, CategoriesModel, $stateParams) {
    var ctrl = this,
      noteId = $stateParams.noteId,
      noteCategoryId;



    //pass in note id from URL first
    NotesModel.setCurrentNote(noteId);

    //get note by ID and set the obj available to the scope using stateParams
    NotesModel.getNoteById(noteId).then(function (result) {
      //console.log(result);
      ctrl.note = result;
      console.log(ctrl.note.categoryId);
      ctrl.golden = NotesModel.setCurrentCategory(8);

    });

      //NotesModel.getCategories().then(function (result) {
      //  ctrl.cats = result;
      //});
      //ctrl.title= NotesModel.getCurrentNoteTitle;
      //console.log(ctrl.title());


    //get current noteCategoryId
     ctrl.noteCategoryId = NotesModel.getCurrentNoteCategoryId;

    //Get users
    UsersModel.getUserByNoteId(noteId).then(function (result) {
      ctrl.user = result;
    });

    //console.log(ctrl.noteCategoryId());

      ctrl.getCatByNoteId = CategoriesModel.getCurrentCat;
    //Get Category Name
    //CategoriesModel.setCurrentCategory(noteId);

    CategoriesModel.getCategoryByNoteId(8).then(function (result) {
      //console.log(result);
      ctrl.category = result;
    });

      //CategoriesModel.getCategories().then(function (result) {
      //  var categories = [];
      //  //categories.push(result);
      //  angular.forEach(result, function(response) {
      //    categories.push(response);
      //  });
      //  return categories;
      //}).then(function(tmpResult) {
      //  ctrl.combinedResult = tmpResult;
      //
      //});

    });