import { Component, OnInit } from '@angular/core';
import {  MessageService } from '../message.service'
import { Hero } from '../hero';
import { Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpBackendService } from 'angular-in-memory-web-api';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}

