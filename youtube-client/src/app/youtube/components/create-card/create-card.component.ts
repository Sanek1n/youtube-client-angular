import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '@app/auth/services/auth.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export default class CreateCardComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) { this.createForm(); }

  cardForm!: FormGroup;

  newCard = {
    title: '',
    description: '',
    image: '',
    linkVideo: '',
    date: '',
  };

  createForm(): void {
    this.cardForm = this.fb.group({
      title: [this.newCard.title, [Validators.required]],
      description: [this.newCard.description, [Validators.required]],
      image: [this.newCard.image, [Validators.required]],
      linkVideo: [this.newCard.linkVideo, [Validators.required]],
      date: [this.newCard.linkVideo, [Validators.required]],
    });
  }

  get getTitle() {
    return this.cardForm.get('title');
  }

  get getDescription() {
    return this.cardForm.get('description');
  }

  get getImage() {
    return this.cardForm.get('image');
  }

  get getLinkVideo() {
    return this.cardForm.get('linkVideo');
  }

  get getDate() {
    return this.cardForm.get('date');
  }

  setIsSubmit() {
    if (this.cardForm.valid) {
      console.log(this.newCard);
      this.router.navigateByUrl('');
    }
  }
}
