---
layout: default
title: QUAD-STEPPER POWER BOARD WITH MONITORING
category: portfolio
modal-id: 25
vid1: null
vid2: null
img: Stepper_Board/board_pic.jpg
img2: Stepper_Board/final_baord.png
img3: Stepper_Board/final_baord2.png
img4: Stepper_Board/assembled_product.jpg
img5: Stepper_Board/layers.png
alt: 
client: null
project-date: 2019-2020
languages:
- C/C++
- Python
concepts:
- PCBA Bringup
- Embedded Systems (AVR)
- Hardware PWM
- Stepper Motor Control
- Power Electronics
tools:
- Altium Designer
- Arduino IDE
- Linux
- VS Code
---

### Project Description

Intended for robotics applications. 4-Layer mixed signal/power design, final revision made with 2oz outer layers, 1oz inner layers with ENIG surface finish and black solder mask. Quadruple stepper drivers connected to Atmega 2560 hardware PWM, with triple DC-DC power supplies and current/voltage monitoring on all channels, and for every battery cell. Configured for 4S lithium power input, with 5V 6A buck, 12V 6A buck, and 5V 2A charging boost.

### Challenges and Accomplishments

Being a combined signal and power supply board with three DC-DC converters, noise was a major concern. Not just from the switching power ICs, but also from the stepper drivers. Thus special consideration was taken to separate analog signal traces in different layers and farther distances from those components, and shielded by large power/ground planes. Moreover, optional passive filtering was included if necessary for voltage/current sensor reading. Trace lengths were optimized to reduce cross-talk.

There was also a strict size constraint to fit inside the small form factor robot chassis, thus the layout chosen was about as compact as physically possible without collision or compromising signal integrity. A shield architecture was chosen along with the Mega 2560 due to accessibility and cost goals. The board ended up costing only about 10 USD each to manufacture in China (without components), which is extremely affordable for the rich set of hardware features provided. The board took approximately 5 days to design, then a few more days after the first samples to tweak to the final version.

On the embedded software side, a custom hardware PWM acceleration algorithm was developed to allow for high-resolution, low-latency simultaneous control of 4 stepper drive motors. The algorithm takes input control commands from the serial port, with a custom command structure to maximize information density with the given baud rate. More information can be found in the long-form report and linked Github repository, available <a href="https://github.com/Open-AMR/Documentation/blob/master/MEngReport_Kowin_Boxuan_PengPeng_Tian_Tiange.pdf" style="color: #a83232" target="_blank">here</a>. 
