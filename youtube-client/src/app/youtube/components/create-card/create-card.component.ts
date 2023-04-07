import { Component } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, ValidationErrors, Validators,
} from '@angular/forms';
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
      title: [this.newCard.title,
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: [this.newCard.description, [Validators.maxLength(255)]],
      image: [this.newCard.image, [Validators.required, this.urlValidator]],
      linkVideo: [this.newCard.linkVideo, [Validators.required, this.urlValidator]],
      date: [this.newCard.linkVideo, [Validators.required, this.dataValidator]],
    });
  }

  set setTitle(x: string) {
    this.cardForm.setValue({ title: x });
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

  // eslint-disable-next-line class-methods-use-this
  private dataValidator(control: FormControl): ValidationErrors | null {
    const { value } = control;
    const isDateWrong = (Date.now() - Date.parse(value) > 0 && Date.parse(value) > 0);

    if (!isDateWrong) {
      return { invalidDate: 'The date is invalid' };
    }
    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  private urlValidator(control: FormControl): ValidationErrors | null {
    const { value } = control;

    const isValidUrl = (url: string): boolean => {
      try {
        return Boolean(new URL(url));
      } catch (e) {
        return false;
      }
    };

    if (!isValidUrl(value)) {
      return { invalidUrl: 'The video link is invalid' };
    }
    return null;
  }

  setIsSubmit() {
    this.newCard = this.cardForm.value;
    if (this.cardForm.valid) {
      this.router.navigateByUrl('');
    } else {
      Object.keys(this.cardForm.controls).forEach((field) => {
        const control = this.cardForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
