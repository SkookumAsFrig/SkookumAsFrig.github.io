---
layout: blog_post
title: Vehicle Display Project Log - 4
category: blog
---

<figure>
    <img src="{{ 'img/blog/car_display4/front_mounted.png' | resize: '800x800>' }}" class="img-responsive img-centered" alt="{{ post.alt }}" style="margin-bottom: 5px">
    <figcaption class="text-center">Display with case</figcaption>
</figure>

A small progress update, I did a first draft of the display enclosure. The concept here is to mount the display on a picatinny rail with a QD mount, that way it is rigid against vehicle shock and vibe but can still be easily removed for service. The transparent components below need to be desoldered, to achieve a tighter packaging and gain an extra mounting hole from the M.2. Most of these are the 2.54mm headers and won't be used anyways.

<img src="{{ 'img/blog/car_display4/desolder.png' | resize: '800x800>' }}" class="img-responsive img-centered" alt="{{ post.alt }}">

The case has openings to clear tall connectors that I didn't choose to remove, as well as the heatsink for the CM4 which will help natural convective cooling. There is also a pocket for the SD card, that way I have a removable storage if I put a forward facing dashcam. Lastly, there is an opening to access the RTC battery, and some stylish drafts and fillets to make the display look slimmer. The goal is to print this with carbon fiber reinforcements on a Markforged 3D printer, for max rigidity.

<img src="{{ 'img/blog/car_display4/case.png' | resize: '800x800>' }}" class="img-responsive img-centered" alt="{{ post.alt }}">

<img src="{{ 'img/blog/car_display4/transp_case.png' | resize: '800x800>' }}" class="img-responsive img-centered" alt="{{ post.alt }}">

<img src="{{ 'img/blog/car_display4/rear_case.png' | resize: '800x800>' }}" class="img-responsive img-centered" alt="{{ post.alt }}">