# College Companion

## Problem Statement

*An app that aids college students*

An app that handles all of the challenges that college students experience, such as obtaining an internship or employment, balancing their life and education, negotiating student loan debt, organizing their assignments, establishing deadlines, and keeping track of their grades.

## Our Team
*Bytecode Verifiers*

We are a bunch of coding maniacs from BIT Mesra who love to explore and work on different tech stacks.

Name | Role | Github |
--- | --- | --- |
Sumit Agarwal | Backend Developer | https://github.com/sumit2002agarwal |
Anish Kumar Singh | Backend Developer | https://github.com/HustlingbeastAnish |
Aayush Singh | Frontend Developer | https://github.com/singhaayush5 |
Aayush Garg | Frontend Developer | https://github.com/aysh2603 |


## Overview

Stressed out with managing your hectic schedule in college?
Unable to schedule your time between various activities and maintaining attendance in college?
Constantly working on your skills but are not getting the right opportunity?

Worry Not!
We are here to help you with *College Companion*

![Logo](https://imgtr.ee/images/2023/04/16/yh9dQ.png)

## Our Idea and Approach to solve the problem

*College Companion* is a one stop solution for students. Our motto is empowering students to achieve academic success through an all-in-one web application.

![App Screenshot](https://imgtr.ee/images/2023/04/16/y4mOb.png)

So what's so special about College Companion is that it features an attendance portal , job/internship portal and grade tracker which are the major problems faced by the students.

* *Attendance portal*
This is the main highlight of the app which streamlines the process of tracking attendance for both students and teachers. Students find it diificult to manually update the attendance each time on a different app.

We solve this problem by allowing the teachers to take attendance on the app itself (Teacher ID) and it will automatically update the student's attendance which is visible to the student (Student ID).

Therefore, a student does not to worry about maintaining a track of his/her attendance since it will be updated on the app automatically by the teacher.

It displays a graphical representation of grades in the form of pie-charts and bar-graph.

![App Screenshot](https://imgtr.ee/images/2023/04/16/y4pLU.png)

* *Job/Internship Portal*
The second feature simplifies the job or internship application programs. Employers can easily post internship opportunities and track applications, while students can search and apply for internships that match their interests and qualifications.

![App Screenshot](https://imgtr.ee/images/2023/04/16/y4TYR.png)

* *Grade Tracker*
The third feature keeps a track of student grades in different subjects in each semester. 

![App Screenshot](https://imgtr.ee/images/2023/04/16/y4DFB.png)
----------------------------------------------------------
Firstly, we set up our development environment with Node.js, Express.js, and React.js. We initialize it with npm. Then, we install the necessary dependencies for both the frontend and backend, including React Router and Express Router.

Next, we build the backend API with Express.js. We create routes for user authentication, user registration, and data storage using MongoDB. We also use bcrypt package to securely store and compare passwords and use a middleware function to verify user authentication, which is used to protect the routes that require login.

After setting up the backend API, we move on to building the frontend with React.js. We create a few pages for user registration, login, and dashboard, and use React Router to handle the routing between them. We also create a private route component that redirects unauthenticated users to the login page.

The app has login features for each teacher and student in an authenticated manner. It allows the data entered by teacher to be read-only by the student and can only be edited by the teacher.

-----------------------------------------------
![App Screenshot](https://imgtr.ee/images/2023/04/16/y4QkQ.png)

![App Screenshot](https://imgtr.ee/images/2023/04/16/y4YsI.png)

Now, to create useful features for college students, we added portals to the webapp such as a attendance and grade tracker, and a job/internship portal. We also integrate some external APIs such as Google Calendar and Google Drive for seamless integration with other tools that college students commonly use.

Finally, we test the webapp thoroughly to ensure its functionality and security. We use Postman to test the backend API endpoints, and manually test the frontend pages and routing. 

-------------------------------

*College Companion* web app is user-friendly and customizable to fit the needs of any organzation. Say goodbye to the hassle of manual attendance and grade tracking and get unlimited internship/job opportunities.

## Tech Stack

*Client:* React, Redux, TailwindCSS, MaterialUI

*Server:* Node, Express

*Database:* Mongodb

----------------------------------

## Youtube Link

https://www.youtube.com/watch?v=6fqH1pyZR8A
