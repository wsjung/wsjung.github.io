---
layout: post
title: "Rotation 1 Completion"
date: 2020-11-15 00:00:00
description:
tags: misc
categories: misc
---

It's been almost a month since my last blog post and my excuse is that I've been
quite busy! So as today marks the end of my first PhD research rotation with Dr.
Netanel Raviv, this blog post will consists of my work during the rotation and
some thoughts regarding it.

As I explained in my last blog post, my rotation with Dr. Raviv dealt with
exploring whether there exists a better means of coding a perceptron with
improved minimum distance and relative distance than a parity code. This can be
formulated equivalently by proving the existence of a $$(d,\theta)$$-polarizing
code by picking a generator matrix at random and analyzing the resulting code is
indeed $$(d,\theta)$$-polarizing which is defined as follows:

$$
\textrm{if} \ w_H (\mathbf{x}) > \frac{k-\theta}{2} \quad \textrm{then} \ w_H(E(\mathbf{x})) >
\frac{n - \mu + d}{2} (heavy-to-heavy)
$$

$$
\textrm{if} \ w_H (\mathbf{x}) <
\frac{k-\theta}{2} \quad \textrm{then} \ w_H(E(\mathbf{x})) < \frac{n-\mu-d}{2}
(light-to-light)
$$

where $$k$$ is the size of the information word, $$n$$ is the size of
the coded word, and $$d$$ determines how strictly heavy or light we want the
resulting coded word to be.

Our method of approaching this proof consisted of picking the generator matrix
at random, computing the probability that one $$t$$-weight information word
is mapped correctly, and then understand the probability that all information
words in $$F_2^k$$ are mapped correctly using the Union Bound.

The generator matrix is a $$k \times n$$ matrix where each entry is a
Bernoulli random variable with probability $$p$$ that $$g_{r,c} = 1$$
and probability $$q = 1-p$$ that $$g_{r,c} = 0$$. An information word
$$\mathbf{u}$$ is a $$k \times 1$$ vector where each entry is also
binary $$u_i \in \{0, 1\}$$. Each information word has a weight $$t =
w_H (\mathbf{u})$$ which is the Hamming weight of the word.

My initial attempt at this proof was an utter failure as I failed to take into
consideration that we are working in $$F_2^k$$ which is a Galois Field of
dimension 2. This meant that under this assumption of a binary field, arithmetic
uses binary operations: addition of elements is actually done using the
exlcusive or (XOR) and multiplication using AND. Binary multiplication in $$F_2
= \{0, 1\}$$ remains the same but the main problem was with binary addition.

Fixing this stupid error on my part, I found the probability that the $$i^{th}$$
entry evaluates to 1. Since the $$i^{th}$$ entry of the coded word is

$$u_1 g_{1,i} \oplus u_2 g_{2,i} \oplus \cdots \oplus u_k g_{k,i} =
\overset{t}{\underset{\ell=1}{\oplus}} g_{j_\ell,i},$$

where $$u_{j_\ell} = 1$$ for  $$\ell = 1, \ldots, t$$. Thus the probability of a
1 at the $$i^{th}$$ entry is

$$P[\overset{t}{\underset{\ell=1}{\oplus}} g_{j_\ell,i} = 1] =
\sum_{\underset{n \textrm{ is odd }}{n=1}}^{t} \textrm{Binom}(t,n).$$

We will define this as $$c(t,p)$$ such that the coded word $$\mathbf{u}G$$ is a
$$1 \times n$$ matrix of $$c(t,p)$$'s. Now, to find the probability of the coded
word being strictly light is when the Hamming weight of the coded word is less
than $$\frac{n-d}{2}$$ which can be written as

$$P[\textrm{light } \mathbf{u}G] = \sum_{i=1}^{\lfloor \frac{n}{2} + d - 1
\rfloor} \textrm{Binom}(n,i)$$

where $$\textrm{Binom}(n,i)$$ is a success with probability $$c(t,p)$$.
The probability of the coded word being strictly heavy is similar with its
appropriate bounds on the sum.

The "good" event for one information word $$\mathbf{u}$$ is that $$\mathbf{u}$$
is mapped correctly. Its complement (the "bad" event) is one where
$$\mathbf{u}$$ is mapped incorrectly. We will denote these events by
$$e(\mathbf{u}) \textrm{ and } \neg e(\mathbf{u})$$, respectively. The "good"
event consists of all information words in $$F_2^k$$ being mapped correctly:

$$P[E] = P[\underset{\mathbf{u} \in F_2^k}{\bigcap} e(\mathbf{u})]$$

where we want to show $$$$P[E] > 0$$$$ since a non-zero probability implies that
such an encoding is possible with a randomly chosen generator matrix (code).
However, since it is difficult to compute the probability of the intersection of
these "good" events, we will instead compute its complement

$$P[E^c] = P[\underset{\mathbf{u} \in F_2^k}{\bigcup} \neg e(\mathbf{u})],$$

and show that $$P[E^c] < 1$$. Here, applying the Union Bound, we can
alternatively show that

$$P[\underset{\mathbf{u} \in F_2^k}{\bigcup} \neg e(\mathbf{u})] \leq
\sum_{\mathbf{u} \in F_2^k} P[\neg e(\mathbf{u})] < 1.$$

Expanding out $$P[E^c]$$, we get

$$P[E^c] = \sum_{t=0}^{\lfloor \frac{k}{2}} {k \choose t} P[\textrm{heavy }
\mathbf{u}G] + \sum_{t = \lceil \frac{k}{2} \rceil}^{k} {k \choose t}
P[\textrm{light } \mathbf{u}G].$$

I wrote a MATLAB script to test different values for the parameters $$k,n,d,p$$
but the results showed that we in fact do not get any probabilities below 1 for
$$k > 1$$. This is not a good sign and adjusting the threshold for light/heavy
categorization did not change this result either. Thus, my conclusion is that
either the Union Bound is too weak or  in fact a $$(d,\theta)$$-polarizing code
does not exist for $$k > 1$$.

I would have liked to continue investigating this disappointing result but at
this time, my rotation with Dr. Raviv has come to an end and I must prepare for
my next rotation with Dr. Neal Patwari in the ESE department. Regarding my
thoughts on this rotation, it was my first time dealing with such theory-heavy
research but I think I came to like this sort of work. It's definitely a change
from more practical and/or application-wise research and it relies heavily on
math and probability theory (especially moreso as this is ML research). At this
point, I'm not entirely sure if I would enjoy the idea of pursuing a theoretical
research path for my PhD as it sort of limits the opportunities in industry
after graduation. And at the moment, personally, I swing a bit more towards
working in industry than staying in academia post-grad. Well, my next rotation
with Dr. Patwari will be on the completely opposite spectrum where I will likely
be developing a ML application so at the end of my second rotation I will have a
better sense of the kind of research I enjoy. :)
