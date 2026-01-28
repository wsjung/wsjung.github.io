---
layout: post
title: "Rotation 2 Completion"
date: 2020-12-16 22:09:00
description:
tags: misc
categories: misc
---

This week I have finished my second research rotation with Professor Neal
Patwari's lab. This second rotation happened to be over a much busier time
period of the semester as it overlapped with a couple midterms at its start and
few finals in its completion. Nonetheless, here is a casual report on what I did
over this rotation and my overall thoughts.

Before the start of the rotation, as I also did with my first as per rotation
requirements, I drafted a rotation proposal with Neal. This proposal covers a
brief overview of the goals and expected timeline of the lab rotation. As all
things are, the proposal does not define or limit exactly what I do during the
time period. Anyway, the initial goal for this rotation was to develop a set of
unsupervised machine learning models that would predict line-of-sight (LOS) from
multipath and non-line-of-sight (NLOS) signals using a dataset gathered over the
POWDER platform.

To clarify, [https://powderwireless.net/](POWDER) (Platform for Open Wireless Data-driven Experimental
Research) is a cluster for state-of-the-art networking research. It consists of
a network of cutting-edge hardware physically located at the University of Utah
campus. What we are interested in are the software-defined radios (SDRs)
attached to various buildings around campus that are configurable to either
transmit or receive signals at specified frequencies.

LOS signals describe the transmission of a radio signal from the transmitter to
the receiver in a direct path. This means there is no object interfering with
the signal propagating in a straight line drawn from the transmitter to the
receiver. Multipath signals are characterized by a means of arriving to the
receiver via reflection(s) off of surfaces. These multipath signals can also be
seen in cases where the transmitter has an unobstructed path to the receiver.
NLOS signals are ones that are received when the direct path between the
transmitter and receiver is obstructed. However, this does not limit NLOS
signals to only multipath signals. In fact, radio waves can pass through walls
and reach the receiver in the shortest path but the received signal will be much
weaker or transformed.

A goal for the lab's POWDER project is to localize a mobile transmitter via a
network of receivers. POWDER is currently testing and planning on releasing a
node on the platform which is a radio on a campus bus. Before that, the lab
aimed to test localization accuracy using fixed SDRs on the buildings.

Unfortunately, data was not collected when I started the rotation and I was
instead asked to help collect this data. The existing data collection pipeline
consisted of a set of Python scripts that made use of the multiprocessing
library. However, there were limitations to this approach as what was needed was
real-time concurrent remote-execution of transmitter and receiver scripts. Thus
I settled on the Python Fabric library which allows the concurrent execution of
scripts over a set of 10+ SSH connections in a parallel manner. Towards the end
of the rotation, over a short POWDER reservation of 10 nodes, the data
collection pipeline successfully amassed 6GB of test data.

This feels like a short post as did this rotation. I do feel a little bit
disappointed in that I did not in fact get to do much or any ML modeling but I
sure enjoyed building a solid data collection pipeline. The lab happened to also
be on the smaller-scale side as it is a relatively recently established lab in
the department. As of now, I am hoping to try one more rotation in the Spring
before I decide what is the best course of action for me.
