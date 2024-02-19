---
layout: blog_post
title: Vehicle Display Project Log - 1
category: blog
---

<figure>
    <img src="{{site.url}}/img/blog/car_display1/dash_default.jpg" class="img-responsive img-centered" alt="{{ post.alt }}" style="margin-bottom: 5px">
    <figcaption class="text-center">Current RAV4 dash setup, notice the phone mount (with my janky wireless charger) covers an HVAC vent and basically renders it useless.</figcaption>
</figure>

I have been driving a 4th gen Toyota RAV4 for a few years. It is a rock solid car without any issues, being so simple that I took care of all of the maintenance to keep it in tip-top condition, without needing to go to a mechanic. But its legendary reliability partially comes from being absent of many electronics that modern counterparts include by standard. One feature I miss in particular is a standalone Android Auto display that connects to my phone wirelessly, so that 1. my phone won't block the HVAC vent 2. the navigation screen is securely mounted 3. I won't need to stress the phone for roadtrips. Here is the solution space I considered:

* **Buy a newer (used) car that has said Android Auto display feature** - This means spending an addition $10k minimum plus taxes with trading in the car, and potentially losing peace-of-mind from my current low-cost-to-run, reliable vehicle. Newer vehicles have much more integrated electronics systems, tighter engine bay layouts, and less proven drivetrains. Given that there are no safety issues with my current car (Toyota even reinforced the passenger footwell of 2014 models and newer to do better in small-overlap crash), I thought this was the least economical and logical solution to fix my issue of getting a standalone display.
* **Buy an off-the-shelf aftermarket radio headunit display** - Looking into what this entails, I realized it is quite a lot of labor removing the existing radio from the dash, disconnecting the harnesses, and re-assembling it back together with the new aftermarket display. There is risk in damaging the original harness, and this would at least be a weekend-long job. Plus, quality aftermarket parts are not cheap, even the lower end ones run at least $3-400. Though this would be the easiest option in terms of software readiness - I would not need to engineer things to make it work. But what I see is what I get, the software running on displays like Kenwood and Pioneer is normally proprietary, and I don't get to change beyond what the manufacturer deems user worthy.
* **Buy an off-the-shelf dash display** - There are cheaper solutions that do less than replacing the headunit completely, and essentially just runs Android Auto, and some even work with Apple Carplay as well. They range between $1-200 online, and are mostly design to mount on top of the dash or from the windshield. The pros are that this address my problem in the most cost efficient way, and there are some guarantees for being a functional product. The cons are, the mounting methods are janky at best, and do not integrate well into the dash. Also many of these displays don't look confidence inspiring in terms of reliability, automotive shock and vibe plus temperature can really take a toll on electronics.
* **Make my own display running open source software** - Research on this topic brought up some interesting open source projects. One in particular - Crankshaft, is based on the Openauto project, and runs on raspberry pi. It is not as popular as I would have liked, with its last release in 2022, but it claimed to support Raspberry Pi 4. This would involve engineering on my end - finding an compatible display integrated with raspberry pi, that would survive in an automotive environment, and designing the mechanicals to integrate into the dash. Some other tasks: finding a spot on the dash that ideally requires no permanent modifications; figure out how to deliver power to assembly. The pros are that it solves the cons of all options above, with the con being my engineering time, if said hardware exists.

I leaned towards making my own display, but not before doing some conceptual prototype tests and doing some component research. I put together this display quickly using some parts I had on hand:

<img src="{{site.url}}/img/blog/car_display1/prototype_labeled.jpg" class="img-responsive img-centered" alt="{{ post.alt }}">

Unfortunately it was too large to fit anywhere on the dash, so I had to mount it from the windshield, obstructing my hood visibility slightly. But this test is important to prove the viability of software and UI.

<img src="{{site.url}}/img/blog/car_display1/screen_off.jpg" class="img-responsive img-centered" alt="{{ post.alt }}">

Power comes from a "78W" cigarette lighter 12V port DCDC converter.

<img src="{{site.url}}/img/blog/car_display1/cardisplay_charger.jpg" class="img-responsive img-centered" style="max-width: 350px" alt="{{ post.alt }}">

From its construction, it appears to be multiple buck converters combined, running 12VDC to the satellite board where 3 more buck converters sit. It works well for my setup because at least 2x additional USB 5V sources are needed to power the existing two dashcams. The satellite board triple output is useful for the prototype where the screen needs separate power, due to the Raspi undervolting from charging the phone. I successfully got it to run <a href="https://github.com/opencardev/crankshaft/releases/tag/csng-alpha7.5" style="color: #a83232" target="_blank">Crankshaft NG alpha-7.5 2022-06-29</a> in wired mode, the latest release v2022.09.12.1 at the time encountered crankshaft stack errors after boot up. Here it is in action:

<img src="{{site.url}}/img/blog/car_display1/screen_on.jpg" class="img-responsive img-centered" alt="{{ post.alt }}">
<img src="{{site.url}}/img/blog/car_display1/nav_on.jpg" class="img-responsive img-centered" alt="{{ post.alt }}">

For audio setup, I opted to use a small USB speaker as the screen did not have it built in. I chose not to run the audio to my car's aux input as I frequently use the radio (old school, I know), plus it avoids the volume dim when navigation alerts come up. I drove on this setup for a week to validate it and it performed as expected. The OS partition is setup with overlay readonly, so sudden loss of power without running through shutdown sequence would not corrupt the rootfs. This concludes part 1 of the project log, I still need to investigate the component availability to solve the packaging/reliability issues.