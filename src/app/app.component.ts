import { Component, ViewChild } from '@angular/core';
import {NotesComponent} from './components/notes/notes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gruppo-D';

  showNotes = false;

  @ViewChild(NotesComponent) notesComponent: NotesComponent;

  toggleNotes() {
    this.showNotes = !this.showNotes;
  }

  refreshNotes() {
    this.notesComponent.refreshNotes();
  }
}
