import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  
  challenges = [
    {
      title: 'Challenge',
      tags: 'tech',
      description: 'lorem',
      created: '01-04-2022'
    },
    {
      title: 'Challenge',
      tags: 'feature',
      description: 'lorem',
      created: '01-04-2022'
    },
    {
      title: 'Challenge',
      tags: 'tech',
      description: 'lorem',
      created: '01-04-2022'
    },
    {
      title: 'Challenge',
      tags: 'tech',
      description: 'lorem',
      created: '01-04-2022'
    },
    {
      title: 'Challenge',
      tags: 'tech',
      description: 'lorem',
      created: '01-04-2022'
    },
    {
      title: 'Challenge',
      tags: 'tech',
      description: 'lorem',
      created: '01-04-2022'
    },
    {
      title: 'Challenge',
      tags: 'tech',
      description: 'lorem',
      created: '01-04-2022'
    }
  ];
  challengesHeader = [
    { heading: 'Title', label: 'title', sort: false },
    { heading: 'Tags', label: 'tags', sort: false },
    { heading: 'Description', label: 'description', sort: false },
    { heading: 'Created', label: 'created', sort: false },
  ];
  challengesForm: FormGroup;
  submitChallengesForm = false;
  search = '';
  challengesModal = true;
  challengesId: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.challengesForm = this.formBuilder.group ({
      title: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get challengesValidator() {
    return this.challengesForm.controls;
  }

  // Add Update Challenges
  addUpdateChallenges(object: any) {
    this.submitChallengesForm = true;
    if (this.challengesForm.invalid) {
      return;
    } else {
      if (this.challengesModal) {
        object["created"] = new Date();
        this.challenges.push(object);
      } else {
        for (let i = 0; i < this.challenges.length; i++) {
          if (this.challengesId == i) {
            this.challenges[i].title = object['title'];
            this.challenges[i].tags = object['tags'];
            this.challenges[i].description = object['description'];
          }
        }
      }
      let modal = document.getElementById('close')
      modal?.click();
    }
  }
  // Add Update Challenges End

  // Set Challenges
  setChallenges(challengesData: any, index: number) {
    this.challengesModal = false;
    this.challengesId = index;
    this.challengesForm = this.formBuilder.group ({
      title: [challengesData['title'], [Validators.required]],
      tags: [challengesData['tags'], [Validators.required]],
      description: [challengesData['description'], [Validators.required]],
    });
  }
  // Set Challenges End

  // Delete Challenges
  deleteChallenges(index: number) {
    this.challenges.splice(index, 1);
  }
  // Delete Challenges End
}
