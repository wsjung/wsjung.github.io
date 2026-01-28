---
layout: post
title: "Introduction to Coding Theory"
date: 2020-10-18 00:00:00
description:
tags: misc
categories: misc
---

It's been a while since the genesis of this blog and its first post. Quite a
shame I couldn't keep up with the weekly blog commitment since the first week.
At this point, I have just started my first research rotation with Professor
Netanel Raviv to explore whether there exist better means of coding a perceptron
with improved minimum and relative distance metrics than a parity code. To help
my understanding of the topic which is rooted in Coding Theory, I read through
several chapters of Ron Roth's textbook "Introduction to Coding Theory" and in
this blog I will note what I found most interesting and relevant to my research
rotation.

The goal is to better grasp linear codes. But before I cover linear codes, I
will first cover some basic concepts of channel coding. Figure 1.1 is a graphic
of the overview of communications system that transmits a message from a Source
to a Destination. The Source Encoder serves two roles:  (1) translating the
output of the source to the input to the channel and (2) compressing the source
output, if needed. The compression determines whether a channel is *lossy* or
*lossless*. What's to note is that due to physical limitations of communications
systems in real life, the message received may (usually) differ from the message
transmitted due to noise.

![fig1](https://jungwooseokcom.wordpress.com/wp-content/uploads/2020/10/fig1.png)

Channels will be modeled as a discrete probabilistic channel where the channel
encoder takes in an information word (message) and outputs a *codeword* which the
channel outputs as a received word, then decoded by the channel decoder as a
decoded *codeword* and decoded information. The goal of the system is to make sure
that the decoded information word matches the information word and the decoded
*codeword* matches the *codeword*.

We assume that it is more likely to less errors than more errors and errors are
introduced to each element of a message independently and with a fixed
probability p < 1/2. The *Hamming distance* is the metric of choice to measure
to "number of errors". The Hamming distance is defined as the number of
different elements between two words. The distance $$d$$ of a $$(n,M)$$ code is the
minimum Hamming distance between any two of its codewords. The Hamming weight of
a codeword is the number of non-zero entries. This is equivalent as the Hamming
distance of a codeword with the zero codeword.

Appropriately, the code is called an $$(n,M,d)$$ code where the n, M parameters
are the code length and code size, respectively. By *nearest neighbor decoding*,
received words are decoded to its closest codeword (codeword of the minimum
Hamming distance with the received word). **Thus, the larger the minimum distance
of a code, the better.**

Now on to the topic of linear codes. Linear codes are defined as a code $$C$$ where
a linear combination of any two codewords is also a codeword in $$C$$. In short, a
linear code is a vector subspace. The dual code of $$C$$ is the orthogonal
complement of $$C$$ in its alphabet subspace. A linear code is written as a
$$[n,k,d]$$ code where $$k$$ is the dimension of the code. A linear code has a
**nonunique** $$k x n$$ *generator matrix* $$G$$ whose rows form a basis of the code. The
parity check matrix of $$H$$ for $$C$$ is a generator matrix for the dual code of
$$C$$. A systematic generator matrix is a $$(I | A)$$ matrix and these exist when
the first $$k$$ columns of any generator matrix of $$C$$ is linearly independent. Systematic
generator matrices are what simplify encoding and decoding of linear codes.

The source encoder maps an information word $$u$$ to a codeword $$c$$ by matrix
multiplication with the code's generator matrix $$c = uG$$. For a systematic
generator matrix, this is equivalent to $$c = (u | uA)$$ where $$A$$ is a $$k x
(n-k)$$ matrix.

Decoding methods rely on a standard array for a code which is a 2-D array in
which the first row consists of the codewords of C starting with the zero
codeword. Subsequent rows (cosets) start with a word of smallest Hamming weight
e followed by words $$e + c$$. Decoding takes the following steps: (1) Find the row
that contains received word $$y$$. (2) The codeword c is the first entry in the
column containing $$y$$. Step 2 is effectively computing $$c = y - e$$.

One decoding method is *syndrome decoding*. A *syndrome* $$s$$ of a word $$y$$ is defined as
$$s = Hy^{T}$$. It is important to note that since a code $$C$$ is a kernel of $$H$$, the
syndrome of any codeword in $$C$$ is the zero vector. Syndrome decoding takes two
steps: (1) Finding the syndrome $$s$$ of the received word $$y$$. (2) Finding the
minimum-weight word e such that $$s = He^{T}$$. This is computationally intractable and
requires a look-up table unless the *redundancy* $$n-k$$ is small.

One of the advantages of working with linear codes is that everything boils down
to linear algebra. A code can be describe using its basis, the code's distance
is its weight, and these together make the mapping of a message to code (and
vice-versa) simple. This is the main reason why linear codes are the most
prevalent codes used today.

