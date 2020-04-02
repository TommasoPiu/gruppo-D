import { Component, OnInit, Input } from '@angular/core';
import {MatFormFieldModule, MatFormFieldAppearance} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NotesService } from 'src/app/services/notes.service';
import { Notes } from 'src/app/models/notes';
import { ThemePalette } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {


  note: Notes[];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {

    this.getNotes();
  }

  getNotes(): void{
    this.noteService.getNotes().subscribe(note => {
      note.sort((a, b) => {
          return a < b ? -1 : 1;
       });
      this.note = note;
   });
  }
}
