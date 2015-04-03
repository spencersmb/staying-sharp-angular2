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
      noteId = $stateParams.noteId;

    //pass in note id from URL first
    NotesModel.setCurrentNote(noteId);

    //get note by ID and set the obj available to the scope using stateParams
    NotesModel.getNoteById(noteId).then(function (result) {
      ctrl.note = result;
      NotesModel.setCurrentCategory(ctrl.note.categoryId);
    });

    //Get users
    UsersModel.getUserByNoteId(noteId).then(function (result) {
      ctrl.user = result;
    });

    //Get Category Name
    ctrl.noteCategory = NotesModel.getCategory;

    });