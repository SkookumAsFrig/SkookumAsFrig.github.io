﻿---
layout: default
title: PIXAR LAMP ROBOT
category: portfolio
modal-id: 22
vid1: <div class="video-container"> <iframe class="video" src="https://www.youtube.com/embed/wWRPxG7BYHI" allowfullscreen></iframe> </div>
vid2: <div class="video-container"> <iframe class="video" src="https://www.youtube.com/embed/BmQvYnkPvnc" allowfullscreen></iframe> </div>
img: Pixar_Lamp/image-asset.jpeg
img2: Pixar_Lamp/slide.png
img3: Pixar_Lamp/label_comb.jpg
img4: Pixar_Lamp/circuit.jpg
img5: Pixar_Lamp/explodedview.jpg
project-date: 2019
languages:
- C++
- Python
concepts:
- Human Robot Interaction
- Computer Vision
- Robot Manipulators
- Electrical Design
tools:
- Autodesk Inventor
- Linux
- Open CV
---

### Project Description

In this project, my partner and I built both the hardware and software for a social robot inspired by Pixar Animation Studio’s Luxo Jr.. For the base robot arm, we used the open-source mini 6-DOF manipulator platform that we developed (for Master of Engineering project). The end-effector, which contains both the lamp and a Raspberry Pi camera, was custom designed and manufactured for this project. To achieve organic behavior, we implemented face-detection and tracking algorithms on the Raspberry Pi 3B+. In addition, we implemented teach and replay algorithms to train the robot arm for movement routines, in order to quickly and easily achieve sophisticated motion. Overall we were successful and created a robot that is lively and interacts with humans in its surroundings, powered by a resource-restricted embedded device.

### Challenges and Accomplishments

This project was done on a tight timeline of 4 weeks. There were many functionalities that had to be built from the ground up, such as motion control, face tracking, and interactive behavior. This was made more difficult by the fact that the computation was heavily restricted to a Raspberry Pi. Our development process consisted of building each modular function separately and tested in an isolated routine, then integrating the functionalities one-by-one. In the end, we built a multi-threaded python application, structured like an operating system to simultaneously handle multiple external signals. In terms of hardware, it was all custom built, and thankfully most of the robot arm was available from another ongoing project. However, it still required some design ingenuity to package the components elegantly, and for the entire module to come together as an interactive display. The website that we built to summarize the project in report form can be found <a href="https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2019_Projects/Dec_04_Demo/Pixar_Lamp/Website/index.html#" style="color: #a83232" target="_blank">here</a>.
