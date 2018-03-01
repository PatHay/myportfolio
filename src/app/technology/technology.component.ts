import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {


  tech1 = {
    // HTML5, CSS3, Python, Typescript, Swift
    name: "Languages",
    details: ["../assets/tech/HTML5.png","../assets/tech/CSS3.png", "../assets/tech/js.png", "../assets/tech/python.png", "../assets/tech/typescript.png", "../assets/tech/swift.png"],
    // details: ["html5", "css3", "python", "javascript", "swift"],
    alias: ["HTML5", "CSS3", "Javascript", "Python", "Typescript", "Swift"]
  }

  tech2 = {
    // Jquery, Bootstrap
    name: "Libraries",
    details: ["../assets/tech/jquery.png", "../assets/tech/bootstrap.png"],
    // details: ["jquery", "bootstrap"],
    alias: ["jQuery", "Bootstrap"]
  }

  tech3 = {
    // Flask, Django, Express, Angular
    name: "Frameworks",
    details: ["../assets/tech/flask.png", "../assets/tech/django.png", "../assets/tech/express.png", "../assets/tech/angular.png"],
    // details: ["html5", "django", "angular"],
    // noIcon: ["../assets/tech/express.png"],
    alias: ["Flask", "Django", "Angular", "Express"]
  }

  tech4 = {
    // MYSQL, SQLite, MongoDB
    name: "Databases",
    details: ["../assets/tech/mysql.png", "../assets/tech/sqlite.png", "../assets/tech/mongodb.png"],
    // details: ["mysql", "sqllite", "mongodb"],
    alias: ["MySql", "SQLite", "MongoDB"]
  }

  tech5 = {
    //Node, AWS, nginx, gunicorn
    name: "Servers",
    details: ["../assets/tech/nodejs.png", "../assets/tech/aws.png", "../assets/tech/nginx.png", "../assets/tech/gunicorn.png"],
    // details: ["nodejs", "aws", "nginx", "javascript"],
    alias: ["NodeJS", "AWS", "NGINX", "Gunicorn"]
  }

  tech6 = {
    //Terminal, VSCode, XCode
    name: "Development Tools",
    details: ["../assets/tech/terminal.png", "../assets/tech/vscode.png", "../assets/tech/xcode.png"],
    // details: ["terminal", "visualstudio"],
    alias: ["Terminal", "VSCode", "XCode"]
  }

  techs = [this.tech1, this.tech2, this.tech3, this.tech4, this.tech5, this.tech6];

  constructor() { }

  ngOnInit() {

  }

}