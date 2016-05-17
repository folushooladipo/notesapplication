function NotesApplication(author) {
  this.author = author;
  this.list_of_notes = []; 
};

NotesApplication.prototype.create = function (notes_to_add) {
  this.list_of_notes.append(notes_to_add);
};

NotesApplication.prototype.listNotes = function () {
  if(this.list_of_notes == []) {return "There are no notes in this list."}
  else {
    console.log("Note ID: "+i+"\n"       +         this.list_of_notes[i]+"\n\n"          +       "By Author "+this.author);
    }
  }
};

NotesApplication.prototype.get = function (note_id) {
  return this.list_of_notes[note_id];
};

NotesApplication.prototype.delete = function (note_id) {
  if (note_id > -1) {
    this.list_of_notes.splice(note_id, 1);
  }
};

NotesApplication.prototype.edit = function(note_id, new_content){
  this.list_of_notes[note_id] = new_content;
};